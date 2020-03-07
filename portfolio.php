<?php
require './smarty/Smarty.class.php';
require_once "config.php";

$smarty = new Smarty;

//$smarty->force_compile = true;
$smarty->debugging = false;
$smarty->caching = false;
//$smarty->cache_lifetime = 120;

$types_array = array(
    1 => "sites",
    2 => "landing",
    3 => "logo",
    4 => "style",
    5 => "other"
);

$data['lang'] = $LANG;

$projects = array();
$STH = $DBH->prepare("SELECT p.id, projects_translate.name,projects_translate.short_descr,i.image, project_types.name as p_t_name, project_types.type_id as p_t_type from projects as p LEFT JOIN project_types ON (p.category_portf_id = project_types.type_id) LEFT JOIN projects_translate ON(p.id = projects_translate.p_id) LEFT JOIN images as i ON (p.id = i.p_id) WHERE i.main='Y' AND projects_translate.lang = :lang AND project_types.lang = :lang  ORDER BY pos ASC");
$STH->execute($data);
$STH->setFetchMode(PDO::FETCH_OBJ);
$k = 0;
while ($obj = $STH->fetch()) {
    $k++;
    $projects[$k]['id'] = $obj->id;
    $projects[$k]['name'] = $obj->name;
    $projects[$k]['short_descr'] = $obj->short_descr;
    $projects[$k]['image'] = $obj->image;
    $projects[$k]['category_name'] = $obj->p_t_name;
    $projects[$k]['category'] = $types_array[$obj->p_t_type];
}


$smarty->assign("projects", $projects);

$smarty->display('portfolio.tpl');