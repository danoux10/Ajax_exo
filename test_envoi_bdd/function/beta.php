<?php
include '../config/database.php';
include '../config/variable.php';

$task = "list";

if(array_key_exists("task",$_GET)){
	$task = $_GET["task"];
}

if($task == "incrementTank"){
	increment();
}

if ($task == "decrementTank"){
	decrement();
}

//if($task == "getDataV2"){
//	getData();
//}
//$success = 0;
//$msg = 'initial';
//
//function getData(){
//	global $bdd;
//
//	$info = $bdd ->prepare('SELECT tankData FROM player WHERE idUSer=?');
//	$info->execute([$_COOKIE['idUser']]);
//	foreach ($info as $data){
//		$tankData = $data['tankData'];
//	}
//	echo json_encode($tankData);
//}

function increment(){
	global $bdd;
	if(!empty($_POST['tankDataIncrement'])){
		$tankValue = htmlspecialchars($_POST['tankDataIncrement']);
		$tankValue++;
		$sendTank = $bdd->prepare('UPDATE player set tankData=? WHERE idUser=?');
		$sendTank->execute([$tankValue,$_COOKIE['idUSer']]);
		$success = 1;
		$msg = 'increment';
	}
	$res = ["success"=>$success,"msg"=>$msg,"tankValue"=>$tankValue];;
	echo json_encode($res);
}

function decrement(){
	global $bdd;
	if(!empty($_POST['tankDataDecrement'])){
		$tankValue = htmlspecialchars($_POST['tankDataDecrement']);
		$tankValue--;
		$sendTank = $bdd->prepare('UPDATE player set tankData=? WHERE idUser=?');
		$sendTank->execute([$tankValue,$_COOKIE['idUSer']]);
		$success = 2;
		$msg = 'decrement';
	}
	$res = ["success"=>$success,"msg"=>$msg,"tankValue"=>$tankValue];;
	echo json_encode($res);
}

function other(){
	$success = 10;
	$msg = "couscous";
	$res = ["success"=>$success,"msg"=>$msg];
	echo json_encode($res);
}

//$res = ["success"=>$success,"msg"=>$msg];
//echo json_encode($res);