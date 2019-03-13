<?php
    include("connect.php");
    $sql="CREATE TABLE wq(
        wq_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        wq_title VARCHAR(255) NOT NULL,
        wq_details VARCHAR(30) NOT NULL,
        wq_idea VARCHAR(30) NOT NULL,
        submission_date TIMESTAMP
    )";
    if($mysqli->query($sql)===true){
        echo '创建成功';
    }else{
        echo '创建失败';
    }
    $mysqli->close();
?>