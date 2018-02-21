package com.example.demo.controller;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.reporsitory.*;
import com.example.demo.service.DB;
import com.example.demo.service.EmailService;
import com.example.demo.service.MD5;
import com.example.demo.utilities.Mail;
import com.example.demo.utilities.Registration;

@Controller
public class RegistrationController {
//	@Autowired
//	private RegistrationRepository userRepository;
	@Autowired
    private EmailService emailService;
	@GetMapping("/registration")
	public ModelAndView showRegistration(Model model,HttpServletRequest request) {
		HttpSession session = request.getSession();  
		String message = (String) session.getAttribute("message");
		Registration registration = new Registration();
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("registration", registration);
		modelAndView.addObject("message", message);
		modelAndView.setViewName("registration");
		return modelAndView;
	}
	@PostMapping("/registration")
	public ModelAndView processRegistration(@Valid Registration registration,
			BindingResult result, HttpServletRequest request) throws ClassNotFoundException, SQLException {
		DB db=new DB();

	    HttpSession session = request.getSession();  
		session.setAttribute("registration",registration);  
		System.out.println(registration.getEmail()+","+registration.getPassword()+","+registration.getFullname());
		session.setAttribute("message", "0");  
		if (!(registration.getPassword()).equals(registration.getConfirmpassword())) {
			session.setAttribute("message", "2");  
			result.rejectValue("password",
		          "matchingPassword.registration.password",
		          "Password and Confirm Password Not match.");
		    }
		if (result.hasErrors()) {
			return new ModelAndView("registration");
		}
		

//		userRepository.save(registration);
		MD5 md5 = new MD5();
		
	int status=	db.insert2registration(registration.getEmail(),registration.getPassword(),registration.getFullname());
	
	status=db.insert2user(registration.getEmail(),md5.getMD5(registration.getPassword()),registration.getFullname());
	if(status==-1) {
		ModelAndView modelv =new ModelAndView("redirect:/registration");
		session.setAttribute("message", "1");  
		 return modelv;
	}
	
	int userid=db.getitemsidfromuser(registration.getEmail());
	db.updateuserstage(userid, "0");
	System.out.println(status);
	try {
		send(registration.getEmail());
	} catch (Exception e) {
		// TODO Auto-generated catch block
		System.out.println("failed email");
		e.printStackTrace();
	}
	return new ModelAndView("redirect:/login");
	} 
	public void send(String receiver) throws Exception {
	 	

        Mail mail = new Mail();
        mail.setFrom("gzjsdhr@gmail.com");
        mail.setTo(receiver);
        mail.setSubject("Confirm Email with NihaoPay Onlineapplication");
        mail.setContent("This email to confirm you've registered NihaoPay account with this Email.");

        emailService.sendSimpleMessage(mail);
    }	

}