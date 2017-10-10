package com.dailoo.web;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.dailoo.domain.SerialNumber;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.SNService;

public class SNServlet extends HttpServlet {
	
	SNService service = BasicFactory.getFactory().getService(SNService.class);

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		// 取得客戶端要求
		String method = request.getParameter("method");
		try {
			//如果是新增序號
			if("addSN".equals(method)) {
				int createNum = Integer.valueOf(request.getParameter("createNum"));
				SerialNumber sn = new SerialNumber();
				BeanUtils.populate(sn, request.getParameterMap());
				service.addSN(sn, createNum);
			}
			//如果是找出所有的序號
			else if("getAllSNs".equals(method)) {
				String json = service.findAllSN();
				response.getWriter().write(json);
			}
			//如果是使用序號
			else if("useSN".equals(method)) {
				SerialNumber sn  = service.findSNByCode(request.getParameter("code"));
				if(sn == null) {
					throw new RuntimeException("該序號不存在");
				} else {
					//如果序號使用次數還足夠
					if(sn.getUsedCount() < sn.getMaxUseCount()) { 
						Cookie snC = new Cookie("SN", sn.getCode());
						snC.setPath("/");
						snC.setMaxAge(sn.getUseLength() * 3600);
						response.addCookie(snC);
					} else {
						throw new RuntimeException("該序號使用次數已用完");
					} 
				}
			}
			else if("test".equals(method)) {
				System.out.println(request.getSession().getAttribute("SN").toString());
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
