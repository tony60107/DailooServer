package com.dailoo.service;

import java.io.File;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.dailoo.dao.RegionDao;
import com.dailoo.dao.ThemeDao;
import com.dailoo.dao.ViewpointDao;
import com.dailoo.domain.Region;
import com.dailoo.domain.Theme;
import com.dailoo.domain.Viewpoint;
import com.dailoo.factory.BasicFactory;
import com.google.gson.Gson;

public class ThemeServiceImpl implements ThemeService {

	ThemeDao dao = BasicFactory.getFactory().getDao(ThemeDao.class);
	ViewpointDao viewpointDao = BasicFactory.getFactory().getDao(ViewpointDao.class);
	RegionDao regionDao = BasicFactory.getFactory().getDao(RegionDao.class);
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

		List<Viewpoint> list = viewpointDao.findViewpointByThemeId(id);
		if(list.size() > 0) throw new RuntimeException("該主題下仍有景點存在");
		
		try {
			// 找到原來的主題，刪除對應的代表照片
			Theme theme = dao.findThemeById(id);

			String fileURL = ThemeService.class.getClassLoader()
					.getResource("../../").toURI().getPath();
			File file = new File(fileURL.substring(0, fileURL.length() - 1)
					+ theme.getBehalfPhotoUrl());
			if (file.exists()) {
				file.delete();
			}

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

	@Override
	public String findThemeById(String id) {
		Theme theme = dao.findThemeById(id);
		return gson.toJson(theme);
	}

	@Override
	public void updateThemeInfo(Theme theme, String imgurls) {
		try {
			Theme temp = dao.findThemeById(theme.getId());

			// 如果沒有要變更代表圖
			if ("".equals(imgurls) || imgurls == null) {
				theme.setBehalfPhotoUrl(temp.getBehalfPhotoUrl());
			} else { // 要變更代表圖
				//刪除舊的代表圖
				String fileURL = ThemeService.class.getClassLoader().getResource("../../").toURI().getPath();
				File file = new File(fileURL.substring(0, fileURL.length() - 1) + temp.getBehalfPhotoUrl());
				if (file.exists()) {file.delete();}
				theme.setBehalfPhotoUrl(imgurls);
			}
			dao.updateThemeById(theme);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public List<Theme> findThemesByRegionName(String name) {
		Region region = regionDao.findRegionByName(name);
		List<Theme> themes = dao.findThemesByRegionId(region.getId());
		return themes;
	}

	@Override
	public List<Theme> findAllThemes() {
		return dao.findAllThemes();
	}

	@Override
	public void updateMapUrlById(String id, String type, String url) {
		if("paintedMapUrl".equals(type)) {
			dao.updatePaintedMapUrlById(id, url);
		} else if("googleMapUrl".equals(type)){
		 	dao.updateGoogleMapUrlById(id, url);
		} else if("questionUrl".equals(type)) {
			dao.updateQuestionUrlById(id, url);
		}
	}

}









