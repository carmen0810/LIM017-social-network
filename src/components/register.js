import { onNavigate } from '../main.js';

import { registerFirebase } from '../authFirebase/authentication.js';

// export const register1 = () => {
//   const registerElement = document.createElement('div');
//   registerElement.setAttribute('class', 'registerPage1');
//   const registerDiv1 = `
//      <header class="header1">
//      <img id="logo" src="./img/imgLogin/logo.png" alt="logo">
//      </header>
//      <h2 class="intoTitle">ÚNETE A PETWORLD</h2>
//      <p class="textCreateAccount">Crea tu cuenta en pocos pasos</p>
//      <button id="btnNext1">SIGUIENTE</button>
//      <a class="textAccount" href="#">¿Ya tienes una cuenta?</a>`;
//   registerElement.innerHTML = registerDiv1;
//   setTimeout(() => {
//     const textAccount = document.querySelector('.textAccount');
//     textAccount.addEventListener('click', () => {
//       onNavigate('/');
//     });
//   }, 0);
//   setTimeout(() => {
//     registerElement.querySelector('#btnNext1').addEventListener('click', () => {
//       onNavigate('/register2');
//     });
//   }, 0);
//   registerElement.querySelector('.textAccount').addEventListener('click', () => {
//     onNavigate('/');
//   });
//   return registerElement;
// };

// export const register2 = () => {
//   const registerElement = document.createElement('div');
//   registerElement.setAttribute('class', 'registerPage2');
//   const registerDiv2 = `
//        <header class="header1">
//        <img id="logo" src="./img/imgLogin/logo.png" alt="logo">
//        </header>
//        <h2 class="intoTitle">CREA TU CUENTA</h2>
//        <p class="textCreateAccount">¡Es súper rápido y fácil!</p>
//        <label for="name"></label>
//        <input id="name" type="text" placeholder="*Nombres" required>
//        <label for="lastName"></label>
//        <input id="lastName" type="text" placeholder="*Apellidos" required>
//        <p id="errorMessageComplete"></p>
//        <button id="btnNext2">SIGUIENTE</button>`;
//   registerElement.innerHTML = registerDiv2;
//   registerElement.querySelector('#btnNext2').addEventListener('click', () => {
//     // aqui valida si el campo nombre y apellido estan completos
//     const registerName = document.getElementById('name').value;
//     const registerLastName = document.getElementById('lastName').value;
//     if (registerName === '' && registerLastName === '') {
//       const errorMessageComplete = document.querySelector('#errorMessageComplete');
//       errorMessageComplete.textContent = 'Debes completar todos los campos solicitados';
//     } else {
//       // De ser asi va a proceder a la siguientes lineas
//       localStorage.setItem('NAME', document.getElementById('name').value);
//       localStorage.setItem('LASTNAME', document.getElementById('lastName').value);
//       onNavigate('/register3');
//     }
//   });
//   return registerElement;
// };

// export const register3 = () => {
//   const registerElement = document.createElement('div');
//   registerElement.setAttribute('class', 'registerPage3');
//   const registerDiv3 = `
//        <header class="header1">
//        <img id="logo" src="./img/imgLogin/logo.png" alt="logo">
//        </header>
//        <h1 class="intoTitle">CREA TU CUENTA</h1>
//        <label for="emailRegister"></label>
//        <input id="emailRegister" type="email" placeholder="*Correo electrónico" required>
//        <div class='passwords'>
//           <div class= eye>
//             <label for="passwordRegister" class="inputLabel"></label>
//             <input id="passwordRegister" type="password" placeholder="*Contraseña Nueva" required>
//             <span class="iconEye2">
//             <i class="fa fa-solid fa-eye-slash" id="pass"></i>
//             </span>
//           </div>
//           <span class="msnerrorRegister"></span>
//        </div>
//        <div class='passwords'>
//           <div class='eye'>
//             <label for="repeatPassword" class="inputLabel"></label>
//             <input id="repeatPassword" type="password" placeholder="*Confirme contraseña" required>
//             <span class="iconEye3">
//             <i class="fa fa-solid fa-eye-slash" id="repeatPass"></i>
//             </span>
//           </div>
//           <span class="msnerrorRepeatPassword"></span>
//        </div>
//        <p id="messageComplete"></p>
//        <button id="btnNext3">SIGUIENTE</button>`;
//   registerElement.innerHTML = registerDiv3;
//   const ipEmail = registerElement.querySelector('#emailRegister');
//   const ipPass = registerElement.querySelector('#passwordRegister');
//   const inputRepeatPassword = registerElement.querySelector('#repeatPassword');
//   const btnNext3 = registerElement.querySelector('#btnNext3');
//   const msnerrorRegister = registerElement.querySelector('.msnerrorRegister');
//   const msnerrorRepeatPassword = registerElement.querySelector('.msnerrorRepeatPassword');

//   function validarPassword() {
//     const expRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;
//     if (!ipPass) {
//       MessageData(msnerrorRegister, 'Campo obligatorio');
//     } else if (ipPass.value.length >= 4 && ipPass.value.length <= 8) {
//       MessageData(msnerrorRegister, 'Debe tener 4-8 caracteres.');
//     } else if (!ipPass.value.match(expRegular)) {
//       MessageData(msnerrorRegister, 'Debe tener al menos una mayúscula, una minúscula y un número');
//     } else {
//       MessageData(msnerrorRegister, '');
//     }
//   }
//   ipPass.onblur = function () { validarPassword(); };
//   ipPass.onkeyup = function () { validarPassword(); };

//   function validarPassword2() {
//     if (ipPass.value !== inputRepeatPassword.value) {
//       MessageData(msnerrorRepeatPassword, 'Las contraseñas no coinciden');
//     } else {
//       MessageData(msnerrorRepeatPassword, '');
//     }
//   }
//   inputRepeatPassword.onblur = function () { validarPassword2(); };
//   inputRepeatPassword.onkeyup = function () { validarPassword2(); };

//   btnNext3.addEventListener('click', () => {
//     if (ipEmail.value === '' || ipPass.value === '' || inputRepeatPassword.value === '') {
//       const errorMessage = document.querySelector('#messageComplete');
//       errorMessage.textContent = 'Debes completar todos los campos solicitados';
//     // else if (ipEmail.value == 'Firebase: Error (auth/email-already-in-use).') {
//     // //   alert('email ya registrado');
//     } else {
//       localStorage.setItem('EMAIL', document.getElementById('emailRegister').value);
//       localStorage.setItem('PASSWORD', document.getElementById('passwordRegister').value);
//       onNavigate('/register4');
//     }
//   });
//   registerElement.querySelector('.iconEye2').addEventListener('click', () => {
//     const eyePassword = document.querySelector('#passwordRegister');
//     const icon = document.querySelector('#pass');
//     if (eyePassword.type === 'password') {
//       eyePassword.type = 'text';
//       icon.classList.remove('fa-eye-slash');
//       icon.classList.add('fa-eye');
//     } else {
//       eyePassword.type = 'password';
//       icon.classList.remove('fa-eye');
//       icon.classList.add('fa-eye-slash');
//     }
//   });
//   registerElement.querySelector('.iconEye3').addEventListener('click', () => {
//     const eyePassword = document.querySelector('#repeatPassword');
//     const icon = document.querySelector('#repeatPass');
//     if (eyePassword.type === 'password') {
//       eyePassword.type = 'text';
//       icon.classList.remove('fa-eye-slash');
//       icon.classList.add('fa-eye');
//     } else {
//       eyePassword.type = 'password';
//       icon.classList.remove('fa-eye');
//       icon.classList.add('fa-eye-slash');
//     }
//   });
//   return registerElement;
// };
// export const register4 = () => {
//   const registerElement = document.createElement('div');
//   registerElement.setAttribute('class', 'registerPage4');
//   const registerDiv4 = `
//        <header class="header1">
//        <img id="logo" src="./img/imgLogin/logo.png" alt="logo">
//        </header>
//        <h1 class="intoTitle">CREA TU CUENTA</h1>
//       <div class="birth">
//         <label for="dateBirth">Fecha de Nacimiento</label>
//         <input id="dateBirth" type="date" required>
//         <span id="showMsn"></span>
//       </div>
//       <button id="btnRegister">REGISTRARSE</button>`;
//   registerElement.innerHTML = registerDiv4;
//   setTimeout(() => {
//     registerElement.querySelector('#btnRegister').addEventListener('click', () => {
//       // aqui valida si el campo fecha esté completo
//       const inputBirth = document.getElementById('dateBirth').value;
//       if (inputBirth === '') {
//         const showMsn = document.querySelector('#showMsn');
//         showMsn.textContent = 'Debes completar todos los campos solicitados';
//       } else {
//       // De ser asi va a proceder a la siguiente linea
//         const inputEmail = localStorage.getItem('EMAIL');
//         const inputPassword = localStorage.getItem('PASSWORD');
//         const inputName = localStorage.getItem('NAME');
//         const inputLastName = localStorage.getItem('LASTNAME');
//         registerFirebase(inputEmail, inputPassword, inputBirth, inputName, inputLastName);
//       }
//     });
//   }, 0);
//   return registerElement;
// };

// para vista destokp
const MessageData = (input, showMessage) => {
  input.innerText = showMessage;
};
export const register = () => {
  const registerElement = document.createElement('section');
  registerElement.setAttribute('class', 'containerView');
  const registerForm = `
  <header class="header1">
     <img id="logo" src="./img/imgLogin/logo.png" alt="logo">
  </header>
  <form class="registerPage">
    <h2 class="intoTitle">REGÍSTRATE Y ÚNETE A PETWORLD</h2>
    <p class="textCreateAccount">Crea tu cuenta en pocos pasos</p>
    <p class="textCreateAccount">¡Es súper rápido y fácil!</p>
    <div class="fullName">
      <label for="name"></label>
      <input id="name" type="text" name="nameDesktop" placeholder="*Nombres" required>
      <label for="lastName"></label>
      <input id="lastName" type="text" name="lastName" placeholder="*Apellidos" required>
    </div>
    <label for="emailRegister"></label>
    <input id="emailRegister" type="email" name="emailRegister" placeholder="*Correo electrónico" required>
    <div class="passwords">
        <div class='eye'>
          <label for="passwordRegister" class="inputLabel"></label>
          <input id="passwordRegister" type="password" name="passwordRegister" placeholder="*Contraseña nueva" required>
          <span class="iconEye2">
          <i class="fa fa-solid fa-eye-slash" id="pass"></i>
          </span>
        </div>
        <span class="msnerrorRegister"></span>
    </div>    
    <div class="passwords">
        <div class='eye'>
          <label for="repeatPassword" class="inputLabel"></label>
          <input id="repeatPassword" type="password" name="repeatPassword" placeholder="*Confirme contraseña" required>
          <span class="iconEye3">
          <i class="fa fa-solid fa-eye-slash" id="repeatPass"></i>
          </span>
        </div> 
        <span class="msnerrorRepeatPassword"></span>   
    </div>
    <div class="dateBirthDiv">
      <label id="textBirth" for="dateBirth">Fecha de Nacimiento:</label>
      <input id="dateBirth" name="dateBirth" type="date" required>
    </div>
    <button type="submit" id="btnRegister">REGISTRARSE</button>
    <p id="messageComplete"></p>
    <a class="questionAccount" href="#">¿Ya tienes una cuenta?</a>
  </form>`;
  registerElement.innerHTML = registerForm;
  const ipName = registerElement.querySelector('#name');
  const ipLastName = registerElement.querySelector('#lastName');
  const ipEmail = registerElement.querySelector('#emailRegister');
  const ipPass = registerElement.querySelector('#passwordRegister');
  const ipRepeatPassword = registerElement.querySelector('#repeatPassword');
  const ipBirth = registerElement.querySelector('#dateBirth');
  const btnRegister = registerElement.querySelector('#btnRegister');
  const msnerrorRegister = registerElement.querySelector('.msnerrorRegister');
  const msnerrorRepeatPassword = registerElement.querySelector('.msnerrorRepeatPassword');
  function validarPassword() {
    const expRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;
    if (!ipPass) {
      MessageData(msnerrorRegister, 'Campo obligatorio');
    } else if (ipPass.value.length >= 4 && ipPass.value.length <= 8) {
      MessageData(msnerrorRegister, 'Debe tener 4-8 caracteres.');
    } else if (!ipPass.value.match(expRegular)) {
      MessageData(msnerrorRegister, 'Debe tener al menos una mayúscula, una minúscula y un número');
    } else {
      MessageData(msnerrorRegister, '');
    }
  }
  ipPass.onblur = function () { validarPassword(); };
  ipPass.onkeyup = function () { validarPassword(); };

  function validarPassword2() {
    if (ipPass.value !== ipRepeatPassword.value) {
      MessageData(msnerrorRepeatPassword, 'Las contraseñas no coinciden');
    } else {
      MessageData(msnerrorRepeatPassword, '');
    }
  }
  ipRepeatPassword.onblur = function () { validarPassword2(); };
  ipRepeatPassword.onkeyup = function () { validarPassword2(); };
  btnRegister.addEventListener('click', () => {
    if (ipName.value === '' || ipLastName.value === '' || ipEmail.value === '' || ipPass.value === '' || ipRepeatPassword.value === '' || ipBirth.value === '') {
      const errorMessage = document.querySelector('#messageComplete');
      errorMessage.textContent = 'Debes completar todos los campos solicitados';
    } else {
      registerFirebase(ipName.value, ipLastName.value, ipEmail.value, ipPass.value, ipBirth.value);
    }
  });
  registerElement.querySelector('.iconEye2').addEventListener('click', () => {
    const eyePassword = document.querySelector('#passwordRegister');
    const iconPass = document.querySelector('#pass');
    if (eyePassword.type === 'password') {
      eyePassword.type = 'text';
      iconPass.classList.remove('fa-eye-slash');
      iconPass.classList.add('fa-eye');
    } else {
      eyePassword.type = 'password';
      iconPass.classList.remove('fa-eye');
      iconPass.classList.add('fa-eye-slash');
    }
  });
  registerElement.querySelector('.iconEye3').addEventListener('click', () => {
    const eyePasswordRepeat = document.querySelector('#repeatPassword');
    const iconRepeat = document.querySelector('#repeatPass');
    if (eyePasswordRepeat.type === 'password') {
      eyePasswordRepeat.type = 'text';
      iconRepeat.classList.remove('fa-eye-slash');
      iconRepeat.classList.add('fa-eye');
    } else {
      eyePasswordRepeat.type = 'password';
      iconRepeat.classList.remove('fa-eye');
      iconRepeat.classList.add('fa-eye-slash');
    }
  });
  registerElement.querySelector('.questionAccount').addEventListener('click', () => {
    onNavigate('/');
  });
  return registerElement;
};
