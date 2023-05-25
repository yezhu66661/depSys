package com.group7.depsys.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author Jiang
 * @since 2023-04-03
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {


    @TableId(type = IdType.AUTO)
    private Integer id;
    private String name;

    private String password;

    private String email;

}
