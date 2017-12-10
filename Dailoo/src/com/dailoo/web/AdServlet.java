package com.dailoo.web;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.dailoo.domain.Ad;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.AdService;
import com.dailoo.util.FileUploadUtils;
import com.google.gson.Gson;

public class AdServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		AdService service = BasicFactory.getFactory().getService(AdService.class);
		Gson gson = new Gson();
		
		//取得客戶端要求
		String method = request.getParameter("method");
		try{
			//如果是新增廣告
			if("addAd".equals(method)) {
				Map<String, String> paramMap = FileUploadUtils.getParamMap(request, response, this);
				Ad ad = new Ad();
				BeanUtils.populate(ad, paramMap);
				ad.setImgurl(paramMap.get("imgurls"));
				service.addAd(ad);
				response.sendRedirect("/manageAds.html");
			} 
			//隨機取得一個廣告
			else if("getAd".equals(method)) { 
				String json = service.findAd();
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
				Map<String, String> paramMap = FileUploadUtils.getParamMap(request, response, this);
				Ad ad = gson.fromJson(service.findAdById(paramMap.get("id")), Ad.class);
				BeanUtils.populate(ad, paramMap);
				service.updateAdInfo(ad, paramMap.get("imgurls"));
				response.sendRedirect("/updateAdInfo.html?id=" + ad.getId());
			}
			//刪除廣告
			else if("delAdById".equals(method)) {
				service.delAdById(request.getParameter("id"));
				response.sendRedirect("/manageAds.html");
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
