package com.example.demo.controller;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.validator.internal.util.logging.Log;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LogoutController {
	@GetMapping("/logout")
	public  String LogoutForm(Model model,HttpServletRequest request, HttpServletResponse response) throws Exception {
//		request.authorizeRequests().logout();
		 Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		    if (auth != null){ 
		    	System.out.println("loging out");
		        new SecurityContextLogoutHandler().logout(request, response, auth);
		    }else {
		     	System.out.println("cannot loging out in /logout");
		    }
//		    request.gets
	
		return "redirect:/login";
	}


}
