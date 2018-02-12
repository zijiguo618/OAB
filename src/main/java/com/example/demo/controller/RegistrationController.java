package com.example.demo.controller;

import java.sql.SQLException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import org.springframework.validation.Errors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.service.DB;
import com.example.demo.utilities.Registration;

@Controller
public class RegistrationController {
	@GetMapping("/registration")
	public ModelAndView showRegistration(Model model,HttpServletRequest request) {
		Registration registration = new Registration();
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("registration", registration);
		modelAndView.setViewName("registration");
		return modelAndView;
	}
	@PostMapping("/registration")
	public ModelAndView processRegistration(@Valid Registration registration,
			BindingResult result, HttpServletRequest request) throws ClassNotFoundException, SQLException {
		DB db=new DB();
		if (!(registration.getPassword()).equals(registration.getConfirmpassword())) {
			result.rejectValue("password",
		          "matchingPassword.registration.password",
		          "Password and Confirm Password Not match.");
		    }
		if (result.hasErrors()) {
			return new ModelAndView("registration");
		}
	    HttpSession session = request.getSession();  
		session.setAttribute("registration",registration);  
		System.out.println(registration.getEmail()+","+registration.getPassword()+","+registration.getFullname());
	int status=	db.insert2registration(registration.getEmail(),registration.getPassword(),registration.getFullname());
	System.out.println(status);
	return new ModelAndView("redirect:/login");
	}
}