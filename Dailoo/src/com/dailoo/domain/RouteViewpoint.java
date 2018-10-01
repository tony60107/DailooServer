package com.dailoo.domain;

public class RouteViewpoint {
	
	private String viewpointId;	//景點ID
	private String routeId;		//路線ID
	private Integer sequence; 	//景點排序
	
	
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
}
