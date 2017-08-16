package com.dailoo.service;

import com.dailoo.domain.Audio;

public interface AudioService extends Service{

	/**
	 * 新增音檔
	 * @param audio 音檔Bean
	 */
	void addAudio(Audio audio);


}
