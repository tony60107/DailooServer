package com.dailoo.dao;

import com.dailoo.domain.Viewpoint;

public interface ViewpointDao extends Dao{

	/**
	 * 新增景點
	 * @param viewpoint 景點Bean
	 */
	void addViewpoint(Viewpoint viewpoint);

}
