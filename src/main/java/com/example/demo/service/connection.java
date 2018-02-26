package com.example.demo.service;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class connection {

	
	public String connection(Object body,String url) {
		String jsonStr = null;
		ObjectMapper mapperObj = new ObjectMapper();
		System.out.println(body.toString());
		RestTemplate rt = new RestTemplate();
		HashMap<String,String> resultmaps=null;
	    HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.add("Content-Type", "application/json; charset=UTF-8");
		try {
			jsonStr = mapperObj.writeValueAsString(body);
			 resultmaps = new ObjectMapper().readValue(jsonStr, HashMap.class);
		} catch (JsonProcessingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(jsonStr);
		HttpEntity<Map<String, String>> requestEntity = new HttpEntity<Map<String, String>>(resultmaps, httpHeaders);
		ResponseEntity<String> resp = rt.exchange(url,HttpMethod.POST,requestEntity, String.class);
		List<String> val = resp.getHeaders().get("Set-Cookie");
		System.out.println("val:"+val);
//		获得返回值
		String content = resp.getBody();
		System.out.println("Body:"+body.toString());	
		return content;
		
	}
	
	public String getconnection(Object body,String url) {
//		String jsonStr = null;
//		ObjectMapper mapperObj = new ObjectMapper();
		RestTemplate rt = new RestTemplate();
		HashMap<String,String> resultmaps=null;
	    HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.add("Content-Type", "application/json; charset=UTF-8");
//		try {
//			jsonStr = mapperObj.writeValueAsString(body);
//			 resultmaps = new ObjectMapper().readValue(jsonStr, HashMap.class);
//		} catch (JsonProcessingException e1) {
//			// TODO Auto-generated catch block
//			e1.printStackTrace();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		System.out.println(jsonStr);
		HttpEntity<Map<String, String>> requestEntity = new HttpEntity<Map<String, String>>(resultmaps, httpHeaders);
		ResponseEntity<String> resp = rt.exchange(url,HttpMethod.GET,requestEntity, String.class);
		List<String> val = resp.getHeaders().get("Set-Cookie");
		System.out.println("val:"+val);
//		获得返回值
		String content = resp.getBody();
//		System.out.println("Body:"+body.toString());	
		return content;
		
	}
}
