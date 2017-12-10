package com.dailoo.service;

import java.io.File;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import com.dailoo.dao.AdDao;
import com.dailoo.domain.Ad;
import com.dailoo.factory.BasicFactory;
import com.google.gson.Gson;

public class AdServiceImpl implements AdService{

	AdDao dao = BasicFactory.getFactory().getDao(AdDao.class);
	Gson gson = new Gson();
	
	@Override
	public void addAd(Ad ad) {
		ad.setId(UUID.randomUUID().toString());
		ad.setCount(0);
		dao.addAd(ad);
	}

	@Override
	public String findAd() {
		Ad ad = dao.findAd();
		if(ad != null){
			//廣告顯示次數+1
			ad.setCount(ad.getCount() + 1);
			dao.updateAdInfo(ad);
		}
		return gson.toJson(ad);
	}

	@Override
	public String findAllAd() {
		List<Ad> ads = dao.findAllAd();
		return gson.toJson(ads);
	}

	@Override
	public String findAdById(String id) {
		Ad ad = dao.findAdById(id);
		return gson.toJson(ad);
	}

	@Override
	public void updateAdInfo(Ad ad, String imgurl) {
		try{
			//如果要更新廣告圖片
			if(imgurl != null){
				String fileURL = AdService.class.getClassLoader().getResource("../../").toURI().getPath();
				//舊照片檔案
				File file = new File(fileURL.substring(0, fileURL.length() - 1) + ad.getImgurl()); 
				if(file.exists()){
					file.delete(); 
				}
				ad.setImgurl(imgurl);
			}
			dao.updateAdInfo(ad);
		}catch(Exception e){
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void delAdById(String id) {
		try {
			//根據ID找出廣告
			Ad ad = dao.findAdById(id);
			//刪除廣告圖片
			String fileURL = AdService.class.getClassLoader().getResource("../../").toURI().getPath();
			File file = new File(fileURL.substring(0, fileURL.length() - 1) + ad.getImgurl()); 
			if(file.exists()){file.delete(); }
			//刪除廣告資料
			dao.delAdById(id);
			
		} catch(Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

}
