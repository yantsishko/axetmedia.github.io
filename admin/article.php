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
$id = $_GET['id'];


$preview = '';
$data["id"] = $id;
$STH = $DBH->prepare("SELECT image from articles WHERE id=:id");
$STH->execute($data);
$STH->setFetchMode(PDO::FETCH_OBJ);

while($obj = $STH->fetch()) {
    $preview = $obj->image;
}

$categories = array();

$STH = $DBH->query('SELECT categories.id, categories_translate.name from categories LEFT JOIN categories_translate ON (categories.id = categories_translate.c_id) WHERE categories_translate.lang="'.$language.'"');
$STH->setFetchMode(PDO::FETCH_OBJ);

while($obj = $STH->fetch()) {
    $categories[$obj->id] = $obj->name;
}


$article = array();

$STH = $DBH->query('SELECT articles.id, articles.pos,articles.category_id, articles_translate.name, articles_translate.descr, articles_translate.descrTeg, articles_translate.titleTeg, articles_translate.shortDescr from articles LEFT JOIN articles_translate ON (articles.id = articles_translate.article_id) WHERE articles.id='.$id.' AND articles_translate.lang="'.$language.'"');
$STH->setFetchMode(PDO::FETCH_OBJ);
while($obj = $STH->fetch()) {
    $article['id'] = $obj->id;
    $article['position'] = $obj->pos;
    $article['name'] = $obj->name;
    $article['descr'] = $obj->descr;
    $article['descrTeg'] = $obj->descrTeg;
    $article['titleTeg'] = $obj->titleTeg;
    $article['shortDescr'] = $obj->shortDescr;
    $article['category_id'] = $obj->category_id;
}

$smarty->assign("preview", $preview);
$smarty->assign("article", $article);
$smarty->assign("categories", $categories);


$smarty->display('article.tpl');
