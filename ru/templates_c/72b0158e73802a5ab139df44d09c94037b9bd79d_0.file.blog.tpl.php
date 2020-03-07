<?php /* Smarty version 3.1.27, created on 2017-04-19 01:46:48
         compiled from "/Applications/MAMP/htdocs/axetgeneral_fin_start/templates/blog.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:23611341058f69758968050_79816302%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '72b0158e73802a5ab139df44d09c94037b9bd79d' => 
    array (
      0 => '/Applications/MAMP/htdocs/axetgeneral_fin_start/templates/blog.tpl',
      1 => 1492554709,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '23611341058f69758968050_79816302',
  'variables' => 
  array (
    'category' => 0,
    'articles' => 0,
    'article' => 0,
    'pages' => 0,
    'foo' => 0,
    'categories' => 0,
    'cat' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58f697589e9a37_05112902',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58f697589e9a37_05112902')) {
function content_58f697589e9a37_05112902 ($_smarty_tpl) {
if (!is_callable('smarty_function_math')) require_once '/Applications/MAMP/htdocs/axetgeneral_fin_start/smarty/plugins/function.math.php';

$_smarty_tpl->properties['nocache_hash'] = '23611341058f69758968050_79816302';
?>
<!DOCTYPE html>
<html lang="ru" class="no-js">

<head>

    <!-- Meta Data -->
    <title>Блог - Создание и дизайн сайтов, SEO, фирменный стиль компании | Веб студия Axet Media</title>
    <meta charset="utf-8" />
    <meta name="description" content="Новости веб студии Axet Media. Полезные статьи и обзоры в сфере дизайна и IT технологий от веб студии Axet Media" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/img/favicon/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/img/favicon/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/img/favicon/apple-touch-icon-152x152.png">
    <link rel="icon" type="image/png" href="/img/favicon/favicon-196x196.png" sizes="196x196">
    <link rel="icon" type="image/png" href="/img/favicon/favicon-160x160.png" sizes="160x160">
    <link rel="icon" type="image/png" href="/img/favicon/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/img/favicon/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="/img/favicon/favicon-32x32.png" sizes="32x32">


    <!-- Fonts-->
    <link href="/css/font-awesome.min.css" rel="stylesheet">
    <link href="/css/simple-line-icons.css" rel="stylesheet">

    <!-- Bootstrap -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/owl.carousel.css" rel="stylesheet">
    <link href="/style.css" rel="stylesheet">
    <link href="/css/responsive.css" rel="stylesheet">

    <?php echo '<script'; ?>
 src="/js/modernizr.custom.js"><?php echo '</script'; ?>
>


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <?php echo '<script'; ?>
 src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"><?php echo '</script'; ?>
>
    <![endif]-->
</head>

<body id="bigWrapper" data-spy="scroll" data-target=".navbar-default" data-offset="100" >

<header>
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation" data-spy="affix" data-offset-top="0">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/index.html"><img src="/img/logo-navbar.png" alt=""></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right" id="navbar-collapse">
                <ul class="nav navbar-nav">
                    <li ><a data-scroll href="/index.html">Главная</a></li>
                    <li><a data-scroll href="/about.html">О студии</a></li>
                    <li class="dropdown">
                        <a data-scroll href="/uslugi.html" class="dropdown-toggle" data-toggle="dropdown">Услуги <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a data-scroll href="/uslugi/razrabotka-saytov.html">Разработка сайтов</a></li>
                            <li><a data-scroll href="http://landing.axetmedia.by" target="_blank">Разработка Landing Page</a></li>
                            <li><a data-scroll href="/uslugi/razrabotka-dizajna.html">Разработка дизайна</a></li>
                            <li><a data-scroll href="/uslugi/prodvizhenie-saytov.html">Продвижение и интернет маркетинг</a></li>
                            <li><a data-scroll href="/uslugi/firmennyj-stil-i-brendbuk.html">Фирменный стиль и брендбук</a></li>
                            <li><a data-scroll href="/uslugi/hosting.html">Хостинг</a></li>

                        </ul>
                    </li>
                    <li><a data-scroll href="/portfolio.html">Портфолио</a></li>
                    <li class="active"><a data-scroll href="/blog.html">Блог</a></li>
                    <li><a data-scroll href="/contact.html">Контакты</a></li>

                </ul>

            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</header>


<!--OVERLAY FOR THE PORTFOLIO MENU // DONT' DELETE IF YOU PLAN TO USE THIS OPTION-->
<div class="container overlay overlay-hugeinc">

    <div class="row">

        <div class="overlay-section">
            <!--overlay content-->
        </div>

        <div class="col-md-12 ">
            <a class="overlay-close">
                <br><br>

                <i data-icon="&#xe082;"></i>
            </a>
        </div>
    </div>
</div>
<!--end OVERLAY FOR THE PORTFOLIO MENU // DONT' DELETE IF YOU PLAN TO USE THIS OPTION-->


<section id="aboutIntro">

    <div class="container">

        <!--header-->
        <div class="row sectionIntro">
            <br><br>
            <div class="col-md-12 col-md-offset-0 text-center">
                <h1><span data-scroll-reveal="enter left move 10px over 1s after 0.2s"><?php if ($_smarty_tpl->tpl_vars['category']->value != '') {
echo $_smarty_tpl->tpl_vars['category']->value['name'];
} else { ?>Статьи и новости компании<?php }?></span></h1>

                <img src="/img/incline-white.png" class="inclineLine center-block" alt="incline">
                <h3><span class="serif">Следите за новостями </span></h3>

                <img src="/img/zigzagsepWhite.png" class="img-responsive center-block zigzagSep" alt="separator">

            </div>
        </div>
        <!--end header-->


    </div>

</section>


<section id="aboutContent" class="blogContent">

    <div class="container">

        <div class="row content">
            <div class="col-md-8 blog">
                <?php
$_from = $_smarty_tpl->tpl_vars['articles']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$_smarty_tpl->tpl_vars['article'] = new Smarty_Variable;
$_smarty_tpl->tpl_vars['article']->_loop = false;
$_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['article']->value) {
$_smarty_tpl->tpl_vars['article']->_loop = true;
$foreach_article_Sav = $_smarty_tpl->tpl_vars['article'];
?>
                    <!-- Blog Post-->
                    <article>
                        <img class="img-responsive" src="/img/blog/<?php echo $_smarty_tpl->tpl_vars['article']->value['image'];?>
" alt="" />
                        <div class="post-content">
                            <h2><a href="/article.php?id=<?php echo $_smarty_tpl->tpl_vars['article']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['article']->value['name'];?>
</a></h2>
                            <div class="thedate"><?php echo $_smarty_tpl->tpl_vars['article']->value['createAt'];?>
 <?php echo $_smarty_tpl->tpl_vars['article']->value['category_name'];?>
</div>
                            <hr/>
                            <p><?php echo $_smarty_tpl->tpl_vars['article']->value['short_descr'];?>
</p>

                            <a class="button" href="/article.php?id=<?php echo $_smarty_tpl->tpl_vars['article']->value['id'];?>
">Продолжить чтение →</a>
                        </div>
                    </article>
                    <!-- End of Blog Post-->
                <?php
$_smarty_tpl->tpl_vars['article'] = $foreach_article_Sav;
}
?>

                <nav>
                    <ul class="pagination">
                        <?php if ((($tmp = @$_GET['page'])===null||$tmp==='' ? 1 : $tmp) > 1) {?>
                            <li>
                                <a href="/blog.php<?php if ($_smarty_tpl->tpl_vars['category']->value != '') {?>?id=<?php echo $_smarty_tpl->tpl_vars['category']->value['id'];
}
if ($_GET['id']) {?>&page=<?php echo smarty_function_math(array('equation'=>"x - 1",'x'=>$_GET['page']),$_smarty_tpl);
} else { ?>?page=<?php echo smarty_function_math(array('equation'=>"x - 1",'x'=>$_GET['page']),$_smarty_tpl);
}?>" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                        <?php }?>
                        <?php $_smarty_tpl->tpl_vars['foo'] = new Smarty_Variable;$_smarty_tpl->tpl_vars['foo']->step = 1;$_smarty_tpl->tpl_vars['foo']->total = (int) ceil(($_smarty_tpl->tpl_vars['foo']->step > 0 ? $_smarty_tpl->tpl_vars['pages']->value+1 - (1) : 1-($_smarty_tpl->tpl_vars['pages']->value)+1)/abs($_smarty_tpl->tpl_vars['foo']->step));
if ($_smarty_tpl->tpl_vars['foo']->total > 0) {
for ($_smarty_tpl->tpl_vars['foo']->value = 1, $_smarty_tpl->tpl_vars['foo']->iteration = 1;$_smarty_tpl->tpl_vars['foo']->iteration <= $_smarty_tpl->tpl_vars['foo']->total;$_smarty_tpl->tpl_vars['foo']->value += $_smarty_tpl->tpl_vars['foo']->step, $_smarty_tpl->tpl_vars['foo']->iteration++) {
$_smarty_tpl->tpl_vars['foo']->first = $_smarty_tpl->tpl_vars['foo']->iteration == 1;$_smarty_tpl->tpl_vars['foo']->last = $_smarty_tpl->tpl_vars['foo']->iteration == $_smarty_tpl->tpl_vars['foo']->total;?>
                            <li><a href="/blog.php<?php if ($_smarty_tpl->tpl_vars['category']->value != '') {?>?id=<?php echo $_smarty_tpl->tpl_vars['category']->value['id'];
}
if ($_GET['id']) {?>&page=<?php echo $_smarty_tpl->tpl_vars['foo']->value;
} else { ?>?page=<?php echo $_smarty_tpl->tpl_vars['foo']->value;
}?>"><?php echo $_smarty_tpl->tpl_vars['foo']->value;?>
</a></li>
                        <?php }} ?>

                        <?php if ((($tmp = @$_GET['page'])===null||$tmp==='' ? 1 : $tmp) < $_smarty_tpl->tpl_vars['pages']->value) {?>
                            <li>
                                <a href="/blog.php<?php if ($_smarty_tpl->tpl_vars['category']->value != '') {?>?id=<?php echo $_smarty_tpl->tpl_vars['category']->value['id'];
}
if ($_GET['id']) {?>&page=<?php echo smarty_function_math(array('equation'=>"x + 1",'x'=>(($tmp = @$_GET['page'])===null||$tmp==='' ? 1 : $tmp)),$_smarty_tpl);
} else { ?>?page=<?php echo smarty_function_math(array('equation'=>"x + 1",'x'=>(($tmp = @$_GET['page'])===null||$tmp==='' ? 1 : $tmp)),$_smarty_tpl);
}?>" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        <?php }?>
                    </ul>
                </nav>
            </div>

            <div class="col-md-4 blog">
                <div class="sidebar">

                    <div class="widget">
                        <h3 class="badge">Категории</h3>
                        <ul>
                            <?php
$_from = $_smarty_tpl->tpl_vars['categories']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$_smarty_tpl->tpl_vars['cat'] = new Smarty_Variable;
$_smarty_tpl->tpl_vars['cat']->_loop = false;
$_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['cat']->value) {
$_smarty_tpl->tpl_vars['cat']->_loop = true;
$foreach_cat_Sav = $_smarty_tpl->tpl_vars['cat'];
?>
                                <li <?php if ($_smarty_tpl->tpl_vars['category']->value['id'] == $_smarty_tpl->tpl_vars['cat']->value['id']) {?> class="active"<?php }?>><a href="/blog.php?id=<?php echo $_smarty_tpl->tpl_vars['cat']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['cat']->value['name'];?>
</a> <span class="badge"><?php echo $_smarty_tpl->tpl_vars['cat']->value['count'];?>
</span></li>
                            <?php
$_smarty_tpl->tpl_vars['cat'] = $foreach_cat_Sav;
}
?>
                        </ul>
                    </div>

                    <div class="widget">
                        <a href="">
                            <img class="img-responsive" src="/img/blog/example.jpg" alt="" />
                        </a>
                    </div>

                    <div class="widget">
                        <a href="">
                            <img class="img-responsive" src="/img/blog/example.jpg" alt="" />
                        </a>
                    </div>


                </div>

            </div>

        </div>
    </div>


    <!--content-->
    </div>

</section>

<section id="callToAction">

    <div class="container">
        <div class="col-md-6" data-scroll-reveal="enter left move 5px over 1s after 0.2s">
            <img class="img-responsive" alt="Photo" src="/img/responsive.png">
        </div>
        <div class="col-md-6" data-scroll-reveal="enter right move 5px over 1s after 0.8s">
            <br>
            <h4 class="minimal"><small>Остались</small> вопросы?</h4>
            <p>
                Остались вопросы? Не нашли решений для вашего проекта? Не беда. Закажите обратный звонок и наши менеджеры свяжуться с вами в ближайшее время
                и ответят на все интересующие вас вопросы, а так же окажут помощь в подборе решения для вашего проекта.
            </p>

            <a class="btn btn-default btn-black" href="#">Заказать звонок</a>

        </div>
    </div>

</section>


<section id="shortcodes2">

    <div class="container">

        <div class="row content">

            <h5 class="minimal">Наши услуги</h5>
            <hr>
            <!--item-->
            <div class="aboutItem col-md-4 col-sm-6 col-xs-12 clearfix" data-scroll-reveal="enter left move 5px over 1s after 0.2s">
                <div class="aboutIconWrapper" data-stellar-ratio="1.05">
                    <i class="fa fa-code aboutIcon"></i>
                </div>
                <div class="aboutText">
                    <h4><a href="/uslugi/razrabotka-saytov.html">Разработка сайтов</a></h4>
                    <div class="aboutSeparator"></div>
                    <p>
                        Разработка сайтов любой тематики и любой сложности. От сайтов визиток до объемных интернет-порталов.
                    </p>
                </div>
            </div>
            <!--end item-->

            <!--item-->
            <div class="aboutItem col-md-4 col-sm-6 col-xs-12 clearfix" data-scroll-reveal="enter right move 5px over 1s after 0.4s">
                <div class="aboutIconWrapper" data-stellar-ratio="1.05">
                    <i class="fa fa-code aboutIcon" ></i>
                </div>
                <div class="aboutText">
                    <h4><a href="http://landing.axetmedia.by" target="_blank">Разработка Landing Page</a></h4>
                    <div class="aboutSeparator"></div>
                    <p>
                        Разработка продающих страниц, разработка Landing page под ключ.
                    </p>
                </div>
            </div>
            <!--end item-->

            <!--item-->
            <div class="aboutItem col-md-4 col-sm-6 col-xs-12 clearfix" data-scroll-reveal="enter left move 5px over 1s after 0.2s">
                <div class="aboutIconWrapper" data-stellar-ratio="1.05">
                    <i class="fa fa-code aboutIcon"></i>
                </div>
                <div class="aboutText">
                    <h4><a href="/uslugi/razrabotka-dizajna.html">Разработка дизайна</a></h4>
                    <div class="aboutSeparator"></div>
                    <p>
                        Разработка уникального и эксклюзивного дизайна. Редизайн существующих проектов. Разработка логотипов, визиток, баннеров, и многое другое.
                    </p>

                </div>
            </div>
            <!--end item-->


        </div>

        <div class="row">
            <!--item-->
            <div class="aboutItem col-md-4 col-sm-6 col-xs-12 clearfix" data-scroll-reveal="enter left move 5px over 1s after 0.2s">
                <div class="aboutIconWrapper" data-stellar-ratio="1.05">
                    <i class="fa fa-pencil aboutIcon"></i>
                </div>
                <div class="aboutText">
                    <h4><a href="/uslugi/firmennyj-stil-i-brendbuk.html">Фирменный стиль и брендбук</a></h4>
                    <div class="aboutSeparator"></div>
                    <p>
                        Разработка фирменного стиля и брендирование вашей компании.
                    </p>
                </div>
            </div>
            <!--end item-->

            <!--item-->
            <div class="aboutItem col-md-4 col-sm-6 col-xs-12 clearfix" data-scroll-reveal="enter right move 5px over 1s after 0.4s">
                <div class="aboutIconWrapper" data-stellar-ratio="1.05">
                    <i class="glyphicon glyphicon-eye-open aboutIcon"></i>
                </div>
                <div class="aboutText">
                    <h4><a href="/uslugi/prodvizhenie-saytov.html">Продвижение и маркетинг</a></h4>
                    <div class="aboutSeparator"></div>
                    <p>
                        Продвижение сайтов под ключ. SEO продвижение, контекстная реклама, SMM, таргетированная реклама, продвижение продающих страниц
                    </p>
                </div>
            </div>
            <!--end item-->

            <!--item-->
            <div class="aboutItem col-md-4 col-sm-6 col-xs-12 clearfix" data-scroll-reveal="enter left move 5px over 1s after 0.6s">
                <div class="aboutIconWrapper" data-stellar-ratio="1.05">
                    <i class="fa fa-database aboutIcon" ></i>
                </div>
                <div class="aboutText">
                    <h4><a href="/uslugi/hosting.html">Хостинг</a></h4>
                    <div class="aboutSeparator"></div>
                    <p>
                        Размещаем сайты наших клиентов на серверах, физически размещенных в Германии и Беларуси. Высокий уровень сервиса и качество хостинга.
                    </p>
                </div>
            </div>
            <!--end item-->

        </div>


    </div>

</section>



<section id="footer" class="dark">


    <div class="topLine clearfix">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12 footerBox">

                    <img src="/img/logoWhite.png" class="img-responsive footerLogo" alt="footer logo">
                </div>

                <div class="col-md-6 col-sm-6 col-xs-12 footerBox">

                    <h4>Об Axet Media</h4>
                    <div class="lineSeparator"></div>
                    <p>
                        Самое лучшее, что может произойти с Вашим бизнесом в надежных руках.
                    </p>

                    <div class="subscribe">
                        <form method="post"  action="javascript:void(null);" onsubmit="subscribe()">
                            <input type="email" placeholder="Ваш email:" id="subscribe_email" required>
                            <button class="outline-outward btn btn-default btn-black" >Подписаться!</button>
                        </form>
                    </div>
                </div>


                <div class="col-md-3 col-sm-6 col-xs-12 footerBox">
                    <h4>Связаться с нами</h4>
                    <div class="lineSeparator"></div>
                    <div class="row">

                        <div class="col-md-5">
                            <ul class="infoContact">
                                <li><i class="fa fa-location-arrow"></i> 220004<br> Раковская, 18</li>
                                <li>офис 14</li>
                            </ul>

                            <ul class="infoContact">
                                <li><i class="fa fa-phone"></i> 25 615-08-32</li>
                                <li>29 194-08-50</li>
                                <li>29 654-50-80</li>
                            </ul>
                        </div>

                        <div class="col-md-7">
                            <ul class="infoContact">
                                <li><a href="mailto:info@axetmedia.com?Subject=HelloAgain" target="_top"><i class="fa fa-envelope-o"></i> info@axetmedia.com</a></li>
                                <li><a href="mailto:partner@axetmedia.com?Subject=HelloAgain" target="_top"> partner@axetmedia.com</a></li>
                                <li><a href="mailto:support@axetmedia.com?Subject=HelloAgain" target="_top"> support@axetmedia.com</a></li>
                            </ul>

                            <ul class="infoContact">
                                <li><i class="fa fa-clock-o"></i> Пн-Пт: 09 - 18:00</li>
                                <li>Сб: Выходной</li>
                                <li>Вс: Выходной</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>


    <div class="bottomLine text-center">

        <div class="container">
            <div class="row">

                <div class="col-sm-6 text-left">
                    <p><br>
                        &copy 2017 AXET MEDIA COMPANY. All Rights Reserved.
                    </p>
                </div>

                <div class="col-sm-6 text-right">
                    <div class="allIconsSocialWrapper center-block">

                        <!--icon-->
                        <div class="socialWrapper center-block black-icon">
                            <div class="socialIcon-wrap socialIcon-effect-1 socialIcon-effect-1a">
                                <div class="socialIcon">
                                    <a href="https://www.facebook.com/axetmedia/"><i class="fa fa-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                        <!--end icon-->

                        <!--icon-->
                        <div class="socialWrapper center-block black-icon">
                            <div class="socialIcon-wrap socialIcon-effect-1 socialIcon-effect-1a">
                                <div class="socialIcon">
                                    <a href="https://vk.com/axetmedia"><i class="fa fa-vk"></i></a>
                                </div>
                            </div>
                        </div>
                        <!--end icon-->

                        <!--icon-->
                        <div class="socialWrapper center-block black-icon">
                            <div class="socialIcon-wrap socialIcon-effect-1 socialIcon-effect-1a">
                                <div class="socialIcon">
                                    <a href="https://www.instagram.com/axetmediaweb/"><i class="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <!--end icon-->

                        <!--icon-->
                        <div class="socialWrapper center-block black-icon">
                            <div class="socialIcon-wrap socialIcon-effect-1 socialIcon-effect-1a">
                                <div class="socialIcon">
                                    <a href="https://www.linkedin.com/company/axet-media-company"><i class="fa fa-linkedin-square"></i></a>
                                </div>
                            </div>
                        </div>
                        <!--end icon-->

                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<?php echo '<script'; ?>
 type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript" src="/js/scripts.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="/js/custom.js"><?php echo '</script'; ?>
>



</body>
</html><?php }
}
?>