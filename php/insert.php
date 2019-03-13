<?php
    include("connect.php");
    $w_conntent=$_REQUEST['w_conntent'];
    $w_where=$_REQUEST['w_where'];
    $w_idea=$_REQUEST['w_idea'];
    $date = date('y/m/d h:i:s');
    // $sql="INSERT INTO `wq`( `wq_title`, `wq_details`, `wq_idea`, `submission_date`) VALUES ('1123','123','123','2018/12/22 16:34:23')";
    $sql="INSERT INTO `wq`( `wq_title`, `wq_details`, `wq_idea`, `submission_date`) VALUES ('$w_conntent','$w_where','$w_idea','$date')";
    $res=$mysqli->query($sql);
    echo $sql;
    if($res){
        echo '添加成功';
    }else{
        echo '添加失败';
    }
    $mysqli->close();
?>