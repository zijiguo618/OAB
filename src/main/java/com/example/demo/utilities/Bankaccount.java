package com.example.demo.utilities;

import java.sql.SQLException;

import org.hibernate.validator.constraints.NotEmpty;

import com.example.demo.service.DB;

public class Bankaccount {
	private String countryName;
	private String countryCode;
	private String stateName;
	private String stateCode;
	private String cityName;
	private String cityCode;
	private String zipCode;
	private String bankstreetName1;
	private String fullName;
	private String phoneNumber;
	private String bankCode;
	private String bankName;
	private String bankBranch;
//	 -- INDIVIDUALACCOUNT,COMPANYACCOUNT,GROUP;
	private String accountType="COMPANYACCOUNT";
	private String accountHolder;
	private String accountNumber;
	private String swiftCode;
	private String routingNumber;
	private String accountCurrency;
	private String sortcode;
	private String merCode;
	public String getCountryName() {
		return countryName;
	}
	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}
	public String getCountryCode() {
		return countryCode;
	}
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	public String getStateName() {
		return stateName;
	}
	public void setStateName(String stateName) {
		this.stateName = stateName;
	}
	public String getStateCode() {
		return stateCode;
	}
	public void setStateCode(String stateCode) {
		this.stateCode = stateCode;
	}
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	public String getCityCode() {
		return cityCode;
	}
	public void setCityCode(String cityCode) {
		this.cityCode = cityCode;
	}
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	public String getBankstreetName1() {
		return bankstreetName1;
	}
	public void setBankstreetName1(String bankstreetName1) {
		this.bankstreetName1 = bankstreetName1;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getBankCode() {
		return bankCode;
	}
	public void setBankCode(String bankCode) {
		this.bankCode = bankCode;
	}
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bankName = bankName;
	}
	public String getBankBranch() {
		return bankBranch;
	}
	public void setBankBranch(String bankBranch) {
		this.bankBranch = bankBranch;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	public String getAccountHolder() {
		return accountHolder;
	}
	public void setAccountHolder(String accountHolder) {
		this.accountHolder = accountHolder;
	}
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getSwiftCode() {
		return swiftCode;
	}
	public void setSwiftCode(String swiftCode) {
		this.swiftCode = swiftCode;
	}
	public String getRoutingNumber() {
		return routingNumber;
	}
	public void setRoutingNumber(String routingNumber) {
		this.routingNumber = routingNumber;
	}
	public String getAccountCurrency() {
		return accountCurrency;
	}
	public void setAccountCurrency(String accountCurrency) {
		this.accountCurrency = accountCurrency;
	}
	public String getSortcode() {
		return sortcode;
	}
	public void setSortcode(String sortcode) {
		this.sortcode = sortcode;
	}
	public String getMercode() {
		return merCode;
	}
	public void setMercode(String mercode) {
		this.merCode = mercode;
	}
	@Override
	public String toString() {
		return "Bankaccount [countryName=" + countryName + ", countryCode=" + countryCode + ", stateName=" + stateName
				+ ", stateCode=" + stateCode + ", cityName=" + cityName + ", cityCode=" + cityCode + ", zipCode="
				+ zipCode + ", bankstreetName1=" + bankstreetName1 + ", fullName=" + fullName + ", phoneNumber=" + phoneNumber
				+ ", bankCode=" + bankCode + ", bankName=" + bankName + ", bankBranch=" + bankBranch + ", accountType="
				+ accountType + ", accountHolder=" + accountHolder + ", accountNumber=" + accountNumber + ", swiftCode="
				+ swiftCode + ", routingNumber=" + routingNumber + ", accountCurrency=" + accountCurrency
				+ ", sortcode=" + sortcode + ", mercode=" + merCode + "]";
	}
	
	
}
