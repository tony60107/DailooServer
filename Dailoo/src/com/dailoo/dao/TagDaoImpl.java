package com.dailoo.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.dailoo.domain.Tag;
import com.dailoo.util.TransactionManager;

public class TagDaoImpl implements TagDao{

	@Override
	public void addTag(Tag tag) {
		
		String sql = "insert into tags (id, time, photoUrl, audioId, createTime) "
				+ "values(?,?,?,?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql,tag.getId(), tag.getTime(), tag.getPhotoUrl(), tag.getAudioId(), tag.getCreateTime());
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public List<Tag> findTagsByAudioId(String audioId) {
		
		String sql = "select * from tags where audioId = ? order by time asc, createTime asc";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Tag>(Tag.class), audioId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void delTagById(String id) {
		String sql = "delete from tags where id = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public Tag findTagById(String id) {
		String sql = "select * from tags where id = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<Tag>(Tag.class), id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void updateTagById(Tag tag) {
		String sql = "update tags set time = ? where id = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, tag.getTime(), tag.getId());
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

}
