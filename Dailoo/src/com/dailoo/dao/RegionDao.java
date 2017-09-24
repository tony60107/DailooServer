package com.dailoo.dao;

import java.util.List;

import com.dailoo.domain.Region;

public interface RegionDao extends Dao{

	/**
	 * 新增地區
	 * @param region 地區Bean
	 */
	void addRegion(Region region);

	/**
	 * 根據地區名稱查找地區
	 * @param name 地區名稱
	 * @return 地區Bean
	 */
	Region findRegionByName(String name);

	/**
	 * 取得所有的地區
	 * @return 地區的List集合
	 */
	List<Region> findAllRegions();

	/**
	 * 根據地區ID刪除地區
	 * @param id 地區ID
	 */
	void delRegionById(String id);

	/**
	 * 根據地區ID找出地區
	 * @param id 地區ID
	 * @return 地區Bean
	 */
	Region findRegionById(String id);

	/**
	 * 根據ID更新地區資訊
	 * @param region 地區Bean
	 */
	void updateRegionById(Region region);

}
