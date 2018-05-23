package com.dailoo.dao;

import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.dailoo.domain.Speaker;
import com.dailoo.util.TransactionManager;



public class SpeakerDaoImpl implements SpeakerDao{

	@Override
	public void addSpeaker(Speaker speaker) {
		String sql = "insert into speakers (id, username, password, name, photoUrl, phoneNumber"
				+ ", homeNumber, speakerUrl, resume, intro, youtubeUrl, role, ownerId) "
				+ "values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, speaker.getId(), speaker.getUsername(), speaker.getPassword(),
					speaker.getName(),speaker.getPhotoUrl(),speaker.getPhoneNumber(), speaker.getHomeNumber(),
					speaker.getSpeakerUrl(), speaker.getResume(), speaker.getIntro(), speaker.getYoutubeUrl(),
					speaker.getRole(), speaker.getOwnerId());
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
		String sql = "update speakers set username=?, name=?, photoUrl=?, phoneNumber=?, homeNumber=?,"
				+ "speakerUrl=?, resume=?, intro=?, youtubeUrl=? where id=?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, speaker.getUsername(), speaker.getName(), speaker.getPhotoUrl(),
					speaker.getPhoneNumber(),speaker.getHomeNumber(), speaker.getSpeakerUrl(), speaker.getResume(),
					speaker.getIntro(), speaker.getYoutubeUrl(), speaker.getId());
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public Speaker findSpeakerByPhotoUrl(String photoUrl) {
		String sql = "select * from speakers where photoUrl = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<Speaker>(Speaker.class), photoUrl);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
		
	}

	@Override
	public Speaker findSpeakerById(String speakerId) {
		String sql = "select * from speakers where id = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<Speaker>(Speaker.class), speakerId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public List<Speaker> finAllSpeakers() {
		String sql = "select * from speakers order by registTime desc";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Speaker>(Speaker.class));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void delSpeakerById(String id) {
		String sql = "delete from speakers where id = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
		
	}

	@Override
	public Speaker findSpeakerByUsername(String username) {
		String sql = "select * from speakers where username = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<Speaker>(Speaker.class), username);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public List<Speaker> findSpeakersByOwnerId(String ownerId) {
		String sql = "select * from speakers where ownerId = ? order by registTime desc";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Speaker>(Speaker.class), ownerId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void resetUSNandPWD(Speaker speaker) {
		String sql = "update speakers set username=?, password=? where id=?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, speaker.getUsername(), speaker.getPassword(), speaker.getId());
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

}
