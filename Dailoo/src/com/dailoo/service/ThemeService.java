package com.dailoo.service;

import java.util.Map;

public interface ThemeService extends Service{

	/**
	 * 新增主題
	 * @param paramMap 含有主題名稱,照片URLs,地區ID的Map集合
	 */
	void addTheme(Map<String, String> paramMap);

	/**
	 * 根據地區ID取得主題
	 * @param id 地區ID
	 * @return 地區集合的List數據
	 */
	String findThemesByRegionId(String id);

	/**
	 * 刪除主題
	 * @param id 主題ID
	 */
	void delThemeById(String id);


}
