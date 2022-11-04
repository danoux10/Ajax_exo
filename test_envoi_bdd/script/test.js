var tank = document.getElementById('tank');
var dps = document.getElementById('dps');
var heal = document.getElementById('heal');

var tankData = document.getElementsByClassName('tankData');
var dpsData = document.getElementsByClassName('dpsData');
var healData = document.getElementsByClassName('healData');

//input
// var tankDecInput = document.getElementById('TankDecrement');
// var tankIncInput = document.getElementById('TankIncrement');

// var dpsDecInput = document.getElementById('dpsIncrement');
// var dpsIncInput = document.getElementById('dpsDecrement');

// var healDecInput = document.getElementById('healDecrement');
// var healIncInput = document.getElementById('healIncrement');

//form
var tankDecForm = document.getElementById('tankDecrementForm');
var tankIncForm = document.getElementById('tankIncrementForm');

var dpsDecForm = document.getElementById('dpsDecrementForm');
var dpsIncForm = document.getElementById('dpsIncrementForm');

var healDecForm = document.getElementById('healDecrementForm');
var healIncForm = document.getElementById('healIncrementForm');

var resetForm = document.getElementById('resetForm');

function getData(){
  var xhrGet = new XMLHttpRequest();
  xhrGet.open('GET',"function/getAllData.php");
  xhrGet.send();
  xhrGet.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var response = JSON.parse(this.response);
      tank.innerHTML = response.tank;
      dps.innerHTML = response.dps;
      heal.innerHTML = response.heal;
      for(n=0;n<tankData.length;n++){
        tankData[n].value = response.tank;
        dpsData[n].value = response.dps;
        healData[n].value = response.heal;
      }
    }else if (this.readyState == 4 && this.status == 404){
      alert('error getData');
    }
  }
}

function getDataEvent(event){
  event.preventDefault();
  var xhrGet = new XMLHttpRequest();
  xhrGet.open('GET','function/getAllData.php');
  xhrGet.send();
  xhrGet.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var response = JSON.parse(this.response);
      tank.innerHTML = response.tank;
      dps.innerHTML = response.dps;
      heal.innerHTML = response.heal;
      for(n=0;n<tankData.length;n++){
        tankData[n].value = response.tank;
        dpsData[n].value = response.dps;
        healData[n].value = response.heal;
      }
    }else if (this.readyState == 4 && this.status == 404){
      alert('error getDataEvent');
    }
  }
  return false;
}


getData();