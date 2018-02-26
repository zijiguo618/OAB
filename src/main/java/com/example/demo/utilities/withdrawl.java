package com.example.demo.utilities;

public class withdrawl {
	private String merCode;
	// -- AMOUNT,MANUAL,EXPRESSION;
	private String withdrawalWay;
	private String minAmount;
	private String reserveAmount="0";
	private String cycleDesc;
	private String withdrawalFee;
	//-- MERCHANT, NIHAOPAY, AGENT
	private String feePayer="MERCHANT"; 
	
	
	public String getMerCode() {
		return merCode;
	}
	public void setMerCode(String merCode) {
		this.merCode = merCode;
	}
	public String getWithdrawalWay() {
		return withdrawalWay;
	}
	public void setWithdrawalWay(String withdrawalWay) {
		this.withdrawalWay = withdrawalWay;
	}
	public String getMinAmount() {
		return minAmount;
	}
	public void setMinAmount(String minAmount) {
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
		this.cycleDesc = cycleDesc;
	}
	public String getWithdrawalFee() {
		return withdrawalFee;
	}
	public void setWithdrawalFee(String withdrawalFee) {
		this.withdrawalFee = withdrawalFee;
	}
	public String getFeePayer() {
		return feePayer;
	}
	public void setFeePayer(String feePayer) {
		this.feePayer = feePayer;
	}
	@Override
	public String toString() {
		return "withdrawl [merCode=" + merCode + ", withdrawalWay=" + withdrawalWay + ", minAmount=" + minAmount
				+ ", reserveAmount=" + reserveAmount + ", cycleDesc=" + cycleDesc + ", withdrawalFee=" + withdrawalFee
				+ ", feePayer=" + feePayer + "]";
	} 
	
	
}
