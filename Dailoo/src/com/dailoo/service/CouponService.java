package com.dailoo.service;

import java.util.Map;

import com.dailoo.domain.Coupon;
import com.dailoo.domain.CouponTheme;

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

}
