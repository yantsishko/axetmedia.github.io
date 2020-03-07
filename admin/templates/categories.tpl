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
                <li class="active"><a href="/admin/categories.php"><i class="fa fa-bars"></i> <span>Категории</span></a></li>
                <li><a href="/admin/projects.php"><i class="fa fa-newspaper-o"></i> <span>Проекты</span></a></li>
                <li><a href="/admin/blog.php"><i class="fa fa-newspaper-o"></i> <span>Блог</span></a></li>
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
                    <h3 class="box-title">Категории</h3>
                </div><!-- /.box-header -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addCategory">Добавить категорию</button>
                <input type="hidden" id="c_id" value="0">
                <div class="box-body table-responsive">
                    <table id="categories" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th width="10%">Позиция</th>
                            <th width="60%">Название</th>
                            <th width="15%">Кол-во проектов</th>
                            <th width="15%"></th>
                        </tr>
                        </thead>
                        <tbody>

                        {foreach from=$categories item=category}
                        <tr>
                            <td>{$category.position}</td>
                            <td>{$category.name}</td>
                            <td>{$category.count}</td>
                            <td>
                                <a  onclick="showCategory({$category.id});" data-toggle="modal" data-target="#editCategory"><i class="fa fa-pencil-square-o"></i></a>
                                <a  onclick="deleteCategory({$category.id});"><i class="fa fa-times"></i></a>

                            </td>
                        </tr>
                        {/foreach}
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>Позиция</th>
                            <th>Название</th>
                            <th>Кол-во проектов</th>
                            <th></th>
                        </tr>
                        </tfoot>
                    </table>
                </div><!-- /.box-body -->
            </div><!-- /.box -->
        </section><!-- /.content -->
    </div><!-- /.content-wrapper -->
    <!-- Modal -->
    <div id="addCategory" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Новая категория</h4>
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
                                    <label for="title" class="col-sm-2 control-label">Title</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="title" placeholder="Title">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="description" class="col-sm-2 control-label">Description</label>
                                    <div class="col-sm-10">
                                        <textarea style="width: 453px;" id="description" placeholder="Description"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" id="istitle"> Заголовок
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- /.box-body -->
                        </form>
                    </div><!-- /.box -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="createCategory();">Создать</button>
                </div>
            </div>

        </div>
    </div>
    <div id="editCategory" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Редактирование категории</h4>
                </div>
                <div class="modal-body">
                    <div class="box box-info">
                        <!-- form start -->
                        <form class="form-horizontal">
                            <div class="box-body">
                                <div class="form-group">
                                    <label for="edit_position" class="col-sm-2 control-label">Позиция</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="edit_position" placeholder="Позиция">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="edit_name" class="col-sm-2 control-label">Название</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="edit_name" placeholder="Название" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="edit_title" class="col-sm-2 control-label">Title</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="edit_title" placeholder="Title">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="edit_description" class="col-sm-2 control-label">Description</label>
                                    <div class="col-sm-10">
                                        <textarea style="width: 453px;" id="edit_description" placeholder="Description"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" id="edit_istitle"> Заголовок
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- /.box-body -->
                        </form>
                    </div><!-- /.box -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="updateCategory();">Сохранить</button>
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

    <script>
        $(function () {
            $('#categories').DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": true,
                "ordering": true,
                "info": true,
                "autoWidth": true
            });
        });

        function showCategory(categoryId){
            $.post( "controller.php",{ categoryId: categoryId,  action:"showCategory"}, function( data ) {
                data = JSON.parse(data);

                document.getElementById("edit_position").value = data.position;
                document.getElementById("edit_name").value = data.name;
                document.getElementById("edit_title").value = data.title;
                document.getElementById("edit_description").value = data.description;
                if (data.isTitle == "Y"){
                    document.getElementById("edit_istitle").checked = true;
                }else{
                    document.getElementById("edit_istitle").checked = false;
                }
                document.getElementById("c_id").value = categoryId;
            });
        }

        function createCategory(){
            var position = document.getElementById("position").value;
            var name = document.getElementById("name").value;
            var isTitle = document.getElementById("istitle").checked;
            var title = document.getElementById("title").value;
            var description = document.getElementById("description").value;

            $.post( "controller.php",{ position: position, name: name, isTitle:isTitle, title: title, description:description, action:"addCategory"}, function( data ) {
                location.reload();
            });
        }

        function updateCategory(){
            var id = document.getElementById("c_id").value;
            var position = document.getElementById("edit_position").value;
            var name = document.getElementById("edit_name").value;
            var isTitle = document.getElementById("edit_istitle").checked;
            var title = document.getElementById("edit_title").value;
            var description = document.getElementById("edit_description").value;

            $.post( "controller.php",{ position: position,id : id, name: name, isTitle:isTitle, title: title, description:description, action:"updateCategory"}, function( data ) {
                location.reload();
            });
        }

        function deleteCategory(categoryId){
            var r = confirm("Удалить категорию?");
            if (r == true) {
                $.post( "controller.php",{ id: categoryId, action:"deleteCategory"}, function( data ) {
                    location.reload();
                });
            }
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
