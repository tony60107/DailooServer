package com.dailoo.service;

import java.util.Map;

public interface TagService extends Service{

	/**
	 * 新增Tag標記資料
	 * @param paramMap 含有音檔ID,照片URLs,對應時間的Map集合
	 */
	void addTag(Map<String, String> paramMap);

}
