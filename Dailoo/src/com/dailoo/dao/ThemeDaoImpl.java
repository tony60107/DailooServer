package com.dailoo.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.dailoo.domain.Theme;
import com.dailoo.util.TransactionManager;

public class ThemeDaoImpl implements ThemeDao{

	@Override
	public void addTheme(Theme theme) {
		String sql = "insert into themes (id, name, behalfPhotoUrl, regionId) values(?,?,?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, theme.getId(), theme.getName(), theme.getBehalfPhotoUrl(), theme.getRegionId());
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public List<Theme> findThemesByRegionId(String id) {
		String sql = "select * from themes where regionId = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Theme>(Theme.class), id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public Theme findThemeById(String id) {
		String sql = "select * from themes where id = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<Theme>(Theme.class), id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void delThemeById(String id) {
		String sql = "delete from themes where id = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

}
