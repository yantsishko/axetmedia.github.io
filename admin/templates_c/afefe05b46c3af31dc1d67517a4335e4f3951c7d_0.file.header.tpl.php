<?php /* Smarty version 3.1.27, created on 2017-03-16 01:06:37
         compiled from "/Applications/MAMP/htdocs/axetmedia/admin/templates/header.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:126946488358c9baedb7e8e6_61834356%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'afefe05b46c3af31dc1d67517a4335e4f3951c7d' => 
    array (
      0 => '/Applications/MAMP/htdocs/axetmedia/admin/templates/header.tpl',
      1 => 1489614930,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '126946488358c9baedb7e8e6_61834356',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58c9baedb807c0_33675398',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58c9baedb807c0_33675398')) {
function content_58c9baedb807c0_33675398 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '126946488358c9baedb7e8e6_61834356';
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Axet media portfolio</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="./dist/css/AdminLTE.min.css">
    <!-- AdminLTE Skins. We have chosen the skin-blue for this starter
          page. However, you can choose any other skin. Make sure you
          apply the skin class to the body tag so the changes take effect.
    -->
    <link rel="stylesheet" href="./dist/css/skins/skin-blue.min.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <?php echo '<script'; ?>
 src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"><?php echo '</script'; ?>
>
    <![endif]-->

</head>
<body class="hold-transition skin-blue sidebar-mini" onload="checkLang()">
<?php echo '<script'; ?>
>
    function checkLang() {
        var lang = localStorage.getItem('lang');
        if (!lang){
            localStorage.setItem('lang', 'ru');
            document.cookie = 'lang=ru';
        }

        var block = document.getElementById('selLang');
        block.innerHTML = lang || 'ru';
    }
<?php echo '</script'; ?>
><?php }
}
?>