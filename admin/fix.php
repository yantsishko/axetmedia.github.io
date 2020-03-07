<?

require_once "config.php";

$STH = $DBH->query("SELECT * from projects");
$STH->setFetchMode(PDO::FETCH_OBJ);

$data = array();
$lang = array(0=>"ru",1=>"en");
while($obj = $STH->fetch()) {
   $data['name'] = $obj->name;
   $data['descr'] = $obj->descr;
   $data['designer'] = $obj->designer;
   $data['verst'] = $obj->verst;
   $data['titleTeg'] = $obj->titleTeg;
   $data['descrTeg'] = $obj->descrTeg;
   $data['short_descr'] = $obj->short_descr;
   $data['p_id'] = $obj->id;
    foreach($lang as $k=>$v){
        $data['lang'] = $v;
        print_r($data);
        $STH2 = $DBH->prepare("INSERT INTO projects_translate (name, descr, designer, verst, titleTeg, descrTeg, short_descr, p_id, lang) values (:name, :descr, :designer, :verst, :titleTeg, :descrTeg, :short_descr, :p_id, :lang)");
        $STH2->execute($data);
    }
}