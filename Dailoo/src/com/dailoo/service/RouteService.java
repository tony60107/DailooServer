package com.dailoo.service;

import java.util.List;

import com.dailoo.domain.Route;
import com.dailoo.domain.RouteViewpoint;

public interface RouteService extends Service{

	/**
	 * 新增路線
	 * @param route 路線Bean
	 * @return 新增完成的路線Bean，為了取得ID進行跳轉
	 */
	Route addRoute(Route route);

	/**
	 * 更新路線中景點順序資訊
	 * @param routeId 路線ID
	 * @param vps 景點ID字串
	 */
	void updateRouteViewpoints(String routeId, String vps);

	/**
	 * 根據路線ID，取得路線景點
	 * @param routeId 路線ID
	 * @return 路線景點的List資料
	 */
	List<RouteViewpoint> getRouteViewpointsByRouteId(String routeId);

	/**
	 * 根據路線ID，取得路線景點
	 * @param routeId 路線ID
	 * @return 路線景點的List資料
	 */
	List<RouteViewpoint> getRouteViewpointsInfoByRouteId(String routeId);

}
