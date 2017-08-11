package com.dailoo.dao;

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

	
}
