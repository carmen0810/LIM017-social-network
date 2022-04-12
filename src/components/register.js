import { onNavigate /* , validatePassword, repeatPasswordValid */ } from '../main.js';
import { registerFirebase } from '../authFirebase/authentication.js';

export const register1 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage1');
  const registerDiv1 = `
     <h2 class="intoTitle">ÚNETE A PETWORLD</h2>
     <p class="textCreateAccount">Crea tu cuenta en pocos pasos</p>
     <button id="btnNext1">SIGUIENTE</button>
     <a class="textAccount">¿Ya tienes una cuenta?</a>`;
  registerElement.innerHTML = registerDiv1;
  setTimeout(() => {
    const textAccount = document.querySelector('.textAccount');
    textAccount.addEventListener('click', () => {
      onNavigate('/');
    });
  }, 0);
  setTimeout(() => {
    registerElement.querySelector('#btnNext1').addEventListener('click', () => {
      onNavigate('/register2');
    });
  }, 0);

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
       <p id="errorMessageComplete"></p>
       <button id="btnNext2">SIGUIENTE</button>`;
  registerElement.innerHTML = registerDiv2;
  const inputName = registerElement.querySelector('#name');
  const inputLastName = registerElement.querySelector('#lastName');
  // setTimeout(() => {
    registerElement.querySelector('#btnNext2').addEventListener('click', () => {
      if (inputLastName.value === '' & inputName.value === '') {
        const errorMessageComplete = document.querySelector('#errorMessageComplete');
        errorMessageComplete.textContent = 'Debes completar todos los campos solicitados';
      } else {
        //registerFirebase(inputName.value, inputLastName.value);
        onNavigate('/register3');
      }
    });
  // }, 0);

  return registerElement;
};

const MessageData = (input, showMessage) => {
  //const formData = input.parentElement;
  input.innerText = showMessage;
};
export const register3 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage3');
  const registerDiv3 = `
       <h1>CREA TU CUENTA</h1>
       <label for="emailRegister">Ingresa tu Correo</label>
       <input id="emailRegister" type="email" placeholder="Ingrese su Correo" required>
       <div>
          <label for="passwordRegister" class="inputLabel">Crea su Contraseña</label>
          <input id="passwordRegister" type="password" placeholder="contraseña" required>
          <span class="msnerrorRegister"></span>
       </div>
       <div>
          <label for="repeatPassword" class="inputLabel">Confirme su Contraseña</label>
          <input id="repeatPassword" type="password" placeholder="Confirme su contraseña" required>
          <span class="msnerrorRepeatPassword"></span>
       </div>
       <p id="messageComplete"></p>
       <button id="btnNext3">SIGUIENTE</button>`;
  registerElement.innerHTML = registerDiv3;
  const inputEmail = registerElement.querySelector('#emailRegister');
  const inputPassword = registerElement.querySelector('#passwordRegister');
  const inputRepeatPassword = registerElement.querySelector('#repeatPassword');
  const btnNext3 = registerElement.querySelector('#btnNext3');
  const msnerrorRegister = registerElement.querySelector('.msnerrorRegister');
  const msnerrorRepeatPassword = registerElement.querySelector('.msnerrorRepeatPassword');

  function validarPassword() {
    const expRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;
    if (!inputPassword) {
      MessageData(msnerrorRegister, 'Campo obligatorio');
    } else if (inputPassword.value.length >= 4 && inputPassword.value.length <= 8) {
      MessageData(msnerrorRegister, 'Debe tener 4-8 caracteres.');
    } else if (!inputPassword.value.match(expRegular)) {
      MessageData(msnerrorRegister, 'Debe tener al menos una mayúscula, una minúscula y un número');
    } else {
      MessageData(msnerrorRegister, '');
    }
  }
  // preguntar si las dos funcion deben estar arriba antes de inciiar las funciones
  inputPassword.onblur = function () { validarPassword(); };
  inputPassword.onkeyup = function () { validarPassword(); };

  function validarPassword2() {
    if (inputPassword.value !== inputRepeatPassword.value) {
      MessageData(msnerrorRepeatPassword, 'Las contraseñas no coinciden');
    } else {
      MessageData(msnerrorRepeatPassword, '');
    }
  }
  inputRepeatPassword.onblur = function () { validarPassword2(); };
  inputRepeatPassword.onkeyup = function () { validarPassword2(); };

  btnNext3.addEventListener('click', () => {
    if (inputEmail.value === '' &  inputPassword.value === '' & inputRepeatPassword.value === '') {
      const errorMessage = document.querySelector('#messageComplete');
      errorMessage.textContent = 'Debes completar todos los campos solicitados';
    } else {
      // errorMessage.textContent = '';   (verificar xq no lee esta función)
      //registerFirebase(inputEmail.value, inputPassword.value);
      onNavigate('/register4');
    }
  });
  return registerElement;
};
export const register4 = () => {
  const registerElement = document.createElement('div');
  registerElement.setAttribute('class', 'registerPage4');
  const registerDiv4 = `
      <div>
        <label for="dateBirth">Fecha de Nacimiento</label>
        <input id="dateBirth" type="date" required>
        <span id="showMsn"></span>
      </div> 
      <button type="submit" id="btnRegister">REGISTRARSE</button>`;
  registerElement.innerHTML = registerDiv4;
  //const inputBirth = document.querySelector('#dateBirth');
  setTimeout(() => {
    registerElement.querySelector('#btnRegister').addEventListener('click', () => {

      if(inputBirth.value === ''){
        const showMsn = document.querySelector('#showMsn')
        showMsn.textContent = 'Debes completar todos los campos solicitados';
      }
      else{
     // onNavigate('/');
      const inputEmail = document.getElementById('emailRegister').value;
      const inputPassword = document.getElementById('passwordRegister').value;
      const inputBirth = document.getElementById('dateBirth').value;
      const inputName = document.getElementById('name').value;
      const inputLastName = document.getElementById('lastName').value;
      registerFirebase(inputEmail, inputPassword, inputBirth, inputName, inputLastName);
      onNavigate('/');
      //registerFirebase(inputBirth.value);
      }
    });
  }, 0);
  return registerElement;
};


// para vista destokp
export const register = () => {
  const registerElement = document.createElement('form');
  registerElement.setAttribute('class', 'registerPage');
  const registerForm = `
  <h2 class="intoTitle">REGÍSTRATE Y ÚNETE A PETWORLD</h2>
  <p class="textCreateAccount">Crea tu cuenta en pocos pasos</p>
  <p class="textCreateAccount">¡Es súper rápido y fácil!</p>
  <div class="fullName">
    <label for="name"></label>
    <input id="name" type="text" name="nameDesktop" placeholder="*Nombres" required>
    <label for="lastName"></label>
    <input id="lastName" type="text" name="lastName" placeholder="*Apellidos" required>
  </div>
  <label for="emailRegister"></label>
  <input id="emailRegister" type="email" name="emailRegister" placeholder="Ingrese su Correo eléctrónico" required>
  <div class="passwords">
    <div>
      <label for="passwordRegister" class="inputLabel">Contraseña nueva</label>
      <input id="passwordRegister" type="password" name="passwordRegister" placeholder="Crea una contraseña nueva" required>
      <span class="msnerrorRegister"></span>
    </div>     
    <div>
      <label for="repeatPassword" class="inputLabel">Confirme su nueva Contraseña</label>
      <input id="repeatPassword" type="password" name="repeatPassword" placeholder="Confirme su contraseña" required>
      <span class="msnerrorRepeatPassword"></span>
    </div>    
  </div>
  <label for="dateBirth">Fecha de Nacimiento</label>
  <input id="dateBirth" name="dateBirth" type="date" required>
  <button type="submit" id="btnRegister">REGISTRARSE</button>
  <p id="messageComplete"></p>
  <a class="questionDesktop">¿Ya tienes una cuenta?</a>`;

  registerElement.innerHTML = registerForm;
  // método 2
  const inputEmail = registerElement.querySelector('#emailRegister');
  const inputPassword = registerElement.querySelector('#passwordRegister');
  const inputBirth = registerElement.querySelector('#dateBirth');
  const inputName = registerElement.querySelector('#name');
  const inputLastName = registerElement.querySelector('#lastName');
  const inputRepeatPassword = registerElement.querySelector('#repeatPassword');
  const btnRegister = registerElement.querySelector('#btnRegister');
  const msnerrorRegister = registerElement.querySelector('.msnerrorRegister');
  const msnerrorRepeatPassword = registerElement.querySelector('.msnerrorRepeatPassword');

  function validarPassword() {
    const expRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;
    if (!inputPassword) {
      MessageData(msnerrorRegister, 'Campo obligatorio');
    } else if (inputPassword.value.length >= 4 && inputPassword.value.length <= 8) {
      MessageData(msnerrorRegister, 'Debe tener 4-8 caracteres.');
    } else if (!inputPassword.value.match(expRegular)) {
      MessageData(msnerrorRegister, 'Debe tener al menos una mayúscula, una minúscula y un número');
    } else {
      MessageData(msnerrorRegister, '');
    }
  }
  // preguntar si las dos funcion deben estar arriba antes de inciiar las funciones
  inputPassword.onblur = function () { validarPassword(); };
  inputPassword.onkeyup = function () { validarPassword(); };

  function validarPassword2() {
    if (inputPassword.value !== inputRepeatPassword.value) {
      MessageData(msnerrorRepeatPassword, 'Las contraseñas no coinciden');
    } else {
      MessageData(msnerrorRepeatPassword, '');
    }
  }
  inputRepeatPassword.onblur = function () { validarPassword2(); };
  inputRepeatPassword.onkeyup = function () { validarPassword2(); };

  btnRegister.addEventListener('click', () => {
    if (inputEmail.value === '' & inputBirth.value === '' & inputLastName.value === '' & inputName.value === '' & inputPassword.value === '' & inputRepeatPassword.value === '') {
      const errorMessage = document.querySelector('#messageComplete');
      errorMessage.textContent = 'Debes completar todos los campos solicitados';
    } else {
      // errorMessage.textContent = '';   (verificar xq no lee esta función)
      registerFirebase(inputEmail.value, inputPassword.value, inputBirth.value, inputName.value, inputLastName.value);
      onNavigate('/');
    }
  });

  return registerElement;
};

// setTimeout(() => {

//   registerElement.querySelector('#btnRegister').addEventListener('click', () => {
//     // if (inputEmail === '' & inputBirth === '' & inputLastName === '' & inputName === '' & inputPassword === '' & inputRepeatPassword === '') {
//     //   const errorMessage = document.querySelector('#messageComplete');
//     //   errorMessage.textContent = 'Debes completar todos los campos solicitados';
//     // }
//     // else{
//   const inputEmail = document.getElementById('emailRegister').value;
//   const inputPassword = document.getElementById('passwordRegister').value;
//   const inputPasswordTag = document.getElementById('passwordRegister');
//   const inputBirth = document.getElementById('dateBirth').value;
//   const inputName = document.getElementById('name').value;
//   const inputLastName = document.getElementById('lastName').value;
//   const inputRepeatPassword = document.getElementById('repeatPassword').value;
//   const inputRepeatPasswordTag = document.getElementById('repeatPassword');
//   validatePassword(inputPassword, inputPasswordTag);
//   repeatPasswordValid(inputRepeatPasswordTag);
//       onNavigate('/');
//       registerFirebase(inputEmail, inputPassword, inputBirth, inputName, inputLastName);
//    // }
//   });
// }, 0);
//   return registerElement;
// };
