package com.example.demo.utilities;

import java.sql.SQLException;
import java.util.List;
import java.util.Set;

import org.hibernate.validator.constraints.Length;
import org.json.JSONObject;

import com.example.demo.service.DB;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;

import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;

public class Products {

	private String merCode;
	private String productName;
	private String settleCycle = "2";
	private String cardOrgs;
	private String currencys;
	private String refundReturn = "INACTIVE"; // INACTIVE,ACTIVE
	private String easyPay; // INACTIVE,ACTIVE
	private String subscribe = "INACTIVE"; // INACTIVE,ACTIVE
	private String batchPayment = "INACTIVE"; // INACTIVE,ACTIVE
	private String offlineTopUp = "INACTIVE"; // INACTIVE,ACTIVE

	private String products;
	private String pccheck;
	private String website;
	// {
	// "merCode":"M001100310",
	// "products":"[{'productName':'UP_EBANK_PAY', 'settleCycle':3,
	// 'cardOrgs':'UNIONPAY,WECHAT', 'currencys':'JPY,USD'}]",
	// "refundReturn":"INACTIVE",
	// "easyPay":"INACTIVE",
	// "subscribe":"INACTIVE",
	// "batchPayment":"INACTIVE",
	// "offlineTopUp":"INACTIVE",
	// "withdrawal":"INACTIVE"
	// }

	public String getPccheck() {
		return pccheck;
	}

	public void setPccheck(String pccheck) {
		this.pccheck = pccheck;
	}

	public String getProductName() {
		return productName;
	}
	


	public void setProductName(String productName) {
		List<String> xiangmu = new ArrayList<String>();
		xiangmu = Arrays.asList(productName.split(","));
		if (!productName.contains("UP_EBANK_PAY")) {
			System.out.println("no online activity");
			if (this.website != null) {
				System.out.println("website:"+this.website+"   easypay:"+this.easyPay);
				xiangmu.add("UP_EBANK_PAY");
			}
		}
		Set<String> hs = new HashSet<>();
		hs.addAll(xiangmu);
		System.out.println(hs.toString());
//		xiangmu.clear();
//		xiangmu.addAll(hs);
		System.out.println(easyPay);
//		if(easyPay.contains("AC")) {
//			xiangmu.add("UP_EBANK_PAY");
//		}
		System.out.println(xiangmu.toString());
		ArrayList<String> up = new ArrayList<String>();
		for (String obj : hs) {
			ObjectMapper mapper = new ObjectMapper();
			try {
				if (obj.contains("OFFLINE") && this.cardOrgs.equals("UNIONPAY")) {
					continue;
				}
				productele p = new productele(obj, this.cardOrgs, this.currencys);
				String jsonString = mapper.writeValueAsString(p);
				up.add(jsonString);
			} catch (JsonProcessingException e) {
			}
		}
		if (!up.isEmpty()) {
			setProducts(up.toString());
		}

		this.productName = hs.toString();

	}

	public String getMerCode() {
		return merCode;
	}

	public void setMerCode(String merCode) {
		this.merCode = merCode;
	}

	public String getProducts() {
		return products;
	}

	public void setProducts(String products) {
		this.products = products;
	}

//	public Products getproduct(int ID) {
//		DB db;
//		try {
//			db = new DB();
//			this.productName = db.getitem("productName", ID,"Products");
//			this.cardOrgs = db.getitem("cardOrgs", ID,"Products");
//			this.currencys = db.getitem("currencys", ID,"Products");
//			this.easyPay = db.getitem("easyPay", ID,"Products"); // INACTIVE,ACTIVE
//		} catch (ClassNotFoundException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return this;
//	}

	public String getSettleCycle() {
		return settleCycle;
	}

	public void setSettleCycle(String settleCycle) {
		this.settleCycle = settleCycle;
	}

	public String getCardOrgs() {
		return cardOrgs;
	}

	public void setCardOrgs(String cardOrgs) {
		this.cardOrgs = cardOrgs;
	}

	public String getCurrencys() {
		return currencys;
	}

	public void setCurrencys(String currencys) {
		this.currencys = currencys;
	}

	public String getRefundReturn() {
		return refundReturn;
	}

	public void setRefundReturn(String refundReturn) {
		this.refundReturn = refundReturn;
	}

	public String getEasyPay() {
		return easyPay;
	}

	public void setEasyPay(String easyPay) {
	
		this.easyPay = easyPay;
	}

	public String getSubscribe() {
		return subscribe;
	}

	public void setSubscribe(String subscribe) {
		this.subscribe = subscribe;
	}

	public String getBatchPayment() {
		return batchPayment;
	}

	public void setBatchPayment(String batchPayment) {
		this.batchPayment = batchPayment;
	}

	public String getOfflineTopUp() {
		return offlineTopUp;
	}

	public void setOfflineTopUp(String offlineTopUp) {
		this.offlineTopUp = offlineTopUp;
	}

	public String getWithdrawal() {
		return withdrawal;
	}

	public void setWithdrawal(String withdrawal) {
		this.withdrawal = withdrawal;
	}

	private String withdrawal = "INACTIVE"; // INACTIVE,ACTIVE

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	@Override
	public String toString() {
		return "merCode=" + merCode + ", productName=" + productName + ", settleCycle=" + settleCycle + ", cardOrgs="
				+ cardOrgs + ", currencys=" + currencys + ", refundReturn=" + refundReturn + ", easyPay=" + easyPay
				+ ", subscribe=" + subscribe + ", batchPayment=" + batchPayment + ", offlineTopUp=" + offlineTopUp
				+ ", website=" + website + ", products=" + products + ", pccheck=" + pccheck + ", withdrawal="
				+ withdrawal;
	}

}
