package com.dailoo.domain;

import java.sql.Timestamp;

public class SerialNumber {
	
	private String code; 			//序號
	private int usedCount;			//已使用次數
	private int maxUseCount;		//最大使用次數
	private int useLength;			//使用時長，單位小時
	private Timestamp startTime;	//開始使用時間
	private Timestamp createTime;	//序號創建時間
	private String ownerId;			//序號擁有者ID
	private String ownerName;		//序號擁有者姓名
	
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public int getUsedCount() {
		return usedCount;
	}
	public void setUsedCount(int usedCount) {
		this.usedCount = usedCount;
	}
	public int getMaxUseCount() {
		return maxUseCount;
	}
	public void setMaxUseCount(int maxUseCount) {
		this.maxUseCount = maxUseCount;
	}
	public int getUseLength() {
		return useLength;
	}
	public void setUseLength(int useLength) {
		this.useLength = useLength;
	}
	public Timestamp getStartTime() {
		return startTime;
	}
	public void setStartTime(Timestamp startTime) {
		this.startTime = startTime;
	}
	public Timestamp getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Timestamp createTime) {
		this.createTime = createTime;
	}
	public String getOwnerId() {
		return ownerId;
	}
	public void setOwnerId(String ownerId) {
		this.ownerId = ownerId;
	}
	public String getOwnerName() {
		return ownerName;
	}
	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	@Override
	public String toString() {
		return "SerialNumber [code=" + code + ", usedCount="
				+ usedCount + ", maxUseCount=" + maxUseCount + ", useLength="
				+ useLength + ", startTime=" + startTime + ", createTime="
				+ createTime + "]";
	}
	
}
