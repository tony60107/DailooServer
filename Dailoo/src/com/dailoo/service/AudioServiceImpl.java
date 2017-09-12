package com.dailoo.service;

import java.io.File;
import java.util.UUID;

import org.jaudiotagger.audio.mp3.MP3AudioHeader;
import org.jaudiotagger.audio.mp3.MP3File;

import com.dailoo.dao.AudioDao;
import com.dailoo.domain.Audio;
import com.dailoo.factory.BasicFactory;
import com.google.gson.Gson;

public class AudioServiceImpl implements AudioService {
	
	AudioDao dao = BasicFactory.getFactory().getDao(AudioDao.class);
	Gson gson = new Gson();

	@Override
	public void addAudio(Audio audio) {
		
		try {
			audio.setId(UUID.randomUUID().toString());
			//取得音檔在硬盤中的完整地址
			String fileURL = AudioService.class.getClassLoader().getResource("../../").toURI().getPath();
			MP3File mp3File = new MP3File(fileURL.substring(0, fileURL.length() - 1) + audio.getSrc());
			MP3AudioHeader audioHeader = (MP3AudioHeader) mp3File.getAudioHeader();
			//設定音檔長度
			audio.setLength(audioHeader.getTrackLength());
			
			dao.addAudio(audio);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public void updateSrcByViewpointId(String srcUrl, String viewpointId) {
		try{
			//取得專案路徑
			String fileURL = AudioService.class.getClassLoader().getResource("../../").toURI().getPath();
			
			//取得舊音檔路徑，並刪除舊音檔
			File file = new File(fileURL.substring(0, fileURL.length() - 1) + dao.findAudioByViewpointId(viewpointId).getSrc()); 
			if(file.exists()){	file.delete(); }
			
			//設定新音檔內容
			Audio audio = new Audio();
			audio.setSrc(srcUrl);
			audio.setViewpointId(viewpointId);
			
			//取得音檔在硬盤中的完整地址，並取得音檔長度
			MP3File mp3File = new MP3File(fileURL.substring(0, fileURL.length() - 1) + audio.getSrc());
			MP3AudioHeader audioHeader = (MP3AudioHeader) mp3File.getAudioHeader();
			//設定音檔長度
			audio.setLength(audioHeader.getTrackLength());
			dao.updateSrcByViewpointId(audio);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	@Override
	public String findAudioById(String id) {
		Audio audio = dao.findAudioById(id);
		String json = gson.toJson(audio);
		return json;
	}

}
