{include file="header.tpl" title=foo}
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
                <li><a href="/admin/projects.php"><i class="fa fa-newspaper-o"></i> <span>Проекты</span></a></li>
                <li  class="active"><a href="/admin/blog.php"><i class="fa fa-newspaper-o"></i> <span>Блог</span></a></li>
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
                    <h3 class="box-title">Статья</h3>
                </div><!-- /.box-header -->
                <button type="button" class="btn btn-primary" onclick="saveArticle({$article.id});">Сохранить</button>
                <input id="p_id" type="hidden" value="{$article.id}">
                <div class="box-body ">
                    <img src="/img/blog/{$preview}" width="100">
                    <form enctype="multipart/form-data" action="/admin/controller.php?action=uploadFile&id={$article.id}&type=blog" method="POST">
                        Превью: <input name="preview" type="file" />
                        <input type="submit" value="Send File" />
                    </form>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="position" class="col-sm-2 control-label">Позиция</label>
                        <div class="col-sm-10">
                            <input type="text" value="{$article.position}" class="form-control" id="position" placeholder="Позиция"  style="width:100px;">
                        </div>
                    </div>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="name" class="col-sm-2 control-label">Название</label>
                        <div class="col-sm-10">
                            <input type="text" value="{$article.name}"  class="form-control" id="name" placeholder="Название"  style="width:500px;">
                        </div>
                    </div>
                    </br>
                    </br>
                    {*<div class="form-group">*}
                        {*<label for="category" class="col-sm-2 control-label">Категория</label>*}
                        {*<div class="col-sm-10">*}
                            {*<select id="category">*}
                                {*{foreach from=$categories item=category key=key}*}
                                    {*<option value="{$key}"  {if $project.category == $key}selected="selected"{/if} >{$category}</option>*}
                                {*{/foreach}*}
                            {*</select>*}
                        {*</div>*}
                    {*</div>*}
                    {*</br>*}
                    {*</br>*}
                    <div class="form-group">
                        <label for="category" class="col-sm-2 control-label">Категория</label>
                        <div class="col-sm-10">
                            <select id="category">
                                {foreach from=$categories item=category key=key}
                                    <option value="{$key}"  {if $article.category_id == $key}selected="selected"{/if} >{$category}</option>
                                {/foreach}
                            </select>
                        </div>
                    </div>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="description" class="col-sm-2 control-label">Описание</label>
                        <div class="col-sm-10">
                            <textarea id="description" style="width:500px;">{$article.descr}</textarea>
                        </div>
                    </div>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="titleTeg" class="col-sm-2 control-label">Title Meta</label>
                        <div class="col-sm-10">
                            <input type="text" value="{$article.titleTeg}"  class="form-control" id="titleTeg" placeholder="Title"  style="width:500px;">
                        </div>
                    </div>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="descriptionTeg" class="col-sm-2 control-label">Описание Meta</label>
                        <div class="col-sm-10">
                            <textarea id="descriptionTeg" style="width:500px;">{$article.descrTeg}</textarea>
                        </div>
                    </div>
                    </br>
                    </br>
                    <div class="form-group">
                        <label for="shortDescr" class="col-sm-2 control-label">Краткое описание</label>
                        <div class="col-sm-10">
                            <textarea id="shortDescr" style="width:500px;">{$article.shortDescr}</textarea>
                        </div>
                    </div>
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
    <script src="./plugins/jQuery/jQuery-2.1.4.min.js"></script>
    <!-- Bootstrap 3.3.5 -->
    <script src="./bootstrap/js/bootstrap.min.js"></script>
    <!-- AdminLTE App -->
    <script src="./dist/js/app.min.js"></script>
    <!-- DataTables -->
    <script src="./plugins/datatables/jquery.dataTables.min.js"></script>
    <script src="./plugins/datatables/dataTables.bootstrap.min.js"></script>
    <!-- SlimScroll -->
    <script src="./plugins/slimScroll/jquery.slimscroll.min.js"></script>
    <!-- FastClick -->
    <script src="./plugins/fastclick/fastclick.min.js"></script>


    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>


    <script>
        function saveArticle(id){
            var position = document.getElementById("position").value;
            var name = document.getElementById("name").value;
            var category_id = document.getElementById("category").value;
            var description = document.getElementById("description").value;
            var titleTeg = document.getElementById("titleTeg").value;
            var descrTeg = document.getElementById("descriptionTeg").value;
            var shortDescr = document.getElementById("shortDescr").value;

            $.post( "controller.php",{ id:id, position: position, name: name, category_id: category_id, description:description, titleTeg:titleTeg, descrTeg:descrTeg, shortDescr:shortDescr, action:"updateArticle"}, function( data ) {
               location.reload();
            });
        }
        function changeLang(lang) {
            localStorage.setItem('lang', lang);
            document.cookie = 'lang='+lang;
            location.reload();
        }
    </script>

    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
</div><!-- ./wrapper -->
{include file="footer.tpl"}
