package com.dailoo.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.dailoo.dao.AudioDao;
import com.dailoo.dao.SpeakerDao;
import com.dailoo.dao.TagDao;
import com.dailoo.dao.ViewpointDao;
import com.dailoo.domain.Audio;
import com.dailoo.domain.Speaker;
import com.dailoo.domain.Tag;
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
	private Gson gson = new Gson();

	@Override
	public void addViewpoint(Viewpoint vp) {
		vp.setId(UUID.randomUUID().toString());
		
		//根據地址取得經緯度
		double [] address = GoogleMapUtils.getAdressXY(vp.getAddress());
		vp.setLatitude(address[0]);
		vp.setLongitude(address[1]);
		
		//更新景點導航地址
		//https://www.google.com.tw/maps/@22.9176907,121.1210067,16z
		vp.setNavUrl("https://www.google.com.tw/maps/@" + vp.getLatitude() + "," + vp.getLongitude() + ",16z");
		
		//建立短網址
		String domain = BasicFactory.getFactory().getPropData("Domain");
		String url = domain + "viewpoint.html?utm_source=PrintAds&utm_campaign="+ vp.getName() + "_" 
						+ vp.getSubtitle() + "#!" + vp.getId();
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
		double [] address = GoogleMapUtils.getAdressXY(vp.getAddress());
		vp.setLatitude(address[0]);
		vp.setLongitude(address[1]);
		
		//更新景點導航地址
		vp.setNavUrl("https://www.google.com.tw/maps/@" + vp.getLatitude() + "," + vp.getLongitude() + ",16z");
		
		//更新短網址
		String domain = BasicFactory.getFactory().getPropData("Domain");
		String url = domain + "viewpoint.html?utm_source=PrintAds&utm_campaign="+ vp.getName() + "_" 
						+ vp.getSubtitle() + "#!" + vp.getId();
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
		List<Viewpoint> moreAudio = dao.findViewpointsByName(vp.getName());
		
		String vpJson = gson.toJson(vp);
		String speakerJson = gson.toJson(speaker);
		String audioJson = gson.toJson(audio);
		String tagsJson = gson.toJson(tags);
		String moreAudioJson = gson.toJson(moreAudio);
		
		//將Tags的JSON數據加到audioJson中
		audioJson = audioJson.substring(0, audioJson.length()-1) + ", \"tags\":" + tagsJson +"}";
		
		//完整的Json數據
		String result = vpJson.substring(0, vpJson.length()-1) + ", \"speaker\":" + speakerJson 
				+ ", \"audio\":" + audioJson + ", \"moreAudio\":" + moreAudioJson + "}";
		
		return result;
	}

	@Override
	public String findViewpointSimplesByTheme(String theme) {
		
		List<ViewpointSimple> vpsims = new ArrayList<ViewpointSimple>();
		
		//查找相同主題下的所有景點
		List<Viewpoint> list = dao.findViewpointByTheme(theme);
		
		//遍歷所有景點
		for(int i = 0; i < list.size(); i++){

			Viewpoint vp = list.get(i);
			ViewpointSimple vpsim = new ViewpointSimple();
			
			//設定簡易版景點資訊內容
			vpsim.setId(vp.getId());
			vpsim.setName(vp.getName());
			vpsim.setSubtilte(vp.getSubtitle());
			vpsim.setTheme(vp.getTheme());
			if(vp.getBehalfPhotoUrl() != null) vpsim.setBehalfPhotoUrl(vp.getBehalfPhotoUrl());
			Speaker speaker = speakerDao.findSpeakerById(vp.getSpeakerId());
			if(speaker != null) vpsim.setSpeakerName(speaker.getName());
			Audio audio = audioDao.findAudioByViewpointId(vp.getId());
			if(audio != null) vpsim.setAudioLength(audio.getLength());

			//將簡易版景點資訊新增到List中
			vpsims.add(vpsim);
		}
		
		Gson gson = new Gson();
		String result = gson.toJson(vpsims);

		return result;
	}

	@Override
	public void delViewpoint(String viewpointId) {
		
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
				String fileURL = ViewpointService.class.getClassLoader().getResource("../../").getPath(); 
				File file = new File(fileURL.substring(0, fileURL.length() - 1) + tag.getPhotoUrl()); 
				if(file.exists()){	file.delete(); }
				//刪除標記在資料庫中的紀錄
				tagDao.delTag(tag.getId());
			}
		}
		
		//刪除景點音檔
		if(audio != null){
			String fileURL = ViewpointService.class.getClassLoader().getResource("../../").getPath(); 
			File file = new File(fileURL.substring(0, fileURL.length() - 1) + audio.getSrc()); 
			if(file.exists()){	file.delete(); }
			//刪除音檔在資料庫中的紀錄
			audioDao.delAudio(audio.getId());
		}
		
		dao.delViewpoint(viewpointId);
	}

}
