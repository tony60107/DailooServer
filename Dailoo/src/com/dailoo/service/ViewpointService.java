package com.dailoo.service;

import com.dailoo.domain.Viewpoint;

public interface ViewpointService extends Service{
	
	/**
	 * 新增景點
	 * @param viewpoint 景點Bean
	 */
	void addViewpoint(Viewpoint viewpoint);

	/**
	 * 根據景點名稱與副標題查找景點
	 * @param name 景點名稱
	 * @param subtitle 副標題
	 * @return 查找到的景點Bean
	 */
	Viewpoint findViewpointByNameAndSt(String name, String subtitle);

	/**
	 * 根據景點ID查找景點
	 * @param id 景點ID
	 * @return 景點Bean
	 */
	Viewpoint findViewpointById(String id);

	/**
	 * 更新景點資訊
	 * @param viewpoint 景點資訊Bean
	 */
	void updateViewpoint(Viewpoint viewpoint);

	/**
	 * 查詢該景點ID所有資訊
	 * @param viewpointId 景點ID
	 * @return JSON數據
	 */
	String findViewpointByIdToJson(String viewpointId);

}
