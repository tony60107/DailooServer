package com.dailoo.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dailoo.domain.Speaker;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.ThemeService;
import com.dailoo.service.ViewpointService;
import com.google.gson.Gson;

public class ViewpointInfoServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		ViewpointService service = BasicFactory.getFactory().getService(ViewpointService.class);
		Gson gson = new Gson();
		
		String vp = request.getQueryString().split("vp=")[1];
		vp = vp.split("\\?")[0];
		System.out.println(vp);
		Map map = service.findViewpointByNameAndSt2(vp.split("_")[0], vp.split("_")[1]);
		
		request.setAttribute("vp", map.get("viewpoint"));
		request.setAttribute("sp", map.get("speaker"));
		request.setAttribute("audio", map.get("audio"));
		request.setAttribute("tags", map.get("tags"));
		request.setAttribute("themes", map.get("themes"));
		request.setAttribute("regions", map.get("regions"));
		request.setAttribute("moreAudio", map.get("moreAudio"));
		request.setAttribute("neighView", map.get("neighView"));
	
		request.getRequestDispatcher("/viewpoint.jsp").forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
