package com.dailoo.test;

import static org.junit.Assert.*;

import com.dailoo.util.UrlShorterUtils;

public class Test {

	@org.junit.Test
	public void test() {
		System.out.println(UrlShorterUtils.shorten("http://www.weicards.com"));
	}

}
