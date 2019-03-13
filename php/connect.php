<?php
      header("content-type:text/html;charset=utf-8");
      $mysqli_conf=array(
          'host'=>'127.0.0.1:3306',//连接主机
          'db'=>'wrongquestion',//连接数据库
          'db_user'=>'root',//连接管理员
          'db_pwd'=>''//管理员登录密码（未设置即为空）
      );
  
      $mysqli=new mysqli($mysqli_conf['host'],$mysqli_conf['db_user'],$mysqli_conf['db_pwd']);
      if($mysqli->connect_errno){
          die('连接错误'.$mysqli->connet_error);//判断连接错误
      };
      $mysqli->query("set names 'utf8';");//编码设置
      $select_db=$mysqli->select_db($mysqli_conf['db']);//选择数据库
      if(!$select_db){
          die('连接数据库错误'.$mysqli->error);
      };
?>