package com.dailoo.test;

import java.util.UUID;

import com.dailoo.util.GoogleMapUtils;

import ecpay.payment.integration.AllInOne;
import ecpay.payment.integration.domain.AioCheckOutALL;
import ecpay.payment.integration.domain.AioCheckOutATM;

public class Test {

	@org.junit.Test
	public void test() {
		for(int i = 0; i < 100; i++)
			GoogleMapUtils.getAdressXY("臺東縣鹿野鄉龍田村光榮路163號", 0);
	}

	@org.junit.Test
	public void test2() {
		AllInOne all = new AllInOne("");;
		AioCheckOutALL obj = new AioCheckOutALL();
		obj.setMerchantTradeNo("tempanDAFDAGAEy0004");
		obj.setMerchantTradeDate("2017/01/01 08:05:23");
		obj.setTotalAmount("50");
		obj.setTradeDesc("test Description");
		obj.setItemName("TestItem");
		obj.setReturnURL("http://211.23.128.214:5000");
		obj.setNeedExtraPaidInfo("N");
		obj.setHoldTradeAMT("0");
		String form = all.aioCheckOut(obj, null);
		System.out.println(form);
		//return form;
	}
}
