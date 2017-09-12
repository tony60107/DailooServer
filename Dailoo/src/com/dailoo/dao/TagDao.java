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
	void delTagById(String id);

	/**
	 * 根據標記ID找到標記
	 * @param id 標記ID
	 * @return 標記Bean
	 */
	Tag findTagById(String id);

	/**
	 * 根據標記ID更新標記
	 * @param tag 標記Bean
	 */
	void updateTagById(Tag tag);

}
