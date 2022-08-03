package com.example.jenkin_demo1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebController {
    @GetMapping("/")
    public String get()
    {
        return "Welcome In This Api";
    }
}
