package com.dailoo.domain;

public class ViewpointSimple {
	private String id;
	private String name;
	private String subtitle;
	private String theme;
	private String behalfPhotoUrl;
	private String shortUrl;
	private String speakerName;
	private String speakerPhotoUrl;
	private int audioLength;
	private int isPublish;
	private int isPriority;
	private int isPay;
	private Double distance;
	
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
	public void setSubtitle(String subtilte) {
		this.subtitle = subtilte;
	}
	public String getBehalfPhotoUrl() {
		return behalfPhotoUrl;
	}
	public void setBehalfPhotoUrl(String behalfPhotoUrl) {
		this.behalfPhotoUrl = behalfPhotoUrl;
	}
	public String getSpeakerName() {
		return speakerName;
	}
	public void setSpeakerName(String speakerName) {
		this.speakerName = speakerName;
	}

	public String getSpeakerPhotoUrl() {
		return speakerPhotoUrl;
	}
	public void setSpeakerPhotoUrl(String speakerPhotoUrl) {
		this.speakerPhotoUrl = speakerPhotoUrl;
	}
	public String getShortUrl() {
		return shortUrl;
	}
	public void setShortUrl(String shortUrl) {
		this.shortUrl = shortUrl;
	}
	public int getAudioLength() {
		return audioLength;
	}
	public void setAudioLength(int audioLength) {
		this.audioLength = audioLength;
	}
	public String getTheme() {
		return theme;
	}
	public void setTheme(String theme) {
		this.theme = theme;
	}
	public int getIsPublish() {
		return isPublish;
	}
	public void setIsPublish(int isPublish) {
		this.isPublish = isPublish;
	}
	public int getIsPriority() {
		return isPriority;
	}
	public void setIsPriority(int isPriority) {
		this.isPriority = isPriority;
	}
	public int getIsPay() {
		return isPay;
	}
	public void setIsPay(int isPay) {
		this.isPay = isPay;
	}
	public Double getDistance() {
		return distance;
	}
	public void setDistance(Double distance) {
		this.distance = distance;
	}
	@Override
	public String toString() {
		return "ViewpointSimple [id=" + id + ", name=" + name + ", subtilte="
				+ subtitle + ", behalfPhotoUrl=" + behalfPhotoUrl
				+ ", speakerName=" + speakerName + ", audioLength="
				+ audioLength + "]";
	}
	
	
}
