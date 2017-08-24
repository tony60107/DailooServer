package com.dailoo.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.taglibs.standard.tag.common.core.ParamSupport.ParamManager;

import com.dailoo.factory.BasicFactory;
import com.dailoo.service.TagService;
import com.dailoo.util.FileUploadUtils;

public class TagServlet extends HttpServlet {

	TagService service = BasicFactory.getFactory().getService(TagService.class);

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		// 取得客戶端要求
		String method = request.getParameter("method");
		
		if("addTag".equals(method)){
			Map<String, String> paramMap = FileUploadUtils.getParamMap(request,response, this);
			service.addTag(paramMap);
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
