<?php
    include('connect.php');
    $sql="select * from wq";
    $res=$mysqli->query($sql);

    $arr=array();
    if($res->num_rows>0){
        while($row=$res->fetch_assoc()){//fetch_assoc()用来遍历
            array_push($arr,$row);//array_push（参数1:数组，参数2遍历的内容）
        }
    }else{
        echo 'nothing';
        die('error');
    }
    echo json_encode($arr);//把JSON数组转化成JSON对象
    $mysqli->close();
?>