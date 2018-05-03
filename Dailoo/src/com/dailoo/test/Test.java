package com.dailoo.test;

import com.dailoo.factory.BasicFactory;
import com.dailoo.service.ShortUrlService;

public class Test {

	@org.junit.Test
	public void test() {
		ShortUrlService service = BasicFactory.getFactory().getService(ShortUrlService.class);
		service.addShortUrl("https://gist.github.com/binjoo/4084192");
	}


	
}
