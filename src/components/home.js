// import {onNavigate} from '../main.js';
//import { loginFirebase } from '';

export const home = () => {
  const homeDiv = document.createElement('div');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const passwordForget = document.createElement('a');
  const intoButton = document.createElement('button');
  const intoParagraph = document.createElement('p');
  const imgIconFacebook = document.createElement('img');
  const imgIconGmail = document.createElement('img');
  const newParagraph = document.createElement('p');
  const createAccount = document.createElement('button');
  emailInput.textContent = 'Correo';
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('placeholder', 'Correo');
  emailInput.setAttribute('required', '');
  passwordInput.textContent = 'Contraseña';
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('placeholder', 'Contraseña');
  passwordInput.setAttribute('required', '');
  passwordForget.textContent = '¿Olvidaste tu contraseña?';
  intoButton.textContent = 'INGRESAR';
  intoButton.setAttribute('id', 'btnLogin');

  intoParagraph.textContent = 'O ingresa con';
  imgIconFacebook.setAttribute('src', 'img/facebook (2).png');
  imgIconFacebook.setAttribute('id', 'iconFacebook');
  imgIconGmail.setAttribute('src', 'img/google.png');
  newParagraph.textContent = '¿Eres nuevo en PetWorld?';
  createAccount.textContent = 'Crea tu cuenta';
  homeDiv.appendChild(emailInput);
  homeDiv.appendChild(passwordInput);
  homeDiv.appendChild(passwordForget);
  homeDiv.appendChild(intoButton);
  homeDiv.appendChild(intoParagraph);
  homeDiv.appendChild(imgIconFacebook);
  homeDiv.appendChild(imgIconGmail);
  homeDiv.appendChild(newParagraph);
  homeDiv.appendChild(createAccount);
  return homeDiv;
};

const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', () => {
  loginFacebook();
});
