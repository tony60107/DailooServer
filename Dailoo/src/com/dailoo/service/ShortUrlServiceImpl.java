package com.dailoo.service;

import com.dailoo.dao.ShortUrlDao;
import com.dailoo.dao.ThemeDao;
import com.dailoo.dao.ViewpointDao;
import com.dailoo.domain.ShortUrl;
import com.dailoo.factory.BasicFactory;
import com.dailoo.util.UrlShorterUtils;

public class ShortUrlServiceImpl implements ShortUrlService{
	
	ShortUrlDao dao = BasicFactory.getFactory().getDao(ShortUrlDao.class);

	@Override
	public String addShortUrl(String ori) {
		ShortUrl url = new ShortUrl();
		url.setShorten(UrlShorterUtils.toShortUrl(ori));
		url.setOri(ori);
		ShortUrl test = getByShorten(url.getShorten());
		//如果該短網址還不存在
		if(getByShorten(url.getShorten()) == null){
			//新增短網址
			dao.addShortUrl(url);
		} 
		return url.getShorten();
	}

	@Override
	public ShortUrl getByShorten(String shorten) {
		return dao.getByShorten(shorten);
	}

}
