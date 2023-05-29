package com.group7.depsys.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.group7.depsys.entity.Indicator;
import com.group7.depsys.entity.Recommend;
import com.group7.depsys.entity.User;
import com.group7.depsys.entity.Zone;
import com.group7.depsys.mapper.UserMapper;
import com.group7.depsys.mapper.ZoneMapper;
import jdk.nashorn.internal.parser.JSONParser;
import org.apache.commons.lang3.builder.ToStringExclude;
import org.apache.ibatis.annotations.Param;
import org.geolatte.geom.ByteBuffer;
import org.geolatte.geom.Geometry;
import org.geolatte.geom.PositionSequence;
import org.geolatte.geom.codec.Wkb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
//解决跨域问题，这样工程外的html文件也可以访问相关地址了，示例文件在桌面的383文件夹中
public class ZoneController {
    @Autowired
    private ZoneMapper zoneMapper;

    @Autowired
    private UserMapper userMapper;


    @GetMapping("/getZone")
    public String testPgSql(){
//        List<Zone> zones=zoneMapper.selectAllWithIdAndGeo(100);
//        String geoString=zones.get(0).getGeom();
//        Geometry<?> geo= Wkb.fromWkb(ByteBuffer.from(geoString));
//        PositionSequence positionSequence=geo.getPositions();
        String allData=zoneMapper.selectAllWithIdAndGeo().getJsonBuildObject();
        JSONObject jsonObject=JSONObject.parseObject(allData);
        jsonObject.getString("features");
        return zoneMapper.selectAllWithIdAndGeo().getJsonBuildObject();
    }

    @GetMapping("/getIndicator/{zid}")
    @CrossOrigin
    public List<Indicator> getAttrs(@PathVariable(name="zid") int zid){
        return zoneMapper.selectAttrs(zid);
    }




    @GetMapping("/getUser")
    public String testMySql(){
//        List<Zone> zones=zoneMapper.selectAllWithIdAndGeo(100);
//        String geoString=zones.get(0).getGeom();
//        Geometry<?> geo= Wkb.fromWkb(ByteBuffer.from(geoString));
//        PositionSequence positionSequence=geo.getPositions();
        return userMapper.selectList(null).toString();
    }

    @GetMapping("/updateScore")
    public String updataScore(){
        String result="";
        List<Zone> zones=zoneMapper.selectAll();
        for(int i=0;i<128;i++){
            String combineCode=binaryToDecimal(i);
            System.err.println(combineCode);
            int employIndex=Integer.parseInt(String.valueOf(combineCode.charAt(0)));
            int incomeIndex=Integer.parseInt(String.valueOf(combineCode.charAt(1)));
            int crimeIndex=Integer.parseInt(String.valueOf(combineCode.charAt(2)));
            int housiIndex=Integer.parseInt(String.valueOf(combineCode.charAt(3)));
            int healtIndex=Integer.parseInt(String.valueOf(combineCode.charAt(4)));
            int educaIndex=Integer.parseInt(String.valueOf(combineCode.charAt(5)));
            int accessIndex=Integer.parseInt(String.valueOf(combineCode.charAt(6)));
            zones.sort(new Comparator<Zone>() {
                @Override
                public int compare(Zone o1, Zone o2) {
                    return (int) ((o1.getRankEmplo()*employIndex+o1.getRankIncom()*incomeIndex+o1.getRankCrime()*crimeIndex+
                                                o1.getRankHousi()*housiIndex+o1.getRankHealt()*healtIndex+o1.getRankEduca()*educaIndex+o1.getRankAcces()*accessIndex)
                                                -
                                                (o2.getRankEmplo()*employIndex+o2.getRankIncom()*incomeIndex+o2.getRankCrime()*crimeIndex+
                                                        o2.getRankHousi()*housiIndex+o2.getRankHealt()*healtIndex+o2.getRankEduca()*educaIndex+o2.getRankAcces()*accessIndex))
                            ;
                }
            });

            result=String.valueOf(zones.get(0).getDz2018());

            for(int z=1;z<10;z++){
                insert(new Recommend(i,zones.get(z).getDz2018()));
            }

//            result+="}";


//            SELECT dz2018, rank_emplo, rank_incom, rank_crime, rank_housi, rank_healt, rank_educa, rank_acces FROM public.imd2018;

//            System.out.println(employIndex+" "+incomeIndex+" "+crimeIndex+" "+housiIndex+" "+healtIndex+" "+educaIndex+" "+accessIndex);
//            break;
        }
        return result;


//        return filteredList.toString();
    }

    public void insert(Recommend combineScore){
        zoneMapper.insertOne(combineScore);
    }


    @GetMapping("/getRecommendZones")
    public String getZonelist(int combineCode){
        List<Recommend> combineScores=zoneMapper.selectRecommendedZones(combineCode);
        List<Integer> queryData=new ArrayList<>();
        for(int i=0;i<combineScores.size();i++){
            queryData.add(combineScores.get(i).getZid());
        }
        return zoneMapper.selectRecomZone(queryData).getJsonBuildObject();
    }


    public String binaryToDecimal(int n){
        String str = "";
        int number=0;
        while(n!=0){
            str = n%2+str;
            n = n/2;
            number+=1;
        }
        for(int j=0;j<7-number;j++){
            str="0"+str;
        }
        return str;
    }

    @GetMapping("/getZoneName")
    public String getZoneName(@Param("zid") int zid){
        return zoneMapper.getName(zid).getGed2020nam();
    }




//    @RequestMapping("/cal")
//    public void testCal(){
//        long startTime=System.currentTimeMillis();
//        List<Zone> zones= zoneMapper.selectList(null);
//        long endTime=System.currentTimeMillis(); //获取结束时间
//        for(int i=0;i<zones.size();i++){
//            zones.get(i).call();
//        }
//        Comparator<Zone> c = new Comparator<Zone>() {
//
//            @Override
//            public int compare(Zone o1, Zone o2) {
//                return o1.getTtt()-o2.getTtt();
//            }
//
//        };
//
//        Collections.sort(zones,c);
//        System.err.println("程序运行时间： "+(endTime-startTime)+"ms");
//    }




//
//    @RequestMapping("/addAll")
//    public void addAll(){
//
//        List<Zone> zones=new ReadExcel().readfile("C:\\Users\\于江浩\\IdeaProjects\\depSys\\src\\main\\java\\com\\group7\\depsys\\files\\IMD1.xls");
//        for (Zone z:zones
//             ) {
//            zoneMapper.insert(z);
//        }
//    }
//
//
//
//    @RequestMapping("/hello")
//    public String test(){
//        return "hello world!";
//    }
//


//    @RequestMapping("/test")
//    public String ttt(){
//        return "hello world";
//    }
//
//
//    @PostMapping("/login")
//    public void login(@RequestBody Map<String,Object> map){
//        System.err.println(map.get("username"));
//        System.err.println(map.get("password"));
//        System.err.println(map.get("openid"));
//    }
//
//
    @GetMapping("/getZoneById/{dz2018}")
    public Zone login(@PathVariable String dz2018){
        QueryWrapper<Zone> queryWrapper=new QueryWrapper<>();
        queryWrapper.eq("dz2018",Integer.parseInt(dz2018));
        return zoneMapper.selectOne(queryWrapper);
    }


    @RequestMapping("/getZoneBound")
    public String getZoneBound(@Param("zid") int zid){
        List<Integer> queryData=new ArrayList<>();
        queryData.add(zid);
        return zoneMapper.selectRecomZone(queryData).getJsonBuildObject();
    }

//
//
//    @Autowired
//    private UserMapper userMapper;
//
//    @PostMapping("/getUser")
//    public String hahahha(@RequestBody User user){
//        return user.getAge() +  "asdlfkja;lskdjf;alksjdf;laksdjf;asfd";
//    }





}
