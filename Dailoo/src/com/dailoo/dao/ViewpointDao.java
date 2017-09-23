package com.dailoo.dao;

import java.util.List;

import com.dailoo.domain.Viewpoint;

public interface ViewpointDao extends Dao{

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
	 * 	根據景點主題，找出景點的List集合
	 * @param theme 主題名稱
	 * @return 景點的List集合
	 */
	List<Viewpoint> findViewpointByThemeId(String theme);

	/**
	 * 根據景點ID，刪除景點
	 * @param viewpointId 景點ID
	 */
	void delViewpoint(String viewpointId);

	/**
	 * 查找同一景點名稱下的其他景點
	 * @param name 景點名稱
	 * @return 景點的List集合
	 */
	List<Viewpoint> findViewpointsByName(String name);

	/**
	 * 查找所有景點
	 * @return 景點的List集合
	 */
	List<Viewpoint> findAllViewpoints();

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
	 * @return 簡易版景點集合
	 */
	List<Viewpoint> findViewpointSimplesByCity(String city);

	/**
	 * 根據鄉鎮獲取所有簡易版景點資訊
	 * @param town 鄉鎮名稱
	 * @return 簡易版景點集合
	 */
	List<Viewpoint> findViewpointSimplesByTown(String town);

}
