package com.dailoo.dao;

import com.dailoo.domain.Tag;

public interface TagDao extends Dao{

	/**
	 * 新增Tag
	 * @param tag Tag的Bean
	 */
	void addTag(Tag tag);

}
