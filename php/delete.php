<?php
    include('connect.php');
    $wq_id=$_REQUEST['wq_id'];

    $sql="DELETE from wq where wq_id=$wq_id";
    $res=$mysqli->query($sql);

    if($res){
        echo "true";
    }else{
        echo "false";
    }
    $mysqli->close();
?>