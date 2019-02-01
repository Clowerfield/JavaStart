<?php
    require_once "include/init.php";
    $id_item=$select->checkStr('id_item','');
    $its = $select->select_img_and_name_for_mw($db,$id_item);
    $par = $select->select_params_for_mw($db,$id_item);
    $msg = array();
    $msg[0] =  $its;
    $msg[1] =  $par;
    header('Content-Type: application/json');
    echo json_encode($msg);
    unset($msg);
?>