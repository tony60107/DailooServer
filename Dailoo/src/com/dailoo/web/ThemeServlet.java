package com.dailoo.web;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dailoo.domain.Theme;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.ThemeService;
import com.dailoo.util.FileUploadUtils;

public class ThemeServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		ThemeService service = BasicFactory.getFactory().getService(ThemeService.class);
		Theme theme = new Theme();
		
		// 取得客戶端要求
		String method = request.getParameter("method");
		
		// 如果是新增主題
		if ("addTheme".equals(method)) {
			Map<String, String> paramMap = FileUploadUtils.getParamMap(request,response, this);
			service.addTheme(paramMap);
			response.sendRedirect("/editThemes.html");
		}
		//如果是根據地區ID取得主題
		else if("getThemesByRegionId".equals(method)){
			String json = service.findThemesByRegionId(request.getParameter("regionId"));
			response.getWriter().write(json);
		}
		//如果是根據ID刪除主題
		else if("delThemeById".equals(method)){
			service.delThemeById(request.getParameter("id"));
			response.sendRedirect("/editThemes.html");
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}