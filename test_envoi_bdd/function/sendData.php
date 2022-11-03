<?php
	include '../config/database.php';
	include '../config/variable.php';
	$success = 0;
	$msg = 'error php';
	echo json_encode($_POST);
	
	if(!empty($_POST['tankData'])){
		$tankValue = htmlspecialchars($_POST['tankData']);
		$tankValue++;
		$sendTankUp = $bdd->prepare('UPDATE player set tankData = ? WHERE idUser = ?');
		$sendTankUp -> execute([$tankValue,$_COOKIE['idUser']]);
		$success = 1;
		$msg = "incrementation ok";
	}
	
	
	$res = ["success"=>$success, "msg"=>$msg, "tank"=>$tankValue];
	echo json_encode($res);