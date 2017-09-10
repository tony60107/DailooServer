package com.dailoo.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class FileUploadUtils {

	/**
	 * 重新整理 multipart/form-data 類型表單的ParamMap
	 * @param request	
	 * @param response
	 * @param servlet Servlet中的this對象
	 * @return ParamMap
	 */
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
			fileUpload.setFileSizeMax(10 * 1024 * 1024 * 1); //單個檔案大小10M
			fileUpload.setSizeMax(100 * 1024 * 1024);

			if (!fileUpload.isMultipartContent(request)) {
				throw new RuntimeException("請使用正確的表單進行上傳!");
			}

			List<FileItem> list = fileUpload.parseRequest(request);
			for (FileItem item : list) {
				if (item.isFormField()) {
					// 普通字段
					String name = item.getFieldName();
					String value = item.getString(encode);
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

					String hash = Integer.toHexString(uuidname.hashCode());
					String upload = servlet.getServletContext().getRealPath(
							"WEB-INF/upload");
					String fileurl = "/WEB-INF/upload";
					for (char c : hash.toCharArray()) {
						upload += "/" + c;
						fileurl += "/" + c;
					}
					fileurl += "/" + uuidname;
					
					//根據不同檔案格式，存到參數中
					if("acc".equals(format) || "mp3".equals(format)){
						paramMap.put("audiourls", fileurl);
					}else{
						if(paramMap.get("imgurls") == null){
							paramMap.put("imgurls", fileurl);
						} else {
							paramMap.put("imgurls",paramMap.get("imgurls") + "," + fileurl);
						}
					}

					File uploadFile = new File(upload);
					if (!uploadFile.exists())
						uploadFile.mkdirs();

					InputStream in = item.getInputStream();
					OutputStream out = new FileOutputStream(new File(upload,
							uuidname));

					IOUtils.In2Out(in, out);
					IOUtils.close(in, out);

					item.delete();

					// --生成缩略图
					// PicUtils picu = new
					// PicUtils(this.getServletContext().getRealPath(imgurl));
					// picu.resizeByHeight(140);
				}
			}
			return paramMap;
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
		
		
	}
}
