package com.dailoo.service;

import java.io.File;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.dailoo.dao.RegionDao;
import com.dailoo.dao.ThemeDao;
import com.dailoo.domain.Theme;
import com.dailoo.factory.BasicFactory;
import com.google.gson.Gson;

public class ThemeServiceImpl implements ThemeService{

	ThemeDao dao = BasicFactory.getFactory().getDao(ThemeDao.class);
	Gson gson = new Gson();
	
	@Override
	public void addTheme(Map<String, String> paramMap) {
		
		Theme theme = new Theme();
		theme.setId(UUID.randomUUID().toString());
		theme.setName(paramMap.get("name"));
		theme.setBehalfPhotoUrl(paramMap.get("imgurls"));
		theme.setRegionId(paramMap.get("regionId"));
		
		dao.addTheme(theme);
	}

	@Override
	public String findThemesByRegionId(String id) {
		
		List<Theme> themes = dao.findThemesByRegionId(id);
		String json = gson.toJson(themes);
		return json;
		
	}

	@Override
	public void delThemeById(String id) {
		
		try {
			//找到原來的主題，刪除對應的代表照片
			Theme theme = dao.findThemeById(id);
			
			String fileURL = ThemeService.class.getClassLoader().getResource("../../").toURI().getPath();
			File file = new File(fileURL.substring(0, fileURL.length() - 1) + theme.getBehalfPhotoUrl()); 
			if(file.exists()){	file.delete(); }		
			
			dao.delThemeById(id);
		} catch (URISyntaxException e) {
			e.printStackTrace();
		} 
		
	}

	@Override
	public String findThemesByThemeId(String id) {
		Theme theme = dao.findThemeById(id);
		List<Theme> themes = dao.findThemesByRegionId(theme.getRegionId());
		return gson.toJson(themes);
	}

}
