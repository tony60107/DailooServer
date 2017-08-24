package com.dailoo.domain;

public class Tag {
	private String id;
	private int time;
	private String photoUrl;
	private String audioId;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getTime() {
		return time;
	}
	public void setTime(int time) {
		this.time = time;
	}
	public String getPhotoUrl() {
		return photoUrl;
	}
	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}
	public String getAudioId() {
		return audioId;
	}
	public void setAudioId(String audioId) {
		this.audioId = audioId;
	}
	@Override
	public String toString() {
		return "Tag [id=" + id + ", time=" + time + ", photoUrl=" + photoUrl
				+ ", audioId=" + audioId + "]";
	}
	
}
