import { onNavigate } from '../main.js';
import { registerFirebase } from '../authFirebase/authentication.js';

export const register1 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage1');
  const registerDiv1 = `
     <h2 class="intoTitle">ÚNETE A PETWORLD</h2>
     <p class="textCreateAccount">Crea tu cuenta en pocos pasos</p>
     <button id="btnNext1">SIGUIENTE</button>
     <a class="textAccount">¿Ya tienes una cuenta?</a>`;
  registerElement.innerHTML = registerDiv1;
  setTimeout(() => {
    registerElement.querySelector('#btnNext1').addEventListener('click', () => {
      onNavigate('/register2');
      document.querySelector('.registerPage1').style.display = 'none';
    });
  }, 0);
  return registerElement;
};

export const register2 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage2');
  const registerDiv2 = `
       <h2 class="intoTitle">CREA TU CUENTA</h2>
       <p class="textCreateAccount">¡Es súper rápido y fácil!</p>
       <label for="name"></label>
       <input id="name" type="text" placeholder="*Nombres" required>
       <label for="lastName"></label>
       <input id="lastName" type="text" placeholder="*Apellidos" required>
       <button id="btnNext2">SIGUIENTE</button>`;
  registerElement.innerHTML = registerDiv2;
  setTimeout(() => {
    registerElement.querySelector('#btnNext2').addEventListener('click', () => {
      onNavigate('/register3');
      document.querySelector('.registerPage2').style.display = 'none';
    });
  }, 0);

  return registerElement;
};
export const register3 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage3');
  const registerDiv3 = `
       <h1>CREA TU CUENTA</h1>
       <label>Ingresa tu Correo</label>
       <input id="emailRegister" type="email" placeholder="Ingrese su Correo" required>
       <label class="inputLabel">Crea su Contraseña</label>
       <input id="passwordRegister" type="password" placeholder="contraseña" required>
       <label class="inputLabel">Confirme su Contraseña</label>
       <input id="repeatPassword" type="password" placeholder="Confirme su contraseña" required>
       <button id="btnNext3">SIGUIENTE</button>`;
  registerElement.innerHTML = registerDiv3;
  setTimeout(() => {
    registerElement.querySelector('#btnNext3').addEventListener('click', () => {
      onNavigate('/register4');
      document.querySelector('.registerPage3').style.display = 'none';
    });
  }, 0);
  registerElement.querySelector('#btnNext3').addEventListener('click', () => {
    const intoRegisterEmail = document.getElementById('emailRegister').value;
    const intoRegisterPassword = document.getElementById('passwordRegister').value;
    registerFirebase(intoRegisterEmail, intoRegisterPassword);
  });
  return registerElement;
};
export const register4 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage4');
  const registerDiv4 = `
       <h2>Fecha de Nacimiento</h2>
       <label>Fecha de Nacimiento</label>
       <input id="dateBirth" type="date" required>
       <a class="termsConditions">Términos y Condiciones</a>
       <input id="checkConditions" type="checkbox"  required>
       <button id="btnRegister">REGISTRARSE</button>`;
  registerElement.innerHTML = registerDiv4;
  setTimeout(() => {
    registerElement.querySelector('#btnRegister').addEventListener('click', () => {
      onNavigate('/');
      document.querySelector('.registerPage4').style.display = 'none';
    });
  }, 0);
  return registerElement;
};
