package com.dailoo.domain;

import java.sql.Timestamp;

public class Viewpoint {
	
	private String id;			//ID
	private String name;		//景點名稱
	private String subtitle;	//副標題
	private String behalfPhotoUrl; //景點代表圖片
	private String themeId;		//主題Id
	private String country;		//國家
	private String city;		//縣市
	private String town;		//鄉鎮
	private String village;		//村里
	private String address;		//詳細地址
	private double longitude;	//經度
	private double latitude;	//緯度
	private String navUrl;		//Google導航網址
	private String intro;		//景點介紹
	private String shortUrl; 	//短網址
	private String speakerId;   //講者ID
	private Timestamp updateTime;	//上傳時間
	
	
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
	public String getThemeId() {
		return themeId;
	}
	public void setThemeId(String themeId) {
		this.themeId = themeId;
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
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
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
	public String getSpeakerId() {
		return speakerId;
	}
	public void setSpeakerId(String speakerId) {
		this.speakerId = speakerId;
	}
	public String getShortUrl() {
		return shortUrl;
	}
	public void setShortUrl(String shortUrl) {
		this.shortUrl = shortUrl;
	}
	
	public String getBehalfPhotoUrl() {
		return behalfPhotoUrl;
	}
	public void setBehalfPhotoUrl(String behalfPhotoUrl) {
		this.behalfPhotoUrl = behalfPhotoUrl;
	}
	@Override
	public String toString() {
		return "Viewpoint [id=" + id + ", name=" + name + ", subtitle="
				+ subtitle + ", theme=" + themeId + ", country=" + country
				+ ", city=" + city + ", town=" + town + ", village=" + village
				+ ", address=" + address + ", longitude=" + longitude
				+ ", latitude=" + latitude + ", navUrl=" + navUrl + ", intro="
				+ intro + ", shortUrl=" + shortUrl + ", speakerId=" + speakerId
				+ ", updateTime=" + updateTime + "]";
	}
	
}
