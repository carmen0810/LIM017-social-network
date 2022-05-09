/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { loginFirebase, loginGmail } from '../authFirebase/authentication.js';
import { MessageData } from '../lib/index.js';
// import { getUser } from '../authFirebase/firebaseExt.js';

export const login = () => {
  const loginElement = document.createElement('section');
  loginElement.setAttribute('class', 'containerView');
  const loginDiv = `
     <header class="header1">
     </header>
     <div class='loginView'>
        <img id="logoLogin" src="./img/logo6.png" alt="logoPetworld">
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
        <a id="answerForgot">¿Olvidaste tu contraseña?</a>
        <button class="btnLogin">INGRESAR</button>
        <p class="loginParagraph">o ingresa con: <img src="./img/imgLogin/google.png" alt="google" id="iconGmail" class="iconInto"></p>
        <p class="loginParagraph">¿eres nuevo en petworld?</p>
        <button class="btnCreateAccount">Crea tu cuenta</button>
     </div>`;
  loginElement.innerHTML = loginDiv;
  const showMessageTag = loginElement.querySelector('#showMessageTag');
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
      showMessageTag.textContent = 'Debes completar todos los campos solicitados';
    } else {
      loginFirebase(intoLoginEmail, intoLoginPassword)
        .then(() => {
          onNavigate('/homePetworld');
        })
        .catch((error) => {
          const errorMessage = error.message;
          switch (errorMessage) {
            case 'Firebase: Error (auth/invalid-email).':
              MessageData(showMessageTag, 'Email inválido');
              break;
            case 'Firebase: Error (auth/user-not-found).':
              MessageData(showMessageTag, 'Usuario no registrado');
              break;
            case 'Firebase: Error (auth/wrong-password).':
              MessageData(showMessageTag, 'Contraseña Incorrecta');
              break;
            default:
              break;
          }
        });
    }
  });

  loginElement.querySelector('.btnCreateAccount').addEventListener('click', () => {
    onNavigate('/register');
  });

  loginElement.querySelector('#iconGmail').addEventListener('click', () => {
    loginGmail();
  });
  // loginElement.querySelector('#iconFacebook').addEventListener('click', () => {
  //   loginFacebook();
  // });
  loginElement.querySelector('#answerForgot').addEventListener('click', () => {
    onNavigate('/resetPassword');
  });

  return loginElement;
};
