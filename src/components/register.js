const register = () => {
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
  registerDiv.appendChild(imgLogoBackground);
  registerDiv.appendChild(joinTitle);
  registerDiv.appendChild(intoCreateAccount);
  registerDiv.appendChild(intoButton);
  registerDiv.appendChild(login);
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
  register2Div.appendChild(imgLogoBackground2);
  register2Div.appendChild(intoCreateAccount);
  register2Div.appendChild(intoText);
  register2Div.appendChild(inputName);
  register2Div.appendChild(inputLastName);
  register2Div.appendChild(intoButton);

  return registerDiv2;
};

export { registerDiv1, registerDiv2 };
