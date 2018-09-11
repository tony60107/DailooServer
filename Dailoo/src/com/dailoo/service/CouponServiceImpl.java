package com.dailoo.service;

import java.io.File;
import java.net.URISyntaxException;
import java.sql.Timestamp;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import com.dailoo.dao.CouponDao;
import com.dailoo.domain.Coupon;
import com.dailoo.domain.CouponImg;
import com.dailoo.domain.CouponOrder;
import com.dailoo.domain.CouponTheme;
import com.dailoo.domain.User;
import com.dailoo.factory.BasicFactory;
import com.dailoo.util.GoogleMapUtils;
import com.google.gson.Gson;

public class CouponServiceImpl implements CouponService{
	
	CouponDao dao = BasicFactory.getFactory().getDao(CouponDao.class);
	Gson gson = new Gson();

	@Override
	public void addCoupon(Coupon coupon) {
		//設定優惠券基本資料
		coupon.setId(UUID.randomUUID().toString());
		coupon.setStatus(Coupon.CHECKING);
		coupon.setCirculation(0);
		coupon.setUsedCount(0);
		
		//設定優惠券店家經緯度
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

	@Override
	public void loginUser(User user) {
		User temp = dao.getUserById(user.getId());
		if(temp == null){	//如果該用戶還沒有註冊過帳號
			dao.registUser(user);
		}
	}

	@Override
	public User getUserById(String id) {
		return dao.getUserById(id);
	}

	@Override
	public void addCouponOrder(User user, String couponId) {
		CouponOrder order = new CouponOrder();
		Coupon coupon = dao.getCouponById(couponId);
		
		//設定優惠券訂單資料
		order.setId(UUID.randomUUID().toString());
		order.setUserId(user.getId());
		order.setCouponThemeId(coupon.getThemeId());
		order.setExpire(new Timestamp(System.currentTimeMillis() + 14 * 24 * 3600 * 1000));
		order.setStatus(0);
		dao.addCouponOrder(order);
		
		//優惠券發行量+1
		coupon.setCirculation(coupon.getCirculation()+1);
		dao.updateCouponById(coupon);
	}

	@Override
	public List<CouponTheme> getThemesByUser(User user) {
		List<CouponOrder> orders = dao.getCouponOrderByUserId(user.getId());
		
		//過濾重複的優惠券主題
		Set<String> temp = new HashSet<String>();
		for(int i = 0; i < orders.size(); i++) {
			temp.add(orders.get(i).getCouponThemeId());
		}
		
		//將優惠券主題存入List中
		List<CouponTheme> couponThemes = new ArrayList<CouponTheme>();
		Iterator it = temp.iterator();
		while (it.hasNext()) {
			CouponTheme theme = dao.getCouponThemesById(it.next().toString());
			theme.setHaving(0);
			//計算用戶擁有主題優惠券的數量
			for(int i = 0; i < orders.size(); i++) {
				if(orders.get(i).getCouponThemeId().equals(theme.getId())){
					theme.setHaving(theme.getHaving()+1);
				}
			}
			couponThemes.add(theme);
		}
		
		//遍歷所有的主題，設定主題商家最近距離、最大折扣
		for(int i = 0; i < couponThemes.size(); i++) {
			CouponTheme theme = couponThemes.get(i);
			
			//將距離與折扣設定極值
			theme.setMinDistance(Double.MAX_VALUE);
			theme.setMaxDiscount(0);
			
			//找出改主題下所有的優惠券
			List<Coupon> cps = dao.getCouponsByThemeId(theme.getId());
			
			//遍歷主題下所有的優惠券
			for(int j = 0; j < cps.size(); j++) {
				Coupon cp = cps.get(j);
				
				//當用戶允許取得定位時，計算用戶與主題中最近商家的距離
				if(user.getLat() != 0 && user.getLng() != 0){
					Double dist = GoogleMapUtils.getDistance(user.getLat(), user.getLng(), cp.getLat(), cp.getLng());
					
					//如果距離比當前的紀錄小，則更改紀錄
					if(dist < theme.getMinDistance()){
						DecimalFormat df = new DecimalFormat("##");
						theme.setMinDistance(Double.parseDouble(df.format(dist)));
					}
				}
				
				//如果優惠券折扣比當前主題紀錄大，則更改紀錄
				if(cp.getDiscount() > theme.getMaxDiscount()) {
					theme.setMaxDiscount(cp.getDiscount());
				}
			}
		}
		
		
		return couponThemes;
	}

	@Override
	public List<CouponTheme> getOtherThemesByUser(User user) {
		
		List<CouponOrder> orders = dao.getCouponOrderByUserId(user.getId()); //使用者擁有的優惠券
		List<CouponTheme> allThemes = dao.getCouponThemes(); //伺服器中所有的主題
		List<CouponTheme> couponThemes = new ArrayList<CouponTheme>(); //未擁有優惠券的主題列表
		
		for(int i = 0; i < allThemes.size(); i++){
			boolean isHaving = false; //是否此用戶已擁有該主題
			for(int j = 0; j < orders.size(); j++) {
				//如果用戶擁有該主題的優惠券
				if(allThemes.get(i).getId().equals(orders.get(j).getCouponThemeId()) && orders.get(j).getStatus() != CouponOrder.USED){
					isHaving = true; //紀錄已擁有
					break;
				}
			}
			//如果該用戶還沒有該主題的優惠券，則加進列表
			if(isHaving == false) {
				couponThemes.add(allThemes.get(i));
			}
		}
		
		//遍歷所有的主題，設定主題商家最近距離、最大折扣
		for(int i = 0; i < couponThemes.size(); i++) {
			CouponTheme theme = couponThemes.get(i);
			
			//將距離與折扣設定極值
			theme.setMinDistance(Double.MAX_VALUE);
			theme.setMaxDiscount(0);
			
			//找出該主題下所有的優惠券
			List<Coupon> cps = dao.getCouponsByThemeId(theme.getId());
			
			//如果該主題下沒有優惠券，則移除
			//if(cps.size() == 0) couponThemes.remove(theme);
			
			//遍歷主題下所有的優惠券
			for(int j = 0; j < cps.size(); j++) {
				Coupon cp = cps.get(j);
				
				//當用戶允許取得定位時，計算用戶與主題中最近商家的距離
				if(user.getLat() != 0 && user.getLng() != 0){
					Double dist = GoogleMapUtils.getDistance(user.getLat(), user.getLng(), cp.getLat(), cp.getLng());
					
					//如果距離比當前的紀錄小，則更改紀錄
					if(dist < theme.getMinDistance()){
						DecimalFormat df = new DecimalFormat("##");
						theme.setMinDistance(Double.parseDouble(df.format(dist)));
					}
				}
				
				//如果優惠券折扣比當前主題紀錄大，則更改紀錄
				if(cp.getDiscount() > theme.getMaxDiscount()) {
					theme.setMaxDiscount(cp.getDiscount());
				}
			}
		}
		
		
		return couponThemes;
	}

	@Override
	public void updateCouponById(Coupon coupon) {
		
		//設定優惠券店家經緯度
		double [] address = GoogleMapUtils.getAdressXY(coupon.getAddress(), 0);
		coupon.setLat(address[0]);
		coupon.setLng(address[1]);
		
		dao.updateCouponById(coupon);
	}

	@Override
	public String useCoupon(String couponId, User loginUser) {
		
		//找出要使用的優惠券
		Coupon coupon = dao.getCouponById(couponId);
		
		//確定是否可以使用優惠券，找出登入者擁有該優惠券主題
		List<CouponOrder> orders = dao.getCouponOrderByUserId(loginUser.getId());
		for(int i = 0; i < orders.size(); i++){
			//如果有優惠券訂單的主題ID，與該商家的主題ID相同，表示可以使用主題優惠券
			if(orders.get(i).getCouponThemeId().equals(coupon.getThemeId())) {
				
				//優惠券被使用次數+1
				coupon.setUsedCount(coupon.getUsedCount()+1);
				dao.updateCouponById(coupon);
				
				//將優惠券訂單設為已使用
				CouponOrder order = orders.get(i);
				order.setStatus(CouponOrder.USED);
				dao.updateCouponOrderById(order);
				return "{\"msg\":\"優惠券使用成功\"}";
			}
		}
		return "{\"msg\":\"失敗\"}";
	}

	@Override
	public List<Coupon> getCoupons() {
		return dao.getCoupons();
	}

	@Override
	public CouponTheme getCouponThemeById(String id) {
		return dao.getCouponThemeById(id);
	}

	@Override
	public void updateCouponThemeById(CouponTheme theme) {
		dao.updateCouponThemeById(theme);
	}

}
