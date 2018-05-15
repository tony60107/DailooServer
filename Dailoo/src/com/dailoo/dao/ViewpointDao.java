package com.dailoo.dao;

import java.util.List;

import com.dailoo.domain.Viewpoint;
import com.dailoo.domain.ViewpointSimple;

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
	 * 	根據景點主題Id，找出景點的List集合
	 * @param theme 主題名稱
	 * @return 景點的List集合
	 */
	List<Viewpoint> findViewpointByThemeId(String themeId);

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
	List<Viewpoint> findViewpointsByNameAndSpeaker(String name, String speakerId);

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

	/**
	 * 根據主題ID，找到該主題下已發布的景點，並依照是否優先排序
	 * @param themeId 主題ID
	 * @return 景點List集合
	 */
	List<Viewpoint> findViewpointByThemeIdAndPublish(String themeId);

	/**
	 * 根據景點，尋找週邊景點
	 * @param vp 作為依據的景點
	 * @return 景點的List集合
	 */
	List<Viewpoint> findNeighViewpoints(Viewpoint vp);

	/**
	 * 更新景點是否為付費景點
	 * @param vpId 景點ID
	 * @param stat 付費狀態
	 */
	void updateIsPayById(String vpId, String stat);

	/**
	 * 找出該地址下，不同講者的景點
	 * @param address 地址
	 * @return 景點的List集合
	 */
	List<Viewpoint> findViewpointByAddressNotSpeaker(Viewpoint vp);

	/**
	 * 根據講者ID，獲取其擁有的景點
	 * @param id 講者ID
	 * @return 景點List集合
	 */
	List<Viewpoint> findViewpointsBySpeakerId(String id);

	/**
	 * 根據創建者ID，獲取其擁有的景點
	 * @param id 創建者ID
	 * @return 景點List集合
	 */
	List<Viewpoint> findViewpointsByCreatorId(String id);

	/**
	 * 根據景點名稱，找出名稱相同但副標題不同的景點
	 * @param name 景點名稱
	 * @return 景點List
	 */
	List<Viewpoint> findViewpointsByName(String name);

}
