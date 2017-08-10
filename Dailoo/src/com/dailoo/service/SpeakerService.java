package com.dailoo.service;

import com.dailoo.domain.Speaker;

public interface SpeakerService extends Service{

	/**
	 * 新增講者
	 * @param speaker 講者Bean
	 */
	void addSpeaker(Speaker speaker);

	/**
	 * 取得講者Bean
	 * @param username 帳號
	 * @param password 密碼
	 * @return 講者Bean
	 */
	Speaker getSpeakerByUnAndPsw(String username, String password);

	/**
	 * 更新講者資訊
	 * @param speaker 講者Bean
	 */
	void updateSpeakerInfo(Speaker speaker);

}
