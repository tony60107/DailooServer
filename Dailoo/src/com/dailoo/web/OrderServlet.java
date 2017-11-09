package com.dailoo.web;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import ecpay.payment.integration.AllInOne;
import ecpay.payment.integration.domain.AioCheckOutATM;

public class OrderServlet extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		// 取得客戶端要求
		String method = request.getParameter("method");
		
		// 如果是新增訂單
		if ("addOrder".equals(method)) {
			AllInOne all = new AllInOne("");;
			AioCheckOutATM obj = new AioCheckOutATM();
			obj.setMerchantTradeNo(new SimpleDateFormat("yyyyMMdd").format(new Date()) + (int)(Math.random()*900000+100000));
			obj.setMerchantTradeDate(new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(new Date()));
			obj.setTotalAmount(request.getParameter("price"));
			obj.setTradeDesc("test Description");
			obj.setItemName(request.getParameter("item"));
			obj.setReturnURL("http://211.23.128.214:5000");
			obj.setNeedExtraPaidInfo("N");
			obj.setHoldTradeAMT("0");
			obj.setExpireDate("6");
			String form = all.aioCheckOut(obj, null);
			System.out.println(form);
			response.getWriter().write(form);
		}
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
