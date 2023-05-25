function login(){
    event.preventDefault();
    const name = document.getElementById("username").value;
    const pw = document.getElementById("password").value;
    const sendMess = {"name": name, "password": pw};
    var res={};
    $.ajax({
        url : serve_port+"/checkUser",
        type : "POST",
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(sendMess),
        async : false,
        success : function(response) {
            res = response;
        }});
    if(res!=null){
        console.log(res.name);
        document.getElementById("popup").style.display = 'block';
        sessionStorage.setItem('id',res.id);
    }
    else{
        alert('Invalid username or password');
    }
}

function checkLoginStatus(element,target){
    var route=document.getElementById(element);
    route.addEventListener("click",function (event){
        // event.preventDefault();
        if(sessionStorage.getItem("id")!=null){
            route.href=target+"?id="+sessionStorage.getItem("id");
        }
        console.log(route.href);
    })
}
checkLoginStatus("homepage","/homepage-login");
checkLoginStatus("area","/area");
checkLoginStatus("more","/more");
checkLoginStatus("pi","/pi");
checkLoginStatus("helppage","/help");

function logout(){
    sessionStorage.removeItem("id");
    window.location.href=serve_port;
}


