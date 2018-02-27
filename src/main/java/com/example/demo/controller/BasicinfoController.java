package com.example.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.SQLException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.websocket.Session;

import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.json.JSONObject;
import com.example.demo.service.DB;
import com.example.demo.service.connection;
import com.example.demo.utilities.Basicinfo;
import com.example.demo.utilities.MCClist;
import com.example.demo.utilities.Products;
import com.example.demo.utilities.Registration;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
public class BasicinfoController {
	@GetMapping("/basicinfo")
	public ModelAndView showRegistration(HttpServletRequest request) throws SQLException, ClassNotFoundException {
		System.out.println("confirm access");
	
		HttpSession session = request.getSession();
		ModelAndView modelAndView = new ModelAndView();
		int applicationid = (int) session.getAttribute("applicationID");
		Basicinfo basicinfo = new Basicinfo().getbasicinfo(applicationid);
	
		modelAndView.addObject("basicinfo",basicinfo);
		modelAndView.addObject("errormessage",session.getAttribute("errormessage"));
		System.out.println("errormessage:"+session.getAttribute("errormessage"));
		modelAndView.addObject("industry", getlist());
		modelAndView.addObject("applicationID", applicationid);
		modelAndView.setViewName("index");
		
		return modelAndView;
	}

	@PostMapping("/basicinfo")
	public ModelAndView processRegistration(@Valid Basicinfo basicinfo,BindingResult result,HttpServletRequest request,RedirectAttributes redirectAttributes) throws SQLException, ClassNotFoundException {
		ModelAndView modelAndView = new ModelAndView();
		DB db = new DB();
		HttpSession session = request.getSession();
		System.out.println("confirm button");

		String[] basiccounty=basicinfo.getCountryName().split(",");
		if(basiccounty[1].equals("000")) {
			basicinfo.setCountryCode(null);
			basicinfo.setCountryName(null);
		}else {
		basicinfo.setCountryCode(basiccounty[1]);
		basicinfo.setCountryName(basiccounty[0]);}
		if(basicinfo.getStateName()!=null&&!basicinfo.getStateName().equals("State,000")) {
		String[] basicstate=basicinfo.getStateName().split(",");
		basicinfo.setStateCode(basicstate[1]);
		basicinfo.setStateName(basicstate[0]);}
		if(basicinfo.getCityName()!=null&&!basicinfo.getCityName().equals("City,000")) {
		String[] basiccity=basicinfo.getCityName().split(",");
		basicinfo.setCityCode(basiccity[1]);
		basicinfo.setCityName(basiccity[0]);
		}

		session.setAttribute("basicinfo", basicinfo);
		modelAndView.setViewName("redirect:/products");
		System.out.println(basicinfo.toString());
		 ObjectMapper mapperObj = new ObjectMapper();
		 String applicationID =String.valueOf(session.getAttribute("applicationID"));
		 	connection co= new connection();
		 	String body="";
			System.out.println("session:"+applicationID);
			String merCode=db.geteusermercode(applicationID);
			System.out.println(merCode);
//			String merCode="M001100436";
			if(merCode==null) {
				System.out.println("mercode is null");
				body=co.connection(basicinfo,"http://serviceweb.nihaopay.work/merchant/info/save");
			}else {
				System.out.println("mercode is not null");
				body=co.connection(basicinfo,"http://serviceweb.nihaopay.work/merchant/info/update/"+merCode);
			}
			System.out.println("Body:"+body.toString());	
		try {
			JSONObject jsonObj = new JSONObject(body);
			if(String.valueOf((jsonObj.get("isSuccess"))).equals("false")) {
				System.out.println("false");
				session.setAttribute("errormessage", jsonObj.get("message"));
				return new ModelAndView("redirect:/basicinfo");
			}
			jsonObj = new JSONObject(jsonObj.get("data").toString());
			merCode=jsonObj.get("merchantCode").toString();
			System.out.println(jsonObj.get("merchantCode"));
		}catch(Exception e) {}
		db.updateuseritem(applicationID, "mercode", merCode);
		session.setAttribute("merCode", merCode);
		try {
			db.insert2basic(applicationID, basicinfo.getName(), basicinfo.getAbbreviation(),  basicinfo.getContactEmail(), merCode, basicinfo.getCountryName(), basicinfo.getStateName(), basicinfo.getCityName(), basicinfo.getCountryCode(), basicinfo.getStateCode(), basicinfo.getCityCode(),  basicinfo.getIndustry(), basicinfo.getContacttittle(),  basicinfo.getComments(), basicinfo.getFederalID(), basicinfo.getStreetName1(), basicinfo.getStreetName2(), basicinfo.getContactPerson(),  basicinfo.getContactPhone());

		}catch(Exception e) {
			db.update2basic(applicationID, basicinfo.getName(), basicinfo.getAbbreviation(),  basicinfo.getContactEmail(), merCode, basicinfo.getCountryName(), basicinfo.getStateName(), basicinfo.getCityName(), basicinfo.getCountryCode(), basicinfo.getStateCode(), basicinfo.getCityCode(),  basicinfo.getIndustry(), basicinfo.getContacttittle(),  basicinfo.getComments(), basicinfo.getFederalID(), basicinfo.getStreetName1(), basicinfo.getStreetName2(), basicinfo.getContactPerson(),  basicinfo.getContactPhone());
			
		}
//		db.updatestage((int)session.getAttribute("applicationID"), 1, "stage");

		session.setAttribute("errormessage", "Please fill out your GateWay Setting");
//		session.setAttribute("errormessage",null);
		return modelAndView;
	}
	public Map<String, String> getlist() {
		Map<String, String> result = new LinkedHashMap<String, String>();
		result.put("", "Select Industry");
		result.put("Internet", "Internet / eCommerce");
		result.put("Electronic", "Electronic");
		result.put("Automotive", "Automotive");
		result.put("Education", "Education & School");
		result.put("Tourism", "Tourism & travel");
		result.put("Beauty", "Beauty & Health Care");
		result.put("Resturant", "Resturant & Food");
		result.put("Retail", "Retail");
		result.put("Jewelry", "Jewelry");
		result.put("Toys", "Baby products & Toys");
		result.put("Entertainment", "Entertainment, music & games");
		result.put("Sports", "Sports & Outdoors");
		result.put("Fashion", "Fashion");
		result.put("Professional", "Professional Services");
		result.put("Business", "Business Services");
		result.put("Government", "Government Services");
		result.put("Other", "Other");
		return result;
	}
	
	
}
