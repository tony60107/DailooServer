package com.dailoo.dao;

import java.util.List;

import com.dailoo.domain.Ad;
import com.dailoo.service.Service;

public interface AdDao extends Dao{

	/**
	 * 新增廣告
	 * @param ad 廣告Bean
	 */
	void addAd(Ad ad);

	/**
	 * 隨機抽取一則廣告
	 * @return 廣告Bean
	 */
	Ad findAd();

	/**
	 * 找到所有的廣告
	 * @return 廣告的List集合
	 */
	List<Ad> findAllAd();

	/**
	 * 根據廣告ID找到廣告
	 * @param id 廣告ID
	 * @return 廣告Bean
	 */
	Ad findAdById(String id);

	/**
	 * 更新廣告資訊
	 * @param ad 廣告Bean
	 */
	void updateAdInfo(Ad ad);

	/**
	 * 根據ID刪除廣告
	 * @param id 廣告ID
	 */
	void delAdById(String id);

}
