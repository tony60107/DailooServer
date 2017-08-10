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

public class PicUploadUtils {

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
			factory.setRepository(new File(servlet.getServletContext()
					.getRealPath("WEB-INF/temp")));

			ServletFileUpload fileUpload = new ServletFileUpload(factory);
			fileUpload.setHeaderEncoding(encode);
			fileUpload.setFileSizeMax(1024 * 1024 * 1);
			fileUpload.setSizeMax(1024 * 1024 * 10);

			if (!fileUpload.isMultipartContent(request)) {
				throw new RuntimeException("请使用正确的表单进行上传!");
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
					String uuidname = UUID.randomUUID().toString() + "_"
							+ realname;

					String hash = Integer.toHexString(uuidname.hashCode());
					String upload = servlet.getServletContext().getRealPath(
							"WEB-INF/upload");
					String imgurl = "/WEB-INF/upload";
					for (char c : hash.toCharArray()) {
						upload += "/" + c;
						imgurl += "/" + c;
					}
					imgurl += "/" + uuidname;
					paramMap.put("imgurl", imgurl);

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
