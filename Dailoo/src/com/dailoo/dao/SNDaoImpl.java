package com.dailoo.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.dailoo.domain.SerialNumber;
import com.dailoo.domain.Tag;
import com.dailoo.util.TransactionManager;

public class SNDaoImpl implements SNDao{

	@Override
	public void addSN(SerialNumber sn) {
		String sql = "insert into serialnumbers (code, usedCount, maxUseCount, useLength, "
				+ "startTime, ownerId, viewpointId) "
				+ "values(?,?,?,?,?,?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, sn.getCode(), sn.getUsedCount(), sn.getMaxUseCount(),
					sn.getUseLength(), null, sn.getOwnerId(), sn.getViewpointId());
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public List<SerialNumber> findAllSN() {
		String sql = "select * from serialnumbers order by createTime desc";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<SerialNumber>(SerialNumber.class));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public SerialNumber findSNByCode(String code) {
		String sql = "select * from serialnumbers where code = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<SerialNumber>(SerialNumber.class), code);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void updateSN(SerialNumber sn) {
		String sql = "update serialnumbers set usedCount = ?, maxUseCount = ?, "
				+ "useLength = ?, startTime = ? where code = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, sn.getUsedCount(), sn.getMaxUseCount(), sn.getUseLength(), 
					sn.getStartTime(), sn.getCode());
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public void delSN(String code) {
		String sql = "delete from serialnumbers where code = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, code);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public List<SerialNumber> findSNByOwnerId(String ownerId) {
		String sql = "select * from serialnumbers where ownerId = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<SerialNumber>(SerialNumber.class), ownerId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

}
