package com.example.SpringProject.Controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HomeController {
 
    @RequestMapping(path = "", name="Home.index")
    String index(){
        return "Hello Home";
    }
    
    @RequestMapping(path = "about", name = "Home.about")
    String about() {
        return "Hello about";
    }
    @RequestMapping(path="users/{userId}", method = RequestMethod.GET)
    String users(@PathVariable String userId){
        return "Welcome User " + userId;
    }
}
