package com.dailoo.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.dailoo.domain.Route;
import com.dailoo.domain.RouteViewpoint;
import com.dailoo.util.TransactionManager;

public class RouteDaoImpl implements RouteDao{

	@Override
	public void addRoute(Route route) {
		String sql = "insert into routes (id, name, createTime) "
				+ "values(?,?,now(3))";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, route.getId(), route.getName());
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public void delRouteViewpoointByRouteId(String routeId) {
		String sql = "delete from route_viewpoints where routeId = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, routeId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void addRouteViewpoint(RouteViewpoint vp) {
		String sql = "insert into route_viewpoints (viewpointId, routeId, sequence) "
				+ "values(?,?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, vp.getViewpointId(), vp.getRouteId(), vp.getSequence());
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public List<RouteViewpoint> getRouteViewpointsByRouteId(String routeId) {
		String sql = "select * from route_viewpoints where routeId = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<RouteViewpoint>(RouteViewpoint.class), routeId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

}
