<?php
//echo 'come';
include_once('handleCors.php');
include_once('dbConnction.php');

//get the HTTP method, path and body ofthe request
$method = isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])?$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']:$_SERVER['REQUEST_METHOD'];

if(isset($_SERVER['PATH_INFO'])){
	$request = explode('/',trim($_SERVER['PATH_INFO'],'/'));
}
// $input = json_decode(file_get_contents('php://input'),true);
$id ='';
$data = array();
$CONTENT_TYPE =  isset($_SERVER['CONTENT_TYPE'])?$_SERVER['CONTENT_TYPE']:'';

switch($method){
	case 'GET':
	$id = isset($_GET['id'])?$_GET['id']:'';
	$sql = "SELECT * FROM `company_csr`".($id?" where csr_id='".$id."'":'');
	break;
	case 'PUT':
		if($CONTENT_TYPE === 'application/json'){
			$data = json_decode(file_get_contents('php://input'), true);
		}else{
			$data = file_get_contents('php://input');
		}
	$sql = "UPDATE";
	break;
	case 'POST':
	//echo '<pre>'; print_r($_SERVER);
		if($CONTENT_TYPE === 'application/json'){
			$data = json_decode(file_get_contents('php://input'), true);
		}else{
			$data = file_get_contents('php://input');
		}
		// echo '<pre>'; print_r($data);
		// die;
	$sql = "INSERT";
	break;
	case 'DELETE':
	$id = $_GET['id'];
	$sql = "DELETE FROM `company_csr`".($id?" where csr_id='".$id."'":'');
	break;
}
$result = mysqli_query($conn,$sql);
	if(!$result){
		http_response_code(404);
		die(mysqli_error($conn));
	}else{
		if($method == 'GET'){			
			while($res = mysqli_fetch_object($result)){
				$data[] = $res;
			}
			echo json_encode($data,JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
		}elseif($method == 'POST'){
			echo mysqli_insert_id($conn);
		}else{
			echo mysqli_affected_rows($conn);
		}
		
		/*
		//echo mysqli_num_rows($result);
		//echo mysqli_affected_rows($conn);
		$i = 0;
		while ($obj=mysqli_fetch_object($result))
		{
			$i++;
			printf("%s.\t\t %s (%s)\n<br>",$i, $obj->CIN, $obj->compname);
		}
		*/
	}
	mysqli_free_result($result);
	$conn->close();


?>