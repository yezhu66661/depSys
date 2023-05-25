package com.group7.depsys.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecomSearch {
    private int employment;
    private int income;
    private int crime;
    private int housing;
    private int health;
    private int education;
    private int AccessToServices;

    private int rankLimit;
}





