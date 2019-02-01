<?php
function clean($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);
    
    return $value;
}


function check_length($value = "", $min, $max) {
    $result = (mb_strlen($value) < $min || mb_strlen($value) > $max);
    return !$result;
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {	
	$name = $_POST['login'];
	$state = $_POST['state'];
	$day = $_POST['Day'];
	$month = $_POST['Mounth'];
	$year = $_POST['Year'];
	$bolk = true;
	$name = clean($name);
	$state = clean($state);
	$day = clean($day);
	$month = clean($month);
	$year = clean($year);

	if(!empty($name) && !empty($state) && !empty($day) && !empty($month) && !empty($year) ) {
	    //проверка имени
	    if(preg_match('/^[a-zA-Z]{2,64}$/', $name) === 0 && $bolk) {
	        $styleName = "error";
	        $res = "Not Correct";
			$bolk = false;
	    } 
	    //проверка числа "день"
	    if(preg_match('/^\d{1,2}$/', $day) === 0 || $day>31){
	    	$styleday = "error_day";
	    	$res = "Not Correct";
	    	$bolk = false;
	    }
	    if(preg_match('/^\d{1,2}$/', $month) === 0 || $month>12){
	    	$stylemonth = "error_mounth";
	    	$res = "Not Correct";
	    	$bolk = false;
	    }
	    if(preg_match('/^\d{4}$/', $year) === 0 || $year>2017){
	    	$styleyear = "error_year";
	    	$res = "Not Correct";
	    	$bolk = false;
	    }
	    if(!checkdate($month, $day, $year)){
	    	$styleyear = "error_year";
	    	$stylemonth = "error_mounth";
	    	$styleday = "error_day";
	    	$bolk = false;
	    	$res = "This Date doesn't exist";
	    }
	    if($bolk){
			$res = "All OK";
			$name = "";
			$day = "";
			$month = "";
			$year = "";
			$styleday = "";
		}
	} else {
	    $res = "Заполните все поля";

	}
} else {
	header("Location: ../index.php");
}

require_once"Lab_4.php";
$res="";