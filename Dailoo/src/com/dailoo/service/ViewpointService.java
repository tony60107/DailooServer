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

	
	/**
	 * 根據主題名稱，獲取簡易版景點資訊
	 * @param theme 主題名稱
	 * @return 多個簡易版景點資訊的JSON數據
	 */
	String findViewpointSimplesByThemeId(String theme);

	/**
	 * 根據景點ID刪除景點
	 * @param viewpointId
	 */
	void delViewpoint(String viewpointId);

	/**
	 * 獲取所有簡易版景點資訊
	 * @return
	 */
	String findAllViewpointSimples();

	/**
	 * 更新景點是否付費刊登狀態
	 * @param vpId 景點ID
	 * @param stat 刊登狀態
	 */
	void updateIsPublishById(String vpId, String stat);

	/**
	 * 更新景點是否優先顯示狀態
	 * @param vpId 景點ID
	 * @param stat 顯示狀態
	 */
	void updateIsPriorityById(String vpId, String stat);

	/**
	 * 根據城市獲取所有簡易版景點資訊
	 * @param city 城市名稱
	 * @return 簡易版景點集合的JSON數據
	 */
	String findViewpointSimplesByCity(String city);

	/**
	 * 根據鄉鎮獲取所有簡易版景點資訊
	 * @param town 鄉鎮名稱
	 * @return 簡易版景點集合的JSON數據
	 */
	String findViewpointSimplesByTown(String town);

	/**
	 * 根據地區ID獲取所有簡易版景點資訊
	 * @param id 地區ID
	 * @return 簡易版景點集合的JSON數據
	 */
	String findViewpointSimplesByRegionId(String id);

}
