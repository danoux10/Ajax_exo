var tank = document.getElementById('tankInfo');
var info = document.getElementById('info');

var tankData = new XMLHttpRequest();
var xhr = new XMLHttpRequest();


xhr.onreadystatechange = function(){
  console.log(this);
  if(this.readyState == 4 && this.status == 200 ){
    console.log(JSON.parse(this.responseText));
    info.innerHTML = JSON.parse(this.responseText);
  }else if(this.readyState == 4 && this.status == 404){
    alert('error general');
  }
};

xhr.open("GET","function/information.php");
xhr.responseType ="text";
xhr.send();

tankData.open("GET","function/information.php");
tankData.send();

function tankInfo(){
  tankData.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      tank.innerHTML = JSON.parse(this.responseText);
    }else if(this.readyState == 4 && this.status ==404){
      alert('error tank');
    }
  }
}

tankInfo();