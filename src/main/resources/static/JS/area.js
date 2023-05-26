var map = L.map('map').setView([-40, 175], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function getLayer(zid){
    var recomLayerData={}
    $.ajax({
        url : serve_port+"/getZoneBound?zid="+zid.toString(),
        type : "get",
        async : false,
        success : function(data) {
            recomLayerData=JSON.parse(data);
            // console.lgo(recomLayerData.features.geometry.coordinates)
        }});
    return recomLayerData;
}
function getComments(zid){
    var res;
    $.ajax({
        url : serve_port+"/getComments?zid="+zid.toString(),
        type : "get",
        async : false,
        success : function(data) {
            res=data;
            console.log(data);
            // console.lgo(recomLayerData.features.geometry.coordinates)
        }});
    return res;
}


// var aaa="{\"type\" : \"FeatureCollection\", \"features\" : [{\"type\": \"Feature\", \"geometry\": {\"type\":\"MultiPolygon\",\"coordinates\":[[[[172.686326867,-42.100980416],[172.686862584,-42.104394967],[172.691268334,-42.106644716],[172.69572055,-42.10429],[172.697745251,-42.102328249],[172.701681434,-42.101303967],[172.717685999,-42.1016377],[172.721472999,-42.103491799],[172.718726601,-42.111269933],[172.718632917,-42.114914517],[172.724846599,-42.12226355],[172.722623199,-42.127614683],[172.726008734,-42.134782234],[172.720184433,-42.137725316],[172.718811733,-42.139496466],[172.718849233,-42.149077149],[172.7204987,-42.1520808],[172.720007517,-42.154727467],[172.721638582,-42.158698184],[172.729183017,-42.165355866],[172.735456183,-42.167518283],[172.743456884,-42.167848167],[172.749643751,-42.172367049],[172.754053184,-42.170648017],[172.757783016,-42.1713397],[172.759192082,-42.170375583],[172.761305967,-42.17044665],[172.766437166,-42.168834499],[172.773012667,-42.168365133],[172.7769994,-42.166906183],[172.781445101,-42.167481233],[172.785684617,-42.162515383],[172.7937936,-42.161707633],[172.795881217,-42.163591433],[172.799116584,-42.164738067],[172.79485095,-42.171408916],[172.79491655,-42.174274299],[172.796203166,-42.176991383],[172.79576715,-42.179602216],[172.800336416,-42.184945867],[172.806947817,-42.1894747],[172.808864634,-42.189866416],[172.810397883,-42.1892761],[172.814873267,-42.185183499],[172.818341417,-42.184326833],[172.821004217,-42.182655933],[172.824552151,-42.183285767],[172.82838525,-42.182964733],[172.832054984,-42.184457417],[172.832625416,-42.187789167],[172.834403017,-42.190114283],[172.832354717,-42.192749199],[172.831438666,-42.199006283],[172.829758584,-42.201298233],[172.825116816,-42.2025213],[172.823154733,-42.2049975],[172.822681233,-42.20866495],[172.822290799,-42.223576767],[172.825420467,-42.2295236],[172.825588133,-42.233030833],[172.8242146,-42.234728717],[172.8261383,-42.238142766],[172.825169783,-42.24147415],[172.82656375,-42.248229133],[172.833785983,-42.249047367],[172.83683715,-42.250320733],[172.8407729,-42.250160483],[172.853462832,-42.252831983],[172.858898251,-42.255280367],[172.863463784,-42.256239917],[172.860900584,-42.257236133],[172.861370767,-42.259213183],[172.860221651,-42.261868467],[172.861476667,-42.265893833],[172.859235833,-42.2699467],[172.856997284,-42.273330417],[172.854467867,-42.274080866],[172.852758616,-42.275570333],[172.85093935,-42.282188716],[172.844737017,-42.284365717],[172.844303066,-42.287015566],[172.842252884,-42.289588533],[172.843542401,-42.293339933],[172.843279549,-42.298359717],[172.846980433,-42.308059566],[172.852082183,-42.309952016],[172.855344166,-42.310257617],[172.869523517,-42.317669167],[172.87358715,-42.3139051],[172.87963705,-42.31329115],[172.882333116,-42.311786367],[172.889433783,-42.309906283],[172.891206934,-42.310349817],[172.893502767,-42.313485483],[172.895882317,-42.314614466],[172.899023066,-42.311134433],[172.903083383,-42.309549033],[172.908404967,-42.308099483],[172.914144833,-42.3086089],[172.916258616,-42.311084967],[172.917516034,-42.315258383],[172.917268866,-42.3179786],[172.922026867,-42.325782767],[172.918164516,-42.329640833],[172.91957415,-42.336113334],[172.918726933,-42.340057717],[172.919610517,-42.34589085],[172.924871633,-42.35047595],[172.930468617,-42.3502506],[172.933277717,-42.3510046],[172.943789549,-42.351276949],[172.940854449,-42.359550633],[172.941079934,-42.367755467],[172.9382296,-42.373002916],[172.94139345,-42.377825034],[172.968548634,-42.3931731],[172.974455016,-42.3953463],[172.978476167,-42.3956787],[172.988059433,-42.391633049],[172.990889083,-42.391670366],[172.998235849,-42.393585],[173.002887449,-42.39327715],[173.001031299,-42.399534849],[172.993121366,-42.403482583],[172.989710101,-42.413807633],[172.9846607,-42.4193849],[172.986501168,-42.424956466],[172.983051966,-42.433724184],[172.976422234,-42.433499817],[172.974733167,-42.437110566],[172.975822617,-42.4397071],[172.9748917,-42.443682433],[172.972196918,-42.44704365],[172.966829766,-42.45106365],[172.959054766,-42.462348033],[172.956346183,-42.468919333],[172.950276917,-42.4702191],[172.946389132,-42.470098934],[172.942040684,-42.471384583],[172.938766966,-42.473261049],[172.93546355,-42.473515117],[172.93060845,-42.478270367],[172.928297017,-42.483945633],[172.925470866,-42.487469616],[172.925733233,-42.495387433],[172.92360925,-42.499531283],[172.889201899,-42.493284017],[172.879121717,-42.493679516],[172.877853233,-42.495698767],[172.879871899,-42.497712683],[172.878458733,-42.501990383],[172.88004755,-42.5054642],[172.875752167,-42.508431501],[172.873466683,-42.511162483],[172.870840418,-42.511995883],[172.8694391,-42.5099879],[172.867559249,-42.511356166],[172.867044033,-42.512762483],[172.868160783,-42.512679766],[172.86802295,-42.514219366],[172.86479705,-42.514488767],[172.864941416,-42.511256867],[172.862515717,-42.510086751],[172.861807517,-42.508724267],[172.859222466,-42.509487584],[172.857204667,-42.511235134],[172.85345995,-42.511730767],[172.849209766,-42.511293484],[172.847836983,-42.509827016],[172.844266017,-42.509021067],[172.841911117,-42.5103793],[172.840444434,-42.509370284],[172.8377541,-42.512127217],[172.838600651,-42.512959483],[172.814963573,-42.51470112],[172.815758733,-42.510034083],[172.817011366,-42.5084787],[172.814806084,-42.507506883],[172.812898683,-42.511591733],[172.810822767,-42.511553633],[172.81239645,-42.51823025],[172.812428317,-42.532821683],[172.81439875,-42.5340248],[172.816761516,-42.533984917],[172.816617416,-42.5346098],[172.819007516,-42.534930649],[172.817862083,-42.53635515],[172.81596095,-42.5366757],[172.816856451,-42.538632984],[172.820310167,-42.534342216],[172.827351433,-42.5322611],[172.847491316,-42.530984633],[172.851486333,-42.529427933],[172.854125067,-42.529308567],[172.854341567,-42.530494267],[172.863670117,-42.529793133],[172.8537413,-42.567009633],[172.854873783,-42.569916916],[172.853303434,-42.571025933],[172.854584567,-42.577647133],[172.854171367,-42.583544267],[172.851436967,-42.587396317],[172.846737617,-42.590523717],[172.845479583,-42.594776583],[172.8477399,-42.600440066],[172.846691867,-42.602527483],[172.847400117,-42.608900299],[172.849618118,-42.610358],[172.850103134,-42.611661866],[172.85319195,-42.611334233],[172.8555492,-42.612847133],[172.8587751,-42.61293635],[172.859229983,-42.614127933],[172.867118916,-42.61658415],[172.8710241,-42.61864205],[172.871483234,-42.62124885],[172.8755375,-42.622364449],[172.878493849,-42.622265183],[172.879796417,-42.621179983],[172.891303367,-42.625634167],[172.891364016,-42.626887167],[172.893647783,-42.628195666],[172.895273383,-42.627668067],[172.9007165,-42.629473917],[172.900113516,-42.630569567],[172.901366701,-42.6308564],[172.903831834,-42.630272867],[172.906275599,-42.635722366],[172.908791834,-42.6374125],[172.9147243,-42.638636517],[172.914216216,-42.640339484],[172.915920433,-42.64006415],[172.919234066,-42.643992849],[172.92342765,-42.646158933],[172.926443217,-42.653438866],[172.925343999,-42.656381],[172.9294186,-42.659437633],[172.924319384,-42.663109884],[172.927384601,-42.666768867],[172.92521535,-42.668677149],[172.924272817,-42.672699383],[172.9182006,-42.676014116],[172.913488883,-42.67994655],[172.9062924,-42.684312833],[172.918883983,-42.6883157],[172.918741118,-42.688987333],[172.913360384,-42.6943557],[172.897966634,-42.705941],[172.899968233,-42.706903383],[172.899848666,-42.71734025],[172.917528483,-42.716284517],[172.867772616,-42.749181617],[172.854158384,-42.76647935],[172.822513,-42.754324333],[172.818127434,-42.755633433],[172.809250184,-42.756123299],[172.7844904,-42.7642416],[172.79511625,-42.768176733],[172.798527583,-42.772664134],[172.805585933,-42.778528816],[172.806954984,-42.783297966],[172.81135065,-42.7843748],[172.815038733,-42.7873331],[172.688308801,-42.83969365],[172.68373875,-42.84021105],[172.680418033,-42.842174983],[172.671859882,-42.836637183],[172.635766783,-42.82316895],[172.6228829,-42.821666384],[172.608083333,-42.8179053],[172.59293755,-42.815497117],[172.587020416,-42.8137273],[172.578109868,-42.809128116],[172.559640332,-42.7970898],[172.55502135,-42.792065866],[172.548740183,-42.791151367],[172.5447433,-42.792169967],[172.542418583,-42.78934555],[172.537923834,-42.789007633],[172.53023285,-42.790744],[172.524452383,-42.789793116],[172.521909618,-42.792882983],[172.514903217,-42.7938153],[172.514960834,-42.79875165],[172.506861067,-42.803011083],[172.505612517,-42.804645033],[172.5067511,-42.807625934],[172.505405716,-42.809241649],[172.500720233,-42.810486216],[172.497310384,-42.809776083],[172.493696034,-42.810365783],[172.486153033,-42.814323333],[172.4813225,-42.8154417],[172.478127116,-42.81514185],[172.472212434,-42.815970217],[172.469087068,-42.815545183],[172.46534535,-42.816774917],[172.46286115,-42.815497916],[172.452351133,-42.815001933],[172.446171166,-42.8125661],[172.443140499,-42.812836316],[172.438483633,-42.81871165],[172.431999983,-42.822902566],[172.431010617,-42.825071616],[172.432856117,-42.829483433],[172.428365367,-42.835049549],[172.423262417,-42.834033433],[172.42161065,-42.834421066],[172.413532183,-42.841763183],[172.403342767,-42.848641633],[172.396629483,-42.85011355],[172.3766292,-42.849667133],[172.375773617,-42.849028567],[172.375711867,-42.846751716],[172.373034034,-42.84503175],[172.37264825,-42.842395983],[172.3699455,-42.83958665],[172.3639169,-42.839097616],[172.360544417,-42.835373683],[172.355397334,-42.8342196],[172.355067417,-42.832119749],[172.3564327,-42.829261783],[172.356816066,-42.825121567],[172.354480467,-42.823313816],[172.35134085,-42.82391085],[172.349712167,-42.8234989],[172.347921367,-42.818675616],[172.341221901,-42.8095838],[172.336457183,-42.799242383],[172.337896433,-42.795660167],[172.337717867,-42.792985249],[172.329482567,-42.789575283],[172.329189383,-42.785562717],[172.323649817,-42.78235925],[172.324258517,-42.77888685],[172.322129099,-42.776849583],[172.318769518,-42.775874433],[172.314315617,-42.773078133],[172.315509266,-42.7636885],[172.314413116,-42.762039333],[172.310420051,-42.759856833],[172.309134166,-42.7566594],[172.304317917,-42.756266983],[172.30167335,-42.754073366],[172.297348183,-42.753817383],[172.29481115,-42.751318683],[172.291315199,-42.75108675],[172.289976533,-42.750314367],[172.28585665,-42.741349917],[172.286215017,-42.739499533],[172.288938067,-42.737052867],[172.284222551,-42.734826683],[172.285907682,-42.7325072],[172.282201334,-42.730420983],[172.280588733,-42.724777283],[172.27776885,-42.724530966],[172.273851933,-42.722803667],[172.275679984,-42.720591367],[172.276008767,-42.718105883],[172.27230675,-42.715828233],[172.270548983,-42.713572233],[172.259170067,-42.7114332],[172.24908525,-42.707776433],[172.24640645,-42.705746833],[172.2436068,-42.70104755],[172.236896,-42.699689366],[172.235247484,-42.697383033],[172.2317187,-42.695207499],[172.23187925,-42.693273533],[172.223952284,-42.689413916],[172.226877283,-42.688431816],[172.230454651,-42.684569916],[172.231855117,-42.680528816],[172.233405333,-42.679113983],[172.233452317,-42.675023417],[172.206641534,-42.66862],[172.240510833,-42.627166483],[172.159172817,-42.617052999],[172.153297117,-42.620914934],[172.146016633,-42.619102883],[172.141602184,-42.619856216],[172.13585555,-42.619591233],[172.127170434,-42.622348283],[172.1254623,-42.62403155],[172.116381317,-42.621360283],[172.110591851,-42.62213115],[172.107713767,-42.625417349],[172.101830516,-42.62399685],[172.096426683,-42.625923683],[172.090623551,-42.62258905],[172.094375384,-42.62044765],[172.0977525,-42.6103397],[172.102641434,-42.6063985],[172.098484816,-42.593425],[172.103143367,-42.587814766],[172.107128434,-42.585904467],[172.108353267,-42.580630633],[172.110827517,-42.57929635],[172.124296734,-42.563563099],[172.128312101,-42.561555116],[172.128865801,-42.559369383],[172.132899483,-42.555251083],[172.140420632,-42.554438466],[172.144150966,-42.552296016],[172.149737966,-42.554921083],[172.15584435,-42.553100783],[172.164361517,-42.5469246],[172.167573166,-42.542769866],[172.174059099,-42.53929885],[172.178292183,-42.535506533],[172.178796583,-42.532879817],[172.182782717,-42.52650615],[172.181673668,-42.521241683],[172.18051565,-42.520163083],[172.180865267,-42.513531867],[172.183247534,-42.509364416],[172.185733433,-42.50698205],[172.1868848,-42.503948617],[172.190380016,-42.5007105],[172.193258983,-42.499869433],[172.195411567,-42.496494867],[172.205229133,-42.492956483],[172.208515167,-42.491203133],[172.211072634,-42.488569133],[172.217169833,-42.486287983],[172.219865367,-42.48629125],[172.22310015,-42.48219805],[172.227132299,-42.479523317],[172.2316808,-42.472666049],[172.2314624,-42.465412783],[172.234423717,-42.461341199],[172.235858783,-42.456422584],[172.237894201,-42.45606965],[172.241121601,-42.457025867],[172.254831967,-42.451280533],[172.257158767,-42.4534585],[172.261686099,-42.452012],[172.264001299,-42.454607217],[172.2655499,-42.455125333],[172.272804033,-42.450959366],[172.278786933,-42.449898783],[172.286679451,-42.444097433],[172.289834934,-42.443047433],[172.2932792,-42.440415],[172.293464783,-42.43842595],[172.295505583,-42.436259533],[172.296004683,-42.433866333],[172.300723534,-42.4284621],[172.3011294,-42.4260969],[172.299453984,-42.422748866],[172.299793733,-42.421739183],[172.310674683,-42.419895967],[172.317505767,-42.41979745],[172.324768967,-42.41644845],[172.327497967,-42.413825949],[172.32868515,-42.410558333],[172.333700183,-42.408315333],[172.335114683,-42.405832783],[172.334876366,-42.403439401],[172.337252567,-42.39973305],[172.34283195,-42.398355467],[172.344627283,-42.3971786],[172.3450878,-42.3935496],[172.347193649,-42.391823517],[172.356199149,-42.390610134],[172.360191183,-42.387970183],[172.364313617,-42.38789505],[172.368645467,-42.3850262],[172.375194417,-42.38399165],[172.385561567,-42.381094316],[172.393350684,-42.377924933],[172.413602432,-42.38343105],[172.416847184,-42.38376035],[172.425785001,-42.376333433],[172.429212184,-42.372106233],[172.43580275,-42.36968135],[172.438098933,-42.370081516],[172.44356695,-42.366750133],[172.449518166,-42.3554689],[172.443060134,-42.34468525],[172.44574515,-42.339749033],[172.448706934,-42.32861475],[172.454182034,-42.322932016],[172.456220717,-42.32229825],[172.461024867,-42.323551784],[172.463253367,-42.32261985],[172.466145716,-42.3195134],[172.4631346,-42.317367183],[172.464475499,-42.313779733],[172.461978901,-42.311377017],[172.4616987,-42.30746545],[172.464195933,-42.305189316],[172.4648963,-42.301871266],[172.474578633,-42.29672025],[172.477978484,-42.291392633],[172.47846515,-42.290179833],[172.477585699,-42.288091966],[172.479777117,-42.2856588],[172.478946718,-42.282942383],[172.480038633,-42.281397917],[172.478075033,-42.274568083],[172.478549816,-42.27286315],[172.481336167,-42.271570466],[172.483710716,-42.267983183],[172.48682355,-42.265793033],[172.496210951,-42.268091183],[172.502301667,-42.268378117],[172.515193317,-42.26402665],[172.516652534,-42.2610709],[172.5171355,-42.257072299],[172.520793267,-42.25471025],[172.52493585,-42.250295034],[172.530421483,-42.24806765],[172.533254134,-42.2442514],[172.53396865,-42.241360433],[172.541142883,-42.240158033],[172.545273333,-42.238488617],[172.548495466,-42.233252667],[172.551182517,-42.232317917],[172.554424551,-42.2268761],[172.557191433,-42.224322933],[172.55937375,-42.219959],[172.569248383,-42.215044783],[172.575025217,-42.21569765],[172.577989483,-42.214405633],[172.58346075,-42.216793367],[172.588843266,-42.215402967],[172.592748867,-42.2130764],[172.596793317,-42.207970633],[172.59911865,-42.207275849],[172.601564517,-42.2051464],[172.60586795,-42.203786183],[172.607315732,-42.199102317],[172.609532917,-42.196866583],[172.614551,-42.19553015],[172.616105601,-42.194288083],[172.617120351,-42.192555633],[172.617184967,-42.18934545],[172.6144235,-42.185210517],[172.613660116,-42.18240065],[172.611404267,-42.180226616],[172.612142584,-42.178452117],[172.611268016,-42.1753381],[172.612069234,-42.174044816],[172.609747983,-42.169249083],[172.609692483,-42.165843433],[172.612083667,-42.161122166],[172.611769683,-42.158075201],[172.614553417,-42.1556517],[172.615798501,-42.152707633],[172.618988551,-42.149743283],[172.619680051,-42.14797985],[172.626870433,-42.142909416],[172.629470383,-42.139127867],[172.634438967,-42.137623733],[172.636952033,-42.1345854],[172.6408619,-42.132896083],[172.64038535,-42.13106705],[172.634812767,-42.12630035],[172.633472817,-42.1228913],[172.631656683,-42.121899716],[172.632790083,-42.119166417],[172.632109583,-42.113455599],[172.633377883,-42.110975067],[172.632833967,-42.107823483],[172.634957317,-42.105142966],[172.63559835,-42.102434749],[172.638836782,-42.10084375],[172.645879034,-42.100944767],[172.65975985,-42.097710233],[172.66522705,-42.094668667],[172.669025767,-42.0942825],[172.671335233,-42.091287799],[172.676010484,-42.0895166],[172.67821135,-42.087854533],[172.681382967,-42.088499616],[172.684585217,-42.092395583],[172.684342034,-42.095415767],[172.686326867,-42.100980416]]]]}, \"properties\": {\"dz2018\": 5800005}}]}\n";
// aaa=JSON.parse(aaa);
// console.log(aaa);
// var corList=aaa.geometry.coordinates;
// var minlat;
// var maxlat;
// var minlong;
// var maxlong;
//
// console.log("asdfasdfasdf");
// console.log(corList.length);
// console.log(corList[2].length);
// console.log(corList[1].length);
//
// for(i=0;i<corList.length;i++){
//     for(j=0;j<corList[i].length;j++){
//         for(z=0;z<corList[i][j];z++){
//             var list=corList[i][j][z];
//             console.log(list[0]);
//         }
//     }
// }

//
// L.geoJSON(aaa.features[0]).addTo(map);
// map.fitBounds(L.geoJSON(aaa).getBounds());




// var currentBounds = map.getBounds();
// var width = currentBounds.getEast() - currentBounds.getWest();
// var horizontalShift = width * 0.25;
// var newWest = currentBounds.getWest() - horizontalShift;
// var newEast= currentBounds.getEast() - horizontalShift
// var newBounds = L.latLngBounds(L.latLng(currentBounds.getSouth(), newWest), L.latLng(currentBounds.getNorth(), newEast));
// map.fitBounds(newBounds);







