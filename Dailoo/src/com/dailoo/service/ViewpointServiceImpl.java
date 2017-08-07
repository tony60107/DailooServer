package com.dailoo.service;

import java.util.UUID;

import com.dailoo.dao.ViewpointDao;
import com.dailoo.domain.Viewpoint;
import com.dailoo.factory.BasicFactory;

public class ViewpointServiceImpl implements ViewpointService{
	
	private ViewpointDao dao = BasicFactory.getFactory().getDao(ViewpointDao.class);

	@Override
	public void addViewpoint(Viewpoint viewpoint) {
		viewpoint.setId(UUID.randomUUID().toString());
		dao.addViewpoint(viewpoint);
	}

}
