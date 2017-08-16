package com.dailoo.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.dailoo.domain.Speaker;
import com.dailoo.domain.Viewpoint;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.ViewpointService;
import com.google.gson.Gson;

public class ViewpointServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		Gson gson = new Gson();
		ViewpointService service = BasicFactory.getFactory().getService(ViewpointService.class);
		Viewpoint vp = new Viewpoint();

		// 取得客戶端要求
		String method = request.getParameter("method");

		try {
			//如果是新增景點
			if ("addViewpoint".equals(method)) {
				BeanUtils.populate(vp, request.getParameterMap());
				//檢查是否已有相同景點名稱與副標的景點
				Viewpoint temp = service.findViewpointByNameAndSt(vp.getName(), vp.getSubtitle());
				if(temp == null){
					service.addViewpoint(vp);
				} else {
					throw new RuntimeException("該景點已存在");
				}
				response.sendRedirect("/addviewpoint.html");
			}
			//如果是更新景點
			else if("updateViewpoint".equals(method)){
				BeanUtils.populate(vp, request.getParameterMap());
				//取得目前登入者的資訊
				Speaker speaker = (Speaker) request.getSession().getAttribute("speaker");
				//根據景點ID查找該景點
				Viewpoint temp = service.findViewpointById(vp.getId());
				//如果要求更改景點資訊的是該景點擁有者或是管理員
				if(speaker.getId().equals(temp.getSpeakerId()) || "admin".equals(speaker.getRole())){
					//更新景點資訊
					service.updateViewpoint(vp);
				} else {
					throw new RuntimeException("你沒有權限更改該景點資訊");
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}

	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
