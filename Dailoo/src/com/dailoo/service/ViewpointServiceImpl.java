package com.dailoo.service;

import java.util.UUID;

import com.dailoo.dao.SpeakerDao;
import com.dailoo.dao.ViewpointDao;
import com.dailoo.domain.Speaker;
import com.dailoo.domain.Viewpoint;
import com.dailoo.factory.BasicFactory;
import com.dailoo.util.GoogleMapUtils;
import com.google.gson.Gson;

public class ViewpointServiceImpl implements ViewpointService{
	
	private ViewpointDao dao = BasicFactory.getFactory().getDao(ViewpointDao.class);
	private SpeakerDao speakerDao = BasicFactory.getFactory().getDao(SpeakerDao.class);
	private Gson gson = new Gson();

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

	@Override
	public String findViewpointByIdToJson(String viewpointId) {
		
		Viewpoint vp = dao.findViewpointById(viewpointId);
		Speaker speaker = speakerDao.findSpeakerById(vp.getSpeakerId());
		
		String vpJson = gson.toJson(vp);
		String speakerJson = gson.toJson(speaker);
		
		//完整的Json數據
		String result = vpJson.substring(0, vpJson.length()-1) + ", \"speaker\":" + speakerJson +"}";
		
		return result;
	}

}
