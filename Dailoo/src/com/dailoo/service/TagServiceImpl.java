package com.dailoo.service;

import java.io.File;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.dailoo.dao.TagDao;
import com.dailoo.domain.Tag;
import com.dailoo.factory.BasicFactory;
import com.google.gson.Gson;

public class TagServiceImpl implements TagService{

	TagDao dao = BasicFactory.getFactory().getDao(TagDao.class);
	Gson gson = new Gson();
	
	@Override
	public void addTag(Map<String, String> paramMap) {
		String [] imgurls = paramMap.get("imgurls").split(",");
		for(int i = 0; i < imgurls.length;i++){
			//如果已取完time值則跳出
			//if("".equals(paramMap.get("time" + i)) || paramMap.get("time" + i) == null) break;
			
			//設定Tag的值
			Tag tag = new Tag();
			tag.setId(UUID.randomUUID().toString());
			//tag.setTime(Integer.parseInt(paramMap.get("time" + i)));
			tag.setTime(0);
			tag.setPhotoUrl(imgurls[i]);
			tag.setAudioId(paramMap.get("audioId"));
			//向資料庫中新增Tag
			dao.addTag(tag);
		}
	}

	@Override
	public String findTagsByAudioId(String audioId) {
		List<Tag> tags = dao.findTagsByAudioId(audioId);
		String json = gson.toJson(tags);
		return json;
	}

	@Override
	public void delTagById(String id) {
		try{
			//找到原來的Tag，刪除對應的照片
			Tag tag = dao.findTagById(id);
			String fileURL = TagService.class.getClassLoader().getResource("../../").toURI().getPath(); 
			File file = new File(fileURL.substring(0, fileURL.length() - 1) + tag.getPhotoUrl()); 
			if(file.exists()){	file.delete(); }
			
			//刪除資料庫中的紀錄
			dao.delTagById(id);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	@Override
	public void updateTagById(Tag tag) {
		dao.updateTagById(tag);
	}

}
