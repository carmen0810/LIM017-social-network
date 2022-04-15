import { onNavigate } from '../main.js';

import { loginFirebase, loginGmail, loginFacebook } from '../authFirebase/authentication.js';

export const login = () => {
  const loginElement = document.createElement('section');
  loginElement.setAttribute('class', 'containerView');
  const loginDiv = `
     <header class="header1">
     <img id="logo" src="./img/imgLogin/logo.png" alt="logo">
     </header>
     <div class='loginView'>
     <h1 id="titleLogin">INICIAR SESIÓN</h1>   
     <label for="email"></label>
     <input id="emailInto" type="email" placeholder="*Correo electrónico" required>
      <div class='eye'>
     <label for="password"></label>
     <input id="passwordInto" type="password" placeholder="*Contraseña" required>
     <span class="iconEye1">
     <i class="fa fa-solid fa-eye-slash"></i>
     </span>
     </div>
     <p id="showMessageTag"></p>
     <a>¿Olvidaste tu contraseña?</a>
     <button class="btnLogin">INGRESAR</button>
     <p>o ingresa con</p>
     <div class= "iconDivLogin">
        <img src="./img/imgLogin/facebook.png" alt="facebook" id="iconFacebook" class="iconInto">
        <img src="./img/imgLogin/google.png" alt="google" id="iconGmail" class="iconInto">
     </div>
     <p id="loginParagraph">¿eres nuevo en petworld?</p>
     <button class="btnCreateAccount">Crea tu cuenta</button>
     </div>`;
  loginElement.innerHTML = loginDiv;
  loginElement.querySelector('.iconEye1').addEventListener('click', () => {
    const inputPassword = document.querySelector('#passwordInto');
    const icon = document.querySelector('i');
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    } else {
      inputPassword.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  });
  loginElement.querySelector('.btnLogin').addEventListener('click', () => {
    const intoLoginEmail = document.getElementById('emailInto').value;
    const intoLoginPassword = document.getElementById('passwordInto').value;
    if (intoLoginEmail === '' && intoLoginPassword === '') {
      const errorMessage = document.querySelector('#showMessageTag');
      errorMessage.textContent = 'Debes completar todos los campos solicitados';
    } else {
      loginFirebase(intoLoginEmail, intoLoginPassword);
      onNavigate('/homePetworld');
    }
  });
  // setTimeout(() => {
  loginElement.querySelector('.btnCreateAccount').addEventListener('click', () => {
    onNavigate('/register');
  });
  // }, 0);

  // setTimeout(() => {
  //   loginElement.querySelector('.btnCreateAccountDestokp').addEventListener('click', () => {
  //     onNavigate('/register');
  loginElement.querySelector('#iconGmail').addEventListener('click', () => {
    loginGmail();
  });
  loginElement.querySelector('#iconFacebook').addEventListener('click', () => {
    loginFacebook();
  //   });
  //   if (localStorage.getItem('SESSION_USER_ID') !== null) onNavigate('/homePetworld');
  // }, 0);
  });
  return loginElement;
};
