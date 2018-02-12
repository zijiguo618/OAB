package com.example.demo.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Stack;

import org.springframework.web.servlet.ModelAndView;

public class DB {
	String myDriver = "com.mysql.jdbc.Driver";
	String myUrl = "jdbc:mysql://127.0.0.1:3306/onlineapplicationbeta?autoReconnect=true&useSSL=false&useUnicode=true&characterEncoding=utf-8";
	Connection conn;

	public DB() throws SQLException, ClassNotFoundException{
			Class.forName(myDriver);
		 conn = DriverManager.getConnection(myUrl, "root", "password");
		
	}

	public int getstage( String col, int ID) throws SQLException{
		Statement st = conn.createStatement();
		st.executeQuery("SELECT "+col+" FROM application where applicationid= "+ID); 
		ResultSet rs = st.getResultSet();
		while (rs.next()) {
		   return  rs.getInt(1);
		}
		return -1;
	}
	public String getitem( String col, int ID) throws SQLException{
		Statement st = conn.createStatement();
		st.executeQuery("SELECT "+col+" FROM application where applicationid= "+ID); 
		ResultSet rs = st.getResultSet();
		while (rs.next()) {
		   return  rs.getString(1);
		}
		return null;
	}
	
	
	public int getitemsid( String col) throws SQLException{
		Statement st = conn.createStatement();
		System.out.println("DB--------");
		st.executeQuery("SELECT applicationid FROM application where email= '"+col+"'"); 
		ResultSet rs = st.getResultSet();
		while (rs.next()) {
		   return  rs.getInt(1);
		}
		return -1;
	}
	
	public int update(int id, String value, String col) throws SQLException{
		String sql = " update application set "+ col+" = '"+value + "' where applicationid ="+id;
		PreparedStatement st = (PreparedStatement) conn.prepareStatement(sql);
		int updateEXP_done = st.executeUpdate();
		st.closeOnCompletion();
		return updateEXP_done;
	}
	public int updatestage(int id, int value, String col) throws SQLException{
		
		if(this.getstage("stage", id)<value) {
			return 0;
		}
		String sql = " update application set stage = '"+value + "' where applicationid ="+id;
		PreparedStatement st = (PreparedStatement) conn.prepareStatement(sql);
		int updateEXP_done = st.executeUpdate();
		st.closeOnCompletion();
		return updateEXP_done;
	}
	public int insert2application(String target, String str) {

		String sql = "insert into application ("+ target+") value ('"+str+"');";
		PreparedStatement st;
		try {
			st = (PreparedStatement) conn.prepareStatement(sql);
			return st.executeUpdate(); 
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return -1;
	}
	public int insert2registration(String email, String password,String fullname) {

		String sql = "insert into application (email,password,fullname) value ('"+email+"','"+password+"','"+fullname+"');";
		PreparedStatement st;
		try {
			st = (PreparedStatement) conn.prepareStatement(sql);
			return st.executeUpdate(); 
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return -1;
	}
	public int update2application(int id, String value, String col) throws SQLException{
		String sql = " update application set "+ col+" = '"+value + "' where applicationid ="+id;
		PreparedStatement st = (PreparedStatement) conn.prepareStatement(sql);
		int updateEXP_done = st.executeUpdate();
		st.closeOnCompletion();
		return updateEXP_done;
	}
	
//basicinfo.getStreetName1(),basicinfo.getStreetName2(),basicinfo.getContactPerson(),basicinfo.getContactPhone());
	public int update2application_basic(int id, String Name, String Abbreviation,String ContactEmail,String CountryName,String StateName,String CityName,String Industry,String Contacttittle,String Comments,String FederalID,String StreetName1, String StreetName2, String ContactPerson,String ContactPhone, String merchantcode) throws SQLException{
		String sql = " update application set name=?, abbreviation=?,contactEmail=?,countryName=?,stateName=?,cityName=?,industry=?,contacttittle=?,comments=?,FederalID=?,streetName1=?,streetName2=?,contactPerson=?,contactPhone=?,merCode=? where applicationid ="+id;
		System.out.println("update basicinfo");
		PreparedStatement st = (PreparedStatement) conn.prepareStatement(sql);
		st.setString(1,Name);
		st.setString(2,Abbreviation);
		st.setString(3,ContactEmail);
		st.setString(4,CountryName);
		st.setString(5,StateName);
		st.setString(6,CityName);
		st.setString(7,Industry);
		st.setString(8,Contacttittle);
		st.setString(9,Comments);
		st.setString(10,FederalID);
		st.setString(11,StreetName1);
		st.setString(12,StreetName2);
		st.setString(13, ContactPerson);
		st.setString(14, ContactPhone);
		st.setString(15, merchantcode);

		int updateEXP_done = st.executeUpdate();
	
		st.closeOnCompletion();
		System.out.println(updateEXP_done+" "+	st.toString());
		return updateEXP_done;
	}
	public int update2application_contact(int id, String contactname, String tittle,String phone,String contactemail) throws SQLException{
		String sql = " update application set contactname=?, tittle=?,phone=?,contactemail=? where applicationid ="+id;
		PreparedStatement st = (PreparedStatement) conn.prepareStatement(sql);
		st.setString(1,contactname);
		st.setString(2,tittle);
		st.setString(3,phone);
		st.setString(4,contactemail);
		int updateEXP_done = st.executeUpdate();
		st.closeOnCompletion();
		return updateEXP_done;
	}
//															withdrawalWay,minAmount,cycleDesc,withdrawalFee,countryName,countryCode,stateName,stateCode,cityName,cityCode,bankstreetName1,otheramount,bankName,accountHolder,accountNumber,swiftCode,routingNumber,accountCurrency,sortcode
	
	public int update2application_settlement(int id, String withdrawalWay, String minAmount,String cycleDesc,String withdrawalFee,String countryName,String countryCode, String stateName,String stateCode,String cityName,String cityCode,String bankstreetName1,String otheramount,String bankName,String accountHolder,String accountNumber,String swiftCode,String routingNumber,String accountCurrency,String sortcode) throws SQLException{
		String sql = " update application set withdrawalWay=?,minAmount=?,cycleDesc=?,withdrawalFee=?,countryName=?,countryCode=?,stateName=?,stateCode=?,cityName=?,cityCode=?,bankstreetName1=?,otheramount=?,bankName=?,accountHolder=?,accountNumber=?,swiftCode=?,routingNumber=?,accountCurrency=?,sortcode=? where applicationid ="+id;
		PreparedStatement st = (PreparedStatement) conn.prepareStatement(sql);
		
		st.setString(1,withdrawalWay);
		st.setString(2,minAmount);
		st.setString(3,cycleDesc);
		st.setString(4,withdrawalFee);
		st.setString(5,countryName);
		st.setString(6,countryCode);
		st.setString(7,stateName);
		st.setString(8,stateCode);
		st.setString(9,cityName);
		st.setString(10,cityCode);
		st.setString(11,bankstreetName1);
		st.setString(12,otheramount);
		st.setString(13,bankName);
		st.setString(14,accountHolder);
		st.setString(15,accountNumber);
		st.setString(16,swiftCode);
		st.setString(17,routingNumber);
		st.setString(18,accountCurrency);
		st.setString(19,sortcode);
		
		
		int updateEXP_done = st.executeUpdate();
		st.closeOnCompletion();
		return updateEXP_done;
	}
	public int update2application_bankacoount(int id, String bankcurrency, String bankaddress,String bankname,String bankaccountname,String bankaccountnumber,String swiftcode,String routingnumber,String accounttype) throws SQLException{
		String sql = " update application set bankcurrency=?, bankaddress=?,bankname=?,bankaccountname=?,bankaccountnumber=?,swiftcode=?,routingnumber=?,accounttype=? where applicationid ="+id;
		PreparedStatement st = (PreparedStatement) conn.prepareStatement(sql);
		st.setString(1,bankcurrency);
		st.setString(2,bankaddress);
		st.setString(3,bankname);
		st.setString(4,bankaccountname);
		st.setString(5,bankaccountnumber);
		st.setString(6,swiftcode);
		st.setString(7,routingnumber);
		st.setString(8,accounttype);
		int updateEXP_done = st.executeUpdate();
		st.closeOnCompletion();
		return updateEXP_done;
	}
	
	
	public int update2application_fileload(int id, String businessfile, String issuedid,String voidedcheck,String bankstatement,String storepic) throws SQLException{
		String sql = " update application set businessfile=?, issuedid=?,voidedcheck=?,bankstatement=?,storepic=? where applicationid ="+id;
		PreparedStatement st = (PreparedStatement) conn.prepareStatement(sql);
		st.setString(1,businessfile);
		st.setString(2,issuedid);
		st.setString(3,voidedcheck);
		st.setString(4,bankstatement);
		st.setString(5,storepic);
	
		int updateEXP_done = st.executeUpdate();
		st.closeOnCompletion();
		return updateEXP_done;
	}
	
	
	public int update2application_submission(int id, String signature, String currentdate) throws SQLException{
		String sql = " update application set signature=?, currentdate=? where applicationid ="+id;
		PreparedStatement st = (PreparedStatement) conn.prepareStatement(sql);
		st.setString(1,signature);
		st.setString(2,currentdate);
	
	
		int updateEXP_done = st.executeUpdate();
		st.closeOnCompletion();
		return updateEXP_done;
	}
	
	
	public int update2application_product(int id, String productName, String cardOrgs,String currencys,String easyPay) throws SQLException{
		String sql = "";
		
		sql = " update application set productName=?, cardOrgs=?,currencys=?,easyPay=? where applicationid ="+id;

		PreparedStatement st = (PreparedStatement) conn.prepareStatement(sql);
		st.setString(1,productName);		
		st.setString(2,cardOrgs);		
		st.setString(3,currencys);		
		st.setString(4,easyPay);		
		
		int updateEXP_done = st.executeUpdate();
		st.closeOnCompletion();
		return updateEXP_done;
	}
	
	public void close() {
		try {
			this.conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
//	public String delete(int id, String html, String AC) throws SQLException{
//		
//	}
//	public String select(int id, String html, String AC) throws SQLException{
//		
//	}
	
	
}
