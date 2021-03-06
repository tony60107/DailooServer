package com.dailoo.service;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.dailoo.dao.AudioDao;
import com.dailoo.dao.RegionDao;
import com.dailoo.dao.SpeakerDao;
import com.dailoo.dao.TagDao;
import com.dailoo.dao.ThemeDao;
import com.dailoo.dao.ViewpointDao;
import com.dailoo.domain.Audio;
import com.dailoo.domain.Region;
import com.dailoo.domain.Speaker;
import com.dailoo.domain.Tag;
import com.dailoo.domain.Theme;
import com.dailoo.domain.Viewpoint;
import com.dailoo.domain.ViewpointSimple;
import com.dailoo.factory.BasicFactory;
import com.dailoo.util.GoogleMapUtils;
import com.dailoo.util.UrlShorterUtils;
import com.google.gson.Gson;

public class ViewpointServiceImpl implements ViewpointService{
	
	private ViewpointDao dao = BasicFactory.getFactory().getDao(ViewpointDao.class);
	private SpeakerDao speakerDao = BasicFactory.getFactory().getDao(SpeakerDao.class);
	private AudioDao audioDao = BasicFactory.getFactory().getDao(AudioDao.class);
	private TagDao tagDao = BasicFactory.getFactory().getDao(TagDao.class);
	private RegionDao regionDao = BasicFactory.getFactory().getDao(RegionDao.class);
	private ThemeDao themeDao = BasicFactory.getFactory().getDao(ThemeDao.class);
	private ShortUrlService shortUrlService = BasicFactory.getFactory().getService(ShortUrlService.class);
	private Gson gson = new Gson();
	
	
	private List<ViewpointSimple> toVpSimple(List<Viewpoint> vps){
		
		List<ViewpointSimple> vpsims = new ArrayList<ViewpointSimple>();
		
		//遍歷所有景點
		for(int i = 0; i < vps.size(); i++){

			Viewpoint vp = vps.get(i);
			ViewpointSimple vpsim = new ViewpointSimple();
			
			//設定簡易版景點資訊內容
			vpsim.setId(vp.getId());
			vpsim.setName(vp.getName());
			vpsim.setSubtitle(vp.getSubtitle());
			vpsim.setTheme(vp.getThemeId());
			vpsim.setShortUrl(vp.getShortUrl());
			vpsim.setIsPublish(vp.getIsPublish());
			vpsim.setIsPriority(vp.getIsPriority());
			vpsim.setIsPay(vp.getIsPay());
			vpsim.setUpdateTime(vp.getUpdateTime());
			
			if(vp.getDistance() != null) vpsim.setDistance(vp.getDistance());
			
			if(vp.getBehalfPhotoUrl() != null) vpsim.setBehalfPhotoUrl(vp.getBehalfPhotoUrl());
			Speaker speaker = speakerDao.findSpeakerById(vp.getSpeakerId());
			if(speaker != null){ 
				vpsim.setSpeakerName(speaker.getName());
				vpsim.setSpeakerPhotoUrl(speaker.getPhotoUrl());
			}
			Audio audio = audioDao.findAudioByViewpointId(vp.getId());
			if(audio != null) vpsim.setAudioLength(audio.getLength());

			//將簡易版景點資訊新增到List中
			vpsims.add(vpsim);
		}
		
		return vpsims;
	}

	private ViewpointSimple toVpSimple(Viewpoint vp){
		ViewpointSimple vpsim = new ViewpointSimple();
		
		//設定簡易版景點資訊內容
		vpsim.setId(vp.getId());
		vpsim.setName(vp.getName());
		vpsim.setSubtitle(vp.getSubtitle());
		vpsim.setTheme(vp.getThemeId());
		vpsim.setShortUrl(vp.getShortUrl());
		vpsim.setIsPublish(vp.getIsPublish());
		vpsim.setIsPriority(vp.getIsPriority());
		vpsim.setIsPay(vp.getIsPay());
		if(vp.getDistance() != null) vpsim.setDistance(vp.getDistance());
		
		if(vp.getBehalfPhotoUrl() != null) vpsim.setBehalfPhotoUrl(vp.getBehalfPhotoUrl());
		Speaker speaker = speakerDao.findSpeakerById(vp.getSpeakerId());
		if(speaker != null){ 
			vpsim.setSpeakerName(speaker.getName());
			vpsim.setSpeakerPhotoUrl(speaker.getPhotoUrl());
		}
		Audio audio = audioDao.findAudioByViewpointId(vp.getId());
		if(audio != null) vpsim.setAudioLength(audio.getLength());
		
		return vpsim;
	}
	
	@Override
	public void addViewpoint(Viewpoint vp) {
		vp.setId(UUID.randomUUID().toString());
		
		if(vp.getLatitude() == null || vp.getLatitude() == 0 || vp.getLongitude() == null || vp.getLongitude() == 0){
			//根據地址取得經緯度
			double [] address = GoogleMapUtils.getAdressXY(vp.getAddress(), 0);
			vp.setLatitude(address[0]);
			vp.setLongitude(address[1]);
		}
		
		//更新景點導航地址
		//https://www.google.com.tw/maps/place/龍田邱仁銘宅/@22.9038065,121.1273646,16z
		//vp.setNavUrl("https://www.google.com.tw/maps/place/"+ vp.getName() +"/@" + vp.getLatitude() + "," + vp.getLongitude() + ",19z");
		
		//建立短網址
		String domain = BasicFactory.getFactory().getPropData("Domain");
		String url = domain + "view/" + vp.getName() + "_" + vp.getSubtitle() 
							+ "?utm_source=PrintAds&utm_campaign="+ vp.getName() + "_" 
							+ vp.getSubtitle();
		String shortUrl = "dailoo.com/" + shortUrlService.addShortUrl(url);
		vp.setShortUrl(shortUrl);
		
		dao.addViewpoint(vp);
	}

	@Override
	public Viewpoint findViewpointByNameAndSt(String name, String subtitle) {
		return dao.findViewpointByNameAndSt(name, subtitle);
	}

	@Override
	public Viewpoint findViewpointById(String id) {
		return dao.findViewpointById(id);
	}

	@Override
	public void updateViewpoint(Viewpoint vp) {
		
		//更新景點經緯度		
		if(vp.getLatitude() == null || vp.getLatitude() == 0 || vp.getLongitude() == null || vp.getLongitude() == 0){
			//根據地址取得經緯度
			double [] address = GoogleMapUtils.getAdressXY(vp.getAddress(), 0);
			vp.setLatitude(address[0]);
			vp.setLongitude(address[1]);
		}
		
		//更新景點導航地址
		vp.setNavUrl("https://www.google.com.tw/maps/place/"+ vp.getName() +"/@" + vp.getLatitude() + "," + vp.getLongitude() + ",16z");
				
		//更新短網址
		String domain = BasicFactory.getFactory().getPropData("Domain");
		String url = domain + "view/" + vp.getName() + "_" + vp.getSubtitle() 
							+ "?utm_source=PrintAds&utm_campaign="+ vp.getName() + "_" 
							+ vp.getSubtitle();
		System.out.println("-----" + url + " " + vp.getAddress());
		String shortUrl = "dailoo.com/" + shortUrlService.addShortUrl(url);
		
		vp.setShortUrl(shortUrl);
		
		dao.updateViewpoint(vp);
		
	}

	@Override
	public String findViewpointByIdToJson(String viewpointId) {
		
		Viewpoint vp = dao.findViewpointById(viewpointId);
		//如果該景點ID不存在
		if(vp == null) return null;
		
		Speaker speaker = speakerDao.findSpeakerById(vp.getSpeakerId());
		speaker.setPassword("password");
		Audio audio = audioDao.findAudioByViewpointId(vp.getId());
		List<Tag> tags = tagDao.findTagsByAudioId(audio.getId());
		
		//將主題分割，並存入List中
		String[] themes = vp.getThemeId().split(",");
		List<Theme> themelist = new ArrayList<Theme>();
		for(int i = 0; i < themes.length; i++) {
			Theme theme = themeDao.findThemeById(themes[i]);
			themelist.add(theme);
		}
		
		//找出主題對應的地區，並存入List中
		List<Region> regionList = new ArrayList<Region>();
		for(int i = 0; i < themelist.size(); i++) {
			Region region = regionDao.findRegionById(themelist.get(i).getRegionId());
			regionList.add(region);
		}
		
		List<Viewpoint> moreAudio = dao.findViewpointsByNameAndSpeaker(vp.getName(), vp.getSpeakerId());
		//設定下一段語音
		for(int i = 0; i < moreAudio.size(); i++) {
			//根據該景點的副標題，對比出下一段副標題為哪個景點
			if(moreAudio.get(i).getSubtitle().equals(vp.getSubtitle())){
				if(i+1 < moreAudio.size()) { //如果有下一段副標題，則直接設定
					vp.setNextAudio(toVpSimple(moreAudio.get(i+1)));
				} else { //如果已經是最後一段，則隨機尋找同一主題下的景點
					List<Viewpoint> temps = dao.findViewpointByThemeIdAndPublish(themelist.get(0).getId());
					//System.out.println((int)(Math.random() * temps.size()));
					if(temps.size() != 0){
						vp.setNextAudio(toVpSimple(temps.get((int)(Math.random() * temps.size()))));
					} else {
						//如果同一主題下沒有其他景點
						vp.setNextAudio(toVpSimple(vp));
					} 
				}
			}
		}
		
		//找到附近的景點
		List<Viewpoint> neighView = dao.findNeighViewpoints(vp);
		//刪除自己
		for(int i = 0; i < neighView.size(); i++) {
			if(neighView.get(i).getName().equals(vp.getName()) && neighView.get(i).getSpeakerId().equals(vp.getSpeakerId())) {
				neighView.remove(i);	--i;
			}
		}
		
		String vpJson = gson.toJson(vp);
		String speakerJson = gson.toJson(speaker);
		String audioJson = gson.toJson(audio);
		String tagsJson = gson.toJson(tags);
		String themeJson = gson.toJson(themelist);
		String regionJson = gson.toJson(regionList);
		String moreAudioJson = gson.toJson(toVpSimple(moreAudio));
		String neighViewJson = gson.toJson(toVpSimple(neighView));
		
		//將Tags的JSON數據加到audioJson中
		audioJson = audioJson.substring(0, audioJson.length()-1) + ", \"tags\":" + tagsJson +"}";
		
		//完整的Json數據
		String result = vpJson.substring(0, vpJson.length()-1) + ", \"speaker\":" + speakerJson 
				+ ", \"audio\":" + audioJson + ", \"moreAudio\":" + moreAudioJson
				+ ", \"theme\":"+ themeJson + ", \"region\":"+ regionJson + ", \"neighView\":"+ neighViewJson +"}";
		
		return result;
	}
	
	@Override
	public Map findViewpointByNameAndSt2(String name, String subtitle) {
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		Viewpoint vp = dao.findViewpointByNameAndSt(name, subtitle);
		
		//如果該景點ID不存在
		if(vp == null) return null;
		
		Speaker speaker = speakerDao.findSpeakerById(vp.getSpeakerId());
		speaker.setPassword("");
		Audio audio = audioDao.findAudioByViewpointId(vp.getId());
		List<Tag> tags = tagDao.findTagsByAudioId(audio.getId());
		
		//將主題分割，並存入List中
		String[] themes = vp.getThemeId().split(",");
		List<Theme> themelist = new ArrayList<Theme>();
		for(int i = 0; i < themes.length; i++) {
			Theme theme = themeDao.findThemeById(themes[i]);
			themelist.add(theme);
		}
		
		//找出主題對應的地區，並存入List中
		List<Region> regionList = new ArrayList<Region>();
		for(int i = 0; i < themelist.size(); i++) {
			Region region = regionDao.findRegionById(themelist.get(i).getRegionId());
			regionList.add(region);
		}
		
		List<Viewpoint> moreAudio = dao.findViewpointsByNameAndSpeaker(vp.getName(), vp.getSpeakerId());
		//設定下一段語音
		for(int i = 0; i < moreAudio.size(); i++) {
			//根據該景點的副標題，對比出下一段副標題為哪個景點
			if(moreAudio.get(i).getSubtitle().equals(vp.getSubtitle())){
				if(i+1 < moreAudio.size()) { //如果有下一段副標題，則直接設定
					vp.setNextAudio(toVpSimple(moreAudio.get(i+1)));
				} else { //如果已經是最後一段，則隨機尋找同一主題下的景點
					List<Viewpoint> temps = dao.findViewpointByThemeIdAndPublish(themelist.get(0).getId());
					//System.out.println((int)(Math.random() * temps.size()));
					if(temps.size() != 0){
						vp.setNextAudio(toVpSimple(temps.get((int)(Math.random() * temps.size()))));
					} else {
						//如果同一主題下沒有其他景點
						vp.setNextAudio(toVpSimple(vp));
					} 
				}
			}
		}
		
		//找到附近的景點
		List<Viewpoint> neighView = dao.findNeighViewpoints(vp);
		//刪除自己
		for(int i = 0; i < neighView.size(); i++) {
			if(neighView.get(i).getName().equals(vp.getName()) && neighView.get(i).getSpeakerId().equals(vp.getSpeakerId())) {
				neighView.remove(i);	--i;
			}
		}
		
		result.put("viewpoint", vp);
		result.put("speaker", speaker);
		result.put("audio", audio);
		result.put("tags", tags);
		result.put("themes", themelist);
		result.put("regions", regionList);
		result.put("moreAudio", toVpSimple(moreAudio));
		result.put("neighView", toVpSimple(neighView));
		
		return result;
	}


	@Override
	public String findViewpointSimplesByThemeId(String theme) {
		
		List<ViewpointSimple> vpsims = new ArrayList<ViewpointSimple>();
		
		//查找相同主題下的所有景點
		List<Viewpoint> vps = dao.findViewpointByThemeId(theme);
		
		vpsims = this.toVpSimple(vps);
		
		String result = gson.toJson(vpsims);

		return result;
	}

	@Override
	public void delViewpoint(String viewpointId) {
		try{
			//取得景點音檔
			Audio audio = audioDao.findAudioByViewpointId(viewpointId);
			
			//取得該景點的標記,以取得照片地址
			List<Tag> tagList = null;
			if(audio != null){
				tagList = tagDao.findTagsByAudioId(audio.getId());
			}
			//刪除景點照片
			if(tagList != null){
				for(int i = 0; i < tagList.size(); i++){
					Tag tag = tagList.get(i);
					String fileURL = ViewpointService.class.getClassLoader().getResource("../../").toURI().getPath(); 
					File file = new File(fileURL.substring(0, fileURL.length() - 1) + tag.getPhotoUrl()); 
					if(file.exists()){	file.delete(); }
					//刪除標記在資料庫中的紀錄
					tagDao.delTagById(tag.getId());
				}
			}
			
			//刪除景點音檔
			if(audio != null){
				String fileURL = ViewpointService.class.getClassLoader().getResource("../../").toURI().getPath();
				File file = new File(fileURL.substring(0, fileURL.length() - 1) + audio.getSrc()); 
				if(file.exists()){	file.delete(); }
				//刪除音檔在資料庫中的紀錄
				audioDao.delAudio(audio.getId());
			}
			
			dao.delViewpoint(viewpointId);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	@Override
	public String findAllViewpointSimples() {
		List<ViewpointSimple> vpsims = new ArrayList<ViewpointSimple>();
		
		//查找所有的景點
		List<Viewpoint> vps = dao.findAllViewpoints();
		
		vpsims = this.toVpSimple(vps);
		
		String result = gson.toJson(vpsims);
		return result;
	}

	@Override
	public void updateIsPublishById(String vpId, String stat) {
		dao.updateIsPublishById(vpId, stat);
	}

	@Override
	public void updateIsPriorityById(String vpId, String stat) {
		dao.updateIsPriorityById(vpId, stat);		
	}

	@Override
	public String findViewpointSimplesByCity(String city) {
		
		List<Viewpoint> vps = dao.findViewpointSimplesByCity(city);
		List<ViewpointSimple> vpsims = this.toVpSimple(vps);
		
		return gson.toJson(vpsims);
	}

	@Override
	public String findViewpointSimplesByTown(String town) {
		
		List<Viewpoint> vps = dao.findViewpointSimplesByTown(town);
		List<ViewpointSimple> vpsims = this.toVpSimple(vps);
		
		return gson.toJson(vpsims);
	}

	@Override
	public String findViewpointSimplesByRegionId(String regionId) {
		
		List<Viewpoint> vps = new ArrayList<Viewpoint>();
		List<Theme> themes = themeDao.findThemesByRegionId(regionId);
		
		for(int i = 0; i < themes.size(); i++){
			List<Viewpoint> temps = dao.findViewpointByThemeId(themes.get(i).getId());
			for(int j = 0; j < temps.size(); j++){
				Viewpoint vp = temps.get(j);
				vps.add(vp);
			}
		}
		
		List<ViewpointSimple> vpsims = this.toVpSimple(vps);
		
		return gson.toJson(vpsims);
	}

	@Override
	public String findViewpointSimplesByThemeIdAndPublish(String themeId) {
		List<ViewpointSimple> vpsims = new ArrayList<ViewpointSimple>();
		
		//查找相同主題下的所有景點
		List<Viewpoint> vps = dao.findViewpointByThemeIdAndPublish(themeId);
		
		vpsims = this.toVpSimple(vps);
		
		Gson gson = new Gson();
		String result = gson.toJson(vpsims);

		return result;
	}

	@Override
	public void updateIsPayById(String vpId, String stat) {
		dao.updateIsPayById(vpId, stat);
	}

	@Override
	public String findViewpointsBySpeakerId(String id) {
		return gson.toJson(dao.findViewpointsBySpeakerId(id));
	}

	@Override
	public String findViewpointSimplesBySpeaker(Speaker speaker) {
		List<Viewpoint> vps = dao.findViewpointsBySpeakerId(speaker.getId());
		
		//找出講者 旗下所有講者擁有的景點
		List<Speaker> speakers = speakerDao.findSpeakersByOwnerId(speaker.getId());
		for(Speaker sp : speakers) {
			List<Viewpoint> list = dao.findViewpointsBySpeakerId(sp.getId());
			for(Viewpoint vp : list){
				vps.add(vp);
			}
		}
		
		List<ViewpointSimple> vpsims =  this.toVpSimple(vps);
		return gson.toJson(vpsims);
	}

	@Override
	public String findViewpointSimplesByCreator(Speaker creator) {
		List<Viewpoint> vps = dao.findViewpointsByCreatorId(creator.getId());
		
		//找出創建者 旗下所有講者擁有的景點
		List<Speaker> speakers = speakerDao.findSpeakersByOwnerId(creator.getId());
		for(Speaker sp : speakers) {
			List<Viewpoint> list = dao.findViewpointsByCreatorId(sp.getId());
			for(Viewpoint vp : list){
				vps.add(vp);
			}
		}
		
		List<ViewpointSimple> vpsims =  this.toVpSimple(vps);
		return gson.toJson(vpsims);
	}

	@Override
	public String findSubtitlesById(String id) {
		Viewpoint vp = dao.findViewpointById(id);
		List<Viewpoint> vps = dao.findViewpointsByName(vp.getName());
		for(Viewpoint temp : vps){
			Audio audio = audioDao.findAudioByViewpointId(temp.getId());
			temp.setAudioId(audio.getId());
		}
		return gson.toJson(vps);
	}

	@Override
	public void updateViewpointNameById(String id, String newName) {
		Viewpoint vp = dao.findViewpointById(id);
		List<Viewpoint> vps = dao.findViewpointsByName(vp.getName());
		for(Viewpoint temp : vps){
			temp.setName(newName);
			//建立短網址
			String domain = BasicFactory.getFactory().getPropData("Domain");
			String url = domain + "view/" + temp.getName() + "_" + temp.getSubtitle() 
								+ "?utm_source=PrintAds&utm_campaign="+ temp.getName() + "_" 
								+ temp.getSubtitle();
			String shortUrl = "dailoo.com/" + shortUrlService.addShortUrl(url);
			temp.setShortUrl(shortUrl);
			
			dao.updateViewpoint(temp);
		}
	}

}
