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

$STH = $DBH->query('SELECT project_types.type_id, project_types.name from project_types');
$STH->setFetchMode(PDO::FETCH_OBJ);

while($obj = $STH->fetch()) {
    $categories[$obj->type_id] = $obj->name;
}

$projects = array();

$STH = $DBH->query('SELECT projects.id, projects.pos, projects.category_portf_id, projects_translate.name from projects LEFT JOIN projects_translate ON (projects.id = projects_translate.p_id) WHERE projects_translate.lang="'.$language.'" ORDER BY projects.pos ASC');
$STH->setFetchMode(PDO::FETCH_OBJ);
$k = 0;
while($obj = $STH->fetch()) {
    $k++;
    $projects[$k]['id'] = $obj->id;
    $projects[$k]['position'] = $obj->pos;
    $projects[$k]['name'] = $obj->name;
    $projects[$k]['category'] = $categories[$obj->category_portf_id];
}

$smarty->assign("projects", $projects);
$smarty->assign("categories", $categories);

$smarty->display('projects.tpl');
