package com.dailoo.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dailoo.factory.BasicFactory;
import com.dailoo.service.ShortUrlService;

public class ShortUrlServlet extends HttpServlet {
       
	ShortUrlService service = BasicFactory.getFactory().getService(ShortUrlService.class);

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// 取得客戶端要求
		String method = request.getParameter("method");
		//如果是新增序號
		if("addShortUrl".equals(method)) {
			response.getWriter().write(service.addShortUrl(request.getParameter("url")));
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
