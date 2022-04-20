import { onNavigate } from '../main.js';
import { registerFirebase } from '../authFirebase/authentication.js';
import { MessageData } from '../lib/index.js';

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
      <input id="name" type="text" name="nameRegister" placeholder="*Nombres" required>
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
    <button  id="btnRegister" >REGISTRARSE</button>
    <p id="messageComplete"></p>
    <a class="questionAccount" href="/">¿Ya tienes una cuenta?</a>
  </form>`;
  registerElement.innerHTML = registerForm;
  const ipName = registerElement.querySelector('#name');
  const ipLastName = registerElement.querySelector('#lastName');
  const ipEmail = registerElement.querySelector('#emailRegister');
  const ipPass = registerElement.querySelector('#passwordRegister');
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
  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    if (ipName.value === '' || ipLastName.value === '' || ipEmail.value === '' || ipPass.value === '' || ipRepeatPassword.value === '' ) {
      const errorMessageRegister = document.querySelector('#messageComplete');
      errorMessageRegister.textContent = 'Debes completar todos los campos solicitados';
    } else {
      registerFirebase(ipName.value, ipLastName.value, ipEmail.value, ipPass.value);
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
  return registerElement;
};
