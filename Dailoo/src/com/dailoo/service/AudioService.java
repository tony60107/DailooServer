package com.dailoo.service;

import com.dailoo.domain.Audio;

public interface AudioService extends Service{

	/**
	 * 新增音檔
	 * @param audio 音檔Bean
	 */
	void addAudio(Audio audio);

	/**
	 * @param srcUrl 音檔在硬盤中的位置
	 * @param viewpointId 景點ID
	 */
	void updateSrcByViewpointId(String srcUrl, String viewpointId);

	/**
	 * 根據音檔ID找到音檔
	 * @param id 音檔ID
	 * @return 音檔Bean的JSON數據
	 */
	String findAudioById(String id);


}
