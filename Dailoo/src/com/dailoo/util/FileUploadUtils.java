package com.dailoo.util;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.coobird.thumbnailator.Thumbnails;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.dailoo.annotation.Tran;
import com.dailoo.web.ViewpointServlet;

public class FileUploadUtils {

	/**
	 * 重新整理 multipart/form-data 類型表單的ParamMap
	 * @param request	
	 * @param response
	 * @param servlet Servlet中的this對象
	 * @return ParamMap
	 */
	@Tran
	public static Map<String, String> getParamMap(HttpServletRequest request, HttpServletResponse response,
			HttpServlet servlet) {
		try {
			String encode = servlet.getServletContext().getInitParameter(
					"encode");
			Map<String, String> paramMap = new HashMap<String, String>();
			// 1.上传图片
			DiskFileItemFactory factory = new DiskFileItemFactory();
			factory.setSizeThreshold(1024 * 100);
			
			File tempDir = new File(servlet.getServletContext().getRealPath("WEB-INF/temp"));
			if (!tempDir.exists())tempDir.mkdirs();
			
			factory.setRepository(new File(servlet.getServletContext()
					.getRealPath("WEB-INF/temp")));

			ServletFileUpload fileUpload = new ServletFileUpload(factory);
			fileUpload.setHeaderEncoding(encode);
			fileUpload.setFileSizeMax(20 * 1024 * 1024 * 1); //單個檔案大小20M
			fileUpload.setSizeMax(100 * 1024 * 1024);

			if (!fileUpload.isMultipartContent(request)) {
				throw new RuntimeException("請使用正確的表單進行上傳!");
			}

			List<FileItem> list = fileUpload.parseRequest(request);
			for (FileItem item : list) {
				if (item.isFormField()) {
					// 普通字段
					String name = item.getFieldName();
					String value;
					//如果該字段已存在（一個表單有多個相同名稱的name）
					if(paramMap.get(item.getFieldName()) != null){
						value = paramMap.get(item.getFieldName()) + "," + item.getString(encode);
					}else {
						value = item.getString(encode);
					}
					paramMap.put(name, value);
				} else {
					// 文件上传项
					String realname = item.getName();
					//如果上傳的檔案中有空白欄，則跳過
					if("".equals(realname)){continue;}
					//取得檔案格式
					String format = realname.substring(realname.lastIndexOf(".")+1).toLowerCase();
					
					if("".equals(realname) || realname == null) break;
					String uuidname = UUID.randomUUID().toString() + "." + format; 
							//+ "_" + realname;

					//取得檔案存放地址
					String hash = Integer.toHexString(uuidname.hashCode());
					String upload = servlet.getServletContext().getRealPath(
							"WEB-INF/upload");
					String fileurl = "/WEB-INF/upload";
					for (char c : hash.toCharArray()) {
						upload += "/" + c;
						fileurl += "/" + c;
					}
					fileurl += "/" + uuidname;

					File uploadFile = new File(upload);
					if (!uploadFile.exists())
						uploadFile.mkdirs();

					//檔案傳輸
					InputStream in = item.getInputStream();
					OutputStream out = new FileOutputStream(new File(upload,
							uuidname));

					IOUtils.In2Out(in, out);
					IOUtils.close(in, out);

					item.delete();
					
					//根據不同檔案格式，存到參數中
					if("mp3".equals(format) || "aac".equals(format) || "m4a".equals(format)){
						if(paramMap.get("audiourls") == null){
							paramMap.put("audiourls", fileurl);
						} else {
							paramMap.put("audiourls",paramMap.get("audiourls") + "," + fileurl);
						}
					}else if("jpg".equals(format) || "jpeg".equals(format) || "raw".equals(format) || "gif".equals(format) ||
							 "png".equals(format) || "bmp".equals(format) ){
						//圖片壓縮
						File imgFile = new File(servlet.getServletContext().getRealPath(fileurl));
						BufferedImage bi = ImageIO.read(imgFile);
				        int imgWidth = bi.getWidth();
				        int imgHeight = bi.getHeight();
				        
				        if(imgWidth > 1920 || imgHeight > 1920){ //判斷是否要壓縮
				        	if(imgWidth > imgHeight){
				        		Thumbnails.of(bi).outputQuality(0.83)
				        			.size(1920, imgHeight * 1920 / imgWidth).toFile(imgFile);
				        	} else {
				        		Thumbnails.of(bi).outputQuality(0.83)
				        			.size(imgWidth * 1920 / imgHeight, 1920).toFile(imgFile);
				        	}
				        }
				        //儲存紀錄
				        if(paramMap.get("imgurls") == null){
							paramMap.put("imgurls", fileurl);
						} else {
							paramMap.put("imgurls",paramMap.get("imgurls") + "," + fileurl);
						}
						
					} else {
						String mainUrl = FileUploadUtils.class.getClassLoader().getResource("../../").toURI().getPath();
						//刪除最新上傳的檔案
						File lastFile = new File(mainUrl.substring(0, mainUrl.length() - 1) + fileurl); 
						if(lastFile.exists()){	lastFile.delete(); }
						//刪除音檔
						if(paramMap.get("audiourls") != null){
							String[] audioUrls = paramMap.get("audiourls").split(",");
							for(int i = 0; i < audioUrls.length; i++){
								File file = new File(mainUrl.substring(0, mainUrl.length() - 1) + audioUrls[i]); 
								if(file.exists()){	file.delete(); }
							}
						}
						//刪除圖片
						if(paramMap.get("imgurls") != null) {
							String[] imgUrls = paramMap.get("imgurls").split(",");
							for(int i = 0; i < imgUrls.length; i++){
								File file = new File(mainUrl.substring(0, mainUrl.length() - 1) + imgUrls[i]); 
								if(file.exists()){	file.delete(); }
							}
						}
						throw new RuntimeException("上傳檔案格式錯誤");
					}

				}
			}
			return paramMap;
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
		
		
	}
}
