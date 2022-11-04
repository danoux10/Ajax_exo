var tankInputInc = document.getElementById('infoTankIncrement');
var tankInputDec = document.getElementById('infoTankDecrement');

var viewData = document.getElementById('info');

var formInc = document.getElementById('tankIncrement');
var formDec = document.getElementById('tankDecrement');

var form = document.querySelector('form');

function getData(){
  var dataGet = new XMLHttpRequest;
  dataGet.open('GET',"function/getData.php");
  dataGet.send();

  dataGet.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var view = JSON.parse(this.response);
      viewData.innerHTML = view;
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
      console.log(this.response);
      var view = JSON.parse(this.response);
      viewData.innerHTML = view;
      tankInputInc.value = view;
      tankInputDec.value = view;
    }else if(this.readyState == 4 && this.status == 404){
      alert("error");
    }
  }
  return false;
}

getData();
formInc.addEventListener('submit',getDataEvent);
formDec.addEventListener('submit',getDataEvent);

