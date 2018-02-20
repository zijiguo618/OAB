package com.example.demo.controller;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.service.DB;
import com.example.demo.utilities.Basicinfo;
import com.example.demo.utilities.Products;
import com.example.demo.utilities.productele;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;
@Controller
public class ProductsController {
	@GetMapping("/products")
	public ModelAndView productsform(Model model,HttpServletRequest request) throws ClassNotFoundException, SQLException {

		ModelAndView modelAndView = new ModelAndView();
		HttpSession session = request.getSession();  
		int applicationid=(int)session.getAttribute("applicationID");
		Products prod =new Products().getproduct(applicationid);
		if(session.getAttribute("Products")!=null) {
			System.out.println("did not log out");
			System.out.println(((Products)session.getAttribute("Products")).toString());
		}else{
			System.out.println("New User");
		}
		
		modelAndView.addObject("products", new Products());
		modelAndView.addObject("applicationID", applicationid);
		modelAndView.setViewName("products");
//		System.out.println(prod.toString());
		return modelAndView;
	}


	@PostMapping("/products")
	public ModelAndView productsform(@Valid Products Products,BindingResult result,HttpServletRequest request,
			RedirectAttributes redirectAttributes) throws ClassNotFoundException, SQLException {
	
		ModelAndView modelAndView = new ModelAndView();
		DB db =new DB();

		modelAndView.setViewName("redirect:/settlement");
		HttpSession session = request.getSession();  

		session.setAttribute("Products",Products);  
//		System.out.println((int)session.getAttribute("applicationID"));
		System.out.println(Products.toString());
		
			db.update2application_product((int)session.getAttribute("applicationID"), Products.getProductName(),  Products.getCardOrgs(), Products.getCurrencys(), Products.getEasyPay());
//			db.update((int)session.getAttribute("applicationID"), Products.getExpresspay_unionpay(), "expresspay_unionpay");
//			db.update2application_product((int)session.getAttribute("applicationID"), "POS", Products.getPOScurrency_USD(), Products.getPOScurrency_JPY(), Products.getPOScurrency_HKD(), Products.getPOScurrency_EUR(), Products.getPOScurrency_GBP(), Products.getPOScurrency_CAD(),Products.getPOS_settlement());
//			db.update((int)session.getAttribute("applicationID"), Products.getPOS_unionpay(), "POS_unionpay");
//			db.update((int)session.getAttribute("applicationID"), Products.getPOS_wechatpay(), "POS_wechatpay");
//			db.update((int)session.getAttribute("applicationID"), Products.getPOS_alipay(), "POS_alipay");
//			db.update2application_product((int)session.getAttribute("applicationID"), "securepay", Products.getSecurepaycurrency_USD(), Products.getSecurepaycurrency_JPY(), Products.getSecurepaycurrency_HKD(), Products.getSecurepaycurrency_EUR(), Products.getSecurepaycurrency_GBP(), Products.getSecurepaycurrency_CAD(),Products.getSecurepay_settlement());
//			db.update((int)session.getAttribute("applicationID"), Products.getSecurepay_unionpay(), "securepay_unionpay");
//			db.update((int)session.getAttribute("applicationID"), Products.getSecurepay_wechatpay(), "securepay_wechatpay");
//			db.update((int)session.getAttribute("applicationID"), Products.getSecurepay_alipay(), "securepay_alipay");
//			db.update2application_product((int)session.getAttribute("applicationID"), "showqrcode", Products.getShowqrcodecurrency_USD(), Products.getShowqrcodecurrency_JPY(), Products.getShowqrcodecurrency_HKD(), Products.getShowqrcodecurrency_EUR(), Products.getShowqrcodecurrency_GBP(), Products.getShowqrcodecurrency_CAD(),Products.getSecurepay_settlement());
//			db.update((int)session.getAttribute("applicationID"), Products.getShowqrcode_wechatpay(), "showqrcode_wechatpay");
//			db.update((int)session.getAttribute("applicationID"), Products.getShowqrcode_alipay(), "showqrcode_alipay");
		
//		List<String> xiangmu= new ArrayList<String>();
//		xiangmu=Arrays.asList(Products.getProductName().split(","));
			
			try {
				db.insert2product(String.valueOf((int)session.getAttribute("applicationID")), Products.getProductName(), Products.getCardOrgs(), Products.getCurrencys(), Products.getEasyPay(), Products.getProducts());

						}catch(Exception e) {
			db.update2product(String.valueOf((int)session.getAttribute("applicationID")), Products.getProductName(), Products.getCardOrgs(), Products.getCurrencys(), Products.getEasyPay(), Products.getProducts());
			}
		Products prod = Products;
		System.out.println(prod.getProducts());
//		ArrayList<String> up=new ArrayList<String>();
//ObjectMapper mapper = new ObjectMapper();
//try {
//	for(String obj :xiangmu) {
//		prod.setProductName(obj);
//		String jsonString = mapper.writeValueAsString(prod);
//		up.add(jsonString);
//		
//	}
//	System.out.println("jsonString = " + up.toString());
////	String jsonexpresspay=mapper.writeValueAsString(Products.getexpresspay());
//	
//} catch (JsonProcessingException e) {
//	// TODO Auto-generated catch block
//	e.printStackTrace();}
//		System.out.println(Products.toString());
//		db.updatestage((int)session.getAttribute("applicationID"), 3, "stage");
//		JSONObject jsonObj = new JSONObject(Products.toString());
//		System.out.println(jsonObj.toString());
		return modelAndView;
	
	}

}
