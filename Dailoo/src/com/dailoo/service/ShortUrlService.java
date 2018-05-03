package com.dailoo.service;

import com.dailoo.domain.ShortUrl;

public interface ShortUrlService extends Service{
	
	/**
	 * 新增短網址
	 * @param url 原網址
	 * @return 
	 */
	String addShortUrl(String ori);
	
	/**
	 * 取得原網址
	 * @param shorten 短網址Code
	 * @return 原網址
	 */
	ShortUrl getByShorten(String shorten);
}
