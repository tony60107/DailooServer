package com.dailoo.dao;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;

import com.dailoo.domain.Tag;
import com.dailoo.util.TransactionManager;

public class TagDaoImpl implements TagDao{

	@Override
	public void addTag(Tag tag) {
		String sql = "insert into tags (id, time, photoUrl, audioId) "
				+ "values(?,?,?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql,tag.getId(), tag.getTime(), tag.getPhotoUrl(), tag.getAudioId());
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

}
