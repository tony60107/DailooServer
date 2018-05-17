package com.dailoo.web;

import java.io.IOException;
import java.net.URLDecoder;
import java.sql.Timestamp;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.dailoo.domain.SerialNumber;
import com.dailoo.domain.Speaker;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.SNService;
import com.google.gson.Gson;

public class SNServlet extends HttpServlet {
	
	SNService service = BasicFactory.getFactory().getService(SNService.class);
	Gson gson = new Gson();

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		//取得目前登入者的資訊
		Speaker loginUser = (Speaker) request.getSession().getAttribute("speaker");
		
		// 取得客戶端要求
		String method = request.getParameter("method");
		try {
			//如果是新增序號
			if("addSN".equals(method)) {
				int createNum = Integer.valueOf(request.getParameter("createNum"));
				SerialNumber sn = new SerialNumber();
				BeanUtils.populate(sn, request.getParameterMap());
				sn.setOwnerId(loginUser.getId());
				service.addSN(sn, createNum);
				response.sendRedirect("/manageSNs.html");
			}
			//如果是找出所有的序號
			else if("getAllSNs".equals(method)) {
				//如果登入者是管理員，查詢所有的序號
				if("admin".equals(loginUser.getRole())){
					String json = service.findAllSN();
					response.getWriter().write(json);
				} 
				//非管理員，僅查詢自己擁有的序號
				else {
					String json = service.findSNByOwnerId(loginUser.getId());
					response.getWriter().write(json);
				}
			}
			//如果是使用序號
			else if("useSN".equals(method)) {
				
				if(request.getSession().getAttribute("SN") != null && service.findSNByCode(((SerialNumber)request.getSession().getAttribute("SN")).getCode()) != null) {
					//throw new RuntimeException("你的序號仍在有效時間內");
					response.sendRedirect(request.getContextPath() + "/viewpoint.html?id=" + ((SerialNumber) request.getSession().getAttribute("SN")).getViewpointId());
					return;
				}
				
				/*******針對移動端Session問題處理********/
				//取得序號Cookie
				Cookie [] cs = request.getCookies();
				Cookie findC = null;
				if(cs!=null){
					for(Cookie c : cs){
						if("SN".equals(c.getName())){	findC = c; break;}
					}
				}
				if(findC != null){
					String code = URLDecoder.decode(findC.getValue(),"utf-8");
					//根據Cookie取得序號Bean
					SerialNumber sn = service.findSNByCode(code);
					if(sn != null){
						long endTime = sn.getStartTime().getTime() + sn.getUseLength() * 3600 * 1000;
						if(endTime - System.currentTimeMillis() > 0){ //如果Cookie的序號仍在有效時間內
							//throw new RuntimeException("你的序號仍在有效時間內");
							response.sendRedirect(request.getContextPath() + "/viewpoint.html?id=" + sn.getViewpointId());
						}
					} 
				}
				/*******針對移動端Session問題處理********/
				
				
				SerialNumber sn  = service.findSNByCode(request.getParameter("code"));
				if(sn == null) {
					throw new RuntimeException("該序號不存在");
				} else {
					//如果序號使用次數還足夠
					if(sn.getUsedCount() < sn.getMaxUseCount()) { 
						Cookie snC = new Cookie("SN", sn.getCode());
						snC.setPath("/");
						//截止使用期限
						long endTime = 0;
						if(sn.getStartTime() != null){
							endTime = sn.getStartTime().getTime() + sn.getUseLength() * 3600 * 1000;
						}
						//如果序號還沒啟用
						if(sn.getStartTime() == null){
							snC.setMaxAge(sn.getUseLength() * 3600);
							response.addCookie(snC);
							sn.setStartTime(new Timestamp(System.currentTimeMillis()));
							sn.setUsedCount(sn.getUsedCount() + 1);
						}
						//如果序號已使用，但還在使用期限內
						else if(System.currentTimeMillis() - endTime < 0){
							snC.setMaxAge((int) ((endTime - System.currentTimeMillis()) / 1000));
							response.addCookie(snC);
							sn.setUsedCount(sn.getUsedCount() + 1);
						} else {
							throw new RuntimeException("該序號已過期");
						}
						//更新序號資訊
						service.updateSN(sn);
					} else {
						throw new RuntimeException("該序號使用次數已用完");
					} 
				}
				response.sendRedirect(request.getContextPath() + "/viewpoint.html?id=" + sn.getViewpointId());
			}
			//如果是刪除序號
			else if("delSN".equals(method)) {
				if(loginUser == null) throw new RuntimeException("你尚未登入");
				//只有管理員才可以刪除序號
				if("admin".equals(loginUser.getRole())){
					service.delSN(request.getParameter("code"));
				} else {
					throw new RuntimeException("你沒有權限刪除序號");
				}
				response.sendRedirect("/manageSNs.html");
			}
			//如果是，取得現在序號使用的狀態
			else if("getUseStatus".equals(method)) {
				
				Cookie [] cs = request.getCookies();
				Cookie findC = null;
				if(cs!=null){
					for(Cookie c : cs){
						if("SN".equals(c.getName())){	findC = c; break;}
					}
				}
				
				if(findC != null) {
					String code = URLDecoder.decode(findC.getValue(),"utf-8");
					SerialNumber sn = service.findSNByCode(code);
					
					if(sn != null) {
						response.getWriter().write(new Gson().toJson(sn));
					} else {
						response.getWriter().write("");
					} 
				}
			}
			//如果是根據ID找出序號
			else if("getSNByCode".equals(method)) {
				SerialNumber sn = service.findSNByCode(request.getParameter("code"));
				response.getWriter().write(gson.toJson(sn));
			}
		} catch(Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
