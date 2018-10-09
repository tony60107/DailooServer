package com.dailoo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.dailoo.dao.AudioDao;
import com.dailoo.dao.RouteDao;
import com.dailoo.dao.ViewpointDao;
import com.dailoo.domain.Audio;
import com.dailoo.domain.Route;
import com.dailoo.domain.RouteViewpoint;
import com.dailoo.domain.Viewpoint;
import com.dailoo.factory.BasicFactory;

public class RouteServiceImpl implements RouteService{

	RouteDao dao = BasicFactory.getFactory().getDao(RouteDao.class);
	ViewpointDao viewpointDao = BasicFactory.getFactory().getDao(ViewpointDao.class);
	AudioDao audioDao = BasicFactory.getFactory().getDao(AudioDao.class);
	
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

	@Override
	public List<RouteViewpoint> getRouteViewpointsInfoByRouteId(String routeId) {
		List<RouteViewpoint> rvps = dao.getRouteViewpointsByRouteId(routeId);
		List<RouteViewpoint> result = new ArrayList<RouteViewpoint>();
		for(int i = 0; i < rvps.size(); i++) {
			RouteViewpoint rvp = rvps.get(i);
			Viewpoint vp = viewpointDao.findViewpointById(rvp.getViewpointId());
			rvp.setName(vp.getName());
			rvp.setSubtitle(vp.getSubtitle());
			rvp.setIntro(vp.getIntro());
			rvp.setBehalfPhotoUrl(vp.getBehalfPhotoUrl());
			rvp.setLat(vp.getLatitude());
			rvp.setLng(vp.getLongitude());
			Audio audio = audioDao.findAudioByViewpointId(vp.getId());
			rvp.setAudioSrc(audio.getSrc());
			rvp.setAudioLength(audio.getLength());
			result.add(rvp);
		}
		
		return result;
	}

	@Override
	public void delRouteById(String id) {
		
		//刪除已存在的路線景點
		dao.delRouteViewpoointByRouteId(id);
		
		//刪除路線紀錄
		dao.delRouteById(id);
		
	}

	@Override
	public List<Route> getRoutes() {
		return dao.getRoutes();
	}

}
