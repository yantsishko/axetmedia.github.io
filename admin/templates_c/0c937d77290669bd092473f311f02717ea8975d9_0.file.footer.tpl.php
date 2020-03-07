<?php /* Smarty version 3.1.27, created on 2017-03-16 00:53:31
         compiled from "/Applications/MAMP/htdocs/axetadmin/admin/templates/footer.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:80224463858c9b7dba87014_58491189%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '0c937d77290669bd092473f311f02717ea8975d9' => 
    array (
      0 => '/Applications/MAMP/htdocs/axetadmin/admin/templates/footer.tpl',
      1 => 1489614679,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '80224463858c9b7dba87014_58491189',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58c9b7dba895d4_04020517',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58c9b7dba895d4_04020517')) {
function content_58c9b7dba895d4_04020517 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '80224463858c9b7dba87014_58491189';
?>

<?php echo '<script'; ?>
>
    function unlogin(){
        $.post( "controller.php",{  action:"unlogin"}, function( data ) {
            location.href = "login.php";
        });
    }
<?php echo '</script'; ?>
>
<!-- Optionally, you can add Slimscroll and FastClick plugins.
     Both of these plugins are recommended to enhance the
     user experience. Slimscroll is required when using the
     fixed layout. -->
</body>
</html><?php }
}
?>