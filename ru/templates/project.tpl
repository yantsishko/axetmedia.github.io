<!DOCTYPE html>
<html lang="en">

<head>
    <title>{$project.titleTeg}</title>
    <meta name="description" content="{$project.descrTeg}">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="author" content=""/>
</head>


<body>
<div id="transmitter">
    <!--section-->
    <section id="singlePageContent">
        <div class="container">

            <div class="row text-center">
                <h1>{$project.short_description}</h1>
                <ul>
                    <li class="info-item">
                        <p>
                            <span>Дизайн:</span><br>
                            {$project.designer}
                        </p>
                    </li>
                    <li class="info-item">
                        <p>
                            <span>Категория:</span><br>
                            {$project.category_portf}
                        </p>
                    </li>
                    {if $project.verst != ""}
                        <li class="info-item">
                            <p>
                                <span>Верстка:</span><br>
                                {$project.verst}
                            </p>
                        </li>
                    {/if}

                </ul>
            </div>
            <!--content-->
            <div class="content">

                <div class="row">

                    <div class="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8">
                        <!-- article-->
                        <div id="post">

                            <div id="caption">

                                <p class="excerpt">
                                    {$project.description}
                                </p>

                            </div>
                        </div>
                        <!-- end article-->
                    </div>


                </div>
                {foreach from=$project.images item=image}
                    <div class="row singleImageWrapper" data-scroll-reveal="enter top move 30px over 1s after 0.2s">
                        <div class="col-md-12">
                            <img src="img/projects/{$image}" alt="{$project.name}" class="img-responsive center-block">
                        </div>
                    </div>
                {/foreach}
            </div>
            <!--end content-->

        </div> <!-- /container -->

    </section>
    <!--end section-->

</div>
<script>
    {literal}
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-76637587-1', 'auto');
    ga('send', 'pageview');
    {/literal}
</script>
</body>

</html>