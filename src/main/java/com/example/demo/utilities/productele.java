package com.example.demo.utilities;

public class productele {
private String productName;
private String settleCycle="2";
private String cardOrgs;
private String currencys;

public productele() {
	
}
public productele( String productName,String cardOrgs,String currencys) {
	
	this.productName=productName;
	this.cardOrgs=cardOrgs;
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
