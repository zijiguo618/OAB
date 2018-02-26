package com.example.demo.controller;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

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
import com.example.demo.utilities.Bankaccount;
import com.example.demo.utilities.Basicinfo;
import com.example.demo.utilities.Products;
import com.example.demo.utilities.Settlement;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
public class SettlementController {

	@GetMapping("/settlement")
	public ModelAndView greetingForm(HttpServletRequest request) throws ClassNotFoundException, SQLException {

		System.out.println("Settlement get");
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("settlement");
		modelAndView.addObject(new Settlement());
		HttpSession session = request.getSession();
		int applicationid = (int) session.getAttribute("applicationID");
		modelAndView.addObject("errormessage", session.getAttribute("errormessage"));
		modelAndView.addObject("applicationID", applicationid);
		Products obj = (Products) request.getSession().getAttribute("Products");
		if (getcurrencies(obj).size() > 1) {

			modelAndView.addObject("currencysize", "1");
		}
		modelAndView.addObject("currencylist", getcurrencies(obj));
		System.out.println(obj.toString());
		System.out.println(getcurrencies(obj).toString());
		return modelAndView;
	}

	@PostMapping("/settlement")
	public ModelAndView greetingSubmit(@Valid Settlement Settlement, BindingResult result, HttpServletRequest request,
			RedirectAttributes redirectAttributes) throws ClassNotFoundException, SQLException {
		DB db = new DB();
		HttpSession session = request.getSession();
		session.setAttribute("Settlement", Settlement);
		String applicationID = String.valueOf(session.getAttribute("applicationID"));
		if (Settlement.getOtheramount() != "") {
			System.out.println("otheramount:" + Settlement.getOtheramount());
		}
		String[] basiccounty = Settlement.getCountryName().split(",");
		Settlement.setCountryCode(basiccounty[1]);
		Settlement.setCountryName(basiccounty[0]);

		if (Settlement.getStateName() != null) {
			String[] basicstate = Settlement.getStateName().split(",");
			Settlement.setStateCode(basicstate[1]);
			Settlement.setStateName(basicstate[0]);
		}
		if (Settlement.getCityName() != null) {
			String[] basiccity = Settlement.getCityName().split(",");
			Settlement.setCityCode(basiccity[1]);
			Settlement.setCityName(basiccity[0]);
		}
		if (Settlement.getCountryName().equals("United States")) {
			System.out.println("USA");
			Settlement.setWithdrawalFee("0.3");
		} else {
			Settlement.setWithdrawalFee("25");
		}
		if (Settlement.getMinAmount() == "" || Settlement.getMinAmount() == null) {
			System.out.println("minamount is null");
			Settlement.setMinAmount("0");
		} else {
			System.out.println("minamount is  not null");
		}
		System.out.println("minamount：" + Settlement.getMinAmount());
		String merCode = db.geteusermercode(applicationID);
		System.out.println("mercode:" + merCode);
		Settlement.setMerCode(merCode);

		// System.out.println(Settlement.toString());
		// if(!Settlement.getWithdrawallist().equals("Manually")) {
		// if(Settlement.getWithdrawalminimumamount().isEmpty()&&Settlement.getWithdrawalregular().isEmpty())
		// {
		// redirectAttributes.addFlashAttribute("message", "Please select your Withdrawl
		// Way");
		// return new ModelAndView("redirect:/settlement");
		// }
		// }else
		// if(Settlement.getSettlemulticurrency_CAD()==null&&Settlement.getSettlemulticurrency_EUR()==null&&Settlement.getSettlemulticurrency_GBP()==null&&Settlement.getSettlemulticurrency_HKD()==null&&Settlement.getSettlemulticurrency_JPY()==null&&Settlement.getSettlemulticurrency_USD()==null)
		// {
		// redirectAttributes.addFlashAttribute("message", "Please select your
		// settlement currency");
		// return new ModelAndView("redirect:/settlement");
		// }
		if (result.hasErrors()) {
			System.out.println("error");
			return new ModelAndView("redirect:/settlement");
		}
		ObjectMapper mapper = new ObjectMapper();
		String jsonString = null;
		try {
			jsonString = mapper.writeValueAsString(Settlement);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("jsonString:" + jsonString);
		String bodwithdrawl = "";
		String bodbank = "";
		System.out.println(db.selectfromtable(String.valueOf(session.getAttribute("applicationID")), "withdrawalWay",
				"Settlement"));
		connection co = new connection();
		String flag = db.selectfromtable(String.valueOf(session.getAttribute("applicationID")), "withdrawalWay",
				"Settlement");
		System.out.println("flag:"+flag);
		System.out.println("getbank:"+Settlement.getBank());

		// body=co.connection(Settlement.getBank(),"http://serviceweb.nihaopay.work/bank/account/save");

		if (flag == null || flag == "" || flag.isEmpty()) {
			System.out.println("productname is null");
			bodwithdrawl = co.connection(Settlement.getWithdrawl(),
					"http://serviceweb.nihaopay.work/withdrawal/setting");
			bodbank = co.connection(Settlement.getBank(), "http://serviceweb.nihaopay.work/bank/account/save");
		} else {
			System.out.println("productname is not null");
			String bankid = co.getconnection(null, "http://serviceweb.nihaopay.work/bank/account/query/" + merCode);
			System.out.println("here awr we"+bankid);
			try {
				System.out.println("here awr we2 ");
				JSONObject jsonObj = new JSONObject(bankid);
				System.out.println("jsonObj:"+jsonObj.get("data").toString());
				jsonObj = new JSONObject(jsonObj.get("data").toString().substring(1,jsonObj.get("data").toString().length()));
				System.out.println("JSON:"+jsonObj.toString());
				bankid = jsonObj.getString("id");
				System.out.println("bankid:"+bankid);
			
				bodbank = co.connection(Settlement.getBank(),
						"http://serviceweb.nihaopay.work/bank/account/update/" + bankid);
				bodwithdrawl = co.connection(Settlement.getWithdrawl(),
						"http://serviceweb.nihaopay.work/withdrawal/update");
			} catch (Exception e) {
			}
		}
		System.out.println("bodbank:"+bodbank);
		System.out.println("bodwithdrawl:"+bodwithdrawl);
		try {
//			JSONObject jsonObj = new JSONObject(body);
//			if(String.valueOf((jsonObj.get("isSuccess"))).equals("false")) {
//				System.out.println("false");
//				session.setAttribute("errormessage", jsonObj.get("msg"));
//				return new ModelAndView("redirect:/basicinfo");
//			}
			JSONObject jsonObj = new JSONObject(bodwithdrawl);
			JSONObject jsonObjbank = new JSONObject(bodbank);
			String withdrawlstatus = String.valueOf(jsonObj.getString("isSuccess"));
			String bankstatus = String.valueOf(jsonObjbank.getString("isSuccess"));
			if (withdrawlstatus.equals("false")) {
				System.out.println("withdrawl false");
				session.setAttribute("errormessage", jsonObj.get("message"));
				return new ModelAndView("redirect:/settlement");
			}
			if (bankstatus.equals("false")) {
				System.out.println("bank false");
				session.setAttribute("errormessage", jsonObjbank.get("message"));
				return new ModelAndView("redirect:/settlement");
			}
			System.out.println("mercode:"+jsonObj.get("merchantCode"));
		} catch (Exception e) {
		}

		//
		// System.out.println(Settlement.getcurrensies().toString());
		// withdrawalWay,minAmount,cycleDesc,withdrawalFee,countryName,countryCode,stateName,stateCode,cityName,cityCode,bankstreetName1,otheramount,bankName,accountHolder,accountNumber,swiftCode,routingNumber,accountCurrency,sortcode
//		db.update2application_settlement((int) session.getAttribute("applicationID"), Settlement.getWithdrawalWay(),
//				Settlement.getMinAmount(), Settlement.getCycleDesc(), Settlement.getWithdrawalFee(),
//				Settlement.getCountryName(), Settlement.getCityCode(), Settlement.getStateName(),
//				Settlement.getStateCode(), Settlement.getCityName(), Settlement.getCityCode(),
//				Settlement.getStreetName1(), Settlement.getOtheramount(), Settlement.getBankName(),
//				Settlement.getAccountHolder(), Settlement.getAccountNumber(), Settlement.getSwiftCode(),
//				Settlement.getRoutingNumber(), Settlement.getAccountCurrency(), Settlement.getSortcode());
		// db.updatestage((int)session.getAttribute("applicationID"), 4, "stage");
		try {
			db.insert2settlement(String.valueOf((int) session.getAttribute("applicationID")),
					Settlement.getWithdrawalWay(), Settlement.getMinAmount(), Settlement.getCycleDesc(),
					Settlement.getWithdrawalFee(), Settlement.getCountryName(), Settlement.getCountryCode(),
					Settlement.getStateName(), Settlement.getStateCode(), Settlement.getCityName(),
					Settlement.getCityCode(), Settlement.getZipCode(), Settlement.getStreetName1(),
					Settlement.getOtheramount(), Settlement.getBankName(), Settlement.getAccountHolder(),
					Settlement.getAccountNumber(), Settlement.getSwiftCode(), Settlement.getRoutingNumber(),
					Settlement.getAccountCurrency(), Settlement.getSortcode());
		} catch (Exception e) {
			db.update2settlement(String.valueOf((int) session.getAttribute("applicationID")),
					Settlement.getWithdrawalWay(), Settlement.getMinAmount(), Settlement.getCycleDesc(),
					Settlement.getWithdrawalFee(), Settlement.getCountryName(), Settlement.getCountryCode(),
					Settlement.getStateName(), Settlement.getStateCode(), Settlement.getCityName(),
					Settlement.getCityCode(), Settlement.getZipCode(), Settlement.getStreetName1(),
					Settlement.getOtheramount(), Settlement.getBankName(), Settlement.getAccountHolder(),
					Settlement.getAccountNumber(), Settlement.getSwiftCode(), Settlement.getRoutingNumber(),
					Settlement.getAccountCurrency(), Settlement.getSortcode());
		}
		System.out.println(Settlement.toString());
		System.out.println(Settlement.getWithdrawl().toString());
		System.out.println(Settlement.getBank().toString());
		return new ModelAndView("redirect:/uploadMulti");
	}

	public List<String> getcurrencies(Products obj) {
		List<String> xiangmu = new ArrayList<String>();
		xiangmu = Arrays.asList(obj.getCurrencys().split(","));
		return xiangmu;

	}
}
