package com.group7.depsys.controller;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.group7.depsys.entity.PlacePoint;
import com.group7.depsys.mapper.PlacePointMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class PlacePointController {

    @Autowired
    private PlacePointMapper placePointMapper;




    @GetMapping("/selectPointType/{type}")
    public String getPlaces(@PathVariable("type") String type){

        return placePointMapper.selectAllPlaces(type).getJsonBuildObject();
    }

}
