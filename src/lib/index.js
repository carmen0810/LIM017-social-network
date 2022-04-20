// aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };
// import { routes } from '../main.js';

// const rootDiv = document.getElementById('root');

// export const onNavigate = (pathname) => {
//   rootDiv.innerHTML = '';
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname,
//   );
//   rootDiv.appendChild(routes[pathname]());
// };

// window.onpopstate = () => {
//   rootDiv.innerHTML = '';
//   rootDiv.appendChild(routes[window.location.pathname]());
// };
// onNavigate('/');

// import { onNavigate } from '../main.js';
// import { registerFirebase } from '../authFirebase/authentication.js';
// import { register } from '../components/register.js';

// const MessageData = (input, showMessage) => {
//   input.innerText = showMessage;
// };
// const ipName = document.querySelector('#name');
// const ipLastName = document.querySelector('#lastName');
// const ipEmail = document.querySelector('#emailRegister');
// const ipPass = document.querySelector('#passwordRegister');
// const ipRepeatPassword = document.querySelector('#repeatPassword');
// const btnRegister = document.querySelector('#btnRegister');
// const msnerrorRegister = document.querySelector('.msnerrorRegister');
// const msnerrorRepeatPassword = document.querySelector('.msnerrorRepeatPassword');
// function validarPassword() {
//   const expRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;
//   if (!ipPass) {
//     MessageData(msnerrorRegister, 'Campo obligatorio');
//   } else if (ipPass.value.length >= 4 && ipPass.value.length <= 8) {
//     MessageData(msnerrorRegister, 'Debe tener 4-8 caracteres.');
//   } else if (!ipPass.value.match(expRegular)) {
//     MessageData(msnerrorRegister, 'Debe tener al menos una mayúscula, una minúscula y un número');
//   } else {
//     MessageData(msnerrorRegister, '');
//   }
// }
// ipPass.onblur = function () { validarPassword(); };
// ipPass.onkeyup = function () { validarPassword(); };

// function validarPassword2() {
//   if (ipPass.value !== ipRepeatPassword.value) {
//     MessageData(msnerrorRepeatPassword, 'Las contraseñas no coinciden');
//   } else {
//     MessageData(msnerrorRepeatPassword, '');
//   }
// }
// ipRepeatPassword.onblur = function () { validarPassword2(); };
// ipRepeatPassword.onkeyup = function () { validarPassword2(); };
// btnRegister.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (ipName.value === '' || ipLastName.value === '' || ipEmail.value === '' || ipPass.value === '' || ipRepeatPassword.value === '') {
//     const errorMessageRegister = document.querySelector('#messageComplete');
//     errorMessageRegister.textContent = 'Debes completar todos los campos solicitados';
//   } else {
//     registerFirebase(ipName.value, ipLastName.value, ipEmail.value, ipPass.value);
//   }
// });

// // ver y ocultar contraseña de register
// document.querySelector('.iconEye2').addEventListener('click', () => {
//   const eyePassword = document.querySelector('#passwordRegister');
//   const iconPass = document.querySelector('#pass');
//   if (eyePassword.type === 'password') {
//     eyePassword.type = 'text';
//     iconPass.classList.remove('fa-eye-slash');
//     iconPass.classList.add('fa-eye');
//   } else {
//     eyePassword.type = 'password';
//     iconPass.classList.remove('fa-eye');
//     iconPass.classList.add('fa-eye-slash');
//   }
// });
// document.querySelector('.iconEye3').addEventListener('click', () => {
//   const eyePasswordRepeat = document.querySelector('#repeatPassword');
//   const iconRepeat = document.querySelector('#repeatPass');
//   if (eyePasswordRepeat.type === 'password') {
//     eyePasswordRepeat.type = 'text';
//     iconRepeat.classList.remove('fa-eye-slash');
//     iconRepeat.classList.add('fa-eye');
//   } else {
//     eyePasswordRepeat.type = 'password';
//     iconRepeat.classList.remove('fa-eye');
//     iconRepeat.classList.add('fa-eye-slash');
//   }
// });
// document.querySelector('.questionAccount').addEventListener('click', () => {
//   onNavigate('/');
// });
