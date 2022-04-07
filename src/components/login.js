// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const login = () => {
  const loginElem = document.createElement('div');
  loginElem.setAttribute('class', 'loginView');
  const loginDiv = `
     <label for="email"></label>
     <input id="emailInto" type="email" placeholder="Correo" required>
     <label for="password"></label>
     <input id="passwordInto" type="password" placeholder="contraseña" required> 
     <p>¿Olvidaste tu contraseña?</p>
     <button class="btnLogin">INGRESAR</button>
     <p>o ingresa con</p>
     <img src="img/facebook (2).png" alt="facebook" class="iconInto">
     <img src="img/google.png" alt="google" class="iconInto">
     <p>¿eres nuevo en petworld?</p>
     <button class="btnCreateAccount">Crea tu cuenta</button>`;
  loginElem.innerHTML = loginDiv;
  loginElem.querySelector('.btnLogin').addEventListener('click', () => {
    onNavigate('/homePetworld');
    document.querySelector('.loginView').style.display = 'none';
  });
  loginElem.querySelector('.btnCreateAccount').addEventListener('click', () => {
    onNavigate('/register1');
    document.querySelector('.loginView').style.display = 'none';
  });

  return loginElem;
};
