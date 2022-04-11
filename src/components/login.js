import { onNavigate } from '../main.js';

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
     <button type="submit" class="btnLogin">INGRESAR</button>
     <p>o ingresa con</p>
     <img src="img/facebook (2).png" alt="facebook" class="iconInto">
     <img src="img/google.png" alt="google" class="iconInto">
     <p>¿eres nuevo en petworld?</p>
     <button type="submit" class="btnCreateAccountDestokp hide ">Crea tu cuenta</button>
     <button type="submit" class="btnCreateAccount">Crea tu cuenta</button>`;
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
  setTimeout(() => {
    loginElement.querySelector('.btnCreateAccount').addEventListener('click', () => {
      onNavigate('/register1');
      document.querySelector('.loginView').style.display = 'none';
    });
  }, 0);
  //segundo método ( este de aca funciona con el descomentado del primer y segundo método)
  setTimeout(() => {
    loginElement.querySelector('.btnCreateAccountDestokp').addEventListener('click', () => {
      onNavigate('/register');
      document.querySelector('.loginView').style.display = 'none';
    });
  }, 0);

  return loginElement;
};
