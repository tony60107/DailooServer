package com.dailoo.dao;

import java.util.List;

import com.dailoo.domain.Route;
import com.dailoo.domain.RouteViewpoint;

public interface RouteDao extends Dao{

	/**
	 * 新增路線
	 * @param route 路線Bean
	 */
	void addRoute(Route route);

	/**
	 * 根據路線ID，刪除路線景點
	 * @param routeId 路線ID
	 */
	void delRouteViewpoointByRouteId(String routeId);

	/**
	 * 新增路線景點
	 * @param vp 路線景點Bean
	 */
	void addRouteViewpoint(RouteViewpoint vp);

	/**
	 * 根據路線ID，取得路線景點
	 * @param routeId 路線ID
	 * @return 路線景點的List資料
	 */
	List<RouteViewpoint> getRouteViewpointsByRouteId(String routeId);

	/**
	 * 根據路線ID，刪除路線紀錄
	 * @param id 路線ID
	 */
	void delRouteById(String id);

	/**
	 * 取得所有的路線
	 * @return 路線Bean的List集合
	 */
	List<Route> getRoutes();

}
