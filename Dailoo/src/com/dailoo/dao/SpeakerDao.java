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

	
}
