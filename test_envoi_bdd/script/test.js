var tank = document.getElementById('tank');
var dps = document.getElementById('dps');
var heal = document.getElementById('heal');

var tankData = document.getElementsByClassName('tankData');
var dpsData = document.getElementsByClassName('dpsData');
var healData = document.getElementsByClassName('healData');

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

function tankDec(event){
  event.preventDefault();
  var sendData = new XMLHttpRequest();
  var data = new FormData(this)
  sendData.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.response);
    }else if(this.readyState == 4){
      alert('error tankDec');
    }
  }
  sendData.open('POST','function/alpha.php?task=tankDecrement');
  sendData.send(data);
  return false;
}
function tankInc(event){
  event.preventDefault();
  var sendData = new XMLHttpRequest();
  var data = new FormData(this);
  sendData.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.response);
    }else if (this.readyState == 4){
      alert('error tankInc');
    }
  }
  sendData.open('POST','function/alpha.php?task=tankIncrement');
  sendData.send(data);
  return false;
}

function dpsDec(event){
  event.preventDefault();
  var sendData = new XMLHttpRequest();
  var data = new FormData(this)
  sendData.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.response);
    }else if(this.readyState == 4){
      alert('error dpsDec');
    }
  }
  sendData.open('POST','function/alpha.php?task=dpsDecrement');
  sendData.send(data);
  return false;
}
function dpsInc(event){
  event.preventDefault();
  var sendData = new XMLHttpRequest();
  var data = new FormData(this);
  sendData.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.response);
    }else if (this.readyState == 4){
      alert('error dpsInc');
    }
  }
  sendData.open('POST','function/alpha.php?task=dpsIncrement');
  sendData.send(data);
  return false;
}

function healDec(event){
  event.preventDefault();
  var sendData = new XMLHttpRequest();
  var data = new FormData(this)
  sendData.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.response);
    }else if(this.readyState == 4){
      alert('error healDec');
    }
  }
  sendData.open('POST','function/alpha.php?task=healDecrement');
  sendData.send(data);
  return false;
}
function healInc(event){
  event.preventDefault();
  var sendData = new XMLHttpRequest();
  var data = new FormData(this);
  sendData.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.response);
    }else if (this.readyState == 4){
      alert('error healInc');
    }
  }
  sendData.open('POST','function/alpha.php?task=healIncrement');
  sendData.send(data);
  return false;
}

function reset(event){
  event.preventDefault();
  var sendData = new XMLHttpRequest();
  var data = new FormData(this);
  sendData.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.response);
    }else if (this.readyState == 4){
      alert('error reset');
    }
  }
  sendData.open('POST','function/alpha.php?task=reset');
  sendData.send(data);
  return false;
}

getData();
tankDecForm.addEventListener('submit',tankDec);
tankIncForm.addEventListener('submit',tankInc);

dpsDecForm.addEventListener('submit',dpsDec);
dpsIncForm.addEventListener('submit',dpsInc);

healDecForm.addEventListener('submit',healDec);
healIncForm.addEventListener('submit',healInc);

resetForm.addEventListener('submit',reset);

//get Data
tankDecForm.addEventListener('submit',getDataEvent);
tankIncForm.addEventListener('submit',getDataEvent);
dpsDecForm.addEventListener('submit',getDataEvent);
dpsIncForm.addEventListener('submit',getDataEvent);
healDecForm.addEventListener('submit',getDataEvent);
healIncForm.addEventListener('submit',getDataEvent);
resetForm.addEventListener('submit',getDataEvent);
