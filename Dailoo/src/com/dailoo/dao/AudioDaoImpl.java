package com.dailoo.dao;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;

import com.dailoo.domain.Audio;
import com.dailoo.domain.Viewpoint;
import com.dailoo.util.TransactionManager;

public class AudioDaoImpl implements AudioDao{

	@Override
	public void addAudio(Audio audio) {
		String sql = "insert into audios (id, src, length, viewpointId)"
				+ "values(?,?,?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, audio.getId(), audio.getSrc(), audio.getLength(), audio.getViewpointId());
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public Audio findAudioByViewpointId(String viewpointId) {
		String sql = "select * from audios where viewpointId = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<Audio>(Audio.class), viewpointId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void delAudio(String id) {
		String sql = "delete from audios where id = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void updateSrcByViewpointId(Audio audio) {
		String sql = "update audios set src = ?, length = ? where viewpointId = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, audio.getSrc(), audio.getLength(), audio.getViewpointId());
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
		
	}

	@Override
	public Audio findAudioById(String id) {
		String sql = "select * from audios where id = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<Audio>(Audio.class), id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

}
