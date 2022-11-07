<?php
	include '../config/database.php';
	include '../config/variable.php';
	
	function getInfoTank(){
		global $bdd;
		$info = $bdd ->prepare('SELECT * FROM player WHERE idUSer=?');
		$info->execute([1]);
		foreach ($info as $data){
			$id = $data['idUser'];
			$pseudo = $data['pseudo'];
			$tankData = $data['tankData'];
			$dpsData = $data['dpsData'];
			$healData = $data['healData'];
		}
//		$data=$info->fetchAll();
//		echo json_encode($tankData,$dpsData,$healData);
//		echo json_encode($data);
		$res = ["idUser"=>$id, "pseudo"=>$pseudo, "tank"=>$tankData, "dps"=>$dpsData, "heal"=>$healData];
		echo json_encode($res);
	}
	
	echo getInfoTank();
	