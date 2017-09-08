package com.dailoo.service;

import java.io.IOException;
import java.util.UUID;

import org.jaudiotagger.audio.exceptions.CannotReadException;
import org.jaudiotagger.audio.exceptions.InvalidAudioFrameException;
import org.jaudiotagger.audio.exceptions.ReadOnlyFileException;
import org.jaudiotagger.audio.mp3.MP3AudioHeader;
import org.jaudiotagger.audio.mp3.MP3File;
import org.jaudiotagger.tag.TagException;

import com.dailoo.dao.AudioDao;
import com.dailoo.domain.Audio;
import com.dailoo.factory.BasicFactory;

public class AudioServiceImpl implements AudioService {
	
	AudioDao dao = BasicFactory.getFactory().getDao(AudioDao.class);

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

}
