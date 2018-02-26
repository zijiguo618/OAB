package com.example.demo.controller;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.service.DB;
import com.example.demo.utilities.Basicinfo;
import com.example.demo.utilities.Documents;
import com.example.demo.utilities.Submission;
@Controller
public class SubmissionController {
	@GetMapping("/submission")
	public String greetingForm(Model model,HttpServletRequest request) {
		model.addAttribute("submission", new Submission());
//		Documents obj=(Documents)request.getSession().getAttribute("document");
//		System.out.println(obj.toString());
		return "submission";
	}

	@PostMapping("/submission")
	public String greetingSubmit(@Valid Submission submission,BindingResult result,HttpServletRequest request) throws SQLException, ClassNotFoundException {
		System.out.println(submission.toString());
		HttpSession session = request.getSession();  
		session.setAttribute("Submission",submission); 
		DB db= new DB();
		
		if(result.hasErrors()) {
			
			return "redirect:/submission";
		}
		db.updateuserstage((int)session.getAttribute("applicationID"), "done");
//		DB db =new DB();
//		db.update2application_submission((int)session.getAttribute("applicationID"), Submission.getSignature(), Submission.getCurrentdate());
		return "redirect:/logout";
	}
}
