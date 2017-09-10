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


}
