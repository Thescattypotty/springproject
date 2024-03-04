package com.example.SpringProject.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
 
    @RequestMapping("/")
    String Home(){
        return "Hello world";
    }
}
