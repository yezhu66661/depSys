package com.group7.depsys.mapper;


import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.group7.depsys.entity.Comment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
@DS("mysql")
public interface CommentMapper extends BaseMapper<Comment> {

    List<Comment> selectComments(@Param("zid") int zid);

    List<Comment> selectCommentsByUser(@Param("uid") int uid);
}
