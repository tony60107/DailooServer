package com.dailoo.web;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.BitSet;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.dailoo.domain.Viewpoint;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.ViewpointService;

public class addViewpointServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		ViewpointService service = BasicFactory.getFactory().getService(ViewpointService.class);
		
		Viewpoint vp = new Viewpoint();
		
		try {
			BeanUtils.populate(vp, request.getParameterMap());
			service.addViewpoint(vp);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		System.out.println(vp);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
