import { onNavigate } from '../main.js';
import { registerFirebase } from '../authFirebase/authentication.js';

export const register1 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage1');
  const registerDiv1 = `
     <h2 class="intoTitle">ÚNETE A PETWORLD</h2>
     <p class="textCreateAccount">Crea tu cuenta en pocos pasos</p>
     <button id="btnNext1">SIGUIENTE</button>
     <a class="textAccount" href="#">¿Ya tienes una cuenta?</a>`;
  registerElement.innerHTML = registerDiv1;
  setTimeout(() => {
    registerElement.querySelector('#btnNext1').addEventListener('click', () => {
      onNavigate('/register2');
    });
  }, 0);
  registerElement.querySelector('.textAccount').addEventListener('click', () => {
    onNavigate('/');
  });
  return registerElement;
};

export const register2 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage2');
  const registerDiv2 = `
       <h2 class="intoTitle">CREA TU CUENTA</h2>
       <p class="textCreateAccount">¡Es súper rápido y fácil!</p>
       <label for="name"></label>
       <input id="name" type="text" placeholder="*Nombres" required>
       <label for="lastName"></label>
       <input id="lastName" type="text" placeholder="*Apellidos" required>
       <button id="btnNext2">SIGUIENTE</button>`;
  registerElement.innerHTML = registerDiv2;
  setTimeout(() => {
    registerElement.querySelector('#btnNext2').addEventListener('click', () => {
      onNavigate('/register3');
    });
  }, 0);

  return registerElement;
};
export const register3 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage3');
  const registerDiv3 = `
       <h1>CREA TU CUENTA</h1>
       <label for="emailRegister">Ingresa tu Correo</label>
       <input id="emailRegister" type="email" placeholder="Ingrese su Correo" required>
       <div class='eye'>
       <label for="passwordRegister" class="inputLabel">Crea su Contraseña</label>
       <input id="passwordRegister" type="password" placeholder="contraseña" required>
       <span class="iconEye2">
       <i class="fa fa-solid fa-eye-slash"></i>
       </span>
       </div>
       <div class='eye'>
       <label for="repeatPassword" class="inputLabel">Confirme su Contraseña</label>
       <input id="repeatPassword" type="password" placeholder="Confirme su contraseña" required>
       <span class="iconEye3">
       <i class="fa fa-solid fa-eye-slash"></i>
       </span>
       </div>
       <button id="btnNext3">SIGUIENTE</button>`;
  registerElement.innerHTML = registerDiv3;
  registerElement.querySelector('.iconEye2').addEventListener('click', () => {
    const inputPassword = document.querySelector('#passwordRegister');
    const icon = document.querySelector('i');
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    } else {
      inputPassword.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  });
  registerElement.querySelector('.iconEye3').addEventListener('click', () => {
    const inputPassword = document.querySelector('#repeatPassword');
    const icon = document.querySelector('i');
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    } else {
      inputPassword.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  });
  setTimeout(() => {
    registerElement.querySelector('#btnNext3').addEventListener('click', () => {
      onNavigate('/register4');
    });
  }, 0);

  return registerElement;
};
export const register4 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage4');
  const registerDiv4 = `
       <label for="dateBirth">Fecha de Nacimiento</label>
       <input id="dateBirth" type="date" required>
       <button type="submit" id="btnRegister">REGISTRARSE</button>`;
  registerElement.innerHTML = registerDiv4;
  setTimeout(() => {
    registerElement.querySelector('#btnRegister').addEventListener('click', () => {
      onNavigate('/');
      const inputEmail = document.getElementById('emailRegister').value;
      const inputPassword = document.getElementById('passwordRegister').value;
      const inputBirth = document.getElementById('dateBirth').value;
      const inputName = document.getElementById('name').value;
      const inputLastName = document.getElementById('lastName').value;
      registerFirebase(inputEmail, inputPassword, inputBirth, inputName, inputLastName);
    });
  }, 0);
  return registerElement;
};
export const register = () => {
  const registerElement = document.createElement('form');
  registerElement.setAttribute('class', 'registerPage');
  const registerForm = `
     <h2 class="intoTitle">REGÍSTRATE Y ÚNETE A PETWORLD</h2>
     <p class="textCreateAccount">Crea tu cuenta en pocos pasos</p>
     <p class="textCreateAccount">¡Es súper rápido y fácil!</p>
     <div>
       <label for="name"></label>
       <input id="name" type="text" name="nameDesktop" placeholder="*Nombres" required>
       <label for="lastName"></label>
       <input id="lastName" type="text" name="lastName" placeholder="*Apellidos" required>
     </div>
     <label for="emailRegister"></label>
     <input id="emailRegister" type="email" name="emailRegister" placeholder="Ingrese su Correo eléctrónico" required>
     <div class='eye'>
     <label for="passwordRegister" class="inputLabel"></label>
     <input id="passwordRegister" type="password" name="passwordRegister" placeholder="Crea una contraseña nueva" required>
     <span class="iconEye4">
     <i class="fa fa-solid fa-eye-slash"></i>
     </span>
     </div>
     <div class='eye'>
     <label for="repeatPassword" class="inputLabel">Confirme su nueva Contraseña</label>
     <input id="repeatPassword" type="password" name="repeatPassword" placeholder="Confirme su contraseña" required>
     <span class="iconEye5">
     <i class="fa fa-solid fa-eye-slash"></i>
     </span>
     </div>
     <label for="dateBirth">Fecha de Nacimiento</label>
     <input id="dateBirth" name="dateBirth" type="date" required>
     <button type="submit" id="btnRegister">REGISTRARSE</button>
     <a class="questionDesktop" href="#">¿Ya tienes una cuenta?</a>`;
  registerElement.innerHTML = registerForm;
  registerElement.querySelector('.iconEye4').addEventListener('click', () => {
    const inputPassword = document.querySelector('#passwordRegister');
    const icon = document.querySelector('i');
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    } else {
      inputPassword.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  });
  registerElement.querySelector('.iconEye5').addEventListener('click', () => {
    const inputPassword = document.querySelector('#repeatPassword');
    const icon = document.querySelector('i');
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    } else {
      inputPassword.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  });

  setTimeout(() => {
    registerElement.querySelector('#btnRegister').addEventListener('click', () => {
      onNavigate('/');
      const inputEmail = document.getElementById('emailRegister').value;
      const inputPassword = document.getElementById('passwordRegister').value;
      const inputBirth = document.getElementById('dateBirth').value;
      const inputName = document.getElementById('name').value;
      const inputLastName = document.getElementById('lastName').value;
      registerFirebase(inputEmail, inputPassword, inputBirth, inputName, inputLastName);
    });
  }, 0);
  registerElement.querySelector('.questionDesktop').addEventListener('click', () => {
    onNavigate('/');
  });
  return registerElement;
};
