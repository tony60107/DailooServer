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
		
		String sql = "insert into viewpoints (id, name, subtitle, themeId, behalfPhotoUrl, country, city"
				+ ", town, village, address, longitude, latitude, navUrl, intro, shortUrl, speakerId) "
				+ "values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, vp.getId(), vp.getName(), vp.getSubtitle(), vp.getThemeId(), vp.getBehalfPhotoUrl(),
					vp.getCountry(), vp.getCity(), vp.getTown(), vp.getVillage(), vp.getAddress(), 
					vp.getLongitude(), vp.getLatitude(), vp.getNavUrl(), vp.getIntro(), vp.getShortUrl(), vp.getSpeakerId());
			
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
		String sql = "update viewpoints set name=?, subtitle=?, behalfPhotoUrl=?, themeId=?, country=?,"
				+ "city=?, town=?, village=?, address=?, longitude=?, latitude=?, navUrl=?,"
				+ "intro=?, shortUrl=?, speakerId=? where id=?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, vp.getName(), vp.getSubtitle(), vp.getBehalfPhotoUrl(), vp.getThemeId(), vp.getCountry(),
					vp.getCity(), vp.getTown(), vp.getVillage(), vp.getAddress(), vp.getLongitude(),
					vp.getLatitude(), vp.getNavUrl(), vp.getIntro(), vp.getShortUrl(),vp.getSpeakerId(), vp.getId());
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public List<Viewpoint> findViewpointByThemeId(String themeId) {
		String sql = "select * from viewpoints where themeId = ? order by updatetime asc";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Viewpoint>(Viewpoint.class), themeId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void delViewpoint(String viewpointId) {
		String sql = "delete from viewpoints where id = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, viewpointId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public List<Viewpoint> findViewpointsByName(String name) {
		String sql = "select * from viewpoints where name = ? order by updatetime asc";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Viewpoint>(Viewpoint.class), name);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public List<Viewpoint> findAllViewpoints() {
		String sql = "select * from viewpoints order by updatetime asc";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Viewpoint>(Viewpoint.class));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void updateIsPublishById(String vpId, String stat) {
		String sql = "update viewpoints set isPublish=? where id=?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, stat, vpId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public void updateIsPriorityById(String vpId, String stat) {
		String sql = "update viewpoints set isPriority=? where id=?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, stat, vpId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public List<Viewpoint> findViewpointSimplesByCity(String city) {
		String sql = "select * from viewpoints where city = ? order by updatetime asc";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Viewpoint>(Viewpoint.class), city);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public List<Viewpoint> findViewpointSimplesByTown(String town) {
		String sql = "select * from viewpoints where town = ? order by updatetime asc";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Viewpoint>(Viewpoint.class), town);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public List<Viewpoint> findViewpointByThemeIdAndPublish(String themeId) {
		String sql = "select * from viewpoints where themeId = ? and isPublish =?"
				+ " order by isPriority desc, updatetime asc";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Viewpoint>(Viewpoint.class), themeId, 1);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

}
