package com.dailoo.test;

import com.dailoo.util.GoogleMapUtils;

public class Test {

	@org.junit.Test
	public void test() {
		for(int i = 0; i < 100; i++)
			GoogleMapUtils.getAdressXY("臺東縣鹿野鄉龍田村光榮路163號", 0);
	}

}
