var tankInputInc = document.getElementById('infoTankIncrement');
var tankInputDec = document.getElementById('infoTankDecrement');
var tank = document.getElementById('info');

var tankFormInc = document.getElementById('tankIncrement');
var tankFormDec = document.getElementById('tankDecrement');

function getData(){
  var dataGet = new XMLHttpRequest;
  dataGet.open('GET',"function/getData.php");
  dataGet.send();
  dataGet.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var view = JSON.parse(this.response);
      tank.innerHTML = view;
      tankInputInc.value = view;
      tankInputDec.value = view;
    }else if(this.readyState == 4 && this.status == 404){
      alert("error");
    }
  }
}

function getDataEvent(event){
  event.preventDefault();
  var dataGet = new XMLHttpRequest;
  dataGet.open('GET',"function/getData.php");
  dataGet.send();
  dataGet.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      // console.log(this.response);
      var view = JSON.parse(this.response);
      tank.innerHTML = view;
      tankInputInc.value = view;
      tankInputDec.value = view;
    }else if(this.readyState == 4 && this.status == 404){
      alert("error");
    }
  }
  return false;
}

function increment(event){
  event.preventDefault();
  var dataIncrement = new FormData(this);
  var sendIncrement = new XMLHttpRequest();
  sendIncrement.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200){
      console.log(this.response);
    }else if (this.readyState == 4){
      alert('error increment');
    }
  }
  sendIncrement.open('POST','function/beta.php?task=incrementTank');
  sendIncrement.send(dataIncrement);
  return false;
}

function decrement(event){
  event.preventDefault();
  var dataDecrement = new FormData(this);
  var sendDecrement = new XMLHttpRequest();
  sendDecrement.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200){
      console.log(this.response);
    }else if (this.readyState == 4){
      alert('error decrement');
    }
  }
  sendDecrement.open('POST','function/beta.php?task=decrementTank');
  sendDecrement.send(dataDecrement);
  return false;
}

getData();

tankFormInc.addEventListener('submit',increment);
tankFormInc.addEventListener('submit',getDataEvent);

tankFormDec.addEventListener('submit',decrement);
tankFormDec.addEventListener('submit',getDataEvent);
