<?php 
	define("TBL_PREF","MyDB_");
	define("TABLE_SECTIONS",TBL_PREF."Sections");
	define("TABLE_GOODS",TBL_PREF."Goods");
	define("TABLE_COUNTRIES",TBL_PREF."Countries");
	define("TABLE_PARAMS",TBL_PREF."Params");
	define("TABLE_BRANDS",TBL_PREF."Brands");
	define("TABLE_REVIEW",TBL_PREF."Review");
	define("TABLE_IMAGES",TBL_PREF."Images");
	define("DB_HOST","localhost");
	define("DB_USER","root");
	define("DB_PASS","");
	define("DB_NAME","medecine");
	define("ClS_DIR","cls/");
	
	function loadClass($clsName)
	{
		include ClS_DIR.strtolower($clsName).".class.php";
	}
	spl_autoload_register("loadClass");	
	$db = new MyDb(DB_HOST,DB_USER,DB_PASS,DB_NAME);
	$select = new ItemsSelect();
	$db->connect();
	if(!$db->connect())
	{
		echo "Ошибка соединенения с БД";
		exit;
	}
?>