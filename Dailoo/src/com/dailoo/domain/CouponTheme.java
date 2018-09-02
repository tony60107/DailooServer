package com.dailoo.domain;

public class CouponTheme {
	
	private String id;
	private String name;
	
	//-----------
	private Integer maxDiscount; //最大折扣金額
	private Integer having; //紀錄用戶擁有主題優惠券的數量
	private Double minDistance; //用戶距離主題中商家的最短距離
	
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
	public Integer getMaxDiscount() {
		return maxDiscount;
	}
	public void setMaxDiscount(Integer maxDiscount) {
		this.maxDiscount = maxDiscount;
	}
	public Integer getHaving() {
		return having;
	}
	public void setHaving(Integer having) {
		this.having = having;
	}

	public Double getMinDistance() {
		return minDistance;
	}

	public void setMinDistance(Double minDistance) {
		this.minDistance = minDistance;
	}
	
}
