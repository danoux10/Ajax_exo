<?php
// echo json_encode($_POST);

$success = 0;
$msg = "Une erreur est survenue (script.php)";
$data = [];

if (!empty($_POST['pseudo']) AND !empty($_POST['email']) AND !empty($_POST['mdp'])) {
	$pseudo = htmlspecialchars(strip_tags($_POST['pseudo']));
	$email = htmlspecialchars(strip_tags($_POST['email']));
	$mdp = password_hash($_POST['mdp'], PASSWORD_DEFAULT);

	if (strlen($pseudo) < 10) {

		if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

//			 Ajout de l'utilisateur en base de données à cet endroit (exemple)
			$success = 1;
			$msg = "";
			$data['mdp'] = $mdp;

		} else {
			$msg = "Adresse email invalide";
		}
	} else {
		$msg = "Votre pseudo doit contenir moins de 10 caractères";
	}
} else {
	$msg = "Veuillez renseigner tous les champs";
}


$res = ["success" => $success, "msg" => $msg, "data" => $data];
echo json_encode($res);