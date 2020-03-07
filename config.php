<?php

$DBH = new PDO("mysql:host=localhost;dbname=axetadmin", "root", "1234");
$DBH->exec("set names utf8");

$LANG = "ru";