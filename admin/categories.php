<?php
/**
 * Example Application
 *
 * @package Example-application
 */
session_start();
if ($_SESSION['name'] != "axetmedia112358"){
    header('Location: login.php');
    exit;
}
require '../smarty/Smarty.class.php';

require_once "config.php";

$smarty = new Smarty;

//$smarty->force_compile = true;
$smarty->debugging = false;
$smarty->caching = false;
//$smarty->cache_lifetime = 120;

$language = $_COOKIE['lang'];

//function fn_get_count_projects($id,$DBH){
//    $STH = $DBH->query('SELECT count(id) as count from projects where category_id ='.$id);
//    $STH->setFetchMode(PDO::FETCH_OBJ);
//    $count = 0;
//    while($obj = $STH->fetch()) {
//        $count = $obj->count;
//    }
//
//    return $count;
//}

$categories = array();

$STH = $DBH->query('SELECT categories.*, categories_translate.name from categories LEFT JOIN categories_translate ON (categories.id = categories_translate.c_id) WHERE categories_translate.lang="'.$language.'" ORDER BY categories.position ASC');

$STH->setFetchMode(PDO::FETCH_OBJ);
$k = 0;

while($obj = $STH->fetch()) {
    $k++;
    $categories[$k]['id'] = $obj->id;
    $categories[$k]['position'] = $obj->position;
    $categories[$k]['name'] = $obj->name;
    //$categories[$k]['count'] = fn_get_count_projects($obj->id,$DBH);
    $categories[$k]['is_title'] = $obj->is_title;
}

$smarty->assign("categories", $categories);

$smarty->display('categories.tpl');
