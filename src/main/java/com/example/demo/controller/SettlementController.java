package com.example.demo.controller;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

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
import com.example.demo.utilities.Bankaccount;
import com.example.demo.utilities.Basicinfo;
import com.example.demo.utilities.Products;
import com.example.demo.utilities.Settlement;

@Controller
public class SettlementController {

	@GetMapping("/settlement")
	public ModelAndView greetingForm( HttpServletRequest request) throws ClassNotFoundException, SQLException {

		System.out.println("Settlement get");
		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("settlement");
		modelAndView.addObject(new Settlement());
		HttpSession session = request.getSession();  
		int applicationid=(int)session.getAttribute("applicationID");
		modelAndView.addObject("applicationID", applicationid);
//		modelAndView.addObject("settlement", new Settlement().getsettlement(applicationid));
		Products obj=(Products)request.getSession().getAttribute("Products");
		modelAndView.addObject("currencylist", getcurrencies(obj));
		System.out.println(obj.toString());
		System.out.println(getcurrencies(obj).toString());
		return modelAndView;
	}

	@PostMapping("/settlement")
	public ModelAndView greetingSubmit(@Valid Settlement Settlement,BindingResult result,HttpServletRequest request
			,RedirectAttributes redirectAttributes) throws ClassNotFoundException, SQLException {
		DB db=new DB();
		HttpSession session = request.getSession();  
		session.setAttribute("Settlement",Settlement);  
		if(Settlement.getOtheramount()!="") {
			System.out.println("otheramount:"+Settlement.getOtheramount());
		}
		String[] basiccounty=Settlement.getCountryName().split(",");
		Settlement.setCountryCode(basiccounty[1]);
		Settlement.setCountryName(basiccounty[0]);
		if(Settlement.getStateName()!=null) {
		String[] basicstate=Settlement.getStateName().split(",");
		Settlement.setStateCode(basicstate[1]);
		Settlement.setStateName(basicstate[0]);}
		if(Settlement.getCityName()!=null) {
		String[] basiccity=Settlement.getCityName().split(",");
		Settlement.setCityCode(basiccity[1]);
		Settlement.setCityName(basiccity[0]);
		}
		
		
		
//		System.out.println(Settlement.toString());
//		if(!Settlement.getWithdrawallist().equals("Manually")) {
//			if(Settlement.getWithdrawalminimumamount().isEmpty()&&Settlement.getWithdrawalregular().isEmpty()) {
//				redirectAttributes.addFlashAttribute("message", "Please select your Withdrawl Way");
//				return new ModelAndView("redirect:/settlement");
//			}
//		}else if(Settlement.getSettlemulticurrency_CAD()==null&&Settlement.getSettlemulticurrency_EUR()==null&&Settlement.getSettlemulticurrency_GBP()==null&&Settlement.getSettlemulticurrency_HKD()==null&&Settlement.getSettlemulticurrency_JPY()==null&&Settlement.getSettlemulticurrency_USD()==null) {
//			redirectAttributes.addFlashAttribute("message", "Please select your settlement currency");
//			return new ModelAndView("redirect:/settlement");
//		}
			if(result.hasErrors()) {
			System.out.println("error");
			return new ModelAndView("redirect:/settlement");
		}
//
//			System.out.println(Settlement.getcurrensies().toString());
//			withdrawalWay,minAmount,cycleDesc,withdrawalFee,countryName,countryCode,stateName,stateCode,cityName,cityCode,bankstreetName1,otheramount,bankName,accountHolder,accountNumber,swiftCode,routingNumber,accountCurrency,sortcode
			db.update2application_settlement((int)session.getAttribute("applicationID"), Settlement.getWithdrawalWay(), Settlement.getMinAmount(), Settlement.getCycleDesc(), Settlement.getWithdrawalFee(), Settlement.getCountryName(), Settlement.getCityCode(), Settlement.getStateName(), Settlement.getStateCode(), Settlement.getCityName(), Settlement.getCityCode(), Settlement.getBankstreetName1(), Settlement.getOtheramount(), Settlement.getBankName(), Settlement.getAccountHolder(), Settlement.getAccountNumber(), Settlement.getSwiftCode(), Settlement.getRoutingNumber(), Settlement.getAccountCurrency(), Settlement.getSortcode());
			//			db.updatestage((int)session.getAttribute("applicationID"), 4, "stage");
			try{
				db.insert2settlement(String.valueOf((int)session.getAttribute("applicationID")), Settlement.getWithdrawalWay(), Settlement.getMinAmount(), Settlement.getCycleDesc(), Settlement.getWithdrawalFee(), Settlement.getCountryName(), Settlement.getCityCode(), Settlement.getStateName(), Settlement.getStateCode(), Settlement.getCityName(), Settlement.getCityCode(), Settlement.getZipCode(), Settlement.getBankstreetName1(), Settlement.getOtheramount(), Settlement.getBankName(), Settlement.getAccountHolder(), Settlement.getAccountNumber(), Settlement.getSwiftCode(),  Settlement.getRoutingNumber(), Settlement.getAccountCurrency(), Settlement.getSortcode());
			}catch(Exception e) {
				db.update2settlement(String.valueOf((int)session.getAttribute("applicationID")), Settlement.getWithdrawalWay(), Settlement.getMinAmount(), Settlement.getCycleDesc(), Settlement.getWithdrawalFee(), Settlement.getCountryName(), Settlement.getCityCode(), Settlement.getStateName(), Settlement.getStateCode(), Settlement.getCityName(), Settlement.getCityCode(), Settlement.getZipCode(), Settlement.getBankstreetName1(), Settlement.getOtheramount(), Settlement.getBankName(), Settlement.getAccountHolder(), Settlement.getAccountNumber(), Settlement.getSwiftCode(),  Settlement.getRoutingNumber(), Settlement.getAccountCurrency(), Settlement.getSortcode());
	}
		System.out.println(Settlement.toString());
		System.out.println(Settlement.getBank().toString());
		return new ModelAndView("redirect:/uploadMulti");
	}
	
	public List<String>getcurrencies(Products obj){
		List<String> xiangmu= new ArrayList<String>();
		xiangmu=Arrays.asList(obj.getCurrencys().split(","));
		return xiangmu;
		
	}
}
