package com.dailoo.web;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
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
		User loginUser = (User) request.getSession(false).getAttribute("user");
		
		
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
				
				//如果登入/註冊同時，要新增優惠券
				String couponId = request.getParameter("couponId");
				if(!"".equals(couponId)) {
					service.addCouponOrder(user, couponId);
				}
				
				//30天內自動登入
				Cookie autologinC = new Cookie("autologinUser",URLEncoder.encode(user.getId()+":"+user.getEmail(),"utf-8"));
				autologinC.setPath("/");
				autologinC.setMaxAge(3600*24*30);
				response.addCookie(autologinC);
			}
			//取得登入者資料
			else if("getLoginUser".equals(method)) {
				if(loginUser != null){
					User user = service.getUserById(loginUser.getId());
					request.getSession().setAttribute("user", user);
					response.getWriter().write(gson.toJson(user));
				} else {
					response.getWriter().write("{}");
				}
			}
			//取得登入者擁有的主題優惠券
			else if("getCouponThemeByUser".equals(method)) {
				List<CouponTheme> cps = service.getThemesByUser(service.getUserById(loginUser.getId())) ;
				response.getWriter().write(gson.toJson(cps));
			}
			//更新優惠券資訊
			else if("updateCouponById".equals(method)) {
				Coupon coupon = new Coupon();
				BeanUtils.populate(coupon, request.getParameterMap());
				service.updateCouponById(coupon);
			}
			//使用優惠券
			else if("useCoupon".equals(method)) {
				String msg = service.useCoupon(request.getParameter("couponId"), loginUser);
				System.out.println(msg);
				response.getWriter().write(msg);
			}
			//取得所有的優惠券
			else if ("getCoupons".equals(method)) { 
				List<Coupon> cps = service.getCoupons();
				response.getWriter().write(gson.toJson(cps));
			}
			//根據優惠券主題ID，取得優惠券主題
			else if ("getCouponThemeById".equals(method)) { 
				CouponTheme theme = service.getCouponThemeById(request.getParameter("id"));
				response.getWriter().write(gson.toJson(theme));
			}
			//根據優惠券主題ID，更新優惠券主題資訊
			else if ("updateCouponThemeById".equals(method)) { 
				CouponTheme theme = new CouponTheme();
				BeanUtils.populate(theme, request.getParameterMap());
				service.updateCouponThemeById(theme);
			}
			//新增優惠券訂單
			else if ("addCouponOrder".equals(method)) {
				//如果該用戶已登入，則新增
				if(loginUser != null){
					service.addCouponOrder(loginUser, request.getParameter("id"));
				} else { //如果該用戶未登入，則導向登入頁
					response.sendRedirect("/coupon/login.html?id=" + request.getParameter("id"));
				}
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
