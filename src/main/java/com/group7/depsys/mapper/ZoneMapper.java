package com.group7.depsys.mapper;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.group7.depsys.entity.Indicator;
import com.group7.depsys.entity.Recommend;
import com.group7.depsys.entity.Zone;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ZoneMapper extends BaseMapper<Zone> {
    @DS("pgsql")
    Zone selectAllWithIdAndGeo();

    @DS("mysql")
    List<Indicator> selectAttrs(@Param("zid") int zid);


    @DS("mysql")
    List<Indicator> selectIndicators();

    @DS("pgsql")
    List<Zone> selectAll();

    @DS("mysql")
    void insertOne(Recommend combineScore);


    @DS("pgsql")
    Zone selectRecomZone(List<Integer> values);


    @DS("mysql")
    List<Recommend> selectRecommendedZones(@Param("combineCode") int combineCode);


    @DS("pgsql")
    Zone selectGivenArea(@Param("zid") int zid);


    @DS("pgsql")
    Zone getName(@Param("zid") int zid);
}
