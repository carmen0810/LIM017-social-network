// import {onNavigate} from '../main.js';

const register1 = () => {
  const loginDiv = document.createElement('div');
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
  loginDiv.appendChild(imgLogoBackground);
  loginDiv.appendChild(joinTitle);
  loginDiv.appendChild(intoCreateAccount);
  loginDiv.appendChild(intoButton);
  loginDiv.appendChild(login);
  return loginDiv;
};

const register2 = () => {
  const loginDiv = document.createElement('div');
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
  loginDiv.appendChild(imgLogoBackground2);
  loginDiv.appendChild(intoCreateAccount);
  loginDiv.appendChild(intoText);
  loginDiv.appendChild(inputName);
  loginDiv.appendChild(inputLastName);
  loginDiv.appendChild(intoButton);

  return loginDiv;
};

const register3 = () => {
  const loginDiv = document.createElement('div');
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

  loginDiv.appendChild(registerTitle);
  loginDiv.appendChild(emailRegister);
  loginDiv.appendChild(passwordRegister);
  loginDiv.appendChild(repeatPassword);
  loginDiv.appendChild(Nextbutton);

  return loginDiv;
};
const register4 = () => {
  const loginDiv = document.createElement('div');
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

  loginDiv.appendChild(birthDateTitle);
  loginDiv.appendChild(birthDate);
  loginDiv.appendChild(termConditions);
  loginDiv.appendChild(checkTerms);
  loginDiv.appendChild(buttonRegister);
  return loginDiv;
};

export { register1, register2, register3, register4 };
