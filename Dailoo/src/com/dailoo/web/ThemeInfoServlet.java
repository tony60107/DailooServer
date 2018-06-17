package com.dailoo.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dailoo.domain.Region;
import com.dailoo.domain.Theme;
import com.dailoo.domain.ViewpointSimple;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.RegionService;
import com.dailoo.service.ThemeService;
import com.dailoo.service.ViewpointService;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class ThemeInfoServlet extends HttpServlet {
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		ViewpointService service = BasicFactory.getFactory().getService(ViewpointService.class);
		ThemeService themeService = BasicFactory.getFactory().getService(ThemeService.class);
		RegionService regionService = BasicFactory.getFactory().getService(RegionService.class);
		Gson gson = new Gson();
		
		//主題ID
		String id = request.getQueryString().split("id=")[1];
		id = id.split("\\?")[0];
		
		//主題與景點資料
		String themesJson = themeService.findThemesByThemeId(id);
		String vpsJson = service.findViewpointSimplesByThemeIdAndPublish(id);
		Region region = null;
		
		//刪除主題名稱中的英文，並設定要查詢的主題名稱
		List<Theme> themes = gson.fromJson(themesJson, new TypeToken<List<Theme>>() {}.getType());
		for(int i = 0; i < themes.size(); i++){
			Theme theme = themes.get(i);
			theme.setName(theme.getName().split(",")[0]);
			if(theme.getId().equals(id)){
				request.setAttribute("themeName", theme.getName());
			}
			//查詢主題對應的地區，已取得地區名稱
			if(i == 0) region = gson.fromJson(regionService.findRegionById(theme.getRegionId()), Region.class);
		}
		
		//景點資料
		List<ViewpointSimple> vps = gson.fromJson(vpsJson, new TypeToken<List<ViewpointSimple>>() {}.getType());
		
		//將資料存入request域中
		request.setAttribute("vps", vps);
		request.setAttribute("themes", themes);
		request.setAttribute("regionName", region.getName());
		
		request.getRequestDispatcher("/theme.jsp").forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
