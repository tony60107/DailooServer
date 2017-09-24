package com.dailoo.service;

import com.dailoo.domain.Region;

public interface RegionService extends Service{

	/**
	 * 新增地區
	 * @param region 地區Bean
	 */
	void addRegion(Region region);

	/**
	 * 取得所有的地區
	 * @return 地區集合的Json數據
	 */
	String findAllRegions();

	/**
	 * 根據地區ID刪除地區
	 * @param id
	 */
	void delRegionById(String id);

	/**
	 * 根據地區ID取得地區
	 * @param id 地區ID
	 * @return 地區JSON數據
	 */
	String findRegionById(String id);

	/**
	 * 更新地區資訊
	 * @param region 地區Bean
	 */
	void updateRegionById(Region region);

}
