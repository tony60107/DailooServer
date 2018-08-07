package com.dailoo.service;

import java.io.File;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.dailoo.dao.CouponDao;
import com.dailoo.domain.Coupon;
import com.dailoo.domain.CouponImg;
import com.dailoo.domain.CouponTheme;
import com.dailoo.factory.BasicFactory;
import com.dailoo.util.GoogleMapUtils;
import com.google.gson.Gson;

public class CouponServiceImpl implements CouponService{
	
	CouponDao dao = BasicFactory.getFactory().getDao(CouponDao.class);
	Gson gson = new Gson();

	@Override
	public void addCoupon(Coupon coupon) {
		coupon.setId(UUID.randomUUID().toString());
		coupon.setStatus(Coupon.CHECKING);
		coupon.setCirculation(0);
		coupon.setUsedCount(0);
		
		double [] address = GoogleMapUtils.getAdressXY(coupon.getAddress(), 0);
		coupon.setLat(address[0]);
		coupon.setLng(address[1]);
		
		dao.addCoupon(coupon);
	}

	@Override
	public void addCouponTheme(CouponTheme theme) {
		theme.setId(UUID.randomUUID().toString());
		dao.addCouponTheme(theme);
	}

	@Override
	public String getCouponThemes() {
		List<CouponTheme> themes =  dao.getCouponThemes();
		return gson.toJson(themes);
	}

	@Override
	public String getCouponByThemeId(String themeId) {
		List<Coupon> coupons = dao.getCouponsByThemeId(themeId);
		return gson.toJson(coupons);
	}

	@Override
	public void addCouponImg(Map<String, String> paramMap) {
		String [] imgurls = paramMap.get("imgurls").split(",");
		for(int i = 0; i < imgurls.length;i++){
			CouponImg img = new CouponImg();
			img.setId(UUID.randomUUID().toString());
			img.setSrc(imgurls[i]);
			img.setCouponId(paramMap.get("couponId"));
			dao.addCouponImg(img);
		}
	}

	@Override
	public String getImgsByCouponId(String couponId) {
		return gson.toJson(dao.getImgsByCouponId(couponId));
	}

	@Override
	public void delCouponImgById(String couponImgId) {
		try {
			//找到原來的圖片Bean，刪除對應的圖片
			CouponImg img = dao.getCouponImgById(couponImgId);
			String fileURL = CouponService.class.getClassLoader().getResource("../../").toURI().getPath();
			File file = new File(fileURL.substring(0, fileURL.length() - 1) + img.getSrc()); 
			if(file.exists()){	file.delete(); }
			
			//刪除資料庫中的紀錄
			dao.delCouponImgById(couponImgId);
		} catch (URISyntaxException e) {
			e.printStackTrace();
		} 
	}

	@Override
	public String getCouponById(String id) {
		Coupon cp = dao.getCouponById(id);
		//設定優惠券對應的圖片
		List<CouponImg> imgs = dao.getImgsByCouponId(id);
		cp.setImgs(imgs);
		
		return gson.toJson(cp);
	}

}
