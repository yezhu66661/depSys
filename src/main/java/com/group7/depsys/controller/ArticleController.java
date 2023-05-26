package com.group7.depsys.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.group7.depsys.entity.Comment;
import com.group7.depsys.entity.Feedback;
import com.group7.depsys.entity.Result;
import com.group7.depsys.mapper.CommentMapper;
import com.group7.depsys.mapper.FeedbackMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;


@RestController
@CrossOrigin
public class ArticleController {

    @Autowired
    private FeedbackMapper feedbackMapper;


    @Autowired
    private CommentMapper commentMapper;


    //add user's feed back to the Mysql Database
    @PostMapping("/addFeed")
    public Result addFeed(@RequestBody Feedback feedback){
        feedbackMapper.insert(feedback);
        Result result=new Result();
        result.setStatus("succ");
        return result;
    }


    //add user's comment to the Mysql Database
    @PostMapping("/addComment")
    public Result addCom(@RequestBody Comment comment){
        comment.setSubmittime(new Date());
        commentMapper.insert(comment);
        Result result=new Result();
        result.setStatus("succ");
        return result;
    }


    //get User's comments from MySql
    @GetMapping("/getComments")
    public List<Comment> getComments(@Param("zid") int zid){
//        QueryWrapper<Comment> queryWrapper=new QueryWrapper<>();
//        queryWrapper.eq("zid",zid);
        return commentMapper.selectComments(zid);
    }
}
