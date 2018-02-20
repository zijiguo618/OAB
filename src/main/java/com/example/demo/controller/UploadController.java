package com.example.demo.controller;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.service.DB;
import com.example.demo.utilities.Basicinfo;
import com.example.demo.utilities.Documents;
import com.example.demo.utilities.Products;
import com.example.demo.utilities.Settlement;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.SQLException;
import java.util.StringJoiner;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Controller
public class UploadController {

	//Save the uploaded file to this folder, the foler has to be created
    private static String UPLOADED_FOLDER =System.getProperty("user.dir")+"//upload-dir//";
    private int applicationid;
    @PostMapping("/uploadMulti")
    public String multiFileUpload(@RequestParam("files") MultipartFile[] files,@RequestParam("businessfile") MultipartFile busfile,
    		@RequestParam("issuedid") MultipartFile issuedid,@RequestParam("voidedcheck") MultipartFile voidedcheck,@RequestParam("bankstatement") MultipartFile bankstatement,
                                  RedirectAttributes redirectAttributes,HttpServletRequest request) throws ClassNotFoundException, SQLException {
    		Documents doc=new Documents();
//    		Products prod =(Products)request.getSession().getAttribute("products");
    		DB db =new DB();
    		System.out.println("applicationid:"+applicationid);
//    		System.out.println(prod.toString());
    		System.out.println(busfile.getOriginalFilename());
        StringJoiner sj = new StringJoiner(" , ");
//        if (busfile.isEmpty()) {
//            redirectAttributes.addFlashAttribute("message", "Please upload your Business license");
//            return "redirect:/uploadMulti";
//        }
//        else if (issuedid.isEmpty()) {
//            redirectAttributes.addFlashAttribute("message", "Please upload your issued ID");
//            return "redirect:/uploadMulti";
//        }
//        else if (bankstatement.isEmpty()) {
//            redirectAttributes.addFlashAttribute("message", "Please upload your Bank Statement");
//            return "redirect:/uploadMulti";
//        }

        try { 
        	try {
			Files.createDirectories(Paths.get(UPLOADED_FOLDER +"//"+applicationid+"//"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

            // Get the file and save it somewhere
            byte[] busfilebytes = busfile.getBytes();
            System.out.println(busfilebytes);
            byte[] issuedidbytes = issuedid.getBytes();
            byte[] voidedcheckbytes = voidedcheck.getBytes();
            byte[] bankstatementbytes = bankstatement.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER +"//"+applicationid+"//"+ "bsi_"+busfile.getOriginalFilename());
            Files.write(path, busfilebytes);
            doc.setBusinesslicense(path.toString());
            System.out.println(path.toString());
            path =Paths.get(UPLOADED_FOLDER +"//"+applicationid+"//" + "ID_"+issuedid.getOriginalFilename());
            Files.write(path, issuedidbytes);
            doc.setIssuedid(path.toString());
            path =Paths.get(UPLOADED_FOLDER +"//"+applicationid+"//" + "check_"+voidedcheck.getOriginalFilename());
            Files.write(path, voidedcheckbytes);
            doc.setVoidedcheck(path.toString());
            path =Paths.get(UPLOADED_FOLDER +"//"+applicationid+"//" + "bank_"+bankstatement.getOriginalFilename());
            Files.write(path, bankstatementbytes);
            doc.setBankstatement(path.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
        int countfile=0;
        for (MultipartFile file : files) {
        		
            if (file.isEmpty()) {
                continue; //next pls
            }

            try {

                byte[] bytes = file.getBytes();
                Path path = Paths.get(UPLOADED_FOLDER +"//"+applicationid+"//" +"store_"+ file.getOriginalFilename());
                Files.write(path, bytes);
                countfile++;

                sj.add(file.getOriginalFilename());

            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        System.out.println(countfile);
//        if((prod.getSecurepay_alipay()!=null||prod.getPOS_alipay()!=null||prod.getShowqrcode_alipay()!=null)&&countfile!=3) {
//		    redirectAttributes.addFlashAttribute("message", "AliPay requreid In-Store pic, Logo and Store picture.");
//            return "redirect:/uploadMulti";
//		}
        doc.setStore(sj.toString());
        System.out.println(doc.toString());
        HttpSession session = request.getSession();  
		session.setAttribute("document",doc);  

		db.update2application_fileload((int)session.getAttribute("applicationID"), doc.getBusinesslicense(), doc.getIssuedid(), doc.getVoidedcheck(), doc.getBankstatement(), doc.getStore());
//		db.updatestage((int)session.getAttribute("applicationID"), 6, "stage");
		return "redirect:/submission";


    }

    @GetMapping("/uploadMulti")
    public ModelAndView uploadMultiPage( HttpServletRequest request) {
    		HttpSession session = request.getSession();  
    		ModelAndView modelAndView = new ModelAndView();
    		modelAndView.setViewName("Document");
    	
		this.applicationid=(int)session.getAttribute("applicationID");
    		Products obj=(Products)request.getSession().getAttribute("Products");
    		if(obj.getProductName().contains("UP_EBANK_PAY")) {
    			modelAndView.addObject("online", "1");
    	
    		}else {
    			modelAndView.addObject("online", "0");
    		}
//    	System.out.println(obj.toString());
        return modelAndView;
    }
  
}