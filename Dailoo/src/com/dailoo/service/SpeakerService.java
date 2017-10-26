package com.dailoo.service;

import com.dailoo.domain.Speaker;

public interface SpeakerService extends Service{

	/**
	 * 新增講者
	 * @param speaker 講者Bean
	 * @throws Exception 用戶名已存在異常
	 */
	void addSpeaker(Speaker speaker) throws Exception;

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
	 * @param imgurls 講者大頭貼Url地址
	 */
	void updateSpeakerInfo(Speaker speaker, String imgurls);

	/**
	 * 找出現在所有的講者
	 * @return 有講者ID與名稱的JSON數據
	 */
	String findAllSpeakers();

	/**
	 * 刪除講者
	 * @param id 講者ID
	 */
	void delSpeakerById(String id);

	/**
	 * 根據ID查找講者
	 * @param id 講者ID
	 * @return	講者Json資料
	 */
	String findSpeakerById(String id);

	/**
	 * 根據擁有者ID，找出其擁有的講者
	 * @param ownerId 擁有者ID 
	 * @return 講者List集合的JSON數據
	 */
	String findSpeakersByOwnerId(String ownerId);


}
