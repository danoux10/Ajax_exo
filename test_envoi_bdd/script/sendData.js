var form = document.getElementById('tankIncrement');

form.addEventListener("submit", function(e) {
  e.preventDefault();

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

