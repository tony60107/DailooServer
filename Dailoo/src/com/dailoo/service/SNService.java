package com.dailoo.service;

import com.dailoo.domain.SerialNumber;

public interface SNService extends Service{

	/**
	 * 新增序號
	 * @param sn 序號Bean
	 * @param createNum 新增的數量
	 */
	void addSN(SerialNumber sn, int createNum);

	/**
	 * 找出所有的序號
	 * @return 序號集合的JSON數據
	 */
	String findAllSN();

	/**
	 * 根據Code找出序號
	 * @param code 序號代碼
	 * @return 序號Bean
	 */
	SerialNumber findSNByCode(String code);

	/**
	 * 更新序號資訊
	 * @param sn 序號Bean
	 */
	void updateSN(SerialNumber sn);

}
