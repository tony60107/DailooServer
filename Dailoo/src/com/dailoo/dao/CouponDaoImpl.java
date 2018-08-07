package com.dailoo.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.dailoo.domain.Coupon;
import com.dailoo.domain.CouponImg;
import com.dailoo.domain.CouponTheme;
import com.dailoo.util.TransactionManager;

public class CouponDaoImpl implements CouponDao{

	@Override
	public void addCoupon(Coupon cp) {
		String sql = "insert into coupons (id, name, discount, obtain, intro, lat, lng, address, category, "
				+ "status, circulation, usedCount, themeId) "
				+ "values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, cp.getId(), cp.getName(), cp.getDiscount(), cp.getObtain(), cp.getIntro(),
					cp.getLat(), cp.getLng(), cp.getAddress(),
					cp.getCategory(), cp.getStatus(), cp.getCirculation(), cp.getUsedCount(), cp.getThemeId());
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
		
	}

	@Override
	public void addCouponTheme(CouponTheme theme) {
		
		String sql = "insert into coupon_themes (id, name, addTime) "
				+ "values(?,?,now(3))";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, theme.getId(), theme.getName());
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
		
	}

	@Override
	public List<CouponTheme> getCouponThemes() {
		String sql = "select * from coupon_themes";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<CouponTheme>(CouponTheme.class));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public List<Coupon> getCouponsByThemeId(String themeId) {
		String sql = "select * from coupons where themeId LIKE ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Coupon>(Coupon.class),"%" + themeId + "%");
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void addCouponImg(CouponImg img) {
		String sql = "insert into coupon_imgs (id, src, couponId, updateTime) "
				+ "values(?,?,?,now(3))";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, img.getId(), img.getSrc(), img.getCouponId());
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public List<CouponImg> getImgsByCouponId(String couponId) {
		String sql = "select * from coupon_imgs where couponId = ? ";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<CouponImg>(CouponImg.class), couponId);
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public CouponImg getCouponImgById(String couponImgId) {
		String sql = "select * from coupon_imgs where id = ? ";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<CouponImg>(CouponImg.class), couponImgId);
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public void delCouponImgById(String couponImgId) {
		String sql = "delete from coupon_imgs where id = ?";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, couponImgId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public Coupon getCouponById(String id) {
		String sql = "select * from coupons where id = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<Coupon>(Coupon.class), id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

}
