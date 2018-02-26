package com.example.demo.utilities;

public class productele {
private String productName;
private String settleCycle="2";
private String cardOrgs;
private String currencys;

public productele() {
	
}
public productele( String productName,String cardOrgs,String currencys) {
	if(productName.contains("OFFLINE")&&cardOrgs.contains("UNIONPAY")){
		if(cardOrgs.startsWith("UNIONPAY,")) {
			this.cardOrgs=cardOrgs.substring(9);
		}
		if(cardOrgs.endsWith(",UNIONPAY")) {
			this.cardOrgs=cardOrgs.substring(0,cardOrgs.length()-9);
		}else {
		int be=cardOrgs.indexOf("UNIONPAY");
//		this.cardOrgs=cardOrgs.substring(be, be+8);
		this.cardOrgs=cardOrgs.substring(be+9)+cardOrgs.substring(0,be);
		System.out.println(this.cardOrgs);
		}
	}else {
		this.cardOrgs=cardOrgs;
	}
	
	this.productName=productName;
	
	this.currencys=currencys;
	
}

public String getProductName() {
	return productName;
}
public void setProductName(String productName) {
	this.productName = productName;
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
	if(this.cardOrgs==null)this.cardOrgs = cardOrgs;
	else if(cardOrgs==null){
		
	}else {
		this.cardOrgs +=","+cardOrgs;
	}
}
public String getCurrencys() {
	return currencys;
}
public void setCurrencys(String currencys) {
	if(this.currencys==null)this.currencys = currencys;
	else if(currencys==null){
		
	}else {
		this.currencys+=","+currencys;
	}
}

}
