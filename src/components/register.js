import { onNavigate } from '../main.js';

export const register1 = () => {
  const registerElement1 = document.createElement('div');
  registerElement1.setAttribute('class', 'registerPage1');
  const registerDiv1 = `
     <h2 class="intoTitle">ÚNETE A PETWORLD</h2>
     <p class="textCreateAccount">Crea tu cuenta en pocos pasos</p>
     <button id="btnNext1">SIGUIENTE</button>
     <a class="textAccount">¿Ya tienes una cuenta?</a>`;
  registerElement1.innerHTML = registerDiv1;
  setTimeout(() => {
    registerElement1.querySelector('#btnNext1').addEventListener('click', () => {
      onNavigate('/register2');
      document.querySelector('.registerPage1').style.display = 'none';
    });
  }, 0);
  return registerElement1;
};

export const register2 = () => {
  const registerElement2 = document.createElement('div');
  registerElement2.setAttribute('class', 'registerPage2');
  const registerDiv2 = `
       <h2 class="intoTitle">CREA TU CUENTA</h2>
       <p class="textCreateAccount">¡Es súper rápido y fácil!</p>
       <label for="name"></label>
       <input id="name" type="text" placeholder="*Nombres" required>
       <label for="lastName"></label>
       <input id="lastName" type="text" placeholder="*Apellidos" required>
       <button id="btnNext2">SIGUIENTE</button>`;
  registerElement2.innerHTML = registerDiv2;
  setTimeout(() => {
    registerElement2.querySelector('#btnNext2').addEventListener('click', () => {
      onNavigate('/register3');
      document.querySelector('.registerPage2').style.display = 'none';
    });
  }, 0);

  return registerElement2;
};
export const register3 = () => {
  const registerElement3 = document.createElement('div');
  registerElement3.setAttribute('class', 'registerPage3');
  const registerDiv3 = `<h1>CREA TU CUENTA</h1>
                        <label>Ingresa tu Correo</label>
                        <input id="emailRegister" type="email" placeholder="Ingrese su Correo" required >
                        <label class="inputLabel">Crea su Contraseña</label>
                        <input id="passwordRegister" type="password" placeholder="contraseña" required >
                        <label class="inputLabel">Confirme su Contraseña</label>
                        <input id="repeatPassword" type="password" placeholder="Confirme su contraseña" required>
                        <button id="btnNext3">SIGUIENTE</button>`;
  registerElement3.innerHTML = registerDiv3;
  setTimeout(() => {
    registerElement3.querySelector('#btnNext3').addEventListener('click', () => {
      onNavigate('/register4');
      document.querySelector('.registerPage3').style.display = 'none';
    });
  }, 0);
  return registerElement3;
};
export const register4 = () => {
  const registerElement4 = document.createElement('div');
  registerElement4.setAttribute('class', 'registerPage4');
  const registerDiv4 = `<h2>Fecha de Nacimiento</h2>
                        <label>Fecha de Nacimiento</label>
                        <input id="date"  required >
                        <a class="termsConditions">Términos y Condiciones</a>
                        <input id="checkConditions" type="checkbox"  required >
                        <label class="inputLabel">Confirme su Contraseña</label>
                        <button id="btnRegister">REGISTRARSE</button>`;
  registerElement4.innerHTML = registerDiv4;
  setTimeout(() => {
    registerElement4.querySelector('#btnRegister').addEventListener('click', () => {
      onNavigate('/');
      document.querySelector('.registerPage4').style.display = 'none';
    });
  }, 0);
  return registerElement4;
};
