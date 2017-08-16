package com.dailoo.service;

import java.util.UUID;

import com.dailoo.dao.ViewpointDao;
import com.dailoo.domain.Viewpoint;
import com.dailoo.factory.BasicFactory;
import com.dailoo.util.GoogleMapUtils;

public class ViewpointServiceImpl implements ViewpointService{
	
	private ViewpointDao dao = BasicFactory.getFactory().getDao(ViewpointDao.class);

	@Override
	public void addViewpoint(Viewpoint viewpoint) {
		viewpoint.setId(UUID.randomUUID().toString());
		
		//根據地址取得經緯度
		double [] address = GoogleMapUtils.getAdressXY(viewpoint.getAddress());
		viewpoint.setLatitude(address[0]);
		viewpoint.setLongitude(address[1]);
		
		dao.addViewpoint(viewpoint);
	}

	@Override
	public Viewpoint findViewpointByNameAndSt(String name, String subtitle) {
		return dao.findViewpointByNameAndSt(name, subtitle);
	}

	@Override
	public Viewpoint findViewpointById(String id) {
		return dao.findViewpointById(id);
	}

	@Override
	public void updateViewpoint(Viewpoint viewpoint) {
		
		//更新景點經緯度
		double [] address = GoogleMapUtils.getAdressXY(viewpoint.getAddress());
		viewpoint.setLatitude(address[0]);
		viewpoint.setLongitude(address[1]);
		
		dao.updateViewpoint(viewpoint);
		
	}

}
