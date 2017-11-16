package com.dailoo.test;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import ecpay.payment.integration.AllInOne;
import ecpay.payment.integration.domain.AioCheckOutATM;
import it.sauronsoftware.jave.Encoder;
import it.sauronsoftware.jave.MultimediaInfo;

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
	@org.junit.Test
	public void test3() {
		
		try {
			File source = new File("D:/1.mp3");
	        Encoder encoder = new Encoder();
	        try {
	            MultimediaInfo m = encoder.getInfo(source);
	            long ls = m.getDuration();
	            System.out.println("此视频时长为:" + ls / 60000 + "分" + ls / 1000 + "秒！");
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
	}
	
}
