const form = document.querySelector('.form');
const formInputs = document.querySelectorAll('.input');
const isLogin = document.querySelector('.islogin');
const logOut = document.querySelector('.btn__logout');
const login = document.querySelector('.login');
const password = document.querySelector('.password');



function isAdmin(name, password) {
  if(name.value !=='admin'){

    alert('Неверное имя пользователя');
    name.classList.add('error');
    return false

  } else if(password.value !=='admin') {

    alert('Неверный пароль');
    password.classList.add('error');
    return true;

  }
}

function hasStorage() {
  if(sessionStorage.getItem('loginValue')) {
    isLogin.style.display = 'block';
    form.style.display = 'none';
  } 
}

function removeStorage() {
  if(sessionStorage.getItem('loginValue')) {
      
    isLogin.style.display = 'none';
    form.style.display = 'block';
    sessionStorage.removeItem('loginValue');
  }
  
}


window.addEventListener('DOMContentLoaded', function (){

  hasStorage();

})

form.onsubmit = function (event) {
  event.preventDefault();

  let hasError = false

  for(const input of formInputs){
    if(input.value === '') {
      hasError = true
      input.classList.add('error');

    } else {

      input.classList.remove('error');
    }
  }


  if (!hasError) {

    isAdmin(login, password);

    if(login.value === 'admin' && password.value === 'admin') {

      isLogin.style.display = (isLogin.style.display === 'block') ? '' : 'block';
      sessionStorage.setItem('loginValue', true);

      if(sessionStorage.getItem('loginValue')) {
        isLogin.style.display = 'block';
        form.style.display = 'none';
      } 

    }
  }
  

  logOut.addEventListener('click', function (event) {
    
    removeStorage();
    
  })

  event.target.reset();

  return false;
}
