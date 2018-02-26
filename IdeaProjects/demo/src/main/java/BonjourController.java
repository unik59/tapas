package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/bonjour")
public class BonjourController {

    @Autowired
    PdfGenaratorUtil pdfGenaratorUtil;

    @RequestMapping(method = RequestMethod.GET)
    public void afficherBonjour(final ModelMap pModel) {

        Map<String,String> data = new HashMap<String,String>();
        data.put("name","James");
        try {
            pdfGenaratorUtil.createPdf("templates1",data);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}