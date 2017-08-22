package com.dailoo.test;

import static org.junit.Assert.*;

import com.dailoo.util.UrlShortenerUtils;

public class Test {

	@org.junit.Test
	public void test() {
		System.out.println(UrlShortenerUtils.shorten("http://www.weicards.com"));
	}

}
