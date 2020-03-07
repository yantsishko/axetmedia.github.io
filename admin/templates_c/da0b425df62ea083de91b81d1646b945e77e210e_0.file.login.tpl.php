<?php /* Smarty version 3.1.27, created on 2017-03-16 01:06:35
         compiled from "/Applications/MAMP/htdocs/axetmedia/admin/templates/login.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:194924800958c9baeb05ad79_49290674%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'da0b425df62ea083de91b81d1646b945e77e210e' => 
    array (
      0 => '/Applications/MAMP/htdocs/axetmedia/admin/templates/login.tpl',
      1 => 1460096750,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '194924800958c9baeb05ad79_49290674',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58c9baeb095180_52578070',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58c9baeb095180_52578070')) {
function content_58c9baeb095180_52578070 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '194924800958c9baeb05ad79_49290674';
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