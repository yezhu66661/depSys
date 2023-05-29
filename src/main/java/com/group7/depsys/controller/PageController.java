package com.group7.depsys.controller;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.group7.depsys.entity.Comment;
import com.group7.depsys.entity.Indicator;
import com.group7.depsys.entity.User;
import com.group7.depsys.mapper.CommentMapper;
import com.group7.depsys.mapper.UserMapper;
import com.group7.depsys.mapper.ZoneMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@CrossOrigin
public class PageController {


    @Autowired
    private ZoneMapper zoneMapper;


    @Autowired
    private UserMapper userMapper;

    @Autowired
    private CommentMapper commentMapper;


    //the homepage of our website
    @RequestMapping("/homepage")
    public String HomePage(){
        return "Home";
    }



    //if user input "IP address: 8080/", it will redirect to the main homepage.
    @RequestMapping("/")
    public String redirct(){
        return "redirect:/homepage";
    }


    @DS("mysql")
    @RequestMapping("/area")
    public String Area(@RequestParam(name="zid",defaultValue = "100001") int zid, @RequestParam(name="id",defaultValue = "-1") int id,Model model) throws JsonProcessingException {
        model.addAttribute("zoneData",attrs(zid).toString());
//        model.addAttribute("bound",getZoneBound(zid));
        model.addAttribute("zid",zid);
        if(id>0) {
            QueryWrapper<User> queryWrapper=new QueryWrapper<>();
            queryWrapper.eq("id",id);
            User user=userMapper.selectOne(queryWrapper);
            model.addAttribute("user",user);
        }
        else{
            model.addAttribute("user",null);
        }
//        QueryWrapper<Comment> queryWrapper=new QueryWrapper<>();
//        queryWrapper.eq("zid",zid);
//        List<Comment> comments=commentMapper.selectComments(zid);
//        comments.forEach(e->e.setContent(e.getContent().replace("'","\\'")));
//        ObjectMapper objectMapper=new ObjectMapper();
//        String json=objectMapper.writeValueAsString(comments);
//        System.err.println(comments.toString());
//        System.err.println(json);
//        model.addAttribute("comment",json);
        return "area";
    }




    public String getZoneBound(int zid){
        List<Integer> queryData=new ArrayList<>();
        queryData.add(zid);
        return zoneMapper.selectRecomZone(queryData).getJsonBuildObject();
    }


    @DS("mysql")
    public List<Integer> attrs(int zid){
        List<Integer> indexes=new ArrayList<>();
        List<Indicator> indicators=zoneMapper.selectAttrs(zid);
        for (Indicator indicator:
                indicators) {
            indexes.add((int)indicator.getRank());
        }
        return indexes;
    }


    @RequestMapping("/login")
    public String logIn(){
        return "login";
    }

    @RequestMapping("/register")
    public String register(){
        return "register";
    }

    @RequestMapping("/homepage-login")
    public String userPage(Model model,int id){
        QueryWrapper<User> queryWrapper=new QueryWrapper<>();
        queryWrapper.eq("id",id);
        User user=userMapper.selectOne(queryWrapper);
        model.addAttribute("user",user);
        return "Home";
    }


    @RequestMapping("/more")
    public String more(Model model,@RequestParam(name="id",defaultValue = "-1") int id){
        if(id>0) {
            QueryWrapper<User> queryWrapper=new QueryWrapper<>();
            queryWrapper.eq("id",id);
            User user=userMapper.selectOne(queryWrapper);
            model.addAttribute("user",user);
        }
        else{
            model.addAttribute("user",null);
        }
        return "more";
    }

    @RequestMapping("/pi")
    public String pi(Model model,@RequestParam(name="id",defaultValue = "-1") int id){
        QueryWrapper<User> queryWrapper=new QueryWrapper<>();
        if(id>0){
            queryWrapper.eq("id",id);
            User user=userMapper.selectOne(queryWrapper);
            model.addAttribute("user",user);
//            List<Comment> comments=commentMapper.selectCommentsByUser(id);
//            for (Comment comment:
//                    comments) {
//                comment.setZoneName(zoneMapper.getName(comment.getZid()).getGed2020nam());
//            }
            model.addAttribute("id",id);
        }
        else{
            model.addAttribute("user",null);
        }
        return "pi";
    }








    @RequestMapping("/help")
    public String helpPage(Model model,@RequestParam(name="id",defaultValue = "-1") int id){
        if(id>0) {
            QueryWrapper<User> queryWrapper=new QueryWrapper<>();
            queryWrapper.eq("id",id);
            User user=userMapper.selectOne(queryWrapper);
            model.addAttribute("user",user);
        }
        else{
            model.addAttribute("user",null);
        }
        return "help";
    }

}
