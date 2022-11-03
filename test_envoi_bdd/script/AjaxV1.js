var info = document.getElementById('info');
var tank = document.getElementById('infoTank');
var form = document.getElementById('tankIncrement');

var tankData = new XMLHttpRequest();

tankData.open("GET", "function/getData.php");
tankData.send();

tankData.onreadystatechange = function () {
  console.log(this);
  if (this.readyState == 4 && this.status == 200) {
    var donner = JSON.parse(this.responseText);
    console.log(donner);
    info.innerHTML = donner;
    tank.value = donner;
  } else if (this.readyState == 4 && this.status == 404) {
    alert("Error Donner First Load");
  }
}

function getData(event){
  event.preventDefault();

  var xhrGet = new XMLHttpRequest();
  xhrGet.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      var get = JSON.parse(this.responseText);
      info.innerHTML = get;
      tank.value = get;
    }else if (this.readyState == 4 && this.status == 404){
      alert('error get');
    }
  }
  xhrGet.open('GET','function/getData.php');
  xhrGet.send();
  return false;
}

function sendData(event){
  event.preventDefault();
  var data = new FormData(this);
  var xhrTank = new XMLHttpRequest();

  xhrTank.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      console.log(this.response);
    }else if (this.readyState == 4){
      alert('send Data');
    }
  };

  xhrTank.open('POST','function/sendData.php');
  xhrTank.send(data);

  return false;
}

form.addEventListener('submit', getData);
form.addEventListener('submit', sendData);
