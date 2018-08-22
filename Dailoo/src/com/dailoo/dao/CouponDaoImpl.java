package com.dailoo.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.dailoo.domain.Coupon;
import com.dailoo.domain.CouponImg;
import com.dailoo.domain.CouponOrder;
import com.dailoo.domain.CouponTheme;
import com.dailoo.domain.User;
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

	@Override
	public User getUserById(String id) {
		String sql = "select * from coupon_users where id = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<User>(User.class), id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void registUser(User user) {
		String sql = "insert into coupon_users (id, name, email, type, registTime) "
				+ "values(?,?,?,?,now(3))";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, user.getId(), user.getName(), user.getEmail(), user.getType());
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public void addCouponOrder(CouponOrder order) {
		String sql = "insert into coupon_orders (id, userId, couponThemeId, status, expire) "
				+ "values(?,?,?,?,?)";
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql,order.getId(), order.getUserId(), order.getCouponThemeId(), order.getStatus(), order.getExpire());
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public void updateCouponById(Coupon cp) {
		String sql = "update coupons set name=?, discount=?, obtain=?, intro=?,"
				+ " lat=?, lng=?, address=?, category=?, "
				+ " status=?, circulation=?, usedCount=?, themeId=? where id=?";
				
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, cp.getName(), cp.getDiscount(), cp.getObtain(), cp.getIntro(),
					cp.getLat(), cp.getLng(), cp.getAddress(),
					cp.getCategory(), cp.getStatus(), cp.getCirculation(), cp.getUsedCount(), cp.getThemeId(), cp.getId());
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public List<CouponOrder> getCouponOrderByUserId(String userId) {
		String sql = "select * from coupon_orders where userId = ? and status = 0 and CURRENT_DATE() < expire";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<CouponOrder>(CouponOrder.class), userId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public CouponTheme getCouponThemesById(String id) {
		String sql = "select * from coupon_themes where id = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<CouponTheme>(CouponTheme.class), id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void updateCouponThemeById(CouponTheme theme) {
		String sql = "update coupon_themes set name=?, maxDiscount=? where id=?";
				
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, theme.getName(), theme.getMaxDiscount(), theme.getId());
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public CouponOrder getCouponOrderById(String orderId) {
		String sql = "select * from coupon_orders where id = ?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<CouponOrder>(CouponOrder.class), orderId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public void updateCouponOrderById(CouponOrder order) {
		String sql = "update coupon_orders set userId=?, couponThemeId=?, status=?, expire=? where id=?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			runner.update(sql, order.getUserId(), order.getCouponThemeId(), order.getStatus(), 
					order.getExpire(), order.getId());
		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}		
	}

	@Override
	public List<Coupon> getCoupons() {
		String sql = "select * from coupons";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanListHandler<Coupon>(Coupon.class));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public CouponTheme getCouponThemeById(String id) {
		String sql = "select * from coupon_themes where id=?";
		
		try {
			QueryRunner runner = new QueryRunner(TransactionManager.getSource());
			return runner.query(sql, new BeanHandler<CouponTheme>(CouponTheme.class), id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}



}
