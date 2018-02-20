package com.example.demo.utilities;

import org.hibernate.validator.constraints.NotEmpty;

public class Submission {
	@NotEmpty
	private String readandagree;
	@NotEmpty
	private String signature;
	@NotEmpty
	private String currentdate;
	public String getReadandagree() {
		return readandagree;
	}
	public void setReadandagree(String readandagree) {
		this.readandagree = readandagree;
	}
	public String getSignature() {
		return signature;
	}
	public void setSignature(String signature) {
		this.signature = signature;
	}
	public String getCurrentdate() {
		return currentdate;
	}
	public void setCurrentdate(String currentdate) {
		this.currentdate = currentdate;
	}
	@Override
	public String toString() {
		return "Submission [readandagree=" + readandagree + ", signature=" + signature + ", currentdate=" + currentdate
				+ "]";
	}
}
