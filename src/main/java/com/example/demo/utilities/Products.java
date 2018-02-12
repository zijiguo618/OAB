package com.example.demo.utilities;

import java.sql.SQLException;
import java.util.List;

import org.hibernate.validator.constraints.Length;
import org.json.JSONObject;

import com.example.demo.service.DB;

import java.util.ArrayList;
import java.util.Arrays;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;

public class Products {
	
	private String productName;
	private String settleCycle="2";
	private String cardOrgs;
	private String currencys;
	private String refundReturn ="INACTIVE"; //INACTIVE,ACTIVE
	private String easyPay; //INACTIVE,ACTIVE
	private String subscribe="INACTIVE"; //INACTIVE,ACTIVE
	private String batchPayment="INACTIVE"; //INACTIVE,ACTIVE
	private String offlineTopUp="INACTIVE"; //INACTIVE,ACTIVE
	private String website="http://nihaopay.com";
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		List<String> xiangmu= new ArrayList<String>();
		xiangmu=Arrays.asList(productName.split(","));
		for(String obj :xiangmu) {
			if(this.productName==null)this.productName = obj;
			else if(obj==null){
			}else if(!(this.productName.contains(obj))) {
				this.productName+=","+obj;
			}
		}
	}
	
	public Products getproduct(int ID) {
			DB db;
			try {
				db = new DB();
				  this.productName=db.getitem("productName", ID);
				  this.cardOrgs=db.getitem("cardOrgs", ID);
				  this.currencys=db.getitem("currencys", ID);
				  this.easyPay=db.getitem("easyPay", ID); //INACTIVE,ACTIVE
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return this;
	}
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
	private String withdrawal="INACTIVE"; //INACTIVE,ACTIVE
	@Override
	public String toString() {
		return "Products [productName=" + productName + ", settleCycle=" + settleCycle + ", cardOrgs=" + cardOrgs
				+ ", currencys=" + currencys + ", refundReturn=" + refundReturn + ", easyPay=" + easyPay
				+ ", subscribe=" + subscribe + ", batchPayment=" + batchPayment + ", offlineTopUp=" + offlineTopUp
				+ ", website=" + website + ", withdrawal=" + withdrawal + "]";
	}
	
}
