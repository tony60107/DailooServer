package com.dailoo.service;

import java.io.File;
import java.util.UUID;

import org.jaudiotagger.audio.mp3.MP3AudioHeader;
import org.jaudiotagger.audio.mp3.MP3File;

import com.dailoo.dao.AudioDao;
import com.dailoo.dao.ViewpointDao;
import com.dailoo.domain.Audio;
import com.dailoo.domain.Viewpoint;
import com.dailoo.factory.BasicFactory;
import com.google.gson.Gson;

import it.sauronsoftware.jave.Encoder;
import it.sauronsoftware.jave.MultimediaInfo;

public class AudioServiceImpl implements AudioService {
	
	AudioDao dao = BasicFactory.getFactory().getDao(AudioDao.class);
	ViewpointDao viewpointDao = BasicFactory.getFactory().getDao(ViewpointDao.class);
	Gson gson = new Gson();

	@Override
	public void addAudio(Audio audio) {
		
		try {
			audio.setId(UUID.randomUUID().toString());
			//取得音檔在硬盤中的完整地址
			String fileURL = AudioService.class.getClassLoader().getResource("../../").toURI().getPath();
			File audioFile = new File(fileURL.substring(0, fileURL.length() - 1) + audio.getSrc());
	        Encoder encoder = new Encoder();
	        MultimediaInfo m = encoder.getInfo(audioFile);
			//設定音檔長度
			audio.setLength((int) (m.getDuration() / 1000));
			
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
			File audioFile = new File(fileURL.substring(0, fileURL.length() - 1) + audio.getSrc());
	        Encoder encoder = new Encoder();
	        MultimediaInfo m = encoder.getInfo(audioFile);
			//設定音檔長度
			audio.setLength((int) (m.getDuration() / 1000));
			
			
			dao.updateSrcByViewpointId(audio);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	@Override
	public String findAudioById(String id) {
		Audio audio = dao.findAudioById(id);
		Viewpoint vp = viewpointDao.findViewpointById(audio.getViewpointId());
		audio.setSubtitle(vp.getSubtitle());
		String json = gson.toJson(audio);
		return json;
	}

}
