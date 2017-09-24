package com.dailoo.service;

import java.util.List;
import java.util.UUID;

import com.dailoo.dao.RegionDao;
import com.dailoo.domain.Region;
import com.dailoo.factory.BasicFactory;
import com.google.gson.Gson;

public class RegionServiceImpl implements RegionService{

	RegionDao dao = BasicFactory.getFactory().getDao(RegionDao.class);
	Gson gson = new Gson();
	
	@Override
	public void addRegion(Region region){
		
		Region temp = dao.findRegionByName(region.getName());
		if(temp != null){	throw new RuntimeException("該地區已存在");}
		region.setId(UUID.randomUUID().toString());
		
		dao.addRegion(region);
	}

	@Override
	public String findAllRegions() {
		List<Region> regions = dao.findAllRegions();
		String json = gson.toJson(regions);
		return json;
	}

	@Override
	public void delRegionById(String id) {
		dao.delRegionById(id);
	}

	@Override
	public String findRegionById(String id) {
		Region region = dao.findRegionById(id);
		return gson.toJson(region);
	}

	@Override
	public void updateRegionById(Region region) {
		dao.updateRegionById(region);
	}

}
