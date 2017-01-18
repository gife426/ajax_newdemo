/**
 * Created by Administrator on 17-1-18.
 */
/*
function saveSessionStorage(id) {
    var target=document.getElementById(id);
    var text=target.value
    sessionStorage.setItem('message',text);
}

function getSessionStorage(id) {
    var target=document.getElementById(id);
    var msg=sessionStorage.getItem('message');
    target.innerHTML=msg
}
*/

function saveLocalStorage(id) {
    var target=document.getElementById(id);
    var text=target.value
    //存储数据
    localStorage.setItem('message',text);
}

function getLocalStorage(id) {
    var target=document.getElementById(id);
    //取出数据
    var msg=localStorage.getItem('message');
    target.innerHTML=msg
}

function saveStorage(id) {
  var date=document.getElementById(id).value;
  var time=new Date().getTime();
  localStorage.setItem(time,date);
  alert("数据储存成功")
  loadStorage("msg")//存储数据并显示在页面上

}

function loadStorage(id) {
    var result
    for (var i = 0; i < localStorage.length; i++) {
    //循环遍历key的值以及其对应的value
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    var date = new Date();
    date.setTime(key)//将getTime返回的毫秒数转化为日期
    result += "数据:" + value + " 时间:" + date
}
var target = document.getElementById(id);
target.innerHTML = result
//将数据显示在p元素内
}

function clearStorage() {
    localStorage.clear();
    alert("数据已经删除");
    loadStorage("msg")

}

function saveData() {
    var data = new Object();  //创建新的object对象并将需要保存的value设置为其属性
    data.name = document.getElementById("username").value;
    data.email = document.getElementById("email").value;
    data.tel = document.getElementById("tel").value;
    data.memo = document.getElementById("memo").value;
    var str = JSON.stringify(data);//将字符串保存为json的格式
    localStorage.setItem(data.name, str);
    alert("数据已经保存");
}

function findData() {
    var find = document.getElementById("find").value;
    var str = localStorage.getItem(find);
    var data = JSON.parse(str);//将取回的json数据转化为字符串
    var result = "姓名：" + data.name + "<br/>"
    result += "邮箱：" + data.email + "<br/>"
    result += "电话：" + data.tel + "<br/>"
    result += "备注：" + data.memo + "<br/>"
    document.getElementById("msg1").innerHTML=result;
}