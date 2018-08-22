package com.dailoo.service;

import java.util.List;
import java.util.Map;

import com.dailoo.domain.Coupon;
import com.dailoo.domain.CouponTheme;
import com.dailoo.domain.User;

public interface CouponService extends Service{

	/***
	 * 新增優惠券
	 * @param coupon 優惠券Bean
	 */
	void addCoupon(Coupon coupon);

	/***
	 * 新增優惠券主題
	 * @param theme 優惠券主題Bean
	 */
	void addCouponTheme(CouponTheme theme);

	/***
	 * 取得所有的優惠券主題
	 * @return 優惠券主題的JSON數據
	 */
	String getCouponThemes();

	/***
	 * 根據主題ID取得優惠券
	 * @param themeId 主題ID
	 * @return  
	 */
	String getCouponByThemeId(String themeId);

	/***
	 * 新增優惠券圖片
	 * @param paramMap 含有照片URLs的Map集合
	 */
	void addCouponImg(Map<String, String> paramMap);

	/**
	 * 根據優惠券ID，取得對應圖片
	 * @param couponId 優惠券ID
	 * @return CouponImg集合的JSON數據
	 */
	String getImgsByCouponId(String couponId);

	/**
	 * 根據圖片ID，刪除優惠券圖片
	 * @param couponImgId 優惠券圖片ID
	 */
	void delCouponImgById(String couponImgId);

	/**
	 * 根據優惠券ID，取得優惠券
	 * @param id 優惠券ID
	 * @return 優惠券的JSON數據
	 */
	String getCouponById(String id);

	/**
	 * 登入User帳號
	 * @param user 使用者Bean
	 */
	void loginUser(User user);

	/**
	 * 根據User Id取得用戶資料
	 * @param id 用戶ID
	 * @return 用戶Bean
	 */
	User getUserById(String id);

	/**
	 * 新增優惠券訂單
	 * @param user 登入的用戶Bean
	 * @param couponId 優惠券ID
	 */
	void addCouponOrder(User user, String couponId);

	/**
	 * 取得登入者擁有的主題優惠券的主題
	 * @param user 登入者Bean
	 * @return 優惠券主題List
	 */
	List<CouponTheme> getThemesByUser(User user);

	/**
	 * 根據優惠券ID，更新優惠券資訊
	 * @param coupon 優惠券Bean
	 */
	void updateCouponById(Coupon coupon);

	/**
	 * 使用優惠券
	 * @param orderId 優惠券訂單ID
	 * @param couponId 優惠券ID(紀錄在哪個商家做使用)
	 * @param loginUser 要使用優惠券的用戶Bean
	 * @return 優惠券使用訊息
	 */
	String useCoupon(String couponId, User loginUser);

	/**
	 * 取得所有都優惠券
	 * @return 優惠券列表
	 */
	List<Coupon> getCoupons();

	/**
	 * 根據優惠券主題ID，取得優惠券主題
	 * @param id 主題ID
	 * @return 優惠券主題Bean
	 */
	CouponTheme getCouponThemeById(String id);

	/**
	 * 根據優惠券主題ID，更新優惠券主題資訊
	 * @param theme 優惠券主題 Bean
	 */
	void updateCouponThemeById(CouponTheme theme);

}
