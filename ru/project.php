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


$STH = $DBH->prepare("SELECT projects.*,projects_translate.*, project_types.name as categ_portf_name  from projects LEFT JOIN projects_translate ON (projects.id = projects_translate.p_id) LEFT JOIN project_types ON (projects.category_portf_id = project_types.type_id) WHERE projects.id = :id AND projects_translate.lang = :lang AND  project_types.lang = :lang ");
$STH->execute($data);
$STH->setFetchMode(PDO::FETCH_OBJ);
$project = array();
while ($obj = $STH->fetch()) {
    $project['id'] = $obj->id;
    $project['name'] = $obj->name;
    $project['description'] = $obj->descr;
    $project['short_description'] = strip_tags($obj->short_descr);
    $project['designer'] = $obj->designer;
    $project['verst'] = $obj->verst;
    $project['titleTeg'] = $obj->titleTeg;
    $project['descrTeg'] = $obj->descrTeg;
    $project['category_portf'] = $obj->categ_portf_name;
}

$STH = $DBH->prepare("SELECT * from images WHERE p_id = :id AND main=''");
unset($data['lang']);
$STH->execute($data);
$STH->setFetchMode(PDO::FETCH_OBJ);

while ($obj = $STH->fetch()) {
    $project['images'][] = $obj->image;
}

$dataN['lang'] = $LANG;
$dataN['category_id'] = $project['category_id'];
$STH = $DBH->prepare("SELECT  projects.id,projects_translate.name  from projects  LEFT JOIN projects_translate ON (projects.id = projects_translate.p_id) WHERE projects_translate.lang = :lang AND category_id=:category_id");
$STH->execute($dataN);
$STH->setFetchMode(PDO::FETCH_OBJ);
$projects = array();
$k = 0;
while ($obj = $STH->fetch()) {
    $k++;
    $projects[$k]['id'] = $obj->id;
    $projects[$k]['name'] = $obj->name;
}

foreach ($projects as $k => $v) {
    if ($v['id'] == $project['id']) {
        $project['prev'] = $projects[($k - 1)]['id'];
        $project['next'] = $projects[($k + 1)]['id'];
    }
}

$smarty->assign("projects", $projects);
$smarty->assign("project", $project);

$smarty->display('project.tpl');