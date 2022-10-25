function loadFile(file){
  var xhr = new XMLHttpRequest();
  // On souhaite juste récupérer le contenue du fichier, la méthode GET suffit amplement
  xhr.open('GET', file);

  xhr.addEventListener('readystatechange',function(){
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){//si le fichier est chargé sans erreur
        document.getElementById('fileContent').innerHTML = '<span>'+xhr.responseText+'</span>'//et on affiche
      }
  });
  xhr.send(null);//la requête est prête, on envoie tout
}

(function(){//comme d'habitude, une IIFE pour éviter les variable globales
  var inputs = document.getElementsByTagName('input');
  inputsLen = inputs.length;
  for(var i = 0; i < inputsLen; i++){
    inputs[i].addEventListener('click',function(){
      loadFile(this.value);//a chaque clique, un fichier sera charg& dans la page
    });
  }
})();