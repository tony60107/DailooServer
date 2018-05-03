package com.dailoo.dao;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.dailoo.domain.SerialNumber;
import com.dailoo.domain.ShortUrl;
import com.dailoo.util.TransactionManager;

public class ShortUrlDaoImpl implements ShortUrlDao{

	@Override
	public void addShortUrl(ShortUrl url) {
		String sql = "insert into shorturls (ori, shorten) values(?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, url.getOri(), url.getShorten());
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public ShortUrl getByShorten(String shorten) {
		String sql = "select * from shorturls where shorten = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			ShortUrl result =  runner.query(sql, new BeanHandler<ShortUrl>(ShortUrl.class), shorten);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}
	
}
