package com.example.demo.utilities;

import java.sql.SQLException;
import java.util.ArrayList;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import org.hibernate.validator.constraints.URL;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.example.demo.service.DB;
public class Basicinfo {
//	M001100424
//	{"abbreviation":"legal name",
//		"name":"DBA name",
//		"contactEmail":"onlineapplication@g.com",
//		"merCode":null,
//		"countryName":"United States",
//		"stateName":"Alabama",
//		"cityName":"Alabaster",
//		"countryCode":"001",
//		"stateCode":"AL",
//		"cityCode":"Alabaster",
//		"industry":"Internet",
//		"contacttittle":"Tittle",
//		"comments":"Description",
//		"streetName1":"1377 sandia Avenue","streetName2":"",
//		"contactPerson":"Contact Name",
//		"contactPhone":"Contact number",
//		"federalID":"California","contactittle":"Tittle", 
//		"branchId" :"a2532b43-cd01-46bf-bbdb-57c3bd16dcb2",
//		"merchantProperty": "CORPORATION","website":"https://nihaopay.com",
//		"merchantType":"COMPANYACCOUNT","mcc":"0000"}
	DB db;
	@NotEmpty(message = "Please enter the Company Legal Name.")
	private String abbreviation;
	@NotEmpty(message = "Please enter the Company DBA Name.")
	private String name;
	@NotEmpty(message = "Please enter your Email address.")
	@Email(message = "Your email address is incorrect.")
	private String contactEmail; // 联系人电子邮箱
	private String merCode;
	private String countryName;
	private String stateName;
	private String cityName;
	private String countryCode;
	private String stateCode;
	private String cityCode;
	
	private String website="https://nihaopay.com";
	private String branchId ="a2532b43-cd01-46bf-bbdb-57c3bd16dcb2";
	private String merchantProperty= "CORPORATION";
	private String merchantType="COMPANYACCOUNT";
	private String mcc= "0000";
	@NotEmpty(message = "Please select the Industry.")
	private String industry;
	@NotEmpty(message = "Please enter the Contact Tittle.")
	private String contacttittle;
	@NotEmpty(message = "Please enter the Description of your business.")
	private String comments; // 商户备注信息
	@NotEmpty(message = "Please enter the Tax ID")
	private String FederalID;
	@NotEmpty(message = "Please enter your Company address.")
	private String streetName1;
	private String streetName2;
	@NotEmpty(message = "Please enter Contactor.")
	private String contactPerson; // 联系人
	@NotEmpty(message = "Please enter the phone of Contoctor.")
	private String contactPhone; // 联系人电话
	
	public String getMerCode() {
		return merCode;
	}

	public void setMerCode(String merCode) {
		this.merCode = merCode;
	}

	public Basicinfo getbasicinfo(int ID) throws ClassNotFoundException, SQLException {
		db=new DB();		
		this.name=db.getitem("name", ID,"Basicinfo");
		this.abbreviation=db.getitem("abbreviation", ID,"Basicinfo");
		this.contactEmail=db.getitem("contactEmail", ID,"Basicinfo");
		this.contacttittle=db.getitem("contacttittle", ID,"Basicinfo");
		this.comments=db.getitem("comments", ID,"Basicinfo");
		this.FederalID=db.getitem("FederalID", ID,"Basicinfo");
		this.contactPerson=db.getitem("contactPerson", ID,"Basicinfo");
		this.contactPhone=db.getitem("contactPhone", ID,"Basicinfo");
		this.industry=db.getitem("industry", ID,"Basicinfo");
		this.streetName1=db.getitem("streetName1", ID,"Basicinfo");
		this.streetName2=db.getitem("streetName2", ID,"Basicinfo");
		
		this.countryName=db.getitem("countryName", ID,"Basicinfo");
		this.stateName=db.getitem("stateName", ID,"Basicinfo");
		this.cityName=db.getitem("cityName", ID,"Basicinfo");
		
		db.close();
		System.out.println(this.toString());
		return this;
	}
	
	public boolean getclassstatus() {
		return this.name==null||this.abbreviation==null||this.contactEmail==null;
		
	}
	
	public String getContacttittle() {
		return contacttittle;
	}
	public void setContacttittle(String contacttittle) {
		this.contacttittle = contacttittle;
	}
	public String getContactittle() {
		return contacttittle;
	}
	public void setContactittle(String contacttittle) {
		this.contacttittle = contacttittle;
	}
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	public String getAbbreviation() {
		return abbreviation;
	}
	public void setAbbreviation(String abbreviation) {
		this.abbreviation = abbreviation;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContactEmail() {
		return contactEmail;
	}
	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}
	public String getCountryName() {
		return countryName;
	}
	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}
	public String getStateName() {
		return stateName;
	}
	public void setStateName(String stateName) {
		this.stateName = stateName;
	}
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	public String getCountryCode() {
		return countryCode;
	}
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	public String getStateCode() {
		return stateCode;
	}
	public void setStateCode(String stateCode) {
		this.stateCode = stateCode;
	}
	public String getCityCode() {
		return cityCode;
	}
	public void setCityCode(String cityCode) {
		this.cityCode = cityCode;
	}

	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public String getFederalID() {
		return FederalID;
	}
	public void setFederalID(String federalID) {
		FederalID = federalID;
	}
	public String getStreetName1() {
		return streetName1;
	}
	public void setStreetName1(String streetName1) {
		this.streetName1 = streetName1;
	}
	public String getStreetName2() {
		return streetName2;
	}
	public void setStreetName2(String streetName2) {
		this.streetName2 = streetName2;
	}
	public String getContactPerson() {
		return contactPerson;
	}
	public void setContactPerson(String contactPerson) {
		this.contactPerson = contactPerson;
	}
	public String getContactPhone() {
		return contactPhone;
	}
	public void setContactPhone(String contactPhone) {
		this.contactPhone = contactPhone;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getBranchId() {
		return branchId;
	}

	public void setBranchId(String branchId) {
		this.branchId = branchId;
	}

	public String getMerchantProperty() {
		return merchantProperty;
	}

	public void setMerchantProperty(String merchantProperty) {
		this.merchantProperty = merchantProperty;
	}

	public String getMerchantType() {
		return merchantType;
	}

	public void setMerchantType(String merchantType) {
		this.merchantType = merchantType;
	}

	public String getMcc() {
		return mcc;
	}

	public void setMcc(String mcc) {
		this.mcc = mcc;
	}

	@Override
	public String toString() {
		return "Basicinfo [abbreviation=" + abbreviation + ", name=" + name + ", contactEmail=" + contactEmail
				+ ", merCode=" + merCode + ", countryName=" + countryName + ", stateName=" + stateName + ", cityName="
				+ cityName + ", countryCode=" + countryCode + ", stateCode=" + stateCode + ", cityCode=" + cityCode
				+ ", website=" + website + ", branchId=" + branchId + ", merchantProperty=" + merchantProperty
				+ ", merchantType=" + merchantType + ", mcc=" + mcc + ", industry=" + industry + ", contacttittle="
				+ contacttittle + ", comments=" + comments + ", FederalID=" + FederalID + ", streetName1=" + streetName1
				+ ", streetName2=" + streetName2 + ", contactPerson=" + contactPerson + ", contactPhone=" + contactPhone
				+ "]";
	}

	

}