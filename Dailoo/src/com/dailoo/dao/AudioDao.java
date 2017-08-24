package com.dailoo.dao;

import com.dailoo.domain.Audio;

public interface AudioDao extends Dao{

	/**
	 * 新增音檔
	 * @param audio 音檔Bean
	 */
	void addAudio(Audio audio);

	/**
	 * 根據景點ID查找音檔
	 * @param viewpointId 景點ID
	 * @return 音檔Bean
	 */
	Audio findAudioByViewpointId(String viewpointId);

}
