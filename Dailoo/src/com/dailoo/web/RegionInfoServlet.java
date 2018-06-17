package com.dailoo.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dailoo.domain.Theme;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.ThemeService;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class RegionInfoServlet extends HttpServlet {
       

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		ThemeService service = BasicFactory.getFactory().getService(ThemeService.class);
		Gson gson = new Gson();
		
		//地區名稱
		String name = request.getQueryString().split("name=")[1];
		name = name.split("\\?")[0];
		
		List<Theme> themes = service.findThemesByRegionName(name);
		
		request.setAttribute("regionName", name);
		request.setAttribute("themes", themes);
		
		request.getRequestDispatcher("/region.jsp").forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
