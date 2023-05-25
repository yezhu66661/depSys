package com.group7.depsys.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


//该注解可以自动生成无（有）参构造、getset方法等（来源于lombok-->便于实体化开发）
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@TableName(autoResultMap = true, value = "imd2018", schema = "public")
public class Zone {


    @Id
    @GeneratedValue
    private int id;

//    private String geom;

    private String stAstext;

    private String stAsgeojson;

    private String jsonBuildObject;

    private int dz2018;
    private int censusPop;

    private int countMb18;
    private int dhb2015Co;
    private String dhb2015Na;
    private int ged2020num;
    private String ged2020nam;
    private int ta2020code;
    private String ta2020name;
    private int regc2020co;
    private String regc2020na;
    private float rankImd18;
    private int decImd18;
    private float rankEmplo;
    private int decileEmp;
    private float rankIncom;
    private int decileInc;
    private float rankCrime;
    private int decileCri;
    private float rankHousi;
    private int decileHou;
    private float rankHealt;
    private int decileHea;
    private float rankEduca;
    private int decileEdu;
    private float rankAcces;
    private int decileAcc;
    private float rnkimdnoem;
    private int decimdnoem;
    private float rnkimdnoin;
    private int decimdnoin;
    private float rnkimdnocr;
    private int decimdnocr;
    private float rnkimdnoho;
    private int decimdnoho;
    private float rnkimdnohe;
    private int decimdnohe;
    private float rnkimdnoed;
    private int decimdnoed;
    private float rnkimdnoac;
    private int decimdnoac;


//    public Zone(final int DZ2018, final int Census18Pop, final int Count_MB18, final int DHB2015ID, final String DHB2015name, final int GED2020ID, final String GED2020name, final int TA2020ID, final String TA2020name, final int REGC2020ID, final String REGC2020name, final float Rank_IMD18, final int Dec_IMD18, final float Rank_Emplo, final int Decile_Emp, final float Rank_Incom, final int Decile_Inc, final float Rank_Crime, final int Decile_Cri, final float Rank_Housi, final int Decile_Hou, final float Rank_Healt, final int Decile_Hea, final float Rank_Educa, final int Decile_Edu, final float Rank_Acces, final int Decile_Acc, final float RnkIMDNoEmp, final int DecIMDNoEmp, final float RnkIMDNoInc, final int DecIMDNoInc, final float RnkIMDNoCri, final int DecIMDNoCri, final float RnkIMDNoHou, final int DecIMDNoHou, final float RnkIMDNoHea, final int DecIMDNoHea, final float RnkIMDNoEdu, final int DecIMDNoEdu, final float RnkIMDNoAcc, final int DecIMDNoAcc) {
//        this.DZ2018 = DZ2018;
//        this.Census18Pop = Census18Pop;
//        this.Count_MB18 = Count_MB18;
//        this.DHB2015ID = DHB2015ID;
//        this.DHB2015name = DHB2015name;
//        this.GED2020ID = GED2020ID;
//        this.GED2020name = GED2020name;
//        this.TA2020ID = TA2020ID;
//        this.TA2020name = TA2020name;
//        this.REGC2020ID = REGC2020ID;
//        this.REGC2020name = REGC2020name;
//        this.Rank_IMD18 = Rank_IMD18;
//        this.Dec_IMD18 = Dec_IMD18;
//        this.Rank_Emplo = Rank_Emplo;
//        this.Decile_Emp = Decile_Emp;
//        this.Rank_Incom = Rank_Incom;
//        this.Decile_Inc = Decile_Inc;
//        this.Rank_Crime = Rank_Crime;
//        this.Decile_Cri = Decile_Cri;
//        this.Rank_Housi = Rank_Housi;
//        this.Decile_Hou = Decile_Hou;
//        this.Rank_Healt = Rank_Healt;
//        this.Decile_Hea = Decile_Hea;
//        this.Rank_Educa = Rank_Educa;
//        this.Decile_Edu = Decile_Edu;
//        this.Rank_Acces = Rank_Acces;
//        this.Decile_Acc = Decile_Acc;
//        this.RnkIMDNoEmp = RnkIMDNoEmp;
//        this.DecIMDNoEmp = DecIMDNoEmp;
//        this.RnkIMDNoInc = RnkIMDNoInc;
//        this.DecIMDNoInc = DecIMDNoInc;
//        this.RnkIMDNoCri = RnkIMDNoCri;
//        this.DecIMDNoCri = DecIMDNoCri;
//        this.RnkIMDNoHou = RnkIMDNoHou;
//        this.DecIMDNoHou = DecIMDNoHou;
//        this.RnkIMDNoHea = RnkIMDNoHea;
//        this.DecIMDNoHea = DecIMDNoHea;
//        this.RnkIMDNoEdu = RnkIMDNoEdu;
//        this.DecIMDNoEdu = DecIMDNoEdu;
//        this.RnkIMDNoAcc = RnkIMDNoAcc;
//        this.DecIMDNoAcc = DecIMDNoAcc;
//    }
//
//
//
//
//    public void call(){
//        this.ttt=getTtt()+getCount_MB18()+getCensus18Pop()+getDecIMDNoAcc()+getDecile_Hou();
//    }

}
