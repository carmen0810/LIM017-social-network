const register = () => {
  const registerDiv = document.createElement('div');
  const imgLogoFondo = document.createElement('img');
  imgLogoFondo.setAttribute('src', 'img/backgroundMobile.png');
  const intoUnirse = document.createElement('h2');
  intoUnirse.textContent = 'ÚNETE A PETWORLD';
  const intocrearCuenta = document.createElement('p');
  intocrearCuenta.textContent = 'Crea tu cuenta en pocos pasos';
  const intoButton = document.createElement('button');
  intoButton.textContent = 'SIGUIENTE';
  const login = document.createElement('a');
  login.textContent = '¿Ya tienes una cuenta?';
  registerDiv.appendChild(imgLogoFondo);
  registerDiv.appendChild(intoUnirse);
  registerDiv.appendChild(intocrearCuenta);
  registerDiv.appendChild(intoButton);
  registerDiv.appendChild(login);
  return registerDiv;
};

const register2 = () => {
  const register2Div = document.createElement('div');
  const imgLogoFondo = document.createElement('img');
  imgLogoFondo.setAttribute('src', 'img/backgroundMobile.png');
  const intoCuenta = document.createElement('h2');
  intoCuenta.textContent = 'CREA TU CUENTA';
  const intotex = document.createElement('p');
  intotex.textContent = '¡Es súper rápido y fácil';
  const nombre = document.createElement('input');
  nombre.setAttribute('type', 'text');
  nombre.setAttribute('placeholder', 'Nombres');
  nombre.setAttribute('required', '');
  const apellido = document.createElement('input');
  apellido.setAttribute('type', 'text');
  apellido.setAttribute('placeholder', 'Apellidos');
  apellido.setAttribute('required', '');
  const intoButton = document.createElement('button');
  intoButton.textContent = 'SIGUIENTE';
  register2Div.appendChild(imgLogoFondo);
  register2Div.appendChild(intoCuenta);
  register2Div.appendChild(intotex);
  register2Div.appendChild(nombre);
  register2Div.appendChild(apellido);
  register2Div.appendChild(intoButton);

  return register2Div;
};

export { register, register2 };
