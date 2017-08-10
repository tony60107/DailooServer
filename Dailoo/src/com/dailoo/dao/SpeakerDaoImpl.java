package com.dailoo.dao;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;

import com.dailoo.domain.Speaker;
import com.dailoo.util.TransactionManager;



public class SpeakerDaoImpl implements SpeakerDao{

	@Override
	public void addSpeaker(Speaker speaker) {
		String sql = "insert into speakers (id, username, password) "
				+ "values(?,?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, speaker.getId(), speaker.getUsername(), speaker.getPassword());
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public Speaker getSpeakerByUnAndPsw(String username, String password) {

		String sql = "select * from speakers where username = ? and password = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<Speaker>(Speaker.class), username, password);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
		
	}

	@Override
	public void updateSpeakerInfo(Speaker speaker) {
		String sql = "update speakers set name=?, photoUrl=?, phoneNumber=?, homeNumber=?,"
				+ "speakerUrl=?, resume=?, intro=?, youtubeUrl=? where id=?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, speaker.getName(), speaker.getPhotoUrl(), speaker.getPhoneNumber(),
					speaker.getHomeNumber(), speaker.getSpeakerUrl(), speaker.getResume(),
					speaker.getIntro(), speaker.getYoutubeUrl(), speaker.getId());
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

}
