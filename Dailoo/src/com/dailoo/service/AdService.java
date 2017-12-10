package com.dailoo.service;

import com.dailoo.domain.Ad;

public interface AdService extends Service{

	/**
	 * 新增廣告
	 * @param ad 廣告Bean
	 */
	void addAd(Ad ad);

	/**
	 * 隨機取得一個廣告
	 * @return 廣告的Json數據
	 */
	String findAd();

	/**
	 * 取得所有的廣告
	 * @return 廣告List集合的Json數據
	 */
	String findAllAd();

	/**
	 * 根據廣告ID找到廣告
	 * @param id 廣告ID
	 * @return 廣告的JSON數據
	 */
	String findAdById(String id);

	/**
	 * 更新廣告資訊
	 * @param ad 廣告Bean
	 * @param imgurl 要更新的廣告圖片，如果沒有則傳入null
	 */
	void updateAdInfo(Ad ad, String imgurl);

	/**
	 * 根據廣告ID刪除廣告
	 * @param id 廣告ID
	 */
	void delAdById(String id);

}
