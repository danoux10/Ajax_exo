<?php
	include '../config/database.php';
	
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
	