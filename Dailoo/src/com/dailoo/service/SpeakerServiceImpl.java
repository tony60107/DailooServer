package com.dailoo.service;

import java.io.File;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.management.RuntimeErrorException;

import com.dailoo.dao.SpeakerDao;
import com.dailoo.domain.Speaker;
import com.dailoo.factory.BasicFactory;
import com.dailoo.util.MD5Utils;
import com.google.gson.Gson;

public class SpeakerServiceImpl implements SpeakerService{
	
	SpeakerDao dao = BasicFactory.getFactory().getDao(SpeakerDao.class);
	Gson gson = new Gson();

	@Override
	public void addSpeaker(Speaker speaker) throws Exception {
		
		if(dao.findSpeakerByUsername(speaker.getUsername()) != null) {
			throw new RuntimeException("該帳號已存在");
		}
		
		speaker.setId(UUID.randomUUID().toString());
		speaker.setPassword(MD5Utils.md5(speaker.getPassword()));
		speaker.setRole("user");
		dao.addSpeaker(speaker);
	}

	@Override
	public Speaker getSpeakerByUnAndPsw(String username, String password) {
		Speaker speaker =  dao.getSpeakerByUnAndPsw(username, password);
		return speaker;
	}

	@Override
	public void updateSpeakerInfo(Speaker speaker, String photoUrl) {
		try{
			//如果要更換大頭照,刪除舊照片
			if(photoUrl != null && !"".equals(photoUrl)){ 
				String fileURL = SpeakerService.class.getClassLoader().getResource("../../").toURI().getPath();
				//舊照片檔案
				File file = new File(fileURL.substring(0, fileURL.length() - 1) + speaker.getPhotoUrl()); 
				if(file.exists()){
					file.delete(); 
				}
				//Speaker設置新的大頭照地址
				speaker.setPhotoUrl(photoUrl);
			}
			dao.updateSpeakerInfo(speaker);
		}catch(Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public String findAllSpeakers() {
		List<Speaker> speakers = dao.finAllSpeakers();
		//String json = "[";
		for(int i = 0; i < speakers.size(); i++){
			Speaker sp = speakers.get(i);
			sp.setPassword("");
			if(sp.getOwnerId() != null) sp.setOwnerName(dao.findSpeakerById(sp.getOwnerId()).getUsername());
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

	@Override
	public String findSpeakerById(String id) {
		Speaker speaker = dao.findSpeakerById(id);
		return gson.toJson(speaker);
	}

	@Override
	public String findSpeakersByOwnerId(String ownerId) {
		List<Speaker> list = dao.findSpeakersByOwnerId(ownerId);
		Speaker login = dao.findSpeakerById(ownerId);
		list.add(0, login);
		
		for(int i = 0; i < list.size(); i++){
			Speaker sp = list.get(i);
			sp.setPassword("");
			if(sp.getOwnerId() != null) sp.setOwnerName(dao.findSpeakerById(sp.getOwnerId()).getUsername());
		}
		
		return gson.toJson(list);
	}

	@Override
	public void resetUSNandPWD(Speaker speaker, String newPwd) {
		Speaker temp = dao.findSpeakerById(speaker.getId()); //用於檢測原密碼是否正確
		//如果原密碼輸入錯誤
		System.out.println(temp.getPassword() + " : " + MD5Utils.md5(speaker.getPassword()));
		if(!temp.getPassword().equals(MD5Utils.md5(speaker.getPassword()))){
			throw new RuntimeException("原密碼不正確");
		} else { //正確則更新密碼
			speaker.setPassword(MD5Utils.md5(newPwd));
			dao.resetUSNandPWD(speaker);
		}
	}

	@Override
	public String findSpeakerByUSN(String username) {
		Speaker sp = dao.findSpeakerByUsername(username);
		if(sp == null){
			return "{}";
		}else {
			return gson.toJson(sp);
		}
	}

}
