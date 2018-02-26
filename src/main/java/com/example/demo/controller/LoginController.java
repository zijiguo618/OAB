package com.example.demo.controller;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
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
import com.example.demo.service.EmailService;
import com.example.demo.service.MD5;
import com.example.demo.service.connection;
import com.example.demo.utilities.Login;
import com.example.demo.utilities.Mail;

@Controller
public class LoginController implements ErrorController{
	DB db;
	 private static final String PATH = "/error";
	 	
	@GetMapping("/login")
	public ModelAndView greetingForm(Model model,HttpServletRequest request) {
		
		HttpSession session = request.getSession();  
		String errormessage =(String) session.getAttribute("errormessage");
		Login login = new Login();
//		System.out.println("login");
		ModelAndView modelAndView = new ModelAndView();
		if(errormessage==null) {
			modelAndView.addObject("errormessage", "0");
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
//		modelAndView.setViewName("redirect:/products");
		HttpSession session = request.getSession();  
		session.setAttribute("errormessage", "0");
		session.setAttribute("Login",Login);  
		MD5 md5 = new MD5();
		int applicationid= db.getitemsidfromuser(Login.getEmail());
		String pass=db.getpass(Login.getEmail());
//		System.out.println("pas:"+pass);
		connection con =new connection();
		
		String stage =db.geteuserstage(applicationid);
		if(stage==null) {
			session.setAttribute("errormessage", "3");
			
			modelAndView.setViewName("redirect:/login");
		}else if(stage.equals("done")) {
			session.setAttribute("errormessage", "1");
			
			modelAndView.setViewName("redirect:/login");
		}else if(pass.equals(Login.getPassword())){
//			if(pass.equals(md5.getMD5(Login.getPassword()))){
			session.setAttribute("applicationID", applicationid);
			return modelAndView;
		}else {
			System.out.println("incorrect");
			session.setAttribute("errormessage", "2");
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
	
	 @RequestMapping(value = PATH)
	    public ModelAndView error() {
		 return new ModelAndView("redirect:/login");
	    }
	@Override
	public String getErrorPath() {
		// TODO Auto-generated method stub
		return PATH;
	}
}
