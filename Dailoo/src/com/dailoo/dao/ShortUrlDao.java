package com.dailoo.dao;

import com.dailoo.domain.ShortUrl;

public interface ShortUrlDao extends Dao{

	/**
	 * 新增一個短網址Bean
	 * @param url 短網址Bean
	 */
	void addShortUrl(ShortUrl url);

	/**
	 * 取得原網址
	 * @param shorten 短網址Code
	 * @return 原網址
	 */
	ShortUrl getByShorten(String shorten);

}
