// var res;
// $.ajax({
//     url : "http://localhost:8080/adduser",
//     type : "POST",
//     dataType: 'json',
//     contentType: 'application/json',
//     data: JSON.stringify({"name":"4444444","password":"333"}),
//     // async : false,
//     success : function(data) {
//         res = response;
//         console.log(data)
//     }});






function login(){
    event.preventDefault();
    const name = document.getElementById("username").value;
    const pw = document.getElementById("password").value;
    const sendMess = {"name": name, "password": pw};
    var res={};
    $.ajax({
        url : "http://localhost:8080/checkUser",
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
        document.getElementById("popupContainer").style.display = 'block';
        sessionStorage.setItem('id',res.id);
    }
    else{
        alert('Invalid username or password');
    }
}