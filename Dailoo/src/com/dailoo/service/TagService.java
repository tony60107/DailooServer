package com.dailoo.service;

import java.util.Map;

import com.dailoo.domain.Tag;

public interface TagService extends Service{

	/**
	 * 新增Tag標記資料
	 * @param paramMap 含有音檔ID,照片URLs,對應時間的Map集合
	 */
	void addTag(Map<String, String> paramMap);

	/**
	 * 根據音檔ID取得所有標記
	 * @param audioId 音檔ID
	 * @return 標記集合的List數據
	 */
	String findTagsByAudioId(String audioId);

	/**
	 * 根據標記ID刪除標記
	 * @param id 標記ID
	 */
	void delTagById(String id);

	/**
	 * 根據ID更新Tag
	 * @param tag 標記Bean
	 */
	void updateTagById(Tag tag);

}
