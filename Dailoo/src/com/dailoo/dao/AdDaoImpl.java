package com.dailoo.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.dailoo.domain.Ad;
import com.dailoo.domain.Viewpoint;
import com.dailoo.util.TransactionManager;

public class AdDaoImpl implements AdDao{

	@Override
	public void addAd(Ad ad) {
		String sql = "insert into ads (id, name, imgurl, href, count, maxCount, regionId)"
				+ "values(?,?,?,?,?,?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, ad.getId(), ad.getName(), ad.getImgurl(),ad.getHref(), ad.getCount(), ad.getMaxCount(), ad.getRegionId());
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public Ad findAdByRegionId(String regionId) {
		String sql = "select * from ads where count < maxCount and regionId=? ORDER BY RAND() LIMIT 1";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, regionId, new BeanHandler<Ad>(Ad.class));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public List<Ad> findAllAd() {
		String sql = "select * from ads ";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Ad>(Ad.class));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public Ad findAdById(String id) {
		String sql = "select * from ads where id = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, id, new BeanHandler<Ad>(Ad.class));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void updateAdInfo(Ad ad) {
		String sql = "update ads set name=?, imgurl=?, href=?, count=?, maxCount=?, regionId=? where id = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, ad.getName(), ad.getImgurl(), ad.getHref(),ad.getCount(), ad.getMaxCount(),ad.getRegionId(), ad.getId());
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}				
	}

	@Override
	public void delAdById(String id) {
		String sql = "delete from ads where id = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

}
