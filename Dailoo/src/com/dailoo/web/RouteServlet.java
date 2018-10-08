package com.dailoo.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dailoo.domain.Route;
import com.dailoo.domain.RouteViewpoint;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.RouteService;
import com.google.gson.Gson;

public class RouteServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		RouteService service = BasicFactory.getFactory().getService(RouteService.class);
		Gson gson = new Gson();
		
		//取得客戶端要求
		String method = request.getParameter("method");
		
		if("addRoute".equals(method)) {
			Route route = new Route();
			route.setName(request.getParameter("name"));
			route = service.addRoute(route);
		}
		//更新路線中景點順序資訊
		else if("updateRouteViewpoints".equals(method)) {
			service.updateRouteViewpoints(request.getParameter("id"), request.getParameter("vps"));
		}
		//根據路線ID，取得路線景點(編輯使用)
		else if("getRouteViewpointsByRouteId".equals(method)) {
			List<RouteViewpoint> vps = service.getRouteViewpointsByRouteId(request.getParameter("routeId"));
			response.getWriter().write(gson.toJson(vps));
		}
		//根據路線ID，取得路線景點資訊(前端使用)
		else if("getRouteViewpointsInfoByRouteId".equals(method)) {
			List<RouteViewpoint> vps = service.getRouteViewpointsInfoByRouteId(request.getParameter("id"));
			response.getWriter().write(gson.toJson(vps));
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
