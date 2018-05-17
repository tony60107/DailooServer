package com.dailoo.service;

import java.util.List;
import java.util.UUID;

import com.dailoo.dao.SNDao;
import com.dailoo.dao.SpeakerDao;
import com.dailoo.dao.ViewpointDao;
import com.dailoo.domain.SerialNumber;
import com.dailoo.domain.Speaker;
import com.dailoo.domain.Viewpoint;
import com.dailoo.factory.BasicFactory;
import com.google.gson.Gson;

public class SNServiceImpl implements SNService{

	SNDao dao = BasicFactory.getFactory().getDao(SNDao.class);
	SpeakerDao speakerDao = BasicFactory.getFactory().getDao(SpeakerDao.class);
	ViewpointDao viewpointDao = BasicFactory.getFactory().getDao(ViewpointDao.class);
	Gson gson = new Gson();
	
	@Override
	public void addSN(SerialNumber serialNumber, int createNum) {
		
		for(int i = 0; i < createNum; i++){
			SerialNumber sn = serialNumber;
			sn.setCode(UUID.randomUUID().toString());
			sn.setUsedCount(0);
			//sn.setUseLength(serialNumber.getUseLength() * 24);
			dao.addSN(sn);
		}
		
	}

	@Override
	public String findAllSN() {
		List<SerialNumber> sns = dao.findAllSN();
		for(int i = 0; i < sns.size(); i++){
			Speaker sp = speakerDao.findSpeakerById(sns.get(i).getOwnerId());
			Viewpoint vp = null;
			if(sns.get(i).getViewpointId() != null){
				 vp = viewpointDao.findViewpointById(sns.get(i).getViewpointId());
				 if(vp != null) sns.get(i).setViewpointName(vp.getName() + "_" + vp.getSubtitle());
			}
			sns.get(i).setOwnerName(sp.getName());
		}
		return gson.toJson(sns);
	}

	@Override
	public SerialNumber findSNByCode(String code) {
		
		SerialNumber sn = dao.findSNByCode(code);
		if(sn != null){
			Speaker sp = speakerDao.findSpeakerById(sn.getOwnerId());
			Viewpoint vp = null;
			if(sn.getViewpointId() != null){
				 vp = viewpointDao.findViewpointById(sn.getViewpointId());
				 if(vp != null) sn.setViewpointName(vp.getName());
			}
			sn.setOwnerName(sp.getName());
		}
		
		
		return sn;
	}

	@Override
	public void updateSN(SerialNumber sn) {
		dao.updateSN(sn);
	}

	@Override
	public void delSN(String code) {
		dao.delSN(code);
	}

	@Override
	public String findSNByOwnerId(String ownerId) {
		List<SerialNumber> sns = dao.findSNByOwnerId(ownerId);
		
		//找出該講者 旗下的講者
		List<Speaker> list = speakerDao.findSpeakersByOwnerId(ownerId);
		//查詢旗下講者擁有的序號
		for(int i = 0; i < list.size(); i++) {
			List<SerialNumber> temps = dao.findSNByOwnerId(list.get(i).getId());
			for(SerialNumber sn : temps){
				sns.add(sn);
			}
		}
		
		//設定序號的擁有者姓名及景點名稱
		for(int i = 0; i < sns.size(); i++){
			Speaker sp = speakerDao.findSpeakerById(sns.get(i).getOwnerId());
			Viewpoint vp = null;
			if(sns.get(i).getViewpointId() != null){
				 vp = viewpointDao.findViewpointById(sns.get(i).getViewpointId());
				 if(vp != null)sns.get(i).setViewpointName(vp.getName() + "_" + vp.getSubtitle());
			}
			sns.get(i).setOwnerName(sp.getName());
		}
		return gson.toJson(sns);
	}


}




