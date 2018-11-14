package com.dailoo.test;

import java.util.Arrays;
import java.util.List;

import com.dailoo.dao.ShortUrlDao;
import com.dailoo.domain.Viewpoint;
import com.dailoo.domain.ViewpointSimple;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.ShortUrlService;
import com.dailoo.service.ViewpointService;
import com.dailoo.util.UrlShorterUtils;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class Test {

	Gson gson = new Gson();
	ShortUrlDao dao = BasicFactory.getFactory().getDao(ShortUrlDao.class);
	private ShortUrlService shortUrlService = BasicFactory.getFactory().getService(ShortUrlService.class);
	
	@org.junit.Test
	public void test() {
		
		Viewpoint vp = new Viewpoint();
		vp.setName("惠豐蜂園");
		vp.setSubtitle("簡介");
		
//		for (int i = 0; i < 1; i++) {
			//建立短網址
			String domain = BasicFactory.getFactory().getPropData("Domain");
			String url = domain + "view/" + vp.getName() + "_" + vp.getSubtitle() 
								+ "?utm_source=PrintAds&utm_campaign="+ vp.getName() + "_" 
								+ vp.getSubtitle();
			String shortUrl = "dailoo.com/" + shortUrlService.addShortUrl(url);
			System.out.println(shortUrl);
			
//		}
		
	}

	/*@org.junit.Test
	public void test2() {
		ShortUrlService service = BasicFactory.getFactory().getService(ShortUrlService.class);
		ViewpointService vpService = BasicFactory.getFactory().getService(ViewpointService.class);
		String json = vpService.findAllViewpointSimples();
		List<ViewpointSimple> vps = gson.fromJson(json,  new TypeToken<List<ViewpointSimple>>(){}.getType());
		for(int i = 0; i < vps.size(); i++) {
			Viewpoint vp = vpService.findViewpointById(vps.get(i).getId());
			vpService.updateViewpoint(vp);
		}
	}*/
	
}
