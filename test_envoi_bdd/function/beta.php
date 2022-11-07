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

$success = 0;
$msg = "arg";

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

