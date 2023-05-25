package com.group7.depsys.mapper;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.group7.depsys.entity.User;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author Jiang
 * @since 2023-04-03
 */
@Mapper
@Repository
@DS("mysql")
public interface UserMapper extends BaseMapper<User> {
}
