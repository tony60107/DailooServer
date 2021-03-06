package com.dailoo.web;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.dailoo.domain.Region;
import com.dailoo.domain.Speaker;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.RegionService;

public class RegionServlet extends HttpServlet {
	
	RegionService service = BasicFactory.getFactory().getService(RegionService.class);
	Region region = new Region();
	
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 取得客戶端要求
		String method = request.getParameter("method");
		
		//取得目前登入者的資訊
		Speaker loginUser = (Speaker) request.getSession().getAttribute("speaker");
		
		
		// 如果是新增地區
		if ("addRegion".equals(method)) {
			if("admin".equals(loginUser.getRole())){
				region.setName(request.getParameter("name"));
				service.addRegion(region);
				//response.sendRedirect("/manageRegions.html");
				response.getWriter().write("{}");
			} else {
				response.getWriter().write("{\"error\":\"只有管理員才可以新增主題類別喔~\"}");
			}
		}
		// 如果是取得所有地區
		else if("getAllRegions".equals(method)){
			String json = service.findAllRegions();
			response.getWriter().write(json);
		}
		// 如果是根據ID刪除地區
		else if("delRegionById".equals(method)){
			if("admin".equals(loginUser.getRole())){
				service.delRegionById(request.getParameter("id"));
				//response.sendRedirect("/manageRegions.html");
				response.getWriter().write("{}");
			} else {
				response.getWriter().write("{\"error\":\"只有管理員才可以刪除主題類別喔~\"}");
			}
		}
		// 如果是根據ID取得地區
		else if("getRegionById".equals(method)){
			String json = service.findRegionById(request.getParameter("id"));
			response.getWriter().write(json);
		}
		// 如果是更新地區資訊
		else if("updateRegionInfo".equals(method)){
			if("admin".equals(loginUser.getRole())){
				region.setId(request.getParameter("id"));
				region.setName(request.getParameter("name"));
				service.updateRegionById(region);
				//response.sendRedirect("/updateRegionInfo.html?id=" + request.getParameter("id"));
				response.getWriter().write("{}");
			} else {
				response.getWriter().write("{\"error\":\"只有管理員才可以編輯主題類別喔~\"}");
			}
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
