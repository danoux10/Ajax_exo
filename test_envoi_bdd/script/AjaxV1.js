var info = document.getElementById('info');
var tank = document.getElementById('infoTank');

var tankData = new XMLHttpRequest();

tankData.open("GET", "function/getData.php");
tankData.responseText = "JSON";
tankData.send();

function getData() {
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
}

getData();

