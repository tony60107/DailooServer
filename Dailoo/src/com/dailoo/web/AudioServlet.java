package com.dailoo.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dailoo.factory.BasicFactory;
import com.dailoo.service.AudioService;

public class AudioServlet extends HttpServlet {

	AudioService service = BasicFactory.getFactory().getService(
			AudioService.class);

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		// 取得客戶端要求
		String method = request.getParameter("method");

		// 如果是根據音檔ID尋找音檔
		if ("findAudioById".equals(method)) {
			String json = service.findAudioById(request.getParameter("id"));
			response.getWriter().write(json);
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
