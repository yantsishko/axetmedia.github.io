<?php /* Smarty version 3.1.27, created on 2017-03-16 01:06:37
         compiled from "/Applications/MAMP/htdocs/axetmedia/admin/templates/footer.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:106493858958c9baedb82fc9_40488777%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'fd210a54cfed67b9232fca14f36db8fb0906699a' => 
    array (
      0 => '/Applications/MAMP/htdocs/axetmedia/admin/templates/footer.tpl',
      1 => 1489614679,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '106493858958c9baedb82fc9_40488777',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58c9baedb850b0_67295911',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58c9baedb850b0_67295911')) {
function content_58c9baedb850b0_67295911 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '106493858958c9baedb82fc9_40488777';
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