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
import com.example.demo.service.connection;
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
	public ModelAndView productsform(Model model, HttpServletRequest request)
			throws ClassNotFoundException, SQLException {

		ModelAndView modelAndView = new ModelAndView();
		HttpSession session = request.getSession();
		System.out.println("errormessage:" + session.getAttribute("errormessage") + "    merCode:"
				+ session.getAttribute("merCode"));
		int applicationid = (int) session.getAttribute("applicationID");
		modelAndView.addObject("products", new Products());
		modelAndView.addObject("errormessage", session.getAttribute("errormessage"));
		modelAndView.addObject("applicationID", applicationid);
		modelAndView.setViewName("products");
		return modelAndView;
	}

	@PostMapping("/products")
	public ModelAndView productsform(@Valid Products Products, BindingResult result, HttpServletRequest request,
			RedirectAttributes redirectAttributes) throws ClassNotFoundException, SQLException {
		HttpSession session = request.getSession();
		ObjectMapper mapper = new ObjectMapper();
		ModelAndView modelAndView = new ModelAndView();
		System.out.println("firstproduct:" + Products.toString());
		if (Products.getCurrencys() == null) {
			session.setAttribute("errormessage", "Please select currency");
			return new ModelAndView("redirect:/products");
		} else if (Products.getCardOrgs() == null) {
			session.setAttribute("errormessage", "Please select channels");
			return new ModelAndView("redirect:/products");
		} else if (Products.getWebsite().equals("https://")) {
			session.setAttribute("errormessage", "Please enter your website URL");
			return new ModelAndView("redirect:/products");
		} else if (Products.getProducts() == null) {
			session.setAttribute("errormessage", "Please select your product");
			return new ModelAndView("redirect:/products");
		}

		String Productsstr = Products.getProducts().toString();
		System.out.println("Productsstr:" + Productsstr);
		if (Productsstr.length() == 1 && ((Productsstr.contains("OFFLINE")) && Productsstr.contains("UNIONPAY"))) {
			session.setAttribute("errormessage", "Please select online product for UnionPay");
			return new ModelAndView("redirect:/products");
		}
		DB db = new DB();
		// System.out.println("website:"+Products.getWebsite());
		modelAndView.setViewName("redirect:/settlement");
		if (Products.getEasyPay() == null) {
			Products.setEasyPay("INACTIVE");
		}
		String merCode = (String) session.getAttribute("merCode");
		System.out.println("mercode" + merCode);
		Products.setMerCode(merCode);
		session.setAttribute("Products", Products);

		// System.out.println((int)session.getAttribute("applicationID"));
		System.out.println(Products.toString());

		db.update2application_product((int) session.getAttribute("applicationID"), Products.getProductName(),
				Products.getCardOrgs(), Products.getCurrencys(), Products.getEasyPay());
		//
		// List<String> xiangmu= new ArrayList<String>();
		// xiangmu=Arrays.asList(Products.getProductName().split(","));
		String body = "";
		connection co = new connection();
		if (db.selectfromtable(String.valueOf(session.getAttribute("applicationID")), "productName",
				"Products") == null) {
			System.out.println("productname is null");
			body = co.connection(Products, "http://serviceweb.nihaopay.work/product/open");
		} else {
			System.out.println("productname is not null");
			body = co.connection(Products, "http://serviceweb.nihaopay.work/product/update");
		}
		

		try {
			db.insert2product(String.valueOf((int) session.getAttribute("applicationID")), Products.getProductName(),
					Products.getCardOrgs(), Products.getCurrencys(), Products.getEasyPay(), Products.getProducts());

		} catch (Exception e) {
			db.update2product(String.valueOf((int) session.getAttribute("applicationID")), Products.getProductName(),
					Products.getCardOrgs(), Products.getCurrencys(), Products.getEasyPay(), Products.getProducts());
		}
		Products prod = Products;
		System.out.println(body);
		try {

			JSONObject jsonObj = new JSONObject(body);
		
			if(!jsonObj.getBoolean("isSuccess")) {
				session.setAttribute("errormessage", jsonObj.get("message"));
				return new ModelAndView("redirect:/products");
			}
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		// ArrayList<String> up=new ArrayList<String>();
		// ObjectMapper mapper = new ObjectMapper();
		// try {
		// for(String obj :xiangmu) {
		// prod.setProductName(obj);
		// String jsonString = mapper.writeValueAsString(prod);
		// up.add(jsonString);
		//
		// }
		// System.out.println("jsonString = " + up.toString());
		//// String jsonexpresspay=mapper.writeValueAsString(Products.getexpresspay());
		//
		// } catch (JsonProcessingException e) {
		// // TODO Auto-generated catch block
		// e.printStackTrace();}
		// System.out.println(Products.toString());
		// db.updatestage((int)session.getAttribute("applicationID"), 3, "stage");
		// JSONObject jsonObj = new JSONObject(Products.toString());
		// System.out.println(jsonObj.toString());
		session.setAttribute("errormessage","Please select a Primary account, You are welcome to add more bank accounts in TMS");
		return modelAndView;

	}

}
