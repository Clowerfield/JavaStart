<?php
function Start(id)
{
		$id = $_POST['id'];
		switch($id){
			case 1: $im = @imagecreatefromfile( 'andro.jpg' );
			case 2: $im = @imagecreatefromfile( 'space.jpg' );
		}
		return $im;
		
}	
		
	
?>