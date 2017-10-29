package com.dailoo.web;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.dailoo.domain.Tag;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.TagService;
import com.dailoo.util.FileUploadUtils;

public class TagServlet extends HttpServlet {

	TagService service = BasicFactory.getFactory().getService(TagService.class);

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		// 取得客戶端要求
		String method = request.getParameter("method");
		
		//如果是新增標記
		if("addTag".equals(method)){
			Map<String, String> paramMap = FileUploadUtils.getParamMap(request,response, this);
			service.addTag(paramMap);
			
			response.sendRedirect("/editAudio.html?id=" + paramMap.get("audioId"));
		}
		//如果是根據音檔ID取得所有標記
		else if("getTagsByAudioId".equals(method)){
			String audioId = request.getParameter("id");
			String json = service.findTagsByAudioId(audioId);
			response.getWriter().write(json);
		}
		//如果是根據ID刪除標記
		else if("delTagById".equals(method)){
			String id = request.getParameter("id");
			service.delTagById(id);
			response.getWriter().write("OK");
		}
		//如果是根據ID更新Tag
		else if("updateTagById".equals(method)){
			try {
				Tag tag = new Tag();
				BeanUtils.populate(tag, request.getParameterMap());
				service.updateTagById(tag);
				response.getWriter().write("{\"id\":\"" + tag.getId() +"\"}");
			} catch (Exception e) {
				e.printStackTrace();
				throw new RuntimeException(e);
			} 
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
