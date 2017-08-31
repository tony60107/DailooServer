package com.dailoo.web;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.dailoo.domain.Audio;
import com.dailoo.domain.Speaker;
import com.dailoo.domain.Viewpoint;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.AudioService;
import com.dailoo.service.ViewpointService;
import com.dailoo.util.FileUploadUtils;
import com.google.gson.Gson;

public class ViewpointServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		Gson gson = new Gson();
		ViewpointService service = BasicFactory.getFactory().getService(ViewpointService.class);
		Viewpoint vp = new Viewpoint();
		AudioService audioService = BasicFactory.getFactory().getService(AudioService.class);
		Audio audio = new Audio();

		// 取得客戶端要求
		String method = request.getParameter("method");

		try {
			//如果是新增景點
			if ("addViewpoint".equals(method)) {
				Map<String, String> paramMap = FileUploadUtils.getParamMap(request, response, this);
				//取得景點音檔路徑
				String audioUrl = paramMap.get("audiourls");
				//取得景點代表圖片
				
				//設置景點資料
				BeanUtils.populate(vp, paramMap);
				//檢查是否已有相同景點名稱與副標的景點
				Viewpoint temp = service.findViewpointByNameAndSt(vp.getName(), vp.getSubtitle());
				if(temp == null){
					//在資料庫中新增景點
					service.addViewpoint(vp);
					//如果有上傳景點音檔
					if(audioUrl != null){
						//取得已新增景點的ID
						String vpId = service.findViewpointByNameAndSt(vp.getName(), vp.getSubtitle()).getId();
						//更新音檔資訊
						audio.setSrc(audioUrl);
						audio.setViewpointId(vpId);
						//在資料庫中新增音檔
						audioService.addAudio(audio);
					}
				} else {
					throw new RuntimeException("該景點已存在");
				}
				response.sendRedirect("/addviewpoint.html");
			}
			//如果是更新景點
			else if("updateViewpoint".equals(method)){
				Map<String, String> paramMap = FileUploadUtils.getParamMap(request, response, this);
				BeanUtils.populate(vp, paramMap);
				//取得目前登入者的資訊
				Speaker speaker = (Speaker) request.getSession().getAttribute("speaker");
				//根據景點ID查找該景點
				Viewpoint temp = service.findViewpointById(vp.getId());
				
				//進行權限管理
				if(speaker == null){
					throw new RuntimeException("您尚未登入");
				}
				//如果要求更改景點資訊的是該景點擁有者或是管理員
				else if(speaker.getId().equals(temp.getSpeakerId()) || "admin".equals(speaker.getRole())){
					//更新景點資訊
					service.updateViewpoint(vp);
				} else {
					throw new RuntimeException("您沒有權限更改該景點資訊");
				}
			}
			//如果是取得景點資訊
			else if("getViewpointInfo".equals(method)){
				//取得要獲取的景點ID
				String viewpointId = request.getParameter("viewpointId");
				String json = service.findViewpointByIdToJson(viewpointId);
				if(json == null) json = "";
				response.getWriter().write(json);
			}
			//根據主題名稱，獲取簡易版景點資訊
			else if("getViewpointSimplesByTheme".equals(method)){
				String theme = request.getParameter("theme");
				String json = service.findViewpointSimplesByTheme(theme);
				if(json == null) json = "";
				response.getWriter().write(json);
			}
			//如果是刪除景點
			else if("delViewpoint".equals(method)){
				//取得要刪除的景點ID
				String viewpointId = request.getParameter("viewpointId");
				//取得目前登入者的資訊
				Speaker speaker = (Speaker) request.getSession().getAttribute("speaker");
				//根據景點ID查找該景點
				Viewpoint temp = service.findViewpointById(viewpointId);
				
				if(temp == null) throw new RuntimeException("該景點不存在");
				
				//進行權限管理
				if(speaker == null){
					throw new RuntimeException("您尚未登入");
				}
				//如果要求更改景點資訊的是該景點擁有者或是管理員
				else if(speaker.getId().equals(temp.getSpeakerId()) || "admin".equals(speaker.getRole())){
					//更新景點資訊
					service.delViewpoint(viewpointId);
				} else {
					throw new RuntimeException("您沒有權限更改該景點資訊");
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
