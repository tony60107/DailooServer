package com.dailoo.service;

import java.util.UUID;

import com.dailoo.dao.SpeakerDao;
import com.dailoo.domain.Speaker;
import com.dailoo.factory.BasicFactory;

public class SpeakerServiceImpl implements SpeakerService{
	
	SpeakerDao dao = BasicFactory.getFactory().getDao(SpeakerDao.class);

	@Override
	public void addSpeaker(Speaker speaker) {
		speaker.setId(UUID.randomUUID().toString());
		dao.addSpeaker(speaker);
	}

	@Override
	public Speaker getSpeakerByUnAndPsw(String username, String password) {
		return dao.getSpeakerByUnAndPsw(username, password);
	}

}
