<?php

require '../smarty/Smarty.class.php';

require_once "config.php";

$smarty = new Smarty;

//$smarty->force_compile = true;
$smarty->debugging = false;
$smarty->caching = false;
//$smarty->cache_lifetime = 120;

$smarty->display('login.tpl');