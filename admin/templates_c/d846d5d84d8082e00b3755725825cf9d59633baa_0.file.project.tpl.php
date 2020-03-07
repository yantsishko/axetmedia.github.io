<?php /* Smarty version 3.1.27, created on 2017-03-16 01:00:21
         compiled from "/Applications/MAMP/htdocs/axetadmin/admin/templates/project.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:150322141358c9b9758bc8c1_18584956%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd846d5d84d8082e00b3755725825cf9d59633baa' => 
    array (
      0 => '/Applications/MAMP/htdocs/axetadmin/admin/templates/project.tpl',
      1 => 1489615192,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '150322141358c9b9758bc8c1_18584956',
  'variables' => 
  array (
    'project' => 0,
    'preview' => 0,
    'categories' => 0,
    'key' => 0,
    'category' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58c9b975914c41_59976308',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58c9b975914c41_59976308')) {
function content_58c9b975914c41_59976308 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '150322141358c9b9758bc8c1_18584956';
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
                <button type="button" class="btn btn-primary" onclick="saveProject(<?php echo $_smarty_tpl->tpl_vars['project']->value['id'];?>
);">Сохранить</button>
                <input id="p_id" type="hidden" value="<?php echo $_smarty_tpl->tpl_vars['project']->value['id'];?>
">
                <div class="box-body ">
                    <img src="images/thumbs/<?php echo $_smarty_tpl->tpl_vars['preview']->value;?>
" width="100">
                    <form enctype="multipart/form-data" action="/admin/controller.php?action=uploadFile&id=<?php echo $_smarty_tpl->tpl_vars['project']->value['id'];?>
" method="POST">
                        Превью: <input name="preview" type="file" />
                        <input type="submit" value="Send File" />
                    </form>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="position" class="col-sm-2 control-label">Позиция</label>
                        <div class="col-sm-10">
                            <input type="text" value="<?php echo $_smarty_tpl->tpl_vars['project']->value['position'];?>
" class="form-control" id="position" placeholder="Позиция"  style="width:100px;">
                        </div>
                    </div>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="name" class="col-sm-2 control-label">Название</label>
                        <div class="col-sm-10">
                            <input type="text" value="<?php echo $_smarty_tpl->tpl_vars['project']->value['name'];?>
"  class="form-control" id="name" placeholder="Название"  style="width:500px;">
                        </div>
                    </div>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="designer" class="col-sm-2 control-label">Дизайнер</label>
                        <div class="col-sm-10">
                            <input type="text" value="<?php echo $_smarty_tpl->tpl_vars['project']->value['designer'];?>
"  class="form-control" id="designer" placeholder="Дизайнер"  style="width:500px;">
                        </div>
                    </div>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="verst" class="col-sm-2 control-label">Верстальщик</label>
                        <div class="col-sm-10">
                            <input type="text" value="<?php echo $_smarty_tpl->tpl_vars['project']->value['verst'];?>
"  class="form-control" id="verst" placeholder="Верстальщик"  style="width:500px;">
                        </div>
                    </div>
                    </br>
                    </br>
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
"  <?php if ($_smarty_tpl->tpl_vars['project']->value['category'] == $_smarty_tpl->tpl_vars['key']->value) {?>selected="selected"<?php }?> ><?php echo $_smarty_tpl->tpl_vars['category']->value;?>
</option>
                                <?php
$_smarty_tpl->tpl_vars['category'] = $foreach_category_Sav;
}
?>
                            </select>
                        </div>
                    </div>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="description" class="col-sm-2 control-label">Описание</label>
                        <div class="col-sm-10">
                            <textarea id="description" style="width:500px;"><?php echo $_smarty_tpl->tpl_vars['project']->value['descr'];?>
</textarea>
                        </div>
                    </div>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="short_descr" class="col-sm-2 control-label">Описание краткое</label>
                        <div class="col-sm-10">
                            <textarea id="short_descr" style="width:500px;"><?php echo $_smarty_tpl->tpl_vars['project']->value['short_descr'];?>
</textarea>
                        </div>
                    </div>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="titleTeg" class="col-sm-2 control-label">Title Meta</label>
                        <div class="col-sm-10">
                            <input type="text" value="<?php echo $_smarty_tpl->tpl_vars['project']->value['titleTeg'];?>
"  class="form-control" id="titleTeg" placeholder="Title"  style="width:500px;">
                        </div>
                    </div>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="descriptionTeg" class="col-sm-2 control-label">Описание Meta</label>
                        <div class="col-sm-10">
                            <textarea id="descriptionTeg" style="width:500px;"><?php echo $_smarty_tpl->tpl_vars['project']->value['descrTeg'];?>
</textarea>
                        </div>
                    </div>
                    </br>
                    </br>
                    <!-- UPLOADER -->
                    <div class="container">


                        <div class="row">

                            <div class="tab-content" style="margin-top: 10px;">

                                <!-- Filesystem tab -->
                                <div class="tab-pane active" id="filesystem-tab">
                                    <div class="well well-lg auto-tip" id="drop-box">

                                        <div class="form-group">
                                            <input type="file" class="form-control auto-tip" id="file-input" name="my-file" />
                                        </div>
                                    </div>
                                </div>

                                <!-- Canvas tab -->
                                <div class="tab-pane" id="canvas-tab">
                                    <div class="well well-lg">
                                        <canvas id="canvas" width="150" height="100"></canvas>
                                        <button class="btn btn-default btn-std pull-right" id="canvas-add-btn">Add</button>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <form class="form-inline" role="form" id="upload-form" method="post" action="./serverLogic.fallback.php" enctype="multipart/form-data">
                                <input type="hidden" name="test-value-from-form" value="test" />
                                <div class="checkbox" style="margin-right: 24px;">
                                    <label>
                                        <input type="checkbox" id="previews-checker" checked="checked" /> Generate previews
                                    </label>
                                </div>
                                <div class="checkbox" style="margin-right: 24px;">
                                    <label>
                                        <input type="checkbox" id="autostart-checker" checked="checked"/> Autostart
                                    </label>
                                </div>
                                <div class="checkbox" style="margin-right: 12px;">
                                    <label>
                                        <input type="radio" name="method" value="POST" checked="checked" /> POST
                                    </label>
                                </div>
                                <button id="send-btn" type="submit" class="btn btn-primary btn-std pull-right">Send</button>
                                <button id="clear-btn" class="btn btn-danger btn-std pull-right">Clear</button>
                            </form>
                        </div>

                        <div class="row">
                            <h3>Upload queue</h3>
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>Preview</th>
                                    <th>Original filename</th>
                                    <th>Size</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody id="upload-rows"></tbody>
                            </table>
                        </div>

                    </div><!-- /.container -->


                    <div id="console-tip-anchor" class="auto-tip" ></div>
                    <!-- UPLOADER -->
                </div>

            </div><!-- /.box -->
        </section><!-- /.content -->
    </div><!-- /.content-wrapper -->

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
 src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 type="text/javascript" src="./js/jquery.damnUploader.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="./js/interafce.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="./js/uploader-setup.js"><?php echo '</script'; ?>
>

    <?php echo '<script'; ?>
>
        function saveProject(id){
            var position = document.getElementById("position").value;
            var name = document.getElementById("name").value;
            var designer = document.getElementById("designer").value;
            var verst = document.getElementById("verst").value;
            var category = document.getElementById("category").value;
            var description = document.getElementById("description").value;
            var titleTeg = document.getElementById("titleTeg").value;
            var descrTeg = document.getElementById("descriptionTeg").value;
            var short_descr = document.getElementById("short_descr").value;

            $.post( "controller.php",{ id:id, position: position, name: name, designer:designer, verst: verst,category:category, description:description, titleTeg:titleTeg, descrTeg:descrTeg,short_descr:short_descr, action:"updateProject"}, function( data ) {
               location.reload();
            });
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