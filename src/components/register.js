import { onNavigate } from '../main.js';

export const register1 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage');
  const registerDivOne = `
     <h2 class="intoTitle">ÚNETE A PETWORLD</h2>
     <p class="textCreateAccount">Crea tu cuenta en pocos pasos</p>
     <button id="intoButtonOne">SIGUIENTE</button>
     <a class="textAccount">¿Ya tienes una cuenta?</a>`;
  registerElement.innerHTML = registerDivOne;

  setTimeout(() => {
    registerElement.querySelector('#intoButtonOne').addEventListener('click', () => {
      onNavigate('/register2');
      //document.querySelector('.registerViewOne').style.display = 'none';
    });
  }, 0);
  return registerElement;
};

export const register2 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage');
  const registerDivTwo = `
       <h2 class="intoTitle">CREA TU CUENTA</h2>
       <p class="textCreateAccount">¡Es súper rápido y fácil!</p>
       <label for="name"></label>
       <input id="name" type="text" placeholder="*Nombres" required>
       <label for="lastName"></label>
       <input id="lastName" type="text" placeholder="*Apellidos" required>
       <button class="intoButtonTwo">SIGUIENTE</button>`;
  registerElement.innerHTML = registerDivTwo;
  setTimeout(() => {
    registerElement.querySelector('#intoButtonTwo').addEventListener('click', () => {
      //onNavigate('/register3');
    });
  }, 0);

  return registerElement;
};

//   const register3 = () => {
//   const loginDiv = document.createElement('div');
//   const registerTitle = document.createElement('h1');
//   registerTitle.textContent = 'CREA TU CUENTA';
//   const emailRegister = document.createElement('input');
//   const passwordRegister = document.createElement('input');
//   emailRegister.setAttribute('type', 'email');
//   emailRegister.setAttribute('placeholder', 'Ingrese su correo electrónico');
//   emailRegister.setAttribute('required', '');
//   passwordRegister.setAttribute('type', 'password');
//   passwordRegister.setAttribute('placeholder', 'Crea Contraseña Nueva');
//   passwordRegister.setAttribute('required', '');
//   const repeatPassword = document.createElement('input');
//   repeatPassword.setAttribute('type', 'password');
//   repeatPassword.setAttribute('placeholder', 'Confirmar contraseña');
//   repeatPassword.setAttribute('required', '');
//   const Nextbutton = document.createElement('button');
//   Nextbutton.textContent = 'Siguiente';

//   loginDiv.appendChild(registerTitle);
//   loginDiv.appendChild(emailRegister);
//   loginDiv.appendChild(passwordRegister);
//   loginDiv.appendChild(repeatPassword);
//   loginDiv.appendChild(Nextbutton);

//   return loginDiv;
// };
// const register4 = () => {
//   const loginDiv = document.createElement('div');
//   const birthDateTitle = document.createElement('h2');
//   birthDateTitle.textContent = 'Fecha de Nacimiento';
//   const birthDate = document.createElement('input');
//   birthDate.setAttribute('type', 'date');
//   const termConditions = document.createElement('a');
//   termConditions.textContent = 'Términos y condiciones';
//   const checkTerms = document.createElement('input');
//   checkTerms.setAttribute('type', 'checkbox');
//   checkTerms.textContent = 'He leído y acepto términos y Condiciones ';
//   const buttonRegister = document.createElement('button');
//   buttonRegister.textContent = 'REGISTRARSE';

//   loginDiv.appendChild(birthDateTitle);
//   loginDiv.appendChild(birthDate);
//   loginDiv.appendChild(termConditions);
//   loginDiv.appendChild(checkTerms);
//   loginDiv.appendChild(buttonRegister);
//   return loginDiv;
// };

// export {
//   register1,
//   register2,
//   register3,
//   register4,
// };
