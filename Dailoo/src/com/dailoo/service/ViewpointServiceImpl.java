package com.dailoo.service;

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
		Audio audio = audioDao.findAudioByViewpointId(vp.getId());
		List<Tag> tags = tagDao.findTagsByAudioId(audio.getId());
		
		String vpJson = gson.toJson(vp);
		String speakerJson = gson.toJson(speaker);
		String audioJson = gson.toJson(audio);
		String tagsJson = gson.toJson(tags);
		
		//將Tags的JSON數據加到audioJson中
		audioJson = audioJson.substring(0, audioJson.length()-1) + ", \"tags\":" + tagsJson +"}";
		System.out.println();
		
		//完整的Json數據
		String result = vpJson.substring(0, vpJson.length()-1) + ", \"speaker\":" + speakerJson 
				+ ", \"audio\":" + audioJson +"}";
		
		
		
		return result;
	}

}
