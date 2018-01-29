window.onload = function(){
    
    //设置cookie的函数
    function setCookie(name,value,expdays){
        var expdate = new Date();
        //设置cookie过期日期console.log("tty");
        expdate.setDate(expdate.getDate() + expdays);
        //添加cookie
        document.cookie = name + "=" + escape(value) + ";expires=" + expdate.toUTCString();
        // console.log(document.cookie);
        
    }

    //获取cookie
    function getCookie(name){
        //获取name在Cookie中起止位置
        console.log(document.cookie);
        var start = document.cookie.indexOf(name+"=");
        console.log(start);
        //如果找到的话
        if(start != -1){
            start = start + name.length + 1;
            //获取value的终止位置
            var end = document.cookie.indexOf(";",start);
            if(end == -1){
                end = document.cookie.length;
            }
            //截获cookie的value值，并返回
            return unescape(document.cookie.substring(start,end));
        }
        return "";
    }

    //删除cookie
    function delCookie(name){
        setCookie(name,"",-1);
    }

    var form = document.getElementById("submit");
    form.onclick = function(){
        //获取表单输入：用户名，密码，是否保存密码
        var username = document.getElementById("username").value.trim();
        var password = document.getElementById("password").value.trim();
        var isRmbPwd = document.getElementById("isRmbPwd").checked;
        console.log(username);
        console.log(password);
        console.log(isRmbPwd);

        //判断用户名，密码是否为空
        if(username.length != 0 && password.length != 0){
            //若复选框勾选，则添加cookie，记录密码
            if(isRmbPwd == true){
                setCookie("this is username",username,7);
                setCookie(username,password,7);
            }else{
                //否则清楚cookie
                delCookie("this is username");
                delCookie(username);
            }
        }else{
            alert("请输入必填字段");
        }
    }

    //从cookie中获取用户名
    var username = getCookie("this is username");
    console.log(username);
    //如果用户名为空，则给表单元素赋空值
    if(username == ""){
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        document.getElementById("isRmbPwd").checked=false;
    }else{
        //获取对应的密码，将用户名，密码赋值给表单
        var password = getCookie(username);
        console.log(password);
        document.getElementById("username").value=username;
        document.getElementById("password").value=password;
        document.getElementById("isRmbPwd").checked=true;
    }
}