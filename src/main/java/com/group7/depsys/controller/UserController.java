package com.group7.depsys.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.group7.depsys.entity.User;
import com.group7.depsys.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class UserController {

    @Autowired
    private UserMapper userMapper;

    @RequestMapping("/adduser")
    public User addUser(@RequestBody User user){
        QueryWrapper<User> userQueryWrapper=new QueryWrapper<>();
        userQueryWrapper.eq("name",user.getName());
        String aa;
        if(userMapper.selectOne(userQueryWrapper)!=null){
            user.setId(-1);
            return user;
        }
        else{
            userMapper.insert(user);
            user.setId(1);
            return user;
        }
    }

    @RequestMapping("/checkUser")
    public User checkUser(@RequestBody User user){
        QueryWrapper<User> queryWrapper=new QueryWrapper<>();
        queryWrapper.eq("name",user.getName());
        queryWrapper.eq("password",user.getPassword());
        User user1=userMapper.selectOne(queryWrapper);
        return user1;
    }
}
