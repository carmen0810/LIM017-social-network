import { onNavigate } from '../main.js';

import { loginFirebase, loginGmail } from '../authFirebase/authentication.js';

export const login = () => {
  const loginElement = document.createElement('div');
  loginElement.setAttribute('class', 'loginView');
  const loginDiv = `
     <h1>INICIAR SESIÓN</h1>   
     <label for="email"></label>
     <input id="emailInto" type="email" placeholder="Correo" required>
     <label for="password"></label>
     <div class='eye'>
     <input id="passwordInto" type="password" placeholder="contraseña" required>
     <span class="iconEye1">
     <i class="fa fa-solid fa-eye-slash"></i>
     </span>
     </div>
     <p>¿Olvidaste tu contraseña?</p>
     <button type="submit" class="btnLogin">INGRESAR</button>
     <p>o ingresa con</p>
     <div class= "iconDivLogin">
        <img src="img/facebook (2).png" alt="facebook" id="iconFacebook" class="iconInto">
        <img src="img/google.png" alt="google" id="iconGmail" class="iconInto">
     </div>
     <p>¿eres nuevo en petworld?</p>
     <button type="submit" class="btnCreateAccountDestokp hide ">Crea tu cuenta</button>
     <button type="submit" class="btnCreateAccount">Crea tu cuenta</button>`;
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
    const intoHomeEmail = document.getElementById('emailInto').value;
    const intoHomePassword = document.getElementById('passwordInto').value;
    if (intoHomeEmail === '' && intoHomePassword === '') {
      alert('llene sus campos');
    } else {
      loginFirebase(intoHomeEmail, intoHomePassword);
      onNavigate('/homePetworld');
    }
  });
  setTimeout(() => {
    loginElement.querySelector('.btnCreateAccount').addEventListener('click', () => {
      onNavigate('/register1');
    });
  }, 0);
  setTimeout(() => {
    loginElement.querySelector('.btnCreateAccountDestokp').addEventListener('click', () => {
      onNavigate('/register');
    });
  }, 0);
  loginElement.querySelector('#iconGmail').addEventListener('click', () => {
    loginGmail();
  });
  return loginElement;
};
