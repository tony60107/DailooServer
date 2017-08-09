package com.dailoo.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.beanutils.BeanUtils;

import com.dailoo.domain.Speaker;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.SpeakerService;

public class SpeakerServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		response.setHeader("Access-Control-Allow-Origin","http://localhost:12057");
		
		SpeakerService service = BasicFactory.getFactory().getService(SpeakerService.class);
		Speaker speaker = new Speaker();
		
		//取得客戶端要求
		String method = request.getParameter("method");
		
		//如果是註冊講者
		if("registSpeaker".equals(method)){
			try {
				BeanUtils.populate(speaker, request.getParameterMap());
				service.addSpeaker(speaker);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}else if("getSpeakerInfo".equals(method)){
			HttpSession session = request.getSession();
			speaker = (Speaker) request.getSession().getAttribute("speaker");
			if(speaker == null){
				response.getWriter().write("您尚未登入");
				return;
			}
			speaker = service.getSpeakerByUnAndPsw(speaker.getUsername(), speaker.getPassword());
		}
		
		
		
		
		response.getWriter().write("11111111");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}	

}
