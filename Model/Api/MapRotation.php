<?php 

namespace Model\Api;

$accessKeyFile = fopen(__DIR__.'../../../var/accesskey.txt', 'r') or die('Invalid access key file');

$accessKey = fread($accessKeyFile,"20");

$data = file_get_contents("https://api.mozambiquehe.re/maprotation?version=2&auth=".$accessKey);
echo $data;

fclose($accessKeyFile);