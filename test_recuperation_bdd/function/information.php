<?php
include '../config/database.php';

setcookie('idUser',2);

function getInfoTank(){
	global $bdd;
	
	$info = $bdd->prepare('SELECT tankData FROM player WHERE idUser = ? ');
	$info->execute([$_COOKIE['idUser']]);
	foreach ($info as $data){
		$tankData = $data['tankData'];
	}
	echo json_encode($tankData);
}

echo getInfoTank();