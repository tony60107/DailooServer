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
			String actionUrl = "http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address="
					+ address;

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

}
