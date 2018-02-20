package com.example.demo.controller;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.service.DB;
import com.example.demo.service.MD5;
import com.example.demo.utilities.Login;

@Controller
public class LoginController {
	DB db;
	 private static final String PATH = "/error";
	@GetMapping("/login")
	public ModelAndView greetingForm(Model model,HttpServletRequest request) {
		String errormessage =request.getParameter("errormessage");
	
		Login login = new Login();
//		System.out.println("login");
		ModelAndView modelAndView = new ModelAndView();
		if(errormessage==null) {
			modelAndView.addObject("errormessage", "Welcome to NihaoPay");
		}
		else {
			modelAndView.addObject("errormessage", errormessage);
//			System.out.println(errormessage);
		}
		modelAndView.addObject("login", login);
		modelAndView.setViewName("Login");
//		System.out.println(login.toString());
		return modelAndView;
	}

	@PostMapping("/login")
	public ModelAndView greetingSubmit(Login Login,BindingResult result,HttpServletRequest request) throws SQLException, ClassNotFoundException {
//		System.out.println("login post");
		ModelAndView modelAndView = new ModelAndView();
	
		db=new DB();
		modelAndView.setViewName("redirect:/basicinfo");
		HttpSession session = request.getSession();  
		session.setAttribute("Login",Login);  
		MD5 md5 = new MD5();
		int applicationid= db.getitemsidfromuser(Login.getEmail());
		String pass=db.getpass(Login.getEmail());
//		System.out.println("pas:"+pass);
		String stage =db.geteuserstage(applicationid);
		if(!stage.isEmpty()) {
			
		}
		if(stage!=null&&stage.equals("done")) {
			modelAndView.addObject("errormessage", "You've finished Registration");
			modelAndView.setViewName("redirect:/login");
		}else if(pass.equals(Login.getPassword())){
//			if(pass.equals(md5.getMD5(Login.getPassword()))){
			session.setAttribute("applicationID", applicationid);
			return modelAndView;
		}else {
			System.out.println("incorrect");
		
			modelAndView.addObject("errormessage", "Password or Email not correct");
			modelAndView.setViewName("redirect:/login");
			result.rejectValue("password",
			          "matchingPassword.registration.password",
			          "Password and Confirm Password Not match.");	    
		}
		if (result.hasErrors()) {
			System.out.println("has error");
			
		}
		return modelAndView;
//		
		
	}
//	
//	 @RequestMapping(value = PATH)
//	    public ModelAndView error() {
//		 return new ModelAndView("redirect:/login");
//	    }
//	
//	@Override
//	public String getErrorPath() {
//		// TODO Auto-generated method stub
//		return PATH;
//	}
}
