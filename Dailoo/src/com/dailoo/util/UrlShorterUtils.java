package com.dailoo.util;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.HashMap;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import com.google.gson.Gson;



public class UrlShorterUtils {
	
	private static final String GOOGLE_URL_SHORT_API = "https://www.googleapis.com/urlshortener/v1/url";
	private static final String GOOGLE_API_KEY = "AIzaSyBVUeIZQXMU38Z6i6rqwi2s_QTwUQ7IoF8";
	
	public static String shorten(String longUrl) {
		 if (longUrl == null) {
		        return longUrl;
		    }else if(!longUrl.startsWith("http://") && !longUrl.startsWith("https://")){
		        longUrl = "http://"+longUrl;
		    }
		    try {
		        String json = "{\"longUrl\": \""+longUrl+"\"}";   
		        String apiURL = GOOGLE_URL_SHORT_API+"?key="+GOOGLE_API_KEY;
		         
		        HttpPost postRequest = new HttpPost(apiURL);
		        postRequest.setHeader("Content-Type", "application/json");
		        postRequest.setEntity(new StringEntity(json, "UTF-8"));
		 
		        CloseableHttpClient httpClient = HttpClients.createDefault();
		        HttpResponse response = httpClient.execute(postRequest);
		        String responseText = EntityUtils.toString(response.getEntity());           
		         
		        Gson gson = new Gson();
		        @SuppressWarnings("unchecked")
		        HashMap<String, String> res = gson.fromJson(responseText, HashMap.class);
		 
		        return res.get("id");            
		         
		    } catch (MalformedURLException e) {
		        return "error";
		    } catch (IOException e) {
		        return "error";
		    }
	}
	
	public static String getActualURLAgainstGoogleShortURL(String shortUrl){
	     
        if (shortUrl == null) {
            return shortUrl;
        }else if(!shortUrl.startsWith("http://") && !shortUrl.startsWith("https://")){
            shortUrl = "http://"+shortUrl;
        }
        try {
            String apiURL =GOOGLE_URL_SHORT_API+"?key="+GOOGLE_API_KEY + "&shortUrl=" + shortUrl;
            HttpGet getRequest = new HttpGet(apiURL);
             
            CloseableHttpClient httpClient = HttpClients.createDefault();
            HttpResponse response = httpClient.execute(getRequest);
            String responseText = EntityUtils.toString(response.getEntity());           
             
            Gson gson = new Gson();
            @SuppressWarnings("unchecked")
            HashMap<String, String> res = gson.fromJson(responseText, HashMap.class);
 
            return res.get("longUrl");           
             
        } catch (MalformedURLException e) {
            return "error";
        } catch (IOException e) {
            return "error";
        }
     }
	
	
	public static String toShortUrl(String url) {
		String key = "Dailoo"; // 网址的混合KEY
		String[] chars = { "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
				"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
				"w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
				"8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
				"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
				"W", "X", "Y", "Z" };
		String hex = MD5Utils.md5(key + url);// 对传入网址和混合KEY进行MD5加密
		String[] resUrl = new String[4];

		for (int i = 0; i < 4; i++) {
			// 把加密字符按照8位一组16进制与0x3FFFFFFF进行位与运算
			String sTempSubString = hex.substring(i * 8, i * 8 + 8);
			long lHexLong = 0x3FFFFFFF & Long.parseLong(sTempSubString, 16);
			String outChars = "";
			for (int j = 0; j < 6; j++) {
				// 把得到的值与 0x0000003D 进行位与运算，取得字符数组 chars 索引
				long index = 0x0000003D & lHexLong;
				// 把取得的字符相加
				outChars += chars[(int) index];
				// 每次循环按位右移 5 位
				lHexLong = lHexLong >> 5;
			}
			resUrl[i] = outChars;
		}

		return resUrl[0];
	}

}
