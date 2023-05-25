// 获取cookie中的用户信息
var userInfo = getCookie("userInfo");

// 判断用户信息是否存在
if (userInfo == null || userInfo == "") {
  // 未登录，跳转到登录页面
  window.location.href = "login.html";
} else {
  // 已登录，显示用户信息页面
  // 这里可以不做任何操作，页面会自动加载
}

// 获取cookie中的值
function getCookie(name) {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}
// 用户登录成功后设置cookie
document.cookie = "userInfo=" + encodeURI(JSON.stringify(userInfo));
// 清除cookie
document.cookie = "userInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// 跳转到登录页面
window.location.href = "login.html";
