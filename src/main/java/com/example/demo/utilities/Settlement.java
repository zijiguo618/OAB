package com.example.demo.utilities;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.hibernate.validator.constraints.NotEmpty;

import com.example.demo.service.DB;

public class Settlement {
	
	private String merCode;
//	-- AMOUNT,MANUAL,EXPRESSION;
	private String withdrawalWay; 
	private String minAmount;
	private String reserveAmount="0";
	private String cycleDesc;
	private String withdrawalFee;
//	-- MERCHANT, NIHAOPAY, AGENT;
	private String feePayer ="MERCHANT"; 

	
	
	

	private String countryName;
	private String countryCode;
	private String stateName;
	private String stateCode;
	private String cityName;
	private String cityCode;
	private String zipCode;
	private String streetName1="0000";
	private String otheramount;
	private String bankphoneNumber="000000000";
	private String bankCode="000000000";
	private String bankName;
	private String bankBranch="000000000";
//	 -- INDIVIDUALACCOUNT,COMPANYACCOUNT,GROUP;
	private String accountType="COMPANYACCOUNT";
	private String accountHolder;
	private String accountNumber;
	private String swiftCode;
	private String routingNumber;
	private String accountCurrency;
	private String sortcode;
	private Bankaccount bank = new Bankaccount();
	
	private withdrawl withdrawl=new withdrawl();
	

//
//
//	public Settlement getsettlement(int ID) {
//		DB db;
//		try {
//			db = new DB();
//			this.merCode=db.getitem("merCode", ID,"Settlement");
//			this.withdrawalWay=db.getitem("withdrawalWay", ID,"Settlement");
//			this.minAmount=db.getitem("minAmount", ID,"Settlement");
//			this.cycleDesc=db.getitem("cycleDesc", ID,"Settlement");
//			this.bankName=db.getitem("bankName", ID,"Settlement");
//			this.countryCode=db.getitem("countryCode", ID,"Settlement");
//			this.countryName=db.getitem("countryName", ID,"Settlement")+","+this.countryCode;
//			this.stateCode=db.getitem("stateCode", ID,"Settlement");
//			this.stateName=db.getitem("stateName", ID,"Settlement")+","+this.stateCode;
//			this.cityName=db.getitem("cityName", ID,"Settlement");
//			this.cityCode=db.getitem("cityCode", ID,"Settlement")+","+this.cityCode;
//			this.streetName1=db.getitem("bankstreetName1", ID,"Settlement");
//			this.otheramount=db.getitem("otheramount", ID,"Settlement");
//			this.accountHolder=db.getitem("accountHolder", ID,"Settlement");
//			this.accountNumber=db.getitem("accountNumber", ID,"Settlement");
//			this.swiftCode=db.getitem("swiftCode", ID,"Settlement");
//			this.routingNumber=db.getitem("routingNumber", ID,"Settlement");
//			this.accountCurrency=db.getitem("accountCurrency", ID,"Settlement");
//			this.sortcode=db.getitem("sortcode", ID,"Settlement");
//		} catch (ClassNotFoundException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
//		
//		
//		
//		return this;
//	}
//	
	
	
	public String getBankphoneNumber() {
		return bankphoneNumber;
	}



	public void setBankphoneNumber(String bankphoneNumber) {
		this.bankphoneNumber = bankphoneNumber;
		this.bank.setPhoneNumber(bankphoneNumber);
	}



	public withdrawl getWithdrawl() {
		return withdrawl;
	}



	public void setWithdrawl(withdrawl withdrawl) {
		this.withdrawl = withdrawl;
	}



	public String getStreetName1() {
		return streetName1;
	}



	public void setStreetName1(String streetName1) {
		this.streetName1 = streetName1;
	}



	public String getOtheramount() {
		return otheramount;
	}
	public void setOtheramount(String otheramount) {
		if(otheramount!=null) {
			this.minAmount=otheramount;
		}
		this.otheramount = otheramount;
	}
	public Bankaccount getBank() {
		return bank;
	}
	public void setBank(Bankaccount bank) {
		this.bank = bank;
	}
	public String getSortcode() {
		return sortcode;
	}
	public void setSortcode(String sortcode) {
		this.bank.setSortcode(sortcode);
		this.sortcode = sortcode;
	}
	public String getMerCode() {
	
		return merCode;
	}
	public void setMerCode(String merCode) {
		this.bank.setMerCode(merCode);
		this.withdrawl.setMerCode(merCode);
		this.merCode = merCode;
	}
	public String getWithdrawalWay() {
		return withdrawalWay;
	}
	public void setWithdrawalWay(String withdrawalWay) {
		this.withdrawalWay = withdrawalWay;
		this.withdrawl.setWithdrawalWay(withdrawalWay);
	}
	public String getMinAmount() {
		return minAmount;
	}
	public void setMinAmount(String minAmount) {
		this.withdrawl.setMinAmount(minAmount);
	
		this.minAmount = minAmount;
	}
	public String getReserveAmount() {
		return reserveAmount;
	}
	public void setReserveAmount(String reserveAmount) {
	
		this.reserveAmount = reserveAmount;
	}
	public String getCycleDesc() {
		return cycleDesc;
	}
	public void setCycleDesc(String cycleDesc) {
		this.withdrawl.setCycleDesc(cycleDesc);
		this.cycleDesc = cycleDesc;
	}
	public String getWithdrawalFee() {
		return withdrawalFee;
	}
	public void setWithdrawalFee(String withdrawalFee) {
		this.withdrawl.setWithdrawalFee(withdrawalFee);
		this.withdrawalFee = withdrawalFee;
	}
	public String getFeePayer() {
		return feePayer;
	}
	public void setFeePayer(String feePayer) {
		this.feePayer = feePayer;
	}
	public String getCountryName() {
		
		return countryName;
	}
	public void setCountryName(String countryName) {
		this.bank.setCountryName(countryName);
		this.countryName = countryName;
	}
	public String getCountryCode() {
		return countryCode;
	}
	public void setCountryCode(String countryCode) {
		this.bank.setCountryCode(countryCode);
		this.countryCode = countryCode;
	}
	public String getStateName() {
		return stateName;
	}
	public void setStateName(String stateName) {
		this.bank.setStateName(stateName);
		this.stateName = stateName;
	}
	public String getStateCode() {
		return stateCode;
	}
	public void setStateCode(String stateCode) {
		this.bank.setStateCode(stateCode);
		this.stateCode = stateCode;
	}
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.bank.setCityName(cityName);
		this.cityName = cityName;
	}
	public String getCityCode() {
		
		return cityCode;
	}
	public void setCityCode(String cityCode) {
		this.bank.setCityCode(cityCode);
		this.cityCode = cityCode;
	}
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.bank.setZipCode(zipCode);
		this.zipCode = zipCode;
	}
	
	
	public String getPhoneNumber() {
		return bankphoneNumber;
	}
	public void setPhoneNumber(String bankphoneNumber) {
		this.bank.setPhoneNumber(bankphoneNumber);
		this.bankphoneNumber = bankphoneNumber;
	}
	public String getBankCode() {
		return bankCode;
	}
	public void setBankCode(String bankCode) {
		this.bank.setBankCode(bankCode);
		this.bankCode = bankCode;
	}
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bank.setBankName(bankName);
		this.bankName = bankName;
	}
	public String getBankBranch() {
		return bankBranch;
	}
	public void setBankBranch(String bankBranch) {
		this.bank.setBankBranch(bankBranch);
		this.bankBranch = bankBranch;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.bank.setAccountType("COMPANYACCOUNT");
		this.accountType = accountType;
	}
	public String getAccountHolder() {
		return accountHolder;
	}
	public void setAccountHolder(String accountHolder) {
		this.bank.setFullName(accountHolder);
		this.accountHolder = accountHolder;
	}
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.bank.setAccountNumber(accountNumber);
		this.accountNumber = accountNumber;
	}
	public String getSwiftCode() {
		return swiftCode;
	}
	public void setSwiftCode(String swiftCode) {
		this.bank.setSwiftCode(swiftCode);
		this.swiftCode = swiftCode;
	}
	public String getRoutingNumber() {
		return routingNumber;
	}
	public void setRoutingNumber(String routingNumber) {
		if(routingNumber=="") {
			this.bank.setRoutingNumber(null);
			this.routingNumber = routingNumber;
		}else {
		this.bank.setRoutingNumber(routingNumber);
		this.routingNumber = routingNumber;
		}
	}
	public String getAccountCurrency() {
		return accountCurrency;
	}
	public void setAccountCurrency(String accountCurrency) {
		this.bank.setAccountCurrency(accountCurrency);
		this.accountCurrency = accountCurrency;
	}



	@Override
	public String toString() {
		return "Settlement [merCode=" + merCode + ", withdrawalWay=" + withdrawalWay + ", minAmount=" + minAmount
				+ ", reserveAmount=" + reserveAmount + ", cycleDesc=" + cycleDesc + ", withdrawalFee=" + withdrawalFee
				+ ", feePayer=" + feePayer + ", countryName=" + countryName + ", countryCode=" + countryCode
				+ ", stateName=" + stateName + ", stateCode=" + stateCode + ", cityName=" + cityName + ", cityCode="
				+ cityCode + ", zipCode=" + zipCode +  ", otheramount="
				+ otheramount + ", bankphoneNumber=" + bankphoneNumber + ", bankCode=" + bankCode + ", bankName="
				+ bankName + ", bankBranch=" + bankBranch + ", accountType=" + accountType + ", accountHolder="
				+ accountHolder + ", accountNumber=" + accountNumber + ", swiftCode=" + swiftCode + ", routingNumber="
				+ routingNumber + ", accountCurrency=" + accountCurrency + ", sortcode=" + sortcode + ", bank=" + bank
				+ "]";
	}

	

}
