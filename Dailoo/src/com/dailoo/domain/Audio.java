package com.dailoo.domain;

public class Audio {
	private String id;		//音檔ID
	private String src;		//音檔路徑
	private int length;		//音檔長度
	private String viewpointId;	//音檔對應的景點ID
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getSrc() {
		return src;
	}
	public void setSrc(String src) {
		this.src = src;
	}
	public String getViewpointId() {
		return viewpointId;
	}
	public void setViewpointId(String viewpointId) {
		this.viewpointId = viewpointId;
	}
	public int getLength() {
		return length;
	}
	public void setLength(int length) {
		this.length = length;
	}
	@Override
	public String toString() {
		return "Audio [id=" + id + ", src=" + src + ", length=" + length
				+ ", viewpointId=" + viewpointId + "]";
	}
	
	
}
