package com.group7.depsys.mapper;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.group7.depsys.entity.PlacePoint;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;


@Mapper
@Repository
public interface PlacePointMapper {


    @DS("pgsql")
    PlacePoint selectAllPlaces(@Param("type") String type);
}
