<?php
include '../config/database.php';
include '../config/variable.php';

function getInfoTank(){
	global $bdd;
	
	$info = $bdd ->prepare('SELECT tankData FROM player WHERE idUSer=?');
	$info->execute([1]);
	foreach ($info as $data){
		$tankData = $data['tankData'];
	}
	echo json_encode($tankData);
}

echo getInfoTank();

$task = null;

if(array_key_exists("task", $_GET)){
	$task = $_GET["task"];
}

if($task == "incrementTank"){
	incrementTank();
}

if($task == "decrementTank"){
	decrementTank();
}

$success = 0;
$msg = "fichier beta";

$sendTank = $bdd->prepare('UPDATE player set tankData = ? WHERE idUser = ?');

function incrementTank(){
 global $msg, $success, $sendTank;
	if(!empty($_POST['tankDataIncrement'])){
		$tankValue = htmlspecialchars($_POST['tankDataIncrement']);
		$tankValue++;
		$sendTank->execute([$tankValue,$_COOKIE['idUser']]);
		$success = 1;
		$msg = "increment ok";
		return $tankValue,$success,$msg;
	}
}


function decrementTank(){
	global $msg, $success, $sendTank;
	if(!empty($_POST['tankDataDecrement'])){
		$tankValue = htmlspecialchars($_POST['tankDataDecrement']);
		$tankValue--;
		$sendTank->execute([$tankValue,$_COOKIE['idUser']]);
		$success = 2;
		$msg = "decrement ok";
		return $tankValue,$success,$msg;
	}
}

$res = ['success'=>$success, "msg"=>$msg, "tankVal"=>$tankValue];
echo json_encode($res);