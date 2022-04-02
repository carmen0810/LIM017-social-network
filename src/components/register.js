// import {onNavigate} from '../main.js';

const register3 = () => {
  const homeDiv = document.createElement('div');
  const registerTitle = document.createElement('h1');
  registerTitle.textContent = 'CREA TU CUENTA';
  const emailRegister = document.createElement('input');
  const passwordRegister = document.createElement('input');
  emailRegister.setAttribute('type', 'email');
  emailRegister.setAttribute('placeholder', 'Ingrese su correo electrónico');
  emailRegister.setAttribute('required', '');
  passwordRegister.setAttribute('type', 'password');
  passwordRegister.setAttribute('placeholder', 'Crea Contraseña Nueva');
  passwordRegister.setAttribute('required', '');
  const repeatPassword = document.createElement('input');
  repeatPassword.setAttribute('type', 'password');
  repeatPassword.setAttribute('placeholder', 'Confirmar contraseña');
  repeatPassword.setAttribute('required', '');
  const Nextbutton = document.createElement('button');
  Nextbutton.textContent = 'Siguiente';

  homeDiv.appendChild(registerTitle);
  homeDiv.appendChild(emailRegister);
  homeDiv.appendChild(passwordRegister);
  homeDiv.appendChild(repeatPassword);
  homeDiv.appendChild(Nextbutton);

  return homeDiv;
};

const register4 = () => {
  const homeDiv = document.createElement('div');
  const birthDateTitle = document.createElement('h2');
  birthDateTitle.textContent = 'Fecha de Nacimiento';
  const birthDate = document.createElement('input');
  birthDate.setAttribute('type', 'date');
  const termConditions = document.createElement('a');
  termConditions.textContent = 'Términos y condiciones';
  const checkTerms = document.createElement('input');
  checkTerms.setAttribute('type', 'checkbox');
  checkTerms.textContent = 'He leído y acepto términos y Condiciones ';
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'REGISTRARSE';

  homeDiv.appendChild(birthDateTitle);
  homeDiv.appendChild(birthDate);
  homeDiv.appendChild(termConditions);
  homeDiv.appendChild(checkTerms);
  homeDiv.appendChild(buttonRegister);
  return homeDiv;
};
export { register3, register4 };
