import { resetPasswordPet } from '../authFirebase/authentication.js';
import { onNavigate } from '../main.js';

export const resetPassword = () => {
  const resetSection = document.createElement('section');
  resetSection.setAttribute('class', 'containerReset');
  const resetPasswordSection = `
    <header class="headerReset">
        <img id="logoReset" src="./img/imgLogin/logo.png" alt="logo">
    </header>
    <div class="resetPassDiv">
        <img id="imgforgot" src="./img/forgetpassword.png" alt="forgetPass">
        <h1>¿Tienes problemas para ingresar a tu cuenta?</h1>
        <p>Ingresa tu correo electrónico y te enviaremos un enlace para recuperar tu contraseña</p>
        <input type="email" id="emailResetPass" placeholder="Correo electrónico" required>
        <p id="messageEmail"></p>
        <button id="btnResetPass">ENVIAR</button>

        <a href="/"> Volver a Inicio de Sesión</a>

    </div> `;
  resetSection.innerHTML = resetPasswordSection;

  const emailResetPass = resetSection.querySelector('#emailResetPass');
  const btnResetPass = resetSection.querySelector('#btnResetPass');
  btnResetPass.addEventListener('click', () => {
    resetPasswordPet(emailResetPass.value);
    onNavigate('/');
  });

  return resetSection;
};

