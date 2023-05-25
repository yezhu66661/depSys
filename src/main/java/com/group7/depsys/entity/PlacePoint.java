package com.group7.depsys.entity;


import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@TableName(autoResultMap = true, value = "imd2018", schema = "public")
public class PlacePoint {
    private String jsonBuildObject;
    @Id
    private Long id;

}
