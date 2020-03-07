<?php /* Smarty version 3.1.27, created on 2017-03-16 01:00:19
         compiled from "/Applications/MAMP/htdocs/axetadmin/admin/templates/projects.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:39305027358c9b973acefd3_04968588%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '7fe705879e17375e4d55372dddbdd8f9b2a5e944' => 
    array (
      0 => '/Applications/MAMP/htdocs/axetadmin/admin/templates/projects.tpl',
      1 => 1489615217,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '39305027358c9b973acefd3_04968588',
  'variables' => 
  array (
    'projects' => 0,
    'project' => 0,
    'categories' => 0,
    'key' => 0,
    'category' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58c9b973b24f54_50073254',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58c9b973b24f54_50073254')) {
function content_58c9b973b24f54_50073254 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '39305027358c9b973acefd3_04968588';
echo $_smarty_tpl->getSubTemplate ("header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('title'=>'foo'), 0);
?>

<div class="wrapper">

    <!-- Main Header -->
    <header class="main-header">

        <!-- Logo -->
        <a href="index2.html" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>AM</b></span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>Axet Media</b></span>
        </a>

        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top" role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
                <div>
                    <a onclick="changeLang('en');" style="color: #fff;">En</a>
                    <a onclick="changeLang('ru');" style="color: #fff;">Ru</a>
                    selected = <div id="selLang" ></div>
                </div>
                <ul class="nav navbar-nav">
                    <!-- User Account Menu -->
                    <li class="dropdown user user-menu">
                        <!-- Menu Toggle Button -->
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <!-- The user image in the navbar-->
                            <img src="./dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                            <!-- hidden-xs hides the username on small devices so only the image appears. -->
                            <span class="hidden-xs">Axet media</span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- The user image in the menu -->
                            <li class="user-header">
                                <img src="./dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                                <p>
                                    Axet media - Creative Web Design Studio
                                    <small>2015</small>
                                </p>
                            </li>

                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <!-- <a href="#" class="btn btn-default btn-flat">Profile</a>-->
                                </div>
                                <div class="pull-right">
                                    <a href="#" class="btn btn-default btn-flat"  onclick="unlogin();">Выход</a>
                                </div>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">

        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar Menu -->
            <ul class="sidebar-menu">
                <li class="header">Меню</li>
                <!-- Optionally, you can add icons to the links -->
                <li><a href="/admin/"><i class="fa fa-university"></i> <span>Главная</span></a></li>
                <li><a href="/admin/categories.php"><i class="fa fa-bars"></i> <span>Категории</span></a></li>
                <li class="active"><a href="/admin/projects.php"><i class="fa fa-newspaper-o"></i> <span>Проекты</span></a></li>
            </ul><!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Main content -->
        <section class="content">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Проекты</h3>
                </div><!-- /.box-header -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addProject">Добавить проект</button>
                <div class="box-body table-responsive">
                    <table id="projects" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th width="10%">Позиция</th>
                            <th width="50%">Название</th>
                            <th width="25%">Категория</th>
                            <th width="15%"></th>
                        </tr>
                        </thead>
                        <tbody>

                        <?php
$_from = $_smarty_tpl->tpl_vars['projects']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$_smarty_tpl->tpl_vars['project'] = new Smarty_Variable;
$_smarty_tpl->tpl_vars['project']->_loop = false;
foreach ($_from as $_smarty_tpl->tpl_vars['project']->value) {
$_smarty_tpl->tpl_vars['project']->_loop = true;
$foreach_project_Sav = $_smarty_tpl->tpl_vars['project'];
?>
                        <tr>
                            <td><?php echo $_smarty_tpl->tpl_vars['project']->value['position'];?>
</td>
                            <td><a href="/admin/project.php?id=<?php echo $_smarty_tpl->tpl_vars['project']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['project']->value['name'];?>
</a></td>
                            <td><?php echo $_smarty_tpl->tpl_vars['project']->value['category'];?>
</td>
                            <td>
                                <a href="/admin/project.php?id=<?php echo $_smarty_tpl->tpl_vars['project']->value['id'];?>
"><i class="fa fa-pencil-square-o"></i></a>
                                <a  onclick="deleteProject(<?php echo $_smarty_tpl->tpl_vars['project']->value['id'];?>
);"><i class="fa fa-times"></i></a>
                            </td>
                        </tr>
                        <?php
$_smarty_tpl->tpl_vars['project'] = $foreach_project_Sav;
}
?>
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>Позиция</th>
                            <th>Название</th>
                            <th>Категория</th>
                            <th></th>
                        </tr>
                        </tfoot>
                    </table>
                </div><!-- /.box-body -->
            </div><!-- /.box -->
        </section><!-- /.content -->
    </div><!-- /.content-wrapper -->
    <!-- Modal -->
    <div id="addProject" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Новый проект</h4>
                </div>
                <div class="modal-body">
                    <div class="box box-info">
                        <!-- form start -->
                        <form class="form-horizontal">
                            <div class="box-body">
                                <div class="form-group">
                                    <label for="position" class="col-sm-2 control-label">Позиция</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="position" placeholder="Позиция">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name" class="col-sm-2 control-label">Название</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="name" placeholder="Название" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="category" class="col-sm-2 control-label">Категория</label>
                                    <div class="col-sm-10">
                                        <select id="category">
                                            <?php
$_from = $_smarty_tpl->tpl_vars['categories']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$_smarty_tpl->tpl_vars['category'] = new Smarty_Variable;
$_smarty_tpl->tpl_vars['category']->_loop = false;
$_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['category']->value) {
$_smarty_tpl->tpl_vars['category']->_loop = true;
$foreach_category_Sav = $_smarty_tpl->tpl_vars['category'];
?>
                                                <option value="<?php echo $_smarty_tpl->tpl_vars['key']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['category']->value;?>
</option>
                                            <?php
$_smarty_tpl->tpl_vars['category'] = $foreach_category_Sav;
}
?>
                                        </select>
                                    </div>
                                </div>
                                <!-- SELECTBOX CATEGORIES TODO -->

                            </div><!-- /.box-body -->
                        </form>
                    </div><!-- /.box -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="createProject();">Создать</button>
                </div>
            </div>

        </div>
    </div>
    <!-- Main Footer -->
    <footer class="main-footer">
        <!-- To the right -->
        <div class="pull-right hidden-xs">

        </div>
        <!-- Default to the left -->
        <strong>Copyright &copy; 2015 <a href="http://axetmedia.com">Axet Media</a>.</strong> All rights reserved.
    </footer>
    <!-- REQUIRED JS SCRIPTS -->

    <!-- jQuery 2.1.4 -->
    <?php echo '<script'; ?>
 src="./plugins/jQuery/jQuery-2.1.4.min.js"><?php echo '</script'; ?>
>
    <!-- Bootstrap 3.3.5 -->
    <?php echo '<script'; ?>
 src="./bootstrap/js/bootstrap.min.js"><?php echo '</script'; ?>
>
    <!-- AdminLTE App -->
    <?php echo '<script'; ?>
 src="./dist/js/app.min.js"><?php echo '</script'; ?>
>
    <!-- DataTables -->
    <?php echo '<script'; ?>
 src="./plugins/datatables/jquery.dataTables.min.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="./plugins/datatables/dataTables.bootstrap.min.js"><?php echo '</script'; ?>
>
    <!-- SlimScroll -->
    <?php echo '<script'; ?>
 src="./plugins/slimScroll/jquery.slimscroll.min.js"><?php echo '</script'; ?>
>
    <!-- FastClick -->
    <?php echo '<script'; ?>
 src="./plugins/fastclick/fastclick.min.js"><?php echo '</script'; ?>
>

    <?php echo '<script'; ?>
>
        $(function () {
            $('#projects').DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": true,
                "ordering": true,
                "info": true,
                "autoWidth": true
            });
        });

        function createProject(){
            var position = document.getElementById("position").value;
            var name = document.getElementById("name").value;
            var category = document.getElementById("category").value;
            $.post( "controller.php",{ position: position, name: name, category:category, action:"addProject"}, function( data ) {
                location.reload();
            });
        }

        function deleteProject(projectId){
            var r = confirm("Удалить проект?");
            if (r == true) {
                $.post( "controller.php",{ id: projectId, action:"deleteProject"}, function( data ) {
                    location.reload();
                });
            }
        }
        function changeLang(lang) {
            localStorage.setItem('lang', lang);
            document.cookie = 'lang='+lang;
            location.reload();
        }
    <?php echo '</script'; ?>
>

    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
</div><!-- ./wrapper -->
<?php echo $_smarty_tpl->getSubTemplate ("footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

<?php }
}
?>