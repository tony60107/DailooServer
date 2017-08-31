package com.dailoo.dao;

import java.util.List;

import com.dailoo.domain.Tag;

public interface TagDao extends Dao{

	/**
	 * 新增Tag
	 * @param tag Tag的Bean
	 */
	void addTag(Tag tag);

	/**
	 * 根據音檔ID取得Tag
	 * @param audioId 音檔ID
	 * @return 由Tag Bean集合而成的List
	 */
	List<Tag> findTagsByAudioId(String audioId);

	/**
	 * 根據標記ID，刪除標記
	 * @param id
	 */
	void delTag(String id);

}
