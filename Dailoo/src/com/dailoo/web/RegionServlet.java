package com.dailoo.web;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.dailoo.domain.Region;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.RegionService;

public class RegionServlet extends HttpServlet {
	
	RegionService service = BasicFactory.getFactory().getService(RegionService.class);
	Region region = new Region();
	
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 取得客戶端要求
		String method = request.getParameter("method");
		
		// 如果是新增地區
		if ("addRegion".equals(method)) {
			region.setName(request.getParameter("name"));
			service.addRegion(region);
		}
		// 如果是取得所有地區
		else if("getAllRegions".equals(method)){
			String json = service.findAllRegions();
			response.getWriter().write(json);
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
