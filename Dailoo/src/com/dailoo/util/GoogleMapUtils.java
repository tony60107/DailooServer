package com.dailoo.util;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import org.json.JSONArray;
import org.json.JSONObject;



public class GoogleMapUtils {
	
	public static double[] getAdressXY(String Address, int time) {
		URL url;
		double retXY[] = { 0, 0 };

		try {
			String address = URLEncoder.encode(Address, "utf-8");
			String actionUrl = "https://maps.googleapis.com/maps/api/geocode/json?sensor=false&address="
					+ address + "&key=AIzaSyCJIjW2-z9cgnh9rkciGazL7h3odXo44SI";

			url = new URL(actionUrl);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();

			con.setDoOutput(true);
			con.setDoInput(true);
			con.setRequestMethod("GET");
			con.setUseCaches(false);
			con.setReadTimeout(3000);
			con.setConnectTimeout(3000);

			con.setRequestProperty("Connection", "Keep-Alive");
			con.setRequestProperty("Charset", "utf-8");
			con.setRequestProperty("Content-Type",
					"application/x-www-form-urlencoded");

			DataOutputStream ds = new DataOutputStream(con.getOutputStream());

			/* 取得Response內容 */
			int retCode = con.getResponseCode();
			// System.out.println("JsonUtil retCode" + retCode);
			String inputLine = null;
			if (retCode == 200) {
				BufferedReader reader = new BufferedReader(
						new InputStreamReader(con.getInputStream(), "utf-8"));

				String strResult = "";
				while (((inputLine = reader.readLine()) != null)) {
					strResult = strResult + inputLine;
				}
				// System.out.println("strResult="+strResult);
				reader.close();

				// 解析JSON回傳結果
				JSONObject obj = new JSONObject(strResult);

				JSONArray jsonArray = obj.getJSONArray("results");
				for (int i = 0; i < jsonArray.length(); i++) {
					JSONObject obj2 = jsonArray.getJSONObject(i);
					JSONObject obj3 = obj2.getJSONObject("geometry");
					JSONObject obj4 = obj3.getJSONObject("location");
					// retString[0] = obj4.getString("lat");
					// retString[1] = obj4.getString("lng");
					retXY[0] = obj4.getDouble("lat");
					retXY[1] = obj4.getDouble("lng");

					// System.out.println("lat(經度)："+retXY[0]);
					// System.out.println("lng(緯度)："+retXY[1]);
				}
			}
			con.disconnect();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			// e.printStackTrace();
			System.out.println("getAdressXY Exception" + e.toString());
		}
		//System.out.println(retXY[0] + "," + retXY[1] + " : *************** " + time + " ************");
		if(retXY[0] == 0 || retXY[1] == 0){
			if(time > 10) return retXY;
			retXY = getAdressXY(Address, time+1);
		}
		return retXY;
	}
	
	/**
	 * 根据经纬度计算两点之间的距离 GetDistance:().
	 * 
	 * @param lat1 1点的纬度
	 * @param lng1 1点的经度
	 * @param lat2 2点的纬度
	 * @param lng2 2点的经度
	 * @return 距离 单位 米
	 **/

	private static double EARTH_RADIUS = 6378.137;// 单位千米
	public static double getDistance(double lat1, double lng1, double lat2, double lng2) {
		double radLat1 = getRadian(lat1);
		double radLat2 = getRadian(lat2);
		double a = radLat1 - radLat2;// 两点纬度差
		double b = getRadian(lng1) - getRadian(lng2);// 两点的经度差
		double s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1)
				* Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
		s = s * EARTH_RADIUS;
		return s * 1000;
	}
	
	private static double getRadian(double degree) {
		return degree * Math.PI / 180.0;
	}


}
