<?php
include "include/conn.php";
session_start();	//开启一个会话，或者返回已存在的会话----在调用session_start()之前，不能有任何输出
//本页面 负责处理用户登录的事宜----如果输入正确就跳转到主页，否则就弹窗提示，并重新跳到登录页
$uname = $_POST['username'];		//获取用户输入的用户名
$upass= md5($_POST['upassword']);		//获取用户输入的密码，再用md5加密算法进行加密
$sql = "select * from user where username='$uname' and password='$upass'";
// echo $sql;

//发送SQL查询到MYSQL服务器去执行，返回一个MYSQLI_RESULT对象
$result = mysqli_query($conn,$sql);		
// var_dump($result);

if(mysqli_num_rows($result)>0){		//如果查询的记录条数>0，说明用户名密码正确
	$arr = mysqli_fetch_assoc($result);
	// 设置5个SESSION变量
	$_SESSION['userid'] = $arr['userid'];		//用户号
	$_SESSION['username'] = $uname;	//用户名
	$_SESSION['password'] = $upass;	//密码
	$_SESSION['logintime'] = time();	//本次登录时间----用时间戳来表示
	$_SESSION['isLogin'] = 1;	//登录标识位 isLogin，1就表示已登录
	
	// setcookie("userid",$uname,time()+3600);	//用户号
	// setcookie("username",$uname,time()+3600);	//用户名
	// setcookie("password",$upass,time()+3600);	//密码
	// setcookie("logintime",time(),time()+3600);	//本次登录时间----用时间戳来表示
	// setcookie("isLogin",1,time()+3600);	//登录标识位 isLogin，1就表示已登录
	header("location: index.php");	//跳转到显示记录页面
}else{
	echo "<script>alert('用户名或密码错！');</script>";
	// header("location: login.html");	//跳转到登录页面
	echo "<script>location.href='login.html';</script>";	
}

