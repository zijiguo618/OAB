package com.example.demo.utilities;

import java.sql.SQLException;
import java.util.ArrayList;

import org.hibernate.validator.constraints.NotEmpty;
import org.hibernate.validator.constraints.URL;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.example.demo.service.DB;
public class Basicinfo {
	DB db;
	private String abbreviation;
	private String name;
	@NotEmpty(message = "Please enter the email of Contoctor.")
	private String contactEmail; // 联系人电子邮箱
	private String merCode;
	private String countryName;
	private String stateName;
	private String cityName;
	private String countryCode;
	private String stateCode;
	private String cityCode;
	private String industry;
	private String contacttittle;
	private String comments; // 商户备注信息
	@NotEmpty()
	private String FederalID;
	@NotEmpty(message = "Please enter your mailaddress.")
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
		this.name=db.getitem("name", ID);
		this.abbreviation=db.getitem("abbreviation", ID);
		this.contactEmail=db.getitem("contactEmail", ID);
		this.contacttittle=db.getitem("tittle", ID);
		this.comments=db.getitem("comments", ID);
		this.FederalID=db.getitem("FederalID", ID);
		this.contactPerson=db.getitem("contactPerson", ID);
		this.contactPhone=db.getitem("contactPhone", ID);
		this.industry=db.getitem("industry", ID);
		this.streetName1=db.getitem("streetName1", ID);
		this.streetName2=db.getitem("streetName2", ID);
		this.contacttittle=db.getitem("contacttittle", ID);
		this.countryName=db.getitem("countryName", ID)+","+db.getitem("countryCode", ID);
		this.stateName=db.getitem("stateName", ID)+","+db.getitem("stateCode", ID);

		this.cityName=db.getitem("cityName", ID)+","+db.getitem("cityCode", ID);
		
		db.close();
		System.out.println(this.toString());
		return this;
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
	@Override
	public String toString() {
		return "Basicinfo [db=" + db + ", abbreviation=" + abbreviation + ", name=" + name + ", contactEmail="
				+ contactEmail + ", countryName=" + countryName + ", stateName=" + stateName + ", cityName=" + cityName
				+ ", countryCode=" + countryCode + ", stateCode=" + stateCode + ", cityCode=" + cityCode + ", industry="
				+ industry + ", contacttittle=" + contacttittle + ", comments=" + comments + ", FederalID=" + FederalID
				+ ", streetName1=" + streetName1 + ", streetName2=" + streetName2 + ", contactPerson=" + contactPerson
				+ ", contactPhone=" + contactPhone + "]";
	}
	

	

}