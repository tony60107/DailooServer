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

}
