<?php /* Smarty version 3.1.27, created on 2017-03-24 00:40:39
         compiled from "/Applications/MAMP/htdocs/axetgeneral_fin_start/admin/templates/login.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:204349787758d440d7113d89_76096888%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '57a4548713b3a526cd9d4045191ca9432fcb74fe' => 
    array (
      0 => '/Applications/MAMP/htdocs/axetgeneral_fin_start/admin/templates/login.tpl',
      1 => 1460096750,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '204349787758d440d7113d89_76096888',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58d440d7156838_99958091',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58d440d7156838_99958091')) {
function content_58d440d7156838_99958091 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '204349787758d440d7113d89_76096888';
?>
<!-- jQuery 2.1.4 -->
<?php echo '<script'; ?>
 src="./plugins/jQuery/jQuery-2.1.4.min.js"><?php echo '</script'; ?>
>
<meta charset="utf-8">
<form action="javascript:void(null);">
    Login <input type="text" id="login">
    Password<input type="password" id="password">
    <button  onclick="loginUser();">Войти</button>
</form>

<?php echo '<script'; ?>
 type="text/javascript">
    function loginUser(){
        var login = document.getElementById("login").value ? document.getElementById("login").value : "";
        var password = document.getElementById("password").value ? document.getElementById("password").value : "";
        $.post( "controller.php",{ login: login, password: password,  action:"login"}, function( data ) {
            if (data == "accepted"){
                location.href = "index.php";
            }
        });
    }
<?php echo '</script'; ?>
><?php }
}
?>