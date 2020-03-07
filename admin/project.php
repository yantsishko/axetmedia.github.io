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
$STH = $DBH->query("SELECT * from images WHERE main='Y' AND p_id=".$id);
$STH->setFetchMode(PDO::FETCH_OBJ);

while($obj = $STH->fetch()) {
    $preview = $obj->image;
}


$categories_portf = array();

$STH = $DBH->query('SELECT type_id, name from project_types WHERE lang="'.$language.'"');
$STH->setFetchMode(PDO::FETCH_OBJ);

while($obj = $STH->fetch()) {
    $categories_portf[$obj->type_id] = $obj->name;
}


$project = array();

$STH = $DBH->query('SELECT projects.id, projects.pos,projects.category_portf_id, projects_translate.name, projects_translate.descr,projects_translate.designer,projects_translate.verst,projects_translate.descrTeg, projects_translate.titleTeg, projects_translate.short_descr from projects LEFT JOIN projects_translate ON (projects.id = projects_translate.p_id) WHERE projects.id='.$id.' AND lang="'.$language.'"');
$STH->setFetchMode(PDO::FETCH_OBJ);
while($obj = $STH->fetch()) {
    $project['id'] = $obj->id;
    $project['position'] = $obj->pos;
    $project['name'] = $obj->name;
    $project['descr'] = $obj->descr;
    $project['designer'] = $obj->designer;
    $project['verst'] = $obj->verst;
    $project['descrTeg'] = $obj->descrTeg;
    $project['titleTeg'] = $obj->titleTeg;
    $project['short_descr'] = $obj->short_descr;
    $project['category_portf_id'] = $obj->category_portf_id;
}


$images= array();
$STH = $DBH->query("SELECT * from images WHERE main='' AND p_id=".$id);
$STH->setFetchMode(PDO::FETCH_OBJ);

while($obj = $STH->fetch()) {
    $images[$obj->id]['name'] = $obj->image;
    $images[$obj->id]['id'] = $obj->id;
}

$smarty->assign("preview", $preview);
$smarty->assign("project", $project);
$smarty->assign("categories_portf", $categories_portf);
$smarty->assign("images", $images);


$smarty->display('project.tpl');
