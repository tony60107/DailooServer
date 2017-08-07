package com.dailoo.domain;

import java.sql.Timestamp;

public class Viewpoint {
	
	private String id;			//ID
	private String name;		//景點名稱
	private String subtitle;	//副標題
	private String theme;		//主題
	private String country;		//國家
	private String city;		//縣市
	private String town;		//鄉鎮
	private String village;		//村里
	private String address;		//詳細地址
	private double longtitude;	//經度
	private double latitude;	//緯度
	private String navUrl;		//Google導航網址
	private String intro;		//景點介紹
	private Timestamp updateTime;	//上傳時間
	
	
	
	@Override
	public String toString() {
		return "Viewpoint [id=" + id + ", name=" + name + ", subtitle="
				+ subtitle + ", country=" + country + ", city=" + city
				+ ", town=" + town + ", village=" + village + ", address="
				+ address + ", longtitude=" + longtitude + ", latitude="
				+ latitude + ", theme=" + theme + ", navUrl=" + navUrl
				+ ", intro=" + intro + ", updateTime=" + updateTime + "]";
	}
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
	public String getSubtitle() {
		return subtitle;
	}
	public void setSubtitle(String subtitle) {
		this.subtitle = subtitle;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getTown() {
		return town;
	}
	public void setTown(String town) {
		this.town = town;
	}
	public String getVillage() {
		return village;
	}
	public void setVillage(String village) {
		this.village = village;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public double getLongtitude() {
		return longtitude;
	}
	public void setLongtitude(double longtitude) {
		this.longtitude = longtitude;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public String getTheme() {
		return theme;
	}
	public void setTheme(String theme) {
		this.theme = theme;
	}
	public String getNavUrl() {
		return navUrl;
	}
	public void setNavUrl(String navUrl) {
		this.navUrl = navUrl;
	}
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	public Timestamp getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Timestamp updateTime) {
		this.updateTime = updateTime;
	}
	
	
	
}
