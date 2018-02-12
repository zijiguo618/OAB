package com.example.demo.utilities;

import org.hibernate.validator.constraints.NotEmpty;

public class Documents {
	@NotEmpty
	private String businesslicense;
	@NotEmpty
	private String issuedid;
	@NotEmpty
	private String voidedcheck;
	@NotEmpty
	private String bankstatement;
	@NotEmpty
	private String store;
	public String getBusinesslicense() {
		return businesslicense;
	}
	public void setBusinesslicense(String businesslicense) {
		this.businesslicense = businesslicense;
	}
	public String getIssuedid() {
		return issuedid;
	}
	public void setIssuedid(String issuedid) {
		this.issuedid = issuedid;
	}
	public String getVoidedcheck() {
		return voidedcheck;
	}
	public void setVoidedcheck(String voidedcheck) {
		this.voidedcheck = voidedcheck;
	}
	public String getBankstatement() {
		return bankstatement;
	}
	public void setBankstatement(String bankstatement) {
		this.bankstatement = bankstatement;
	}
	public String getStore() {
		return store;
	}
	public void setStore(String store) {
		this.store = store;
	}
	
	@Override
	public String toString() {
		return "Documents [businesslicense=" + businesslicense + ", issuedid=" + issuedid + ", voidedcheck="
				+ voidedcheck + ", bankstatement=" + bankstatement + ", store=" + store + "]";
	}
}
