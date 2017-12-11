package com.dailoo.domain;

public class Ad {
	
	private String id; //廣告ID
	private String name; //廣告名稱
	private String imgurl; //廣告圖片地址
	private String href; //廣告連結
	private Integer count; //廣告已展示次數
	private Integer maxCount; //廣告最大展示次數
	private String regionId; //廣告對應的地區ID
	
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
	public String getImgurl() {
		return imgurl;
	}
	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}
	public String getHref() {
		return href;
	}
	public void setHref(String href) {
		this.href = href;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public Integer getMaxCount() {
		return maxCount;
	}
	public void setMaxCount(Integer maxCount) {
		this.maxCount = maxCount;
	}
	public String getRegionId() {
		return regionId;
	}
	public void setRegionId(String regionId) {
		this.regionId = regionId;
	}
	@Override
	public String toString() {
		return "Ad [id=" + id + ", name=" + name + ", count=" + count + "]";
	}
	
}
