import { login } from './components/login.js';

import {
  register, register1, register2, register3, register4,
} from './components/register.js';

import { homePetworld } from './components/home.js';

const rootDiv = document.getElementById('root');

export const routes = {
  '/': login,
  '/register': register,
  '/register1': register1,
  '/register2': register2,
  '/register3': register3,
  '/register4': register4,
  '/homePetworld': homePetworld,
};

//cambiar a otro archivo y denominar a routes este archivo
export const onNavigate = (pathname) => {
  rootDiv.innerHTML = '';
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};
onNavigate('/');

// // Mensajes que salen cuando el campo se llena correctamente
// const validData = (input) => {
//   const formData = input.parentElement;
//   formData.className = 'correctData';
// };
// // Mensajes que salen cuando el campo se llena incorrectamente
// const wrongData = (input, showMessage) => {
//   const formData = input.parentElement;
//   const errorMessage = document.querySelector('#showMessageTag');
//   errorMessage.innerText = showMessage;
//   formData.className = 'errorData';
// };

// // para Validar contraseña Correcta

// export const validatePassword = (passwordRegister, inputPasswordTag) => {
//   const inputPassword = document.getElementById('passwordRegister').value;
//   const expRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;
//   if (!inputPassword) {
//     wrongData(inputPasswordTag, 'Llenar los campos');
//   } else if (inputPassword.length < 8) {
//     wrongData(inputPasswordTag, 'Debe tener 8 caracteres cómo mínimo.');
//   } else if (!inputPassword.match(expRegular)) {
//     wrongData(inputPasswordTag, 'Debe tener al menos una mayúscula, una minúscula y un número');
//   } else {
//     validData(inputPasswordTag);
//   }
// };

// // validación contraseña
// export const repeatPasswordValid = (repeatPassword) => {
//   const inputRepeatPassword = document.getElementById('repeatPassword').value;
//   const inputPassword = document.getElementById('passwordRegister').value;
//   if (!inputRepeatPassword) {
//     wrongData(repeatPassword, 'Confirme su Contraseña');
//   } else if (inputRepeatPassword !== inputPassword) {
//     wrongData(repeatPassword, 'Las contraseñas  no coinciden');
//   } else {
//     validData(repeatPassword);
//   }
// };
