<?php /* Smarty version 3.1.27, created on 2017-03-24 00:41:19
         compiled from "/Applications/MAMP/htdocs/axetgeneral_fin_start/admin/templates/footer.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:56537058558d440ff7c0745_29189656%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'dfb268d5090d2466a69b43b06a28f7d98ba7377e' => 
    array (
      0 => '/Applications/MAMP/htdocs/axetgeneral_fin_start/admin/templates/footer.tpl',
      1 => 1489614679,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '56537058558d440ff7c0745_29189656',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58d440ff7c3b69_76631208',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58d440ff7c3b69_76631208')) {
function content_58d440ff7c3b69_76631208 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '56537058558d440ff7c0745_29189656';
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