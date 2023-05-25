package com.group7.depsys.entity;


import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("indicator")
public class Indicator {
    private float rank;
    private int decline;
    private int rnkIMDNo;

    private int decIMDNo;

    private String attrType;

    private int zid;

}
