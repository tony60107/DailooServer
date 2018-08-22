package com.dailoo.domain;

import java.sql.Timestamp;

public class CouponOrder {
	private String id;
	private String userId; 
	private String couponThemeId;
	private Integer status;
	private Timestamp expire;
	
	public final static Integer UNUSED = 0; //優惠券尚未被使用
	public final static Integer USED = 1; //優惠券已被使用
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getCouponThemeId() {
		return couponThemeId;
	}
	public void setCouponThemeId(String couponThemeId) {
		this.couponThemeId = couponThemeId;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public Timestamp getExpire() {
		return expire;
	}
	public void setExpire(Timestamp expire) {
		this.expire = expire;
	}
}
