package com.dailoo.service;

import java.io.File;
import java.util.List;
import java.util.UUID;

import com.dailoo.dao.SpeakerDao;
import com.dailoo.domain.Speaker;
import com.dailoo.factory.BasicFactory;
import com.dailoo.util.MD5Utils;
import com.google.gson.Gson;

public class SpeakerServiceImpl implements SpeakerService{
	
	SpeakerDao dao = BasicFactory.getFactory().getDao(SpeakerDao.class);
	Gson gson = new Gson();

	@Override
	public void addSpeaker(Speaker speaker) {
		speaker.setId(UUID.randomUUID().toString());
		speaker.setPassword(MD5Utils.md5(speaker.getPassword()));
		speaker.setRole("user");
		dao.addSpeaker(speaker);
	}

	@Override
	public Speaker getSpeakerByUnAndPsw(String username, String password) {
		return dao.getSpeakerByUnAndPsw(username, password);
	}

	@Override
	public void updateSpeakerInfo(Speaker speaker, String photoUrl) {
		
		//如果要更換大頭照,刪除舊照片
		if(photoUrl != null && !"".equals(photoUrl)){ 
			String fileURL = SpeakerService.class.getClassLoader().getResource("../../").getPath(); 
			//舊照片檔案
			File file = new File(fileURL.substring(0, fileURL.length() - 1) + speaker.getPhotoUrl()); 
			if(file.exists()){
				file.delete(); 
			}
			speaker.setPhotoUrl(photoUrl);
		}
		
		//Speaker設置新的大頭照地址
		dao.updateSpeakerInfo(speaker);
	}

	@Override
	public String findAllSpeakers() {
		List<Speaker> speakers = dao.finAllSpeakers();
		//String json = "[";
		for(int i = 0; i < speakers.size(); i++){
			Speaker sp = speakers.get(i);
			sp.setPassword("");
			//String speakerJson = "{\"id\":\"" + sp.getId() + "\", \"name\":\"" + sp.getName() + "\"},";
			//json = json + speakerJson;
		}
		//json = json.substring(0, json.length()-1) + "]";
		
		return gson.toJson(speakers);
	}

	@Override
	public void delSpeakerById(String id) {
		dao.delSpeakerById(id);
	}

}
