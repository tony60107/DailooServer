package com.dailoo.dao;

import java.util.List;

import com.dailoo.domain.Theme;

public interface ThemeDao extends Dao{

	/**
	 * 新增景點
	 * @param theme 景點Bean
	 */
	void addTheme(Theme theme);

	/**
	 * 根據地區ID取得主題
	 * @param id 地區ID
	 * @return	主題的List集合
	 */
	List<Theme> findThemesByRegionId(String id);

	/**
	 * 根據主題ID找到主題
	 * @param id 主題ID
	 * @return 主題Bean
	 */
	Theme findThemeById(String id);

	/**
	 * 根據主題ID刪除主題
	 * @param id 主題ID
	 */
	void delThemeById(String id);

	/**
	 * 根據主題ID,更新主題資訊
	 * @param theme 主題Bean
	 */
	void updateThemeById(Theme theme);

}
