package com.example.jenkin_demo1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@EnableEurekaClient
public class JenkinDemo1Application {

	public static void main(String[] args) {
		SpringApplication.run(JenkinDemo1Application.class, args);
		System.out.println("heloo jenkin!!!!!!");
	}

}
