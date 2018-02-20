package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.service.EmailService;
import com.example.demo.utilities.Mail;

@SpringBootApplication
public class OnlineapplicationbetaApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineapplicationbetaApplication.class, args);
	}
	@Autowired
    private EmailService emailService;
	 public void run(ApplicationArguments applicationArguments) throws Exception {
		 	

	        Mail mail = new Mail();
	        mail.setFrom("gzjsdhr@gmail.com");
	        mail.setTo("zijiguo@iastate.edu");
	        mail.setSubject("Sending Simple Email with JavaMailSender Example");
	        mail.setContent("This tutorial demonstrates how to send a simple email using Spring Framework.");

	        emailService.sendSimpleMessage(mail);
	    }	
}
