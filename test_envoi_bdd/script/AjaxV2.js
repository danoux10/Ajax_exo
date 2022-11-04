var tankDataIncrement = document.getElementById('tankIncrement');
var tankDataDecrement = document.getElementById('tankDecrement');


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

tankDataIncrement.addEventListener('submit',increment);

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

tankDataDecrement.addEventListener('submit',decrement);
