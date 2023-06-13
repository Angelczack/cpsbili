<?php
$conn = @mysqli_connect('localhost', 'root', '','3310');
if (!$conn) {
    die( '连接MySQL服务器失败：' . mysqli_connect_errno()); 
}
mysqli_select_db($conn, 'stu_db');		//指定默认数据库为stu_db
mysqli_set_charset($conn,'utf8');	//设置字符集为utf8
date_default_timezone_set('PRC');	//设置默认时区为北京时间
?>