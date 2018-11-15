package com.dailoo.util;

import java.io.IOException;
import java.net.MalformedURLException;
import java.security.MessageDigest;
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
	
	
	public static String [] toShortUrl(String url) {
		String key = "Dailoo"; // 网址的混合KEY
		String[] chars = { "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
				"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
				"w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
				"8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
				"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
				"W", "X", "Y", "Z" };
		String hex = MD5Encode(key + url); 
	    int hexLen = hex.length(); 
	    int subHexLen = hexLen / 8; 
	    String[] ShortStr = new String[4]; 
	     
	    for (int i = 0; i < subHexLen; i++) { 
	        String outChars = ""; 
	        int j = i + 1; 
	        String subHex = hex.substring(i * 8, j * 8); 
	        long idx = Long.valueOf("3FFFFFFF", 16) & Long.valueOf(subHex, 16); 
	         
	        for (int k = 0; k < 6; k++) { 
	            int index = (int) (Long.valueOf("0000003D", 16) & idx); 
	            outChars += chars[index]; 
	            idx = idx >> 5; 
	        } 
	        ShortStr[i] = outChars; 
	    } 
	     
	    return ShortStr; 
	}
	
	public static String byteArrayToHexString(byte[] b){
		StringBuffer resultSb = new StringBuffer();
		for (int i = 0; i < b.length; i++){
			resultSb.append(byteToHexString(b[i]));
		}
		return resultSb.toString();
	}
	
	private final static String[] hexDigits = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"};
	
	private static String byteToHexString(byte b){
		int n = b;
		if (n < 0)
			n = 256 + n;
		int d1 = n / 16;
		int d2 = n % 16;
		return hexDigits[d1] + hexDigits[d2];
	}

	public static String MD5Encode(String origin){
		String resultString = null;
			try {
				
				resultString=new String(origin);
				MessageDigest md = MessageDigest.getInstance("MD5");
				
				resultString.trim();

				resultString=byteArrayToHexString(md.digest(resultString.getBytes("UTF-8")));
			}catch (Exception ex){}
			return resultString;
		}

}
