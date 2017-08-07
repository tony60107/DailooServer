package com.dailoo.service;

import com.dailoo.domain.Viewpoint;

public interface ViewpointService extends Service{
	
	/**
	 * 新增景點
	 * @param viewpoint 景點Bean
	 */
	void addViewpoint(Viewpoint viewpoint);
}
