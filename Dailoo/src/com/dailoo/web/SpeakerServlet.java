package com.dailoo.web;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.beanutils.BeanUtils;

import com.dailoo.domain.Speaker;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.SpeakerService;
import com.dailoo.util.FileUploadUtils;
import com.google.gson.Gson;



public class SpeakerServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		Gson gson = new Gson();
		SpeakerService service = BasicFactory.getFactory().getService(SpeakerService.class);
		Speaker speaker = new Speaker();
		
		// 取得客戶端要求
		String method = request.getParameter("method");
		try {
			// 如果是註冊講者
			if ("registSpeaker".equals(method)) {

				BeanUtils.populate(speaker, request.getParameterMap());
				service.addSpeaker(speaker);

			} 
			// 如果是取得講者資料
			else if ("getSpeakerInfo".equals(method)) {
				speaker = (Speaker) request.getSession().getAttribute("speaker");
				if (speaker == null) {
					response.getWriter().write("您尚未登入");
					throw new RuntimeException("該講者尚未登入");
				}else {
					speaker = service.getSpeakerByUnAndPsw(speaker.getUsername(),speaker.getPassword());
					response.getWriter().write(gson.toJson(speaker));
				}
			}	
			//如果是更新講者資訊 
			else if ("updateSpeakerInfo".equals(method)) {
				Map<String, String> paramMap = FileUploadUtils.getParamMap(request, response, this);
				speaker = (Speaker) request.getSession().getAttribute("speaker");
				if(speaker != null){
					speaker = service.getSpeakerByUnAndPsw(speaker.getUsername(), speaker.getPassword());
					BeanUtils.populate(speaker, paramMap);
					service.updateSpeakerInfo(speaker, paramMap.get("imgurls"));
				} else {
					response.getWriter().write("您尚未登入");
					throw new RuntimeException("該講者尚未登入");
				}
				response.sendRedirect("/updateSpeakerInfo.html");
			}
			//如果是找到所有的講者
			else if ("findAllSpeakers".equals(method)) {
				String json = service.findAllSpeakers();
				response.getWriter().write(json);
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
