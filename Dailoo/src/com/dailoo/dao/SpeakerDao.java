package com.dailoo.dao;

import java.util.List;

import com.dailoo.domain.Speaker;

public interface SpeakerDao extends Dao{

	/**
	 * 新增講者
	 * @param speaker 講者Bean
	 */
	void addSpeaker(Speaker speaker);

	/**
	 * 根據帳號密碼取得講者Bean
	 * @param username 帳號
	 * @param password 密碼
	 * @return
	 */
	Speaker getSpeakerByUnAndPsw(String username, String password);

	/**
	 * 更新講者資訊 
	 * @param speaker 講者Bean
	 */
	void updateSpeakerInfo(Speaker speaker);

	/**
	 * 根據大頭貼地址找出講者
	 * @param photoUrl	在伺服器中的圖片地址
	 */
	Speaker findSpeakerByPhotoUrl(String photoUrl);

	/**
	 * 根據講者ID找出講者
	 * @param speakerId 講者ID
	 * @return 講者Bean
	 */
	Speaker findSpeakerById(String speakerId);

	/**
	 * 找出現在所有的講者
	 * @return 講者的List集合
	 */
	List<Speaker> finAllSpeakers();

	
}
