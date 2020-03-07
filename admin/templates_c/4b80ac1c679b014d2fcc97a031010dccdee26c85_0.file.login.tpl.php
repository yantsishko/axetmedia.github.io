<?php /* Smarty version 3.1.27, created on 2017-03-16 00:48:03
         compiled from "/Applications/MAMP/htdocs/axetadmin/admin/templates/login.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:141419158558c9b69361bfb3_85437340%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '4b80ac1c679b014d2fcc97a031010dccdee26c85' => 
    array (
      0 => '/Applications/MAMP/htdocs/axetadmin/admin/templates/login.tpl',
      1 => 1460096750,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '141419158558c9b69361bfb3_85437340',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58c9b69365c561_61467681',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58c9b69365c561_61467681')) {
function content_58c9b69365c561_61467681 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '141419158558c9b69361bfb3_85437340';
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