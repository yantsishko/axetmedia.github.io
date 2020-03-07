<?php

require_once "config.php";

$action = $_POST['action'];

if ($action == "addCategory") {
    $position = $_POST['position'] ? $_POST['position'] : 1;
    $name = $_POST['name'];
    $isTitle = $_POST['isTitle'];
    $title = $_POST['title'];
    $description = $_POST['description'];

    $data = array('position' => $position, 'is_title' => ($isTitle == true) ? 'Y' : 'N');

    $STH = $DBH->prepare("INSERT INTO categories (position, is_title) values (:position, :is_title)");
    $STH->execute($data);
    $last_id = $DBH->lastInsertId();

    $data = array();
    $data["title"] = $title;
    $data["description"] = $description;
    $data["name"] = $name;
    $data["c_id"] = $last_id;
    $data["lang"] = 'ru';
    $STH = $DBH->prepare("INSERT INTO categories_translate (name, title, description, c_id, lang) values (:name, :title, :description, :c_id, :lang)");
    $STH->execute($data);

    $data["lang"] = 'en';
    $STH = $DBH->prepare("INSERT INTO categories_translate (name, title, description, c_id, lang) values (:name, :title, :description, :c_id, :lang)");
    $STH->execute($data);
}

if ($action == "addProject") {
    $position = $_POST['position'] ? $_POST['position'] : 1;
    $name = $_POST['name'];
    $categoryId = $_POST['category'];

    $data = array('position' => $position, 'category_id' => $categoryId);

    $STH = $DBH->prepare("INSERT INTO projects (pos, category_id) values (:position, :category_id)");
    $STH->execute($data);
    $last_id = $DBH->lastInsertId();

    $data = array();
    $data['name'] = $name;
    $data['p_id'] = $last_id;
    $data["lang"] = 'ru';
    $STH = $DBH->prepare("INSERT INTO projects_translate (name, p_id, lang) values (:name, :p_id, :lang)");
    $STH->execute($data);

    $data["lang"] = 'en';
    $STH = $DBH->prepare("INSERT INTO projects_translate (name, p_id, lang) values (:name, :p_id, :lang)");
    $STH->execute($data);
}

if ($action == "addArticle") {
    $position = $_POST['position'] ? $_POST['position'] : 1;
    $name = $_POST['name'];
    $categoryId = $_POST['category'];

    $data = array('position' => $position, 'category_id' => $categoryId);

    $STH = $DBH->prepare("INSERT INTO articles (pos, category_id) values (:position, :category_id)");
    $STH->execute($data);
    $last_id = $DBH->lastInsertId();

    $data = array();
    $data['name'] = $name;
    $data['article_id'] = $last_id;
    $data["lang"] = 'ru';
    $STH = $DBH->prepare("INSERT INTO articles_translate (name, article_id, lang) values (:name, :article_id, :lang)");
    $STH->execute($data);

    $data["lang"] = 'en';
    $STH = $DBH->prepare("INSERT INTO articles_translate (name, article_id, lang) values (:name, :article_id, :lang)");
    $STH->execute($data);
}

if ($action == "updateCategory") {
    $id = $_POST['id'];
    $position = $_POST['position'] ? $_POST['position'] : 1;
    $name = $_POST['name'];
    $isTitle = $_POST['isTitle'];
    $title = $_POST['title'];
    $description = $_POST['description'];

    $data = array(
        'position' => $position,
        'is_title' => ($isTitle == true) ? 'Y' : 'N',
        'id' => $id
    );

    $STH = $DBH->prepare("UPDATE categories SET position = :position, is_title=:is_title WHERE id = :id");
    $STH->execute($data);

    $data = array();
    $data["title"] = $title;
    $data["description"] = $description;
    $data["name"] = $name;
    $data["id"] = $id;
    $data["lang"] = $lang;

    $lang = $_COOKIE['lang'];
    $STH = $DBH->prepare("UPDATE categories_translate SET name=:name, title=:title, description=:description WHERE c_id = :id AND lang=:lang");
    $STH->execute($data);
}

if ($action == "updateProject") {
    $id = $_POST['id'];
    $lang = $_COOKIE['lang'];

    $position = $_POST['position'] ? $_POST['position'] : 1;
    $name = $_POST['name'];
    $designer = ($_POST['designer']) ? $_POST['designer'] : "";
    $verst = ($_POST['verst']) ? $_POST['verst'] : "";
    //$category = $_POST['category'];
    $description = ($_POST['description']) ? $_POST['description'] : "";
    $titleTeg = ($_POST['titleTeg']) ? $_POST['titleTeg'] : "";
    $descrTeg = ($_POST['descrTeg']) ? $_POST['descrTeg'] : "";
    $short_descr = ($_POST['short_descr']) ? $_POST['short_descr'] : "";
    $category_portf_id = ($_POST['category_portf_id']) ? $_POST['category_portf_id'] : "";

    $data = array('position' => $position);
    $data["category"] = $category_portf_id;
    $data["id"] = $id;

    $STH = $DBH->prepare("UPDATE projects SET pos=:position, category_portf_id=:category WHERE id=:id");
    $STH->execute($data);

    $data = array();
    $data["name"] = $name;
    $data["designer"] = $designer;
    $data["verst"] = $verst;
    $data["description"] = $description;
    $data["titleTeg"] = $titleTeg;
    $data["descrTeg"] = $descrTeg;
    $data["short_descr"] = $short_descr;
    $data["id"] = $id;
    $data["lang"] = $lang;
    $STH = $DBH->prepare("UPDATE projects_translate SET name=:name, designer=:designer, verst=:verst, descr=:description, titleTeg=:titleTeg, descrTeg=:descrTeg,short_descr=:short_descr WHERE p_id=:id AND lang=:lang");
    $STH->execute($data);
}

if ($action == "updateArticle") {
    $id = $_POST['id'];
    $lang = $_COOKIE['lang'];

    $position = $_POST['position'] ? $_POST['position'] : 1;
    $name = $_POST['name'];
    $category = $_POST['category_id'];
    $description = ($_POST['description']) ? $_POST['description'] : "";
    $titleTeg = ($_POST['titleTeg']) ? $_POST['titleTeg'] : "";
    $descrTeg = ($_POST['descrTeg']) ? $_POST['descrTeg'] : "";
    $shortDescr = ($_POST['shortDescr']) ? $_POST['shortDescr'] : "";

    $data = array('position' => $position);
    $data["category"] = $category;
    $data["id"] = $id;

    $STH = $DBH->prepare("UPDATE articles SET pos=:position, category_id=:category WHERE id=:id");
    $STH->execute($data);

    $data = array();
    $data["name"] = $name;
    $data["description"] = $description;
    $data["titleTeg"] = $titleTeg;
    $data["descrTeg"] = $descrTeg;
    $data["shortDescr"] = $shortDescr;
    $data["id"] = $id;
    $data["lang"] = $lang;
    $STH = $DBH->prepare("UPDATE articles_translate SET name=:name, descr=:description, titleTeg=:titleTeg, descrTeg=:descrTeg, shortDescr=:shortDescr WHERE article_id=:id AND lang=:lang");
    $STH->execute($data);
}

if ($action == "deleteCategory") {
    $id = $_POST['id'];
    $STH = $DBH->exec("DELETE FROM categories WHERE id=$id");
    $STH = $DBH->exec("DELETE FROM categories_translate WHERE c_id=$id");
}

if ($action == "deleteProject") {
    $id = $_POST['id'];
    $STH = $DBH->exec("DELETE FROM projects WHERE id=$id");
    $STH = $DBH->exec("DELETE FROM projects_translate WHERE p_id=$id");
    $STH = $DBH->exec("DELETE FROM images WHERE p_id=$id");
}

if ($action == "deleteArticle") {
    $id = $_POST['id'];
    $STH = $DBH->exec("DELETE FROM articles WHERE id=$id");
    $STH = $DBH->exec("DELETE FROM articles_translate WHERE article_id=$id");
    //$STH = $DBH->exec("DELETE FROM images WHERE p_id=$id");
}

if ($action == "showCategory") {
    $id = $_POST['categoryId'];
    $lang = $_COOKIE['lang'];

    $data_save = array();
    $data_save["id"] = $id;
    $data_save["lang"] = $lang;
    $STH = $DBH->prepare("SELECT categories.position, categories.is_title, categories_translate.name, categories_translate.title, categories_translate.description FROM categories LEFT JOIN categories_translate ON (categories.id = categories_translate.c_id) WHERE categories.id=:id AND categories_translate.lang=:lang");

    $STH->execute($data_save);

    $data = array();
    while ($row = $STH->fetch()) {
        $data['position'] = $row['position'];
        $data['name'] = $row['name'];
        $data['isTitle'] = $row['is_title'];
        $data['title'] = $row['title'];
        $data['description'] = $row['description'];
    }

    print_r(json_encode($data));
}

if ($_GET['action'] == "uploadFile") {
    if ($_GET['type'] == 'blog'){
        $id = $_GET['id'];
//        $uploaddir = '../img/blog/thumbs/';
//        $info = new SplFileInfo($_FILES['preview']['name']);
//        $uploadfile = $uploaddir . md5(basename($_FILES['preview']['name'])) . '.' . $info->getExtension();
//
//        move_uploaded_file($_FILES['preview']['tmp_name'], $uploadfile);

        $uploaddir = '../img/blog/';
        $info = new SplFileInfo($_FILES['preview']['name']);
        $uploadfile = $uploaddir . md5(basename($_FILES['preview']['name'])) . '.' . $info->getExtension();

        move_uploaded_file($_FILES['preview']['tmp_name'], $uploadfile);

        $data_save = array();
        $data_save["id"] = $id;

        $data_save["image"] = md5($_FILES['preview']['name']) . '.' . $info->getExtension();


        $STH = $DBH->prepare("UPDATE articles SET image=:image WHERE id=:id");
        $STH->execute($data_save);

        header('Location: /admin/article.php?id=' . $id);
    }else{
        $id = $_GET['id'];
        $uploaddir = '../img/projects/thumbs/';
        $info = new SplFileInfo($_FILES['preview']['name']);
        $uploadfile = $uploaddir . md5(basename($_FILES['preview']['name'])) . '.' . $info->getExtension();

        move_uploaded_file($_FILES['preview']['tmp_name'], $uploadfile);

        $uploaddir = '../img/projects/';
        $info = new SplFileInfo($_FILES['preview']['name']);
        $uploadfile = $uploaddir . md5(basename($_FILES['preview']['name'])) . '.' . $info->getExtension();

        move_uploaded_file($_FILES['preview']['tmp_name'], $uploadfile);

        $data_save = array();
        $data_save["id"] = $id;

        $STH = $DBH->prepare("DELETE FROM images WHERE main='Y' AND p_id=:id");
        $STH->execute($data_save);

        $data["image"] = md5($_FILES['preview']['name']) . '.' . $info->getExtension();
        $data["p_id"] = $id;

        $STH = $DBH->prepare("INSERT INTO images (image, p_id,main) values (:image, :p_id,'Y')");
        $STH->execute($data);

        header('Location: /admin/project.php?id=' . $id);
    }

}

if ($action == "login") {
    $login = $_POST['login'];
    $password = $_POST['password'];
    if ($login === "axetmedia" && $password == "1123581321AxetMedia") {
        session_start();
        $_SESSION['name'] = "axetmedia112358";
        print_r('accepted');
    }
}

if ($action == "deleteImage"){
    $id= $_POST['id'];
    $data["id"] = $id;
    $STH = $DBH->prepare("DELETE FROM images WHERE id=:id");
    $STH->execute($data);
}

if ($action == 'unlogin') {
    session_start();
    session_destroy();
}
