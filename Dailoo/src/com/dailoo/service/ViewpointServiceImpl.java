package com.dailoo.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.dailoo.dao.AudioDao;
import com.dailoo.dao.RegionDao;
import com.dailoo.dao.SpeakerDao;
import com.dailoo.dao.TagDao;
import com.dailoo.dao.ThemeDao;
import com.dailoo.dao.ViewpointDao;
import com.dailoo.domain.Audio;
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

	@Override
	public void addViewpoint(Viewpoint vp) {
		vp.setId(UUID.randomUUID().toString());
		
		if(vp.getLatitude() == null || vp.getLatitude() == 0 || vp.getLongitude() == null || vp.getLongitude() == 0){
			//根據地址取得經緯度
			double [] address = GoogleMapUtils.getAdressXY(vp.getAddress());
			vp.setLatitude(address[0]);
			vp.setLongitude(address[1]);
		}
		
		//更新景點導航地址
		//https://www.google.com.tw/maps/place/龍田邱仁銘宅/@22.9038065,121.1273646,16z
		vp.setNavUrl("https://www.google.com.tw/maps/place/"+ vp.getName() +"/@" + vp.getLatitude() + "," + vp.getLongitude() + ",19z");
		
		//建立短網址
		String domain = BasicFactory.getFactory().getPropData("Domain");
		String url = domain + "viewpoint.html?utm_source=PrintAds&utm_campaign="+ vp.getName() + "_" 
						+ vp.getSubtitle() + "&id=" + vp.getId();
		String shortUrl = UrlShorterUtils.shorten(url);
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
		/*double [] address = GoogleMapUtils.getAdressXY(vp.getAddress());
		if(address[0] != 0 && address[1] != 0) {
			vp.setLatitude(address[0]);
			vp.setLongitude(address[1]);
		} else {
			Viewpoint temp = dao.findViewpointById(vp.getId());
			vp.setLatitude(temp.getLatitude());
			vp.setLongitude(temp.getLongitude());
		}*/
		
		if(vp.getLatitude() == null || vp.getLatitude() == 0 || vp.getLongitude() == null || vp.getLongitude() == 0){
			//根據地址取得經緯度
			double [] address = GoogleMapUtils.getAdressXY(vp.getAddress());
			vp.setLatitude(address[0]);
			vp.setLongitude(address[1]);
		}
		
		//更新景點導航地址
		vp.setNavUrl("https://www.google.com.tw/maps/place/"+ vp.getName() +"/@" + vp.getLatitude() + "," + vp.getLongitude() + ",16z");
				
		//更新短網址
		String domain = BasicFactory.getFactory().getPropData("Domain");
		String url = domain + "viewpoint.html?utm_source=PrintAds&utm_campaign="+ vp.getName() + "_" 
						+ vp.getSubtitle() + "&id=" + vp.getId();
		String shortUrl = UrlShorterUtils.shorten(url);
		vp.setShortUrl(shortUrl);
		
		dao.updateViewpoint(vp);
		
	}

	@Override
	public String findViewpointByIdToJson(String viewpointId) {
		
		Viewpoint vp = dao.findViewpointById(viewpointId);
		//如果該景點ID不存在
		if(vp == null) return null;
		
		Speaker speaker = speakerDao.findSpeakerById(vp.getSpeakerId());
		speaker.setPassword("");
		Audio audio = audioDao.findAudioByViewpointId(vp.getId());
		List<Tag> tags = tagDao.findTagsByAudioId(audio.getId());
		Theme theme = themeDao.findThemeById(vp.getThemeId());
		List<Viewpoint> moreAudio = dao.findViewpointsByNameAndSpeaker(vp.getName(), vp.getSpeakerId());
		List<Viewpoint> neighView = dao.findNeighViewpoints(vp);
		//找出同一地址下不同講者的景點
		List<Viewpoint> temps = dao.findViewpointByAddressNotSpeaker(vp);
		for(Viewpoint temp : temps){
			//判斷週邊景點中，是否已經有了該景點
			boolean isContain = false;
			for(int i = 0; i < neighView.size(); i++) {
				if(neighView.get(i).getId().equals(temp.getId())){
					isContain = true;
				}
			}
			//沒有該景點則新增至週邊景點
			if(!isContain){neighView.add(0, temp);}
		}
		
		
		String vpJson = gson.toJson(vp);
		String speakerJson = gson.toJson(speaker);
		String audioJson = gson.toJson(audio);
		String tagsJson = gson.toJson(tags);
		String themeJson = gson.toJson(theme);
		String moreAudioJson = gson.toJson(moreAudio);
		String neighViewJson = gson.toJson(neighView);
		
		//將Tags的JSON數據加到audioJson中
		audioJson = audioJson.substring(0, audioJson.length()-1) + ", \"tags\":" + tagsJson +"}";
		
		//完整的Json數據
		String result = vpJson.substring(0, vpJson.length()-1) + ", \"speaker\":" + speakerJson 
				+ ", \"audio\":" + audioJson + ", \"moreAudio\":" + moreAudioJson
				+ ", \"theme\":"+ themeJson + ", \"neighView\":"+ neighViewJson +"}";
		
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

}
