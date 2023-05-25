package com.group7.depsys;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.group7.depsys.mapper")
public class DepSysApplication {
    

    public static void main(String[] args) {
        SpringApplication.run(DepSysApplication.class, args);
    }

}
