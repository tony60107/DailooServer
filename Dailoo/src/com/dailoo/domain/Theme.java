package com.dailoo.domain;

import java.sql.Timestamp;

public class Theme {
	private String id;				//主題ID
	private String name;			//主題名稱
	private String behalfPhotoUrl;	//主題縮圖
	private String paintedMapUrl;	//主題手繪地圖連結
	private String googleMapUrl;	//主題Google地圖連結
	private String questionUrl;		//主題問卷連結
	private String regionId;		//主題對應的地區ID
	private Timestamp updateTime;	//主題上傳時間

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
	public String getBehalfPhotoUrl() {
		return behalfPhotoUrl;
	}
	public void setBehalfPhotoUrl(String behalfPhotoUrl) {
		this.behalfPhotoUrl = behalfPhotoUrl;
	}
	public String getPaintedMapUrl() {
		return paintedMapUrl;
	}
	public void setPaintedMapUrl(String paintedMapUrl) {
		this.paintedMapUrl = paintedMapUrl;
	}
	public String getGoogleMapUrl() {
		return googleMapUrl;
	}
	public void setGoogleMapUrl(String googleMapUrl) {
		this.googleMapUrl = googleMapUrl;
	}
	public String getQuestionUrl() {
		return questionUrl;
	}
	public void setQuestionUrl(String questionUrl) {
		this.questionUrl = questionUrl;
	}
	public String getRegionId() {
		return regionId;
	}
	public void setRegionId(String regionId) {
		this.regionId = regionId;
	}
	public Timestamp getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Timestamp updateTime) {
		this.updateTime = updateTime;
	}
	
}
