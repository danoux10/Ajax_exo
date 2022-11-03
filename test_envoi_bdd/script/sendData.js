var form = document.getElementById('tankIncrement');
var information = document.getElementById('info');
var tankInfo = document.getElementById('infoTank');

form.addEventListener("submit", function(e) {
  e.preventDefault();

  var data = new FormData(this);

  var xhrTank = new XMLHttpRequest();
  // var donner = new XMLHttpRequest();

  xhrTank.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      console.log(this.response);
    }else if (this.readyState == 4){
      alert('send Data');
    }
  };

  // donner.onreadystatechange = function(){
  //   if (this.readyState == 4 && this.status == 200){
  //     console.log(this);
  //     information.innerHTML = JSON.parse(this.responseText);
  //     tankInfo.value = JSON.parse(this.responseText);
  //   }else if(this.readyState == 4 && this.status == 404){
  //     alert('error get');
  //   }
  // }

  xhrTank.open('POST','function/sendData.php');
  xhrTank.send(data);

  // donner.open('POST','function/getData.php');
  // donner.send()//
  return false;
});

form.addEventListener('submit', function(e){
  e.preventDefault();

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
});
