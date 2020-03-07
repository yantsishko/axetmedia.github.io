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

$STH = $DBH->query('SELECT count(id) as count from projects');
$STH->setFetchMode(PDO::FETCH_OBJ);
$projects = 0;
while($obj = $STH->fetch()) {
    $projects = $obj->count;
}

$STH = $DBH->query('SELECT count(id) as count from categories ');
$STH->setFetchMode(PDO::FETCH_OBJ);
$categories = 0;
while($obj = $STH->fetch()) {
    $categories = $obj->count;
}

$smarty->assign("categories", $categories);
$smarty->assign("projects", $projects);

$smarty->display('index.tpl');
