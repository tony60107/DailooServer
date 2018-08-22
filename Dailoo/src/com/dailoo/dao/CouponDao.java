package com.dailoo.dao;

import java.util.List;

import com.dailoo.domain.Coupon;
import com.dailoo.domain.CouponImg;
import com.dailoo.domain.CouponOrder;
import com.dailoo.domain.CouponTheme;
import com.dailoo.domain.User;
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

	/**
	 * 根據用戶ID找到用戶
	 * @param id 用戶ID
	 * @return 用戶Bean
	 */
	User getUserById(String id);

	/**
	 * 註冊用戶帳號
	 * @param user 用戶Bean
	 */
	void registUser(User user);

	/**
	 * 新增優惠券訂單
	 * @param order 訂單Bean
	 */
	void addCouponOrder(CouponOrder order);

	/**
	 * 更新優惠券資料
	 * @param coupon 優惠券Bean
	 */
	void updateCouponById(Coupon coupon);

	/**
	 * 根據用戶ID取得優惠券訂單
	 * @param userId 用戶ID
	 * @return 優惠券訂單List
	 */
	List<CouponOrder> getCouponOrderByUserId(String userId);

	/**
	 * 根據ID取得優惠券主題
	 * @param  id 主題ID
	 * @return 優惠券主題Bean
	 */
	CouponTheme getCouponThemesById(String id);

	/**
	 * 根據主題ID更新優惠券主題
	 * @param theme 優惠券主題Bean
	 */
	void updateCouponThemeById(CouponTheme theme);

	/**
	 * 根據優惠券訂單ID，取得優惠券
	 * @param orderId 訂單ID
	 * @return 優惠券訂單Bean
	 */
	CouponOrder getCouponOrderById(String orderId);

	/**
	 * 根據優惠券訂單ID，更新訂單
	 * @param order 優惠券訂單Bean
	 */
	void updateCouponOrderById(CouponOrder order);

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




}
