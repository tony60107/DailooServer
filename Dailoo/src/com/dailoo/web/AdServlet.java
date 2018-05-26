package com.dailoo.web;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.dailoo.domain.Ad;
import com.dailoo.domain.Speaker;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.AdService;
import com.dailoo.util.FileUploadUtils;
import com.google.gson.Gson;

public class AdServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		AdService service = BasicFactory.getFactory().getService(AdService.class);
		Gson gson = new Gson();
		
		//取得目前登入者的資訊
		Speaker loginUser = (Speaker) request.getSession().getAttribute("speaker");
		
		//取得客戶端要求
		String method = request.getParameter("method");
		try{
			//如果是新增廣告
			if("addAd".equals(method)) {
				if("admin".equals(loginUser.getRole())){
					Map<String, String> paramMap = FileUploadUtils.getParamMap(request, response, this);
					Ad ad = new Ad();
					BeanUtils.populate(ad, paramMap);
					ad.setImgurl(paramMap.get("imgurls"));
					service.addAd(ad);
					response.sendRedirect("/manageAds.html");
				} else {
					response.getWriter().write("{\"error\":\"只有管理員才可以新增廣告喔~\"}");
				}
			} 
			//隨機取得一個廣告
			else if("getAdByRegionId".equals(method)) { 
				String json = service.findAdByRegionId(request.getParameter("regionId"));
				response.getWriter().write(json);
			}
			//取得所有的廣告
			else if("getAllAds".equals(method)) {
				String json = service.findAllAd();
				response.getWriter().write(json);
			}
			//根據廣告ID取得廣告
			else if("getAdById".equals(method)) {
				String json = service.findAdById(request.getParameter("id"));
				response.getWriter().write(json);
			}
			//更新廣告資訊
			else if("updateAdInfo".equals(method)) {
				if("admin".equals(loginUser.getRole())){
					Map<String, String> paramMap = FileUploadUtils.getParamMap(request, response, this);
					Ad ad = gson.fromJson(service.findAdById(paramMap.get("id")), Ad.class);
					BeanUtils.populate(ad, paramMap);
					service.updateAdInfo(ad, paramMap.get("imgurls"));
					response.sendRedirect("/updateAdInfo.html?id=" + ad.getId());
				} else {
					response.getWriter().write("{\"error\":\"只有管理員才可以編輯廣告喔~\"}");
				}
			}
			//刪除廣告
			else if("delAdById".equals(method)) {
				if("admin".equals(loginUser.getRole())){
					service.delAdById(request.getParameter("id"));
					response.sendRedirect("/manageAds.html");
				} else {
					response.getWriter().write("{\"error\":\"只有管理員才可以刪除廣告喔~\"}");
				}
			}
		}catch(Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
