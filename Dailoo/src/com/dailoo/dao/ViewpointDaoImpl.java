package com.dailoo.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.dailoo.domain.Speaker;
import com.dailoo.domain.Viewpoint;
import com.dailoo.util.TransactionManager;

public class ViewpointDaoImpl implements ViewpointDao{

	@Override
	public void addViewpoint(Viewpoint vp) {
		
		String sql = "insert into viewpoints (id, name, subtitle, theme, country, city, town, village,"
				+ "address, longitude, latitude, navUrl, intro, shortUrl, speakerId) "
				+ "values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, vp.getId(), vp.getName(), vp.getSubtitle(), vp.getTheme(), vp.getCountry(), 
					vp.getCity(), vp.getTown(), vp.getVillage(), vp.getAddress(), vp.getLongitude(),
					vp.getLatitude(), vp.getNavUrl(), vp.getIntro(), vp.getShortUrl(), null);
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public Viewpoint findViewpointByNameAndSt(String name, String subtitle) {
		
		String sql = "select * from viewpoints where name = ? and subtitle = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<Viewpoint>(Viewpoint.class), name, subtitle);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public Viewpoint findViewpointById(String id) {
		String sql = "select * from viewpoints where id = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<Viewpoint>(Viewpoint.class), id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void updateViewpoint(Viewpoint vp) {
		String sql = "update viewpoints set name=?, subtitle=?, theme=?, country=?,"
				+ "city=?, town=?, village=?, address=?, longitude=?, latitude=?, navUrl=?,"
				+ "intro=?, shortUrl=? where id=?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, vp.getName(), vp.getSubtitle(), vp.getTheme(), vp.getCountry(),
					vp.getCity(), vp.getTown(), vp.getVillage(), vp.getAddress(), vp.getLongitude(),
					vp.getLatitude(), vp.getNavUrl(), vp.getIntro(), vp.getShortUrl(), vp.getId());
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public List<Viewpoint> findViewpointByTheme(String theme) {
		String sql = "select * from viewpoints where theme = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Viewpoint>(Viewpoint.class), theme);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

}
