/* eslint-disable import/no-cycle */
import { resetPasswordPet } from '../authFirebase/authentication.js';
// import { onNavigate } from '../main.js';
import { MessageData } from '../lib/index.js';

export const resetPassword = () => {
  const resetSection = document.createElement('section');
  resetSection.setAttribute('class', 'containerReset');
  const resetPasswordSection = `
    <header class="headerReset">
        <img id="logoReset" src="./img/logo6.png" alt="logo">
        
    </header>
    <div class="resetPassDiv">
        <img id="imgforgot" src="./img/forgetpassword.png" alt="forgetPass">
        <h1 id="titleReset">¿Tienes problemas para ingresar a tu cuenta?</h1>
        <p id="resetParagraph">Ingresa tu correo electrónico y te enviaremos un enlace para recuperar tu contraseña</p>
        <input type="email" class="emailResetPass" placeholder="Correo electrónico" required>
        <p id="messageEmail"></p>
        <button id="btnResetPass">ENVIAR</button>
        <p class="msmConfirm">Se ha enviado un link a su correo electrónico <br>
         para reestablecer  su contraseña</p>
        <a href="/" id="backLogin"> Volver a Inicio de Sesión</a>

    </div> `;
  resetSection.innerHTML = resetPasswordSection;

  const emailResetPass = resetSection.querySelector('.emailResetPass');
  const btnResetPass = resetSection.querySelector('#btnResetPass');
  const msmConfirm = resetSection.querySelector('.msmConfirm');
  const messageEmail = resetSection.querySelector('#messageEmail');

  msmConfirm.classList.add('ocultar');
  btnResetPass.addEventListener('click', () => {
    if (emailResetPass.value === '') {
      MessageData(messageEmail, 'Debes completar el campo solicitado');
    } else {
      resetPasswordPet(emailResetPass.value);
      emailResetPass.style.display = 'none';
      btnResetPass.style.display = 'none';
      msmConfirm.classList.remove('ocultar');
      msmConfirm.classList.add('mostrar');
    }
  });

  return resetSection;
};
