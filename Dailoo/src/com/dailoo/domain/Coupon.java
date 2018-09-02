package com.dailoo.domain;

import java.util.List;

public class Coupon {
	private String id;				//優惠券ID
	private String name;			//商家名稱
	private Integer discount;		//折扣金額
	private String obtain;			//優惠券取得方法
	private String intro;			//優惠券商家介紹
	private Double lat;				//緯度
	private Double lng;				//經度
	private String address;			//地址
	private String category;		//分類（食、體驗、伴手禮、住）
	private Integer status;			//優惠券上架狀態
	private Integer circulation;	//發行數量
	private Integer usedCount;		//使用數量
	private String themeId;			//對應主題ID
	
	public final static Integer CHECKING = 0; //優惠券審核中
	
	//------------------
	private List<CouponImg> imgs; //商家圖片
	private Double distance; //用戶與商家的距離
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getDiscount() {
		return discount;
	}
	public void setDiscount(Integer discount) {
		this.discount = discount;
	}
	public String getObtain() {
		return obtain;
	}
	public void setObtain(String obtain) {
		this.obtain = obtain;
	}
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	public Double getLat() {
		return lat;
	}
	public void setLat(Double lat) {
		this.lat = lat;
	}
	public Double getLng() {
		return lng;
	}
	public void setLng(Double lng) {
		this.lng = lng;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public Integer getCirculation() {
		return circulation;
	}
	public void setCirculation(Integer circulation) {
		this.circulation = circulation;
	}
	public Integer getUsedCount() {
		return usedCount;
	}
	public void setUsedCount(Integer usedCount) {
		this.usedCount = usedCount;
	}
	public String getThemeId() {
		return themeId;
	}
	public void setThemeId(String themeId) {
		this.themeId = themeId;
	}
	public List<CouponImg> getImgs() {
		return imgs;
	}
	public void setImgs(List<CouponImg> imgs) {
		this.imgs = imgs;
	}
	public Double getDistance() {
		return distance;
	}
	public void setDistance(Double distance) {
		this.distance = distance;
	}
	
	
	
}
