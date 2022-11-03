var info = document.getElementById('info');
var infoBis = document.getElementById('infoBis');
var infoTer = document.getElementById('infoTer');
var user = document.getElementById('user');
var infoTank = document.getElementById('infoTank');
var infoDps = document.getElementById('infoDps');
var infoHeal = document.getElementById('infoHeal');

var xhr = new XMLHttpRequest();
xhr.open('GET','function/getAllData.php');
// xhr.responseType = "json";
xhr.send();

info.innerHTML = 'coucou';
infoBis.innerHTML = 'bonjour';
infoTer.innerHTML = 'bjr';
user.innerHTML = 'toi';
infoTank.innerHTML = '0';
infoDps.innerHTML = '1';
infoHeal.innerHTML = '2';

xhr.onreadystatechange = function(){
  console.log(this);
  if (this.readyState == 4 && this.status == 200){
    var responce = this.responseText;
    var dataString = JSON.stringify(responce);
    var data = JSON.parse(responce);

    info.innerHTML = responce;
    infoBis.innerHTML = dataString;
    infoTer.innerHTML = data.idUser;

    user.innerHTML = data.pseudo;
    infoTank.innerHTML = data.tank;
    infoDps.innerHTML = data.dps;
    infoHeal.innerHTML = data.heal;
  }
}

