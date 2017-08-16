package com.dailoo.domain;

public class Speaker {
	
	private String id;			//講者ID
	private String username;	//帳號
	private String password;	//密碼
	private String name;		//姓名
	private String photoUrl;	//大頭照地址
	private String phoneNumber;	//手機號碼
	private String homeNumber;	//家電號碼
	private String speakerUrl;	//個人網址
	private String resume;		//簡歷
	private String intro;		//自我介紹
	private String youtubeUrl;	//youtube嵌入碼網址
	private String role;		//使用者分類
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhotoUrl() {
		return photoUrl;
	}
	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getHomeNumber() {
		return homeNumber;
	}
	public void setHomeNumber(String homeNumber) {
		this.homeNumber = homeNumber;
	}
	public String getSpeakerUrl() {
		return speakerUrl;
	}
	public void setSpeakerUrl(String speakerUrl) {
		this.speakerUrl = speakerUrl;
	}
	public String getResume() {
		return resume;
	}
	public void setResume(String resume) {
		this.resume = resume;
	}
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	public String getYoutubeUrl() {
		return youtubeUrl;
	}
	public void setYoutubeUrl(String youtubeUrl) {
		this.youtubeUrl = youtubeUrl;
	}
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "Speaker [id=" + id + ", username=" + username + ", password="
				+ password + ", name=" + name + ", photoUrl=" + photoUrl
				+ ", phoneNumber=" + phoneNumber + ", homeNumber=" + homeNumber
				+ ", speakerUrl=" + speakerUrl + ", resume=" + resume
				+ ", intro=" + intro + ", youtubeUrl=" + youtubeUrl + ", role="
				+ role + "]";
	}

	
}
