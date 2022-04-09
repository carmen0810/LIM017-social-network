import { onNavigate } from '../main.js';
//import { register } from '../register.js';
import { loginFirebase } from '../authFirebase/authentication.js';

export const login = () => {
  const loginElement = document.createElement('div');
  loginElement.setAttribute('class', 'loginView');
  const loginDiv = `
     <h1>INICIAR SESIÓN</h1>   
     <label for="email"></label>
     <input id="emailInto" type="email" placeholder="Correo" required>
     <label for="password"></label>
     <input id="passwordInto" type="password" placeholder="contraseña" required> 
     <p>¿Olvidaste tu contraseña?</p>
     <button class="btnLogin">INGRESAR</button>
     <p>o ingresa con</p>
     <div class="iconDivLogin">
        <img src="img/facebook (2).png" alt="facebook" class="iconInto">
        <img src="img/google.png" alt="google" class="iconInto">
     </div>
     <p>¿eres nuevo en petworld?</p>
     <button class="btnCreateAccountDestokp ">Crea tu cuenta</button>
     <button class="btnCreateAccount">Crea tu cuenta</button>`;
  loginElement.innerHTML = loginDiv;
  loginElement.querySelector('.btnLogin').addEventListener('click', () => {
    const intoHomeEmail = document.getElementById('emailInto').value;
    const intoHomePassword = document.getElementById('passwordInto').value;
    if (intoHomeEmail === '' && intoHomePassword === '') {
      alert('llene sus campos');
    } else {
      loginFirebase(intoHomeEmail, intoHomePassword);
      onNavigate('/homePetworld');
      document.querySelector('.loginView').style.display = 'none';
    }
  });
  // loginElement.querySelector('.btnCreateAccount').addEventListener('click', () => {
  //   onNavigate('/register');
  // });
  return loginElement;
};
