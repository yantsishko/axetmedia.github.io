<?php /* Smarty version 3.1.27, created on 2017-03-16 00:55:32
         compiled from "/Applications/MAMP/htdocs/axetadmin/admin/templates/header.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:194245039458c9b854a78fb0_99331835%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '11e0e61f90e4fb496ef4539209c73ad312c79222' => 
    array (
      0 => '/Applications/MAMP/htdocs/axetadmin/admin/templates/header.tpl',
      1 => 1489614930,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '194245039458c9b854a78fb0_99331835',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58c9b854aa54b3_71721379',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58c9b854aa54b3_71721379')) {
function content_58c9b854aa54b3_71721379 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '194245039458c9b854a78fb0_99331835';
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