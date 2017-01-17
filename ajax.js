/**
 * Created by Administrator on 17-1-17.
 */
/*
$(function () {
    $("#btn").on("click",function () {
        $.get("new.php",{name:$("#nameValue").val()},function (data) {
            $("#result").text(data);
        })
    })
})*/
$(function () {
    $("#btn").on("click",function () {
        $("#result").text("请求数据中请稍后");
        $.post("new.php",{name:$("#nameValue").val()},function (data) {
            $("#result").text(data);
        }).fail(function () {
            $("#result").text("服务器有问题");
        });
    });
});

$(function () {
    $("#box1").text("正在加载数据");
    $("#box1").load("box.htm",function (a,status,c) {
        console.log(status);
        if (status=="error"){
            $("#box").text("片段加载失败")
        }
    });
    $.getScript("helloWorld.js" ,function () {
        sayHello();
    }).fail(function () {
        alert("加载失败")
    })
});