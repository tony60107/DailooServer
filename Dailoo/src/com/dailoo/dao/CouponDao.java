package com.dailoo.dao;

import java.util.List;

import com.dailoo.domain.Coupon;
import com.dailoo.domain.CouponImg;
import com.dailoo.domain.CouponTheme;
import com.google.gson.JsonElement;

public interface CouponDao extends Dao{

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
	 * @return 優惠券主題的List集合
	 */
	List<CouponTheme> getCouponThemes();

	/***
	 * 根據主題ID，取得優惠券
	 * @param themeId 主題ID
	 * @return 優惠券List集合
	 */
	List<Coupon> getCouponsByThemeId(String themeId);

	/**
	 * 新增優惠券圖片
	 * @param img 優惠券圖片Bean
	 */
	void addCouponImg(CouponImg img);

	/**
	 * 根據優惠券ID，取得優惠券圖片集合
	 * @param couponId 優惠券ID
	 * @return 優惠券圖片的List集合
	 */
	List<CouponImg> getImgsByCouponId(String couponId);

	/**
	 * 根據優惠券圖片ID，取得優惠券圖片
	 * @param couponImgId 優惠券圖片ID
	 * @return 優惠券圖片Bean
	 */
	CouponImg getCouponImgById(String couponImgId);

	/**
	 * 根據圖片ID，刪除圖片資料
	 * @param couponImgId 優惠券圖片ID
	 */
	void delCouponImgById(String couponImgId);

	/**
	 * 根據優惠券ID，取得優惠券
	 * @param id 優惠券ID
	 * @return 優惠券Bean
	 */
	Coupon getCouponById(String id);

}
