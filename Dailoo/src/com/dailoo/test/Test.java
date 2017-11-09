package com.dailoo.test;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.UUID;

import com.dailoo.util.GoogleMapUtils;

import ecpay.payment.integration.AllInOne;
import ecpay.payment.integration.domain.AioCheckOutATM;

public class Test {

	@org.junit.Test
	public void test() {
		/*for(int i = 0; i < 100; i++)
			GoogleMapUtils.getAdressXY("臺東縣鹿野鄉龍田村光榮路163號", 0);*/
		System.out.println(new SimpleDateFormat("yyyyMMdd").format(new Date()) + (int)(Math.random()*900000+100000));
	}

	@org.junit.Test
	public void test2() {
		AllInOne all = new AllInOne("");;
		AioCheckOutATM obj = new AioCheckOutATM();
		
		obj.setMerchantTradeNo(new SimpleDateFormat("yyyyMMdd").format(new Date()) + (int)(Math.random()*900000+100000));
		obj.setMerchantTradeDate(new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(new Date()));
		obj.setTotalAmount("50");
		obj.setTradeDesc("test Description");
		obj.setItemName("TestItem");
		obj.setReturnURL("http://211.23.128.214:5000");
		obj.setNeedExtraPaidInfo("N");
		obj.setHoldTradeAMT("0");
		obj.setExpireDate("6");
		String form = all.aioCheckOut(obj, null);
		System.out.println(form);
		//return form;
	}
}
