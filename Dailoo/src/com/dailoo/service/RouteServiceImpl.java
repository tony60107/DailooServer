package com.dailoo.service;

import java.util.List;
import java.util.UUID;

import com.dailoo.dao.RouteDao;
import com.dailoo.domain.Route;
import com.dailoo.domain.RouteViewpoint;
import com.dailoo.factory.BasicFactory;

public class RouteServiceImpl implements RouteService{

	RouteDao dao = BasicFactory.getFactory().getDao(RouteDao.class);
	
	@Override
	public Route addRoute(Route route) {

		route.setId(UUID.randomUUID().toString());
		dao.addRoute(route);
		
		return route;
	}

	@Override
	public void updateRouteViewpoints(String routeId, String vpIds) {
		
		//刪除已存在的路線景點
		dao.delRouteViewpoointByRouteId(routeId);
		
		//新增路線景點
		String[] vps = vpIds.split(",");
		RouteViewpoint vp = new RouteViewpoint();
		vp.setRouteId(routeId);
		for(int i = 0; i < vps.length; i++) {
			vp.setViewpointId(vps[i]);
			vp.setSequence(i);
			dao.addRouteViewpoint(vp);
		}
	}

	@Override
	public List<RouteViewpoint> getRouteViewpointsByRouteId(String routeId) {
		return dao.getRouteViewpointsByRouteId(routeId);
	}

}
