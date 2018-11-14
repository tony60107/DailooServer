package com.dailoo.service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.Arrays;

import org.apache.logging.log4j.LogManager;

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
		
		String[] codes = UrlShorterUtils.toShortUrl(ori);
		System.out.println(ori + "   " + Arrays.toString(codes));
		for(int i = 0; i < codes.length; i++) {
			ShortUrl temp = getByShorten(codes[i]);
			if(temp == null) { //該短網址還不存在
				url.setShorten(codes[i]);
				url.setOri(ori);
				dao.addShortUrl(url);
				return codes[i];
			} else if(temp.getOri().equals(ori)) { //之前已儲存該短網址
				return codes[i];
			}
		}
		
		
		return "ERROR";
	}

	@Override
	public ShortUrl getByShorten(String shorten) {
		return dao.getByShorten(shorten);
	}

}
