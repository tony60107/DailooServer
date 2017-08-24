package com.dailoo.service;

import java.util.Map;
import java.util.UUID;

import com.dailoo.dao.TagDao;
import com.dailoo.domain.Tag;
import com.dailoo.factory.BasicFactory;

public class TagServiceImpl implements TagService{

	TagDao dao = BasicFactory.getFactory().getDao(TagDao.class);
	
	@Override
	public void addData(Map<String, String> paramMap) {
		String [] imgurl = paramMap.get("imgurls").split(",");
		for(int i = 0;;i++){
			//如果已取完time值則跳出
			if("".equals(paramMap.get("time" + i)) || paramMap.get("time" + i) == null) break;
			
			//設定Tag的值
			Tag tag = new Tag();
			tag.setId(UUID.randomUUID().toString());
			tag.setTime(Integer.parseInt(paramMap.get("time" + i)));
			tag.setPhotoUrl(imgurl[i]);
			tag.setAudioId(paramMap.get("audioId"));
			//向資料庫中新增Tag
			dao.addTag(tag);
		}
	}

}
