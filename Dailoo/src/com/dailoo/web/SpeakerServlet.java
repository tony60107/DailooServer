package com.dailoo.web;

import java.io.File;
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
		Speaker loginUser = (Speaker) request.getSession().getAttribute("speaker");
		
		// 取得客戶端要求
		String method = request.getParameter("method");
		try {
			// 如果是註冊講者
			if ("registSpeaker".equals(method)) {
				BeanUtils.populate(speaker, request.getParameterMap());
				service.addSpeaker(speaker);
				response.sendRedirect("/manageSpeakers.html");
			} 
			// 如果是取得講者資料
			else if ("getSpeakerInfo".equals(method)) {
				//沒有指定講者ID，直接取得登入的講者資料
				if("".equals(request.getParameter("id"))){
					speaker = (Speaker) request.getSession().getAttribute("speaker");
					if(speaker == null) throw new RuntimeException("您沒有權限取得該資料");
					speaker = service.getSpeakerByUnAndPsw(speaker.getUsername(),speaker.getPassword());
					response.getWriter().write(gson.toJson(speaker));
				}
				//如果有指定講者ID且登入身份為管理員
				else if(request.getParameter("id") != null && "admin".equals(loginUser.getRole())){
					String speakerJson = service.findSpeakerById(request.getParameter("id"));
					response.getWriter().write(speakerJson);
				}
			}	
			//如果是更新講者資訊 
			else if ("updateSpeakerInfo".equals(method)) {
				Map<String, String> paramMap = FileUploadUtils.getParamMap(request, response, this);
				String temp = paramMap.get("id");
				//不針對更改哪個講者的資訊
				if(paramMap.get("id") == null || "".equals(paramMap.get("id"))){
					//尚未登入
					if(loginUser == null){ 
						//刪除上傳的大頭照
						String imgurl = getServletContext().getRealPath(paramMap.get("imgurls"));
						File file = new File(imgurl); 
						if(file.exists()){	file.delete(); }
						throw new RuntimeException("您沒有權限更改該資料");
					}else {
						//更改登入講者的資料
						speaker = service.getSpeakerByUnAndPsw(loginUser.getUsername(), loginUser.getPassword());
						BeanUtils.populate(speaker, paramMap);
						speaker.setId(loginUser.getId());
						service.updateSpeakerInfo(speaker, paramMap.get("imgurls"));
					}
					response.sendRedirect("/updateSpeakerInfo.html");
				}
				//如果有指定要更改講者資訊的ID且登入者為管理員
				else if(paramMap.get("id") != null && "admin".equals(loginUser.getRole())) {
					//根據指定的ID找到講者
					speaker = gson.fromJson(service.findSpeakerById(paramMap.get("id")), Speaker.class);
					//將新資訊進行封裝
					BeanUtils.populate(speaker, paramMap);
					service.updateSpeakerInfo(speaker, paramMap.get("imgurls"));
					response.sendRedirect("/updateSpeakerInfo.html?id=" + paramMap.get("id"));
				}
			}
			//如果是找到所有的講者
			else if ("findAllSpeakers".equals(method)) {
				String json = service.findAllSpeakers();
				response.getWriter().write(json);
			}
			//如果是刪除講者
			else if("delSpeakerById".equals(method)){
				if("admin".equals(loginUser.getRole())){
					service.delSpeakerById(request.getParameter("id"));
					response.sendRedirect("/manageSpeakers.html");
				}else {
					throw new RuntimeException("您沒有權限更改該資料");
				}
			}
			//如果是取得登入帳號資料
			else if("getLoginUser".equals(method)){
				response.getWriter().write(gson.toJson(loginUser));
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
