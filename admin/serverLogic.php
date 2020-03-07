<?php
/*
 * Handler for ajax requests (modern browsers with HTML5 file API) will post here
 */

header('Content-Type: application/json; charset=utf-8');
require_once "config.php";
// For error handling tests :)
/*
if(rand(1, 4) == 4) {
    $status = '500 Internal Server Error';
    header("HTTP/1.1 {$status}");
    header("Status: {$status}");
    die();
}
*/

if(!empty($_FILES) && !empty($_FILES['my-file'])) {
    $id = $_GET["id"];
    $fileMeta = $_FILES['my-file']; // Key was defined in 'fieldName' option
    if ($fileMeta['type'] == 'image/jpeg' || $fileMeta['type'] == 'image/png') {
        $uploaddir = 'images/';
        $info = new SplFileInfo($fileMeta['name']);
        $uploadfile = $uploaddir . md5(basename($fileMeta['name'])).'.'.$info->getExtension();

        move_uploaded_file($fileMeta['tmp_name'], $uploadfile);
        $data["image"] = md5($fileMeta['name']).'.'.$info->getExtension();
        $data["p_id"] = $id;

        $STH = $DBH->prepare("INSERT INTO images (image, p_id) values (:image, :p_id)");
        $STH->execute($data);
    }

    // Sending JSON-encoded response
    echo json_encode(array(
        'file' => $fileMeta,
        'post' => $_POST
    ));
} else {
    echo json_encode(array('error' => 'Wrong request!'));
}
?>
