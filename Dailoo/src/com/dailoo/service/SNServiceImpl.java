package com.dailoo.service;

import java.util.List;
import java.util.UUID;

import com.dailoo.dao.SNDao;
import com.dailoo.domain.SerialNumber;
import com.dailoo.factory.BasicFactory;
import com.google.gson.Gson;

public class SNServiceImpl implements SNService{

	SNDao dao = BasicFactory.getFactory().getDao(SNDao.class);
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
		return gson.toJson(sns);
	}

	@Override
	public SerialNumber findSNByCode(String code) {
		return dao.findSNByCode(code);
	}

	@Override
	public void updateSN(SerialNumber sn) {
		dao.updateSN(sn);
	}

}




