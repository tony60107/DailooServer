package com.dailoo.domain;

public class ViewpointSimple {
	private String id;
	private String name;
	private String subtilte;
	private String behalfPhotoUrl;
	private String speakerName;
	private int audioLength;
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
	public String getSubtilte() {
		return subtilte;
	}
	public void setSubtilte(String subtilte) {
		this.subtilte = subtilte;
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

	public int getAudioLength() {
		return audioLength;
	}
	public void setAudioLength(int audioLength) {
		this.audioLength = audioLength;
	}
	@Override
	public String toString() {
		return "ViewpointSimple [id=" + id + ", name=" + name + ", subtilte="
				+ subtilte + ", behalfPhotoUrl=" + behalfPhotoUrl
				+ ", speakerName=" + speakerName + ", audioLength="
				+ audioLength + "]";
	}
	
	
}
