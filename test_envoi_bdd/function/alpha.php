<?php
include '../config/database.php';
include '../config/variable.php';

$task = "list";
if (array_key_exists("task", $_GET)) {
	$task = $_GET["task"];
}

//link tank decrement
if ($task == "tankDecrement") {
	tankDec();
}
//sublink function tank dec
function tankDec()
{
	global $bdd;
	$data = htmlspecialchars($_POST['tankDec']);
	$query = $bdd->prepare('UPDATE player set tankData = ? where idUser = ?');
	$data = $data - 1;
	$query->execute([$data, $_COOKIE['idUser']]);
	
	$success = 1;
	$msg = "tank decrement";
	$res = ["success" => $success, "msg" => $msg, "data" => $data];
	echo json_encode($res);
}

//link tank increment
if ($task == "tankIncrement") {
	tankInc();
}
//sublink function tank inc
function tankInc()
{
	global $bdd;
	$data = htmlspecialchars($_POST['tankInc']);
	$query = $bdd->prepare('UPDATE player set tankData = ? where idUser = ?');
	$data = $data + 1;
	$query->execute([$data, $_COOKIE['idUser']]);
	
	$success = 2;
	$msg = "tank increment";
	$res = ["success" => $success, "msg" => $msg, "data" => $data];
	echo json_encode($res);
}

//link dps decrement
if ($task == "dpsDecrement") {
	dpsDec();
}
//sublink function dps dec
function dpsDec()
{
	global $bdd;
	$data = htmlspecialchars($_POST['dpsDec']);
	$query = $bdd->prepare('UPDATE player set dpsData = ? where idUser = ?');
	$data = $data - 1;
	$query->execute([$data, $_COOKIE['idUser']]);
	
	$success = 1.1;
	$msg = "dps decrement";
	$res = ["success" => $success, "msg" => $msg, "data" => $data];
	echo json_encode($res);
}

//link dps increment
if ($task == "dpsIncrement") {
	dpsInc();
}
//sublink function tank inc
function dpsInc()
{
	global $bdd;
	$data = htmlspecialchars($_POST['dpsInc']);
	$query = $bdd->prepare('UPDATE player set dpsData = ? where idUser = ?');
	$data = $data + 1;
	$query->execute([$data, $_COOKIE['idUser']]);
	
	$success = 2.1;
	$msg = "dps increment";
	$res = ["success" => $success, "msg" => $msg, "data" => $data];
	echo json_encode($res);
}

//link heal decremebt
if ($task == "healDecrement") {
	healDec();
}
//sublink function heal dec
function healDec()
{
	global $bdd;
	$data = htmlspecialchars($_POST['healDec']);
	$query = $bdd->prepare('UPDATE player set healData = ? where idUser = ?');
	$data = $data - 1;
	$query->execute([$data, $_COOKIE['idUser']]);
	
	$success = 1.3;
	$msg = "heal decrement";
	$res = ["success" => $success, "msg" => $msg, "data" => $data];
	echo json_encode($res);
}

//link heal increment
if ($task == "healIncrement") {
	healInc();
}
//sublink function heal inc
function healInc()
{
	global $bdd;
	$data = htmlspecialchars($_POST['healInc']);
	$query = $bdd->prepare('UPDATE player set healData = ? where idUser = ?');
	$data = $data + 1;
	$query->execute([$data, $_COOKIE['idUser']]);
	
	$success = 2.3;
	$msg = "heal increment";
	$res = ["success" => $success, "msg" => $msg, "data" => $data];
	echo json_encode($res);
}

//link reset
if ($task == "reset") {
	resetAll();
}
//sublink function reset
function resetAll()
{
	global $bdd;
	$query = $bdd->prepare('UPDATE player set tankData=?,dpsData=? ,healData = ? WHERE idUser = ?');
	$dataTank = 0;
	$dataDps = 0;
	$dataHeal = 0;
	$query->execute([$dataTank, $dataDps, $dataHeal, $_COOKIE['idUser']]);
	
	$success = 4;
	$msg = "reset";
	$res = ["success" => $success, "msg" => $msg, "dataTank" => $dataTank, "dataDps" => $dataDps, "dataHeal" => $dataHeal];
	echo json_encode($res);
}

