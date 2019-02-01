<?php
error_reporting(E_ERROR | E_PARSE);
$id = $_GET['id'];

$DD = new DomDocument();
$DD->loadXml(file_get_contents("e_Shop.xml"));

$XX = new DomDocument();
$XX->load("e_Shop.xml");
$record = array();
foreach ($XX->childNodes as $eshop)
{
	foreach ($eshop->childNodes as $pair)
	{
		foreach($pair->childNodes as $info)
		{
			if($pair->getAttribute("id") == $id && $info->nodeName != "#text")
			{
				$record[$info->nodeName] = $info->nodeValue;
			}
		}
	}
}
print_r(json_encode($record));
?>