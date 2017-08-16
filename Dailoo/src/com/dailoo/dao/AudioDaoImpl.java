package com.dailoo.dao;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;

import com.dailoo.domain.Audio;
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

}
