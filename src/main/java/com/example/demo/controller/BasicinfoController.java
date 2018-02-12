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

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.service.DB;
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
		Basicinfo basicinfo = new Basicinfo();
		HttpSession session = request.getSession();
		ModelAndView modelAndView = new ModelAndView();
		if(session.getAttribute("basicinfo")!=null) {
			System.out.println("did not log out");
			System.out.println(((Basicinfo)session.getAttribute("basicinfo")).toString());
		}else{
			System.out.println("New User");
		}
		int applicationid = (int) session.getAttribute("applicationID");
		modelAndView.addObject("basicinfo", basicinfo.getbasicinfo(applicationid));
		modelAndView.addObject("industry", getlist());
		modelAndView.addObject("applicationID", applicationid);
		modelAndView.setViewName("index");
		
		return modelAndView;
	}

	@PostMapping("/basicinfo")
	public ModelAndView processRegistration(@Valid Basicinfo basicinfo,BindingResult result,HttpServletRequest request,RedirectAttributes redirectAttributes) throws SQLException, ClassNotFoundException {
		ModelAndView modelAndView = new ModelAndView();
		DB db = new DB();
		System.out.println("confirm button");

		String[] basiccounty=basicinfo.getCountryName().split(",");
		basicinfo.setCountryCode(basiccounty[1]);
		basicinfo.setCountryName(basiccounty[0]);
		if(basicinfo.getStateName()!=null) {
		String[] basicstate=basicinfo.getStateName().split(",");
		basicinfo.setStateCode(basicstate[1]);
		basicinfo.setStateName(basicstate[0]);}
		if(basicinfo.getCityName()!=null) {
		String[] basiccity=basicinfo.getCityName().split(",");
		basicinfo.setCityCode(basiccity[1]);
		basicinfo.setCityName(basiccity[0]);
		}
	
		
		if (result.hasErrors()) {
			System.out.println("errors happreed");
			MCClist mcclist= new MCClist();
			modelAndView.addObject("mcclist", mcclist.getlist());
			modelAndView.addObject("industry", getlist());
			modelAndView.setViewName("index");
			return modelAndView;
		}
		HttpSession session = request.getSession();
		session.setAttribute("basicinfo", basicinfo);
		modelAndView.setViewName("redirect:/products");
		System.out.println(basicinfo.toString());
		
		String merCode="1";
		db.update2application_basic((int)session.getAttribute("applicationID"), basicinfo.getName(), basicinfo.getAbbreviation(), basicinfo.getContactEmail(), basicinfo.getCountryName(), basicinfo.getStateName(), basicinfo.getCityName(), basicinfo.getIndustry(), basicinfo.getContacttittle(), basicinfo.getComments(), basicinfo.getFederalID(), basicinfo.getStreetName1(), basicinfo.getStreetName2(), basicinfo.getContactPerson(), basicinfo.getContactPhone(),merCode);
		db.updatestage((int)session.getAttribute("applicationID"), 1, "stage");
		return modelAndView;
	}
	public Map<String, String> getlist() {
		Map<String, String> result = new LinkedHashMap<String, String>();
		result.put("", "");
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
