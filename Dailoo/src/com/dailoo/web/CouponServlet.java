package com.dailoo.web;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.logging.log4j.LogManager;

import com.dailoo.domain.Coupon;
import com.dailoo.domain.CouponTheme;
import com.dailoo.domain.User;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.CouponService;
import com.dailoo.util.FileUploadUtils;
import com.google.gson.Gson;


public class CouponServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		Gson gson = new Gson();
		CouponService service = BasicFactory.getFactory().getService(CouponService.class);
		
		// 取得客戶端要求
		String method = request.getParameter("method");
		try {
			//新增優惠券
			if ("addCoupon".equals(method)) {
				Coupon coupon = new Coupon();
				BeanUtils.populate(coupon, request.getParameterMap());
				service.addCoupon(coupon);
			}
			//新增優惠券主題
			else if ("addTheme".equals(method)) { 
				CouponTheme theme = new CouponTheme();
				BeanUtils.populate(theme, request.getParameterMap());
				service.addCouponTheme(theme);
			}
			//取得優惠券主題
			else if ("getCouponThemes".equals(method)) { 
				String json = service.getCouponThemes();
				response.getWriter().write(json);
			}
			//根據主題取得優惠券
			else if ("getCouponsByThemeId".equals(method)) { 
				String json = service.getCouponByThemeId(request.getParameter("themeId"));
				response.getWriter().write(json);
			}
			//新增優惠券圖片
			else if ("addCouponImg".equals(method)) { 
				Map<String, String> paramMap = FileUploadUtils.getParamMap(request,response, this);
				service.addCouponImg(paramMap);
			}
			//根據優惠券ID，取得對應圖片
			else if ("getImgsByCouponId".equals(method)) { 
				String json = service.getImgsByCouponId(request.getParameter("couponId"));
				response.getWriter().write(json);
			}
			//根據圖片ID，刪除優惠券圖片
			else if("delCouponImgById".equals(method)) {
				service.delCouponImgById(request.getParameter("id"));
				response.getWriter().write("OK");
			}
			//根據優惠券ID，取得優惠券
			else if("getCouponById".equals(method)) {
				String json = service.getCouponById(request.getParameter("id"));
				response.getWriter().write(json);
			}
			//登入用戶帳號
			else if("loginUser".equals(method)) {
				User user = new User();
				BeanUtils.populate(user, request.getParameterMap());
				service.loginUser(user);
				request.getSession().setAttribute("user", user);
			}
		} catch (Exception e) {
			LogManager.getLogger().error("系統出錯", e);
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
