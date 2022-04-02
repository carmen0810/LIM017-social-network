
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
=======
const register1 = () => {
  const registerDiv1 = document.createElement('div');
  const imgLogoBackground = document.createElement('img');
  imgLogoBackground.setAttribute('src', 'img/backgroundMobile.png');
  const joinTitle = document.createElement('h2');
  joinTitle.textContent = 'ÚNETE A PETWORLD';
  const intoCreateAccount = document.createElement('p');
  intoCreateAccount.textContent = 'Crea tu cuenta en pocos pasos';
  const intoButton = document.createElement('button');
  intoButton.textContent = 'SIGUIENTE';
  const login = document.createElement('a');
  login.textContent = '¿Ya tienes una cuenta?';
  registerDiv1.appendChild(imgLogoBackground);
  registerDiv1.appendChild(joinTitle);
  registerDiv1.appendChild(intoCreateAccount);
  registerDiv1.appendChild(intoButton);
  registerDiv1.appendChild(login);
  return registerDiv1;
};

const register2 = () => {
  const registerDiv2 = document.createElement('div');
  const imgLogoBackground2 = document.createElement('img');
  imgLogoBackground2.setAttribute('src', 'img/backgroundMobile.png');
  const intoCreateAccount = document.createElement('h2');
  intoCreateAccount.textContent = 'CREA TU CUENTA';
  const intoText = document.createElement('p');
  intoText.textContent = '¡Es súper rápido y fácil';
  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Nombres');
  inputName.setAttribute('required', '');
  const inputLastName = document.createElement('input');
  inputLastName.setAttribute('type', 'text');
  inputLastName.setAttribute('placeholder', 'Apellidos');
  inputLastName.setAttribute('required', '');
  const intoButton = document.createElement('button');
  intoButton.textContent = 'SIGUIENTE';
  registerDiv2.appendChild(imgLogoBackground2);
  registerDiv2.appendChild(intoCreateAccount);
  registerDiv2.appendChild(intoText);
  registerDiv2.appendChild(inputName);
  registerDiv2.appendChild(inputLastName);
  registerDiv2.appendChild(intoButton);

  return registerDiv2;
};

export { register1, register2 };