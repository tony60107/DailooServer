package com.dailoo.dao;

import com.dailoo.domain.Audio;

public interface AudioDao extends Dao{

	/**
	 * 新增音檔
	 * @param audio 音檔Bean
	 */
	void addAudio(Audio audio);

}
