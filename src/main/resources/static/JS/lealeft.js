var map = L.map('map',{zoomControl: false}).setView([-40, 175], 5.5);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

function getPlaceType(type){
    var placeLayer={};
    $.ajax({
        url :  serve_port+"/selectPointType/"+type.toString(),
        type : "get",
        async : false,
        success : function(data) {
            placeLayer=JSON.parse(data);
    }});
    return placeLayer;
}

var cityIcon=L.icon({
    iconUrl: "./mapIcon/city.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
})

var cityLayerData=getPlaceType("city");
function onEachFeatureCityLay(feature,layer){
    layer.bindPopup(feature.properties.name);
}
var cityLayer=L.geoJSON(cityLayerData,{onEachFeature:onEachFeatureCityLay, pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: cityIcon });
    }});


var suburbLayerData=getPlaceType("suburb");
var suburbLayer = new PruneClusterForLeaflet();
var suburbList=suburbLayerData.features;
for(i=0;i<suburbList.length;i++){
    var a=suburbList[i].geometry.coordinates[1];
    var b=suburbList[i].geometry.coordinates[0]
    var marker=new PruneCluster.Marker(a,b,{
        popup:suburbList[i].properties.name
    });
    suburbLayer.RegisterMarker(marker);
}
suburbLayer.ProcessView();



var control=L.layerGroup().addTo(map);


function fiterCity(){
    var flag=document.getElementById("city").checked;
    if(flag){
        control.addLayer(cityLayer);
    }
    else{
        control.removeLayer(cityLayer);
    }
    // cityLayerFlag=!cityLayerFlag;
}
function fiterSuburb(){
    var flag=document.getElementById("suburb").checked;
    if(flag){
        control.addLayer(suburbLayer);
    }
    else{
        control.removeLayer(suburbLayer);
    }
    // suburbLayerFlag=!suburbLayerFlag;
}


function getDepLayer(){
    var depLayer={};
    $.ajax({
        url : serve_port+"/getZone",
        type : "get",
        async : false,//此处需要注意的是要想获取ajax返回的值这个async属性必须设置成同步的，否则获取不到返回值
        success : function(data) {
            depLayer=JSON.parse(data);
        }});
    return depLayer;
}
var depLayer;
depLayer=getDepLayer();


function getColor(d) {
    return d > 4000 ? '#FFEDA0' :
        d > 3000  ? '#FEB24C' :
            d > 2000  ? '#FD8D3C' :
                d > 1000  ? '#FC4E2A' :
                    d > 50   ? '#E31A1C' :
                        d > 20   ? '#BD0026' :
                            '#800026';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.rank_imd18),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}


depLayer=L.geoJSON(depLayer,{style:style});

depLayer.on('click',function (e) {
    // var data=getIndicator(e.layer.feature.properties.dz2018);
    const property=e.layer.feature.properties;
    const id=property.dz2018;
    const  districtName=property.ged2020nam;
    const authorityName=property.ta2020name;
    var targetlink="";
    if(sessionStorage.getItem("id")==null){
        targetlink= serve_port+"/area?zid="+id;
    }
    else{
        console.log("fasdfasdfasdfasdfasdfasdf");
        targetlink= serve_port+"/area?id="+sessionStorage.getItem("id")+"&zid="+id;
    }
    L.popup().setLatLng(e.latlng).setContent(
        districtName+"</br><a href=\""+targetlink+"\">see more detail</a>"
        // districtName+"</br><a href=\"http://localhost:8080/area?zid="+id+"\">see more</a>"
    ).openOn(map);
    // L.popup().setLatLng(e.latlng).setContent(data[0].zid.toString()).openOn(map);
    // changePage("area?zid="+data[0].zid.toString());
})

depLayer.on('mouseover',function(e){
    var layer = e.layer;
    layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();
})
depLayer.on('mouseout',function(e){
    var layer = e.layer;
    layer.setStyle({
        weight: 0,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
})

function controlDeplayer(){
    var flag=document.getElementById("depLayer").checked;
    if(flag){
        control.addLayer(depLayer);
    }
    else{
        control.removeLayer(depLayer);
    }
}

var recomIcon=L.icon({
    iconUrl: "./mapIcon/recommend.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
})

function getRecomLayer(combineCode){
    var recomLayerData={}
    $.ajax({
        url :  serve_port+"/getRecommendZones?combineCode="+combineCode,
        type : "get",
        async : false,
        success : function(data) {
            recomLayerData=JSON.parse(data);
            // console.lgo(recomLayerData.features.geometry.coordinates)
        }});
    return recomLayerData;
}

function getPolygon(pList) {
    var area = 0;
    var x = 0;
    var y = 0;
    for (var i = 1; i <= pList.length; i++) {
        var lat = pList[i % pList.length][0];
        var lng = pList[i % pList.length][1];
        var nextLat = pList[i - 1][0];
        var nextLng = pList[i - 1][1];
        var temp = (lat * nextLng - lng * nextLat) / 2;
        area += temp;
        x += (temp * (lat + nextLat)) / 3;
        y += (temp * (lng + nextLng)) / 3;
    }
    x = x / area;
    y = y / area;
    return [x, y];
}
var markersGroup = L.layerGroup().addTo(map);
function filterRecom(){
    var employ=Number(document.getElementById("Employment").value);
    var Income=Number(document.getElementById("Income").value);
    var Crime=Number(document.getElementById("Crime").value);
    var Housing=Number(document.getElementById("Housing").value);
    var Health=Number(document.getElementById("Health").value);
    var Education=Number(document.getElementById("Education").value);
    var Access=Number(document.getElementById("Access").value);
    var employIndex=document.getElementById("Employment").checked? 1:0;
    var IncomeIndex=document.getElementById("Income").checked? 1:0;
    var CrimeIndex=document.getElementById("Crime").checked? 1:0;
    var HousingIndex=document.getElementById("Housing").checked? 1:0;
    var HealthIndex=document.getElementById("Health").checked? 1:0;
    var EduIndex=document.getElementById("Education").checked? 1:0;
    var AccessIndex=document.getElementById("Access").checked? 1:0;
    var combineCode=employ*employIndex+Income*IncomeIndex+Crime*CrimeIndex+Housing*HousingIndex+Health*HealthIndex+Education*EduIndex+Access*AccessIndex;
    // console.log(combineCode.toString());

    var featureList=getRecomLayer(combineCode).features;
    var markers=[]
    markersGroup.clearLayers();
    if(combineCode==0) return;
    for(var i=0;i<featureList.length;i++){
        var currentFeature=featureList[i];
        var cor=currentFeature.geometry.coordinates[0][0];
        var central=getPolygon(cor);
        var lat=central[1];
        var lng=central[0];
        markers.push({"lat":lat,"lng":lng})
    }
    markers.forEach(function(marker) {
        L.marker([marker.lat, marker.lng],{icon: recomIcon}).addTo(markersGroup);
    });
}
// var depLayerFlag=true;
// var zoneId=-1;
// function getIndicator(zid){
//     var indicator={};
//     $.ajax({
//         url : "http://localhost:8080/getIndicator/"+zid.toString(),
//         type : "get",
//         async : false,
//         success : function(data) {
//             indicator=data;
//     }});
//     return indicator;
// }
// function onEachFeatureSubLay(feature,layer){
//         layer.bindPopup(feature.properties.name);
// }
// var zoneId=-1;
//     function getIndicator(zid){
//         var indicator={};
//         $.ajax({
//             url : "http://localhost:8080/getIndicator/"+zid.toString(),
//             type : "get",
//             async : false,
//             success : function(data) {
//             indicator=data;
//         }});
//         return indicator;
//     }
// var myStyle = {
//     "color": "#ff7800",
//     "weight": 1,
//     "opacity": 5.65,
//     "fillOpacity": 0.1
//     };
// var selectedZoneId="";
// function changePage(url){
//     window.location.href=url;
// }
// // refered website: https://github.com/SINTEF-9012/PruneCluster
// function getAttrs(){
//     $.ajax({
//         url : "http://localhost:8080/attr"+combineCode,
//         type : "get",
//         async : false,
//         success : function(data) {
//             recomLayerData=JSON.parse(data);
//             // console.lgo(recomLayerData.features.geometry.coordinates)
//         }});
// }
// getRecomLayer(1);