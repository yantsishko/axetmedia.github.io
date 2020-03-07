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

$categories = array();

$STH = $DBH->query('SELECT categories.id, categories_translate.name from categories LEFT JOIN categories_translate ON (categories_translate.c_id = categories.id)');
$STH->setFetchMode(PDO::FETCH_OBJ);

while($obj = $STH->fetch()) {
    $categories[$obj->id] = $obj->name;
}


$articles = array();

$STH = $DBH->query('SELECT articles.id, articles.pos, articles.category_id, articles_translate.name from articles LEFT JOIN articles_translate ON (articles.id = articles_translate.article_id) WHERE articles_translate.lang="'.$language.'" ORDER BY articles.pos ASC');
$STH->setFetchMode(PDO::FETCH_OBJ);
$k = 0;
while($obj = $STH->fetch()) {
    $k++;
    $articles[$k]['id'] = $obj->id;
    $articles[$k]['position'] = $obj->pos;
    $articles[$k]['name'] = $obj->name;
    $articles[$k]['category'] = $categories[$obj->category_id];
}

$smarty->assign("articles", $articles);
$smarty->assign("categories", $categories);

$smarty->display('blog.tpl');
