import { onNavigate } from '../main.js';

import { registerFirebase } from '../authFirebase/authentication.js';

const MessageData = (input, showMessage) => {
  input.innerText = showMessage;
};
// para vista destokp
export const register = () => {
  const registerElement = document.createElement('section');
  registerElement.setAttribute('class', 'containerView');
  const registerForm = `
  <header class="header1">
     <img id="logo" src="img/logo.png" alt="logo">
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
  <input id="emailRegister" type="email" name="emailRegister" placeholder="*Correo eléctrónico" required>
  <div class="passwords">
      <div class='eye'>
        <label for="passwordRegister" class="inputLabel"></label>
        <input id="passwordRegister" type="password" name="passwordRegister" placeholder="*Contraseña nueva" required>
        <span class="iconEye4">
        <i class="fa fa-solid fa-eye-slash"></i>
        </span>
      </div>
      <span class="msnerrorRegister"></span>
  </div>    
  <div class="passwords">
      <div class='eye'>
        <label for="repeatPassword" class="inputLabel"></label>
        <input id="repeatPassword" type="password" name="repeatPassword" placeholder="*Confirme contraseña" required>
        <span class="iconEye5">
        <i class="fa fa-solid fa-eye-slash"></i>
        </span>
      </div> 
      <span class="msnerrorRepeatPassword"></span>   
  </div>
  <div class"dateBirthDiv">
    <label id="textBirth" for="dateBirth">Fecha de Nacimiento:</label>
    <input id="dateBirth" name="dateBirth" type="date" required>
  <div>
  <button type="submit" id="btnRegister">REGISTRARSE</button>
  <p id="messageComplete"></p>
  <a class="questionDesktop" href="#">¿Ya tienes una cuenta?</a>
  </form>`;
  registerElement.innerHTML = registerForm;
  const ipEmail = registerElement.querySelector('#emailRegister');
  const ipPass = registerElement.querySelector('#passwordRegister');
  const ipBirth = registerElement.querySelector('#dateBirth');
  const ipName = registerElement.querySelector('#name');
  const ipLastName = registerElement.querySelector('#lastName');
  const ipRepeatPassword = registerElement.querySelector('#repeatPassword');
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
    if (ipEmail.value === '' || ipBirth.value === '' || ipLastName.value === '' || ipName.value === '' || ipPass.value === '' || ipRepeatPassword.value === '') {
      const errorMessage = document.querySelector('#messageComplete');
      errorMessage.textContent = 'Debes completar todos los campos solicitados';
    } else {
      registerFirebase(ipEmail.value, ipPass.value, ipBirth.value, ipName.value, ipLastName.value);
      onNavigate('/');
    }
  });
  registerElement.querySelector('.iconEye4').addEventListener('click', () => {
    const eyePassword = document.querySelector('#passwordRegister');
    const icon = document.querySelector('i');
    if (eyePassword.type === 'password') {
      eyePassword.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    } else {
      eyePassword.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  });
  registerElement.querySelector('.iconEye5').addEventListener('click', () => {
    const eyePassword = document.querySelector('#repeatPassword');
    const icon = document.querySelector('i');
    if (eyePassword.type === 'password') {
      eyePassword.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    } else {
      eyePassword.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  });
  registerElement.querySelector('.questionDesktop').addEventListener('click', () => {
    onNavigate('/');
  });
  return registerElement;
};
