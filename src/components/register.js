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
      // aqui valida si el campo nombre y apellido estan completos
      const registerName = document.getElementById('name').value;
      const registerLastName = document.getElementById('lastName').value;
      if (registerName === '' && registerLastName === '') {
        alert('llene sus campos');
      } else {
      // De ser asi va a proceder a la siguientes lineas
        localStorage.setItem('NAME', document.getElementById('name').value);
        localStorage.setItem('LASTNAME', document.getElementById('lastName').value);
        onNavigate('/register3');
      }
    });
  }, 0);

  return registerElement;
};
export const register3 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage3');
  const registerDiv3 = `
       <h1>CREA TU CUENTA</h1>
       <label for="emailRegister">Ingresa tu Correo</label>
       <input id="emailRegister" type="email" placeholder="Ingrese su Correo" required>
       <label for="passwordRegister" class="inputLabel">Crea su Contraseña</label>
       <input id="passwordRegister" type="password" placeholder="contraseña" required>
       <label for="repeatPassword" class="inputLabel">Confirme su Contraseña</label>
       <input id="repeatPassword" type="password" placeholder="Confirme su contraseña" required>
       <button id="btnNext3">SIGUIENTE</button>`;
  registerElement.innerHTML = registerDiv3;
  setTimeout(() => {
    registerElement.querySelector('#btnNext3').addEventListener('click', () => {
      // aqui valida si el campo correo, clave, repetir clave estan completos
      const registerEmail = document.getElementById('emailRegister').value;
      const registerPassword = document.getElementById('passwordRegister').value;
      if (registerEmail === '' && registerPassword === '') {
        alert('llene sus campos');
      } else {
      // De ser asi va a proceder a la siguiente linea
        localStorage.setItem('EMAIL', document.getElementById('emailRegister').value);
        localStorage.setItem('PASSWORD', document.getElementById('passwordRegister').value);
        onNavigate('/register4');
      }
    });
  }, 0);

  return registerElement;
};
export const register4 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage4');
  const registerDiv4 = `
       <label for="dateBirth">Fecha de Nacimiento</label>
       <input id="dateBirth" type="date" required>
       <label for="checkConditions"><a class="termsConditions">Términos y Condiciones</a></label>
       <input id="checkConditions" type="checkbox"  required>
       <button type="submit" id="btnRegister">REGISTRARSE</button>`;
  registerElement.innerHTML = registerDiv4;
  setTimeout(() => {
    registerElement.querySelector('#btnRegister').addEventListener('click', () => {
      // aqui validar si el campo fecha esté completo
      const inputBirth = document.getElementById('dateBirth').value;
      if (inputBirth === '') {
        alert('llene sus campos');
      } else {
      // De ser asi va a proceder a la siguiente linea
        const inputEmail = localStorage.getItem('EMAIL');
        const inputPassword = localStorage.getItem('PASSWORD');
        const inputName = localStorage.getItem('NAME');
        const inputLastName = localStorage.getItem('LASTNAME');
        registerFirebase(inputEmail, inputPassword, inputBirth, inputName, inputLastName);
        onNavigate('/');
      }
    });
  }, 0);
  return registerElement;
};
// register para desktop
export const register = () => {
  const registerElement = document.createElement('form');
  registerElement.setAttribute('class', 'registerPage');
  const registerForm = `
     <h2 class="intoTitle">REGÍSTRATE Y ÚNETE A PETWORLD</h2>
     <p class="textCreateAccount">Crea tu cuenta en pocos pasos</p>
     <p class="textCreateAccount">¡Es súper rápido y fácil!</p>
     <div>
       <label for="name"></label>
       <input id="name" type="text" name="nameDesktop" placeholder="*Nombres" required>
       <label for="lastName"></label>
       <input id="lastName" type="text" name="lastName" placeholder="*Apellidos" required>
     </div>
     <label for="emailRegister"></label>
     <input id="emailRegister" type="email" name="emailRegister" placeholder="Ingrese su Correo eléctrónico" required>
     <label for="passwordRegister" class="inputLabel"></label>
     <input id="passwordRegister" type="password" name="passwordRegister" placeholder="Crea una contraseña nueva" required>
     <label for="repeatPassword" class="inputLabel">Confirme su nueva Contraseña</label>
     <input id="repeatPassword" type="password" name="repeatPassword" placeholder="Confirme su contraseña" required>
     <label for="dateBirth">Fecha de Nacimiento</label>
     <input id="dateBirth" name="dateBirth" type="date" required>
     <label for="checkConditions"><a class="termsConditions">Términos y Condiciones</a></label>
     <input id="checkConditions" name="checkConditions" type="checkbox"  required>
     <button type="submit" id="btnRegister">REGISTRARSE</button>
     <a class="questionDesktop">¿Ya tienes una cuenta?</a>`;
  registerElement.innerHTML = registerForm;
  setTimeout(() => {
    registerElement.querySelector('#btnRegister').addEventListener('click', () => {
      const inputEmail = document.getElementById('emailRegister').value;
      const inputPassword = document.getElementById('passwordRegister').value;
      const inputBirth = document.getElementById('dateBirth').value;
      const inputName = document.getElementById('name').value;
      const inputLastName = document.getElementById('lastName').value;
      registerFirebase(inputEmail, inputPassword, inputBirth, inputName, inputLastName);
      onNavigate('/');
    });
  }, 0);
  return registerElement;
};
