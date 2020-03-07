<?php
require './smarty/Smarty.class.php';
require_once "config.php";

$smarty = new Smarty;

//$smarty->force_compile = true;
$smarty->debugging = false;
$smarty->caching = false;
//$smarty->cache_lifetime = 120;

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

$blogId = $_GET['id'];
$data['id'] = $blogId;
$data['lang'] = $LANG;
$page = isset($_GET['page']) ? $_GET['page'] : 1;

$current = ($page == 1) ? 0 : 5 * $page;
$last = ($page == 1) ? 5 : 5 * $page;

if ($blogId) {
    $articles = array();
    $STH = $DBH->prepare("SELECT a.id, a.createAt, a.image, articles_translate.name, articles_translate.shortDescr, categories_translate.name as c_name from articles as a LEFT JOIN categories_translate ON (a.category_id = categories_translate.c_id) LEFT JOIN articles_translate ON (a.id = articles_translate.article_id) WHERE categories_translate.lang=:lang AND  articles_translate.lang=:lang AND a.category_id = :id ORDER BY a.pos ASC LIMIT " . $current . ", " . $last);
    $STH->execute($data);
    $STH->setFetchMode(PDO::FETCH_OBJ);
    $k = 0;
    while ($obj = $STH->fetch()) {
        $k++;
        $date = date_create($obj->createAt);
        $articles[$k]['id'] = $obj->id;
        $articles[$k]['name'] = $obj->name;
        $articles[$k]['short_descr'] = $obj->shortDescr;
        $articles[$k]['category_name'] = $obj->c_name;
        $articles[$k]['image'] = $obj->image;
        $articles[$k]['createAt'] = date_format($date, "Y-m-d");
    }
} else {
    $articles = array();
    $STH = $DBH->prepare("SELECT a.id, a.createAt, a.image, articles_translate.name, articles_translate.shortDescr, categories_translate.name as c_name from articles as a LEFT JOIN categories_translate ON (a.category_id = categories_translate.c_id) LEFT JOIN articles_translate ON (a.id = articles_translate.article_id) WHERE categories_translate.lang=:lang AND  articles_translate.lang=:lang ORDER BY a.pos ASC LIMIT " . $current . ", " . $last);
    unset($data['id']);
    $STH->execute($data);
    $STH->setFetchMode(PDO::FETCH_OBJ);
    $k = 0;
    while ($obj = $STH->fetch()) {
        $k++;
        $date = date_create($obj->createAt);
        $articles[$k]['id'] = $obj->id;
        $articles[$k]['name'] = $obj->name;
        $articles[$k]['short_descr'] = $obj->shortDescr;
        $articles[$k]['category_name'] = $obj->c_name;
        $articles[$k]['image'] = $obj->image;
        $articles[$k]['createAt'] = date_format($date, "Y-m-d");
    }
}

$smarty->assign("articles", $articles);
$smarty->assign("pages", ceil(count($articles) / 5));
$smarty->assign("categories", $categories);
if ($blogId) {
    $smarty->assign("category", $categories[$blogId]);
} else {
    $smarty->assign("category", false);
}

$smarty->display('blog.tpl');