<?php

require './smarty/Smarty.class.php';
require_once "config.php";

$smarty = new Smarty;

//$smarty->force_compile = true;
$smarty->debugging = false;
$smarty->caching = false;
//$smarty->cache_lifetime = 120;

$data['id'] = $_GET['id'];
$data['lang'] = $LANG;

$STH = $DBH->prepare("SELECT articles.createAt, articles.image, articles_translate.* FROM articles LEFT JOIN articles_translate ON (articles.id = articles_translate.article_id) WHERE articles.id = :id AND articles_translate.lang = :lang");
$STH->execute($data);
$STH->setFetchMode(PDO::FETCH_OBJ);
$article = array();
while ($obj = $STH->fetch()) {
    $date = date_create($obj->createAt);
    $article['createAt'] = date_format($date, "Y-m-d");
    $article['image'] = $obj->image;
    $article['name'] = $obj->name;
    $article['descr'] = $obj->descr;
    $article['titleTeg'] = $obj->titleTeg;
    $article['descrTeg'] = $obj->descrTeg;
}

$categories = array();

$STH = $DBH->query('SELECT categories.id, categories_translate.name, (SELECT COUNT(*) from articles WHERE articles.category_id = categories.id) as count from categories LEFT JOIN categories_translate ON (categories.id = categories_translate.c_id) WHERE categories_translate.lang="ru"');
$STH->setFetchMode(PDO::FETCH_OBJ);

while ($obj = $STH->fetch()) {
    $categories[$obj->id] = array(
        'id' => $obj->id,
        'name' => $obj->name,
        'count' => $obj->count
    );
}

unset($data['id']);

$STH = $DBH->prepare("SELECT articles.id, articles_translate.name FROM articles LEFT JOIN articles_translate ON (articles.id = articles_translate.article_id) WHERE articles_translate.lang = :lang ORDER BY articles.createAt DESC LIMIT 0,7");
$STH->execute($data);
$STH->setFetchMode(PDO::FETCH_OBJ);
$articles = array();
$k = 0;
while ($obj = $STH->fetch()) {
    $k++;
    $articles[$k]['id'] = $obj->id;
    $articles[$k]['name'] = $obj->name;

}

$smarty->assign("categories", $categories);
$smarty->assign("article", $article);
$smarty->assign("articles", $articles);

$smarty->display('article.tpl');