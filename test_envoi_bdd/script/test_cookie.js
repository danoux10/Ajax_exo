var test =  document.getElementById('test');


function getCookie(name){
  const cookie = document.cookie.split('; ');
  const value = cookie
      .find(c => c.startsWith(name))
      ?.split('=')[1];
  if (value === undefined){
    return null;
  }
  return decodeURIComponent(value)
}

console.log(getCookie("user"));

if(getCookie('user') === null){
  test.innerHTML = 'il y a rien';
}else{
  test.innerHTML = 'il y a un cookie';
}