package com.dailoo.test;

import java.util.List;

import com.dailoo.domain.Viewpoint;
import com.dailoo.domain.ViewpointSimple;
import com.dailoo.factory.BasicFactory;
import com.dailoo.service.ShortUrlService;
import com.dailoo.service.ViewpointService;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class Test {

	Gson gson = new Gson();
	
	@org.junit.Test
	public void test() {
		ShortUrlService service = BasicFactory.getFactory().getService(ShortUrlService.class);
		service.addShortUrl("https://gist.github.com/binjoo/4084192");
	}

	@org.junit.Test
	public void test2() {
		ShortUrlService service = BasicFactory.getFactory().getService(ShortUrlService.class);
		ViewpointService vpService = BasicFactory.getFactory().getService(ViewpointService.class);
		String json = vpService.findAllViewpointSimples();
		List<ViewpointSimple> vps = gson.fromJson(json,  new TypeToken<List<ViewpointSimple>>(){}.getType());
		for(int i = 0; i < vps.size(); i++) {
			Viewpoint vp = vpService.findViewpointById(vps.get(i).getId());
			vpService.updateViewpoint(vp);
		}
	}
	
}
