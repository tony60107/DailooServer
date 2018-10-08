package com.dailoo.domain;

public class RouteViewpoint {
	
	private String viewpointId;	//景點ID
	private String routeId;		//路線ID
	private Integer sequence; 	//景點排序
	
	//-------------------
	private String name;	//景點名稱
	private String subtitle;//景點副標題
	private String intro;	//景點介紹
	private String behalfPhotoUrl;	//景點代表圖
	private Double lat;	//緯度
	private Double lng;	//經度
	private String audioSrc; //音檔路徑
	private Integer audioLength; //音檔長度
	
	
	
	public String getViewpointId() {
		return viewpointId;
	}
	public void setViewpointId(String viewpointId) {
		this.viewpointId = viewpointId;
	}
	public String getRouteId() {
		return routeId;
	}
	public void setRouteId(String routeId) {
		this.routeId = routeId;
	}
	public Integer getSequence() {
		return sequence;
	}
	public void setSequence(Integer sequence) {
		this.sequence = sequence;
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
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	public String getBehalfPhotoUrl() {
		return behalfPhotoUrl;
	}
	public void setBehalfPhotoUrl(String behalfPhotoUrl) {
		this.behalfPhotoUrl = behalfPhotoUrl;
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
	public String getAudioSrc() {
		return audioSrc;
	}
	public void setAudioSrc(String audioSrc) {
		this.audioSrc = audioSrc;
	}
	public Integer getAudioLength() {
		return audioLength;
	}
	public void setAudioLength(Integer audioLength) {
		this.audioLength = audioLength;
	}
	
}
