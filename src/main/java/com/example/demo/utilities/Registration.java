package com.example.demo.utilities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
public class Registration {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@NotEmpty(message = "Please enter your first name.")
	@Size(min = 1, max = 30, message = "Your firstname should between 1 and 30 characters.")
	private String fullname;
	@NotEmpty(message = "Please enter your Email address.")
	@Email(message = "Your email address is incorrect.")
	private String email;
	@NotEmpty(message = "Please enter your password.")
	@Size(min = 1, max = 15, message = "Your password should between 6 and 5 characters.")
	private String password;

	@NotEmpty(message = "Please re-enter your password for checking.")
	@Size(min = 1, max = 15)
	private String confirmpassword;

	
	public Registration(){
		
	}
	public Registration(String fullname,String email,String password) {
		this.fullname=fullname;
		this.email=email;
		this.password=password;
		
	}
	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmpassword() {
		return confirmpassword;
	}

	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}


}
