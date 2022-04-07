import { onNavigate } from '../main.js';

export const login = () => {
  const loginElem = document.createElement('div');
  loginElem.setAttribute('class', 'loginView');
  const loginDiv = `
     <label for="email"></label>
     <input id="emailInto" type="email" placeholder="Correo" required>
     <label for="password"></label>
     <input id="passwordInto" type="password" placeholder="contraseña" required> 
     <p>¿Olvidaste tu contraseña?</p>
     <button class="btnLogin">INGRESAR</button>
     <p>o ingresa con</p>
     <img src="img/facebook (2).png" alt="facebook" class="iconInto">
     <img src="img/google.png" alt="google" class="iconInto">
     <p>¿eres nuevo en petworld?</p>
     <button class="btnCreateAccount">Crea tu cuenta</button>`;
  loginElem.innerHTML = loginDiv;
  loginElem.querySelector('.btnLogin').addEventListener('click', () => {
    onNavigate('/homePetworld');
    document.querySelector('.loginView').style.display = 'none';
  });
  loginElem.querySelector('.btnCreateAccount').addEventListener('click', () => {
    onNavigate('/register1');
    document.querySelector('.loginView').style.display = 'none';
  });

  return loginElem;
};

// const loginDiv = document.createElement('div');
// loginDiv.setAttribute('class', 'loginView');
// const titleLogin = document.createElement('h1');
// const emailInput = document.createElement('input');
// const passwordInput = document.createElement('input');
// const passwordForget = document.createElement('a');
// const intoButton = document.createElement('button');
// const intoParagraph = document.createElement('p');
// const divIcons = document.createElement('div');
// divIcons.setAttribute('class', 'iconDivLogin');
// const imgIconFacebook = document.createElement('img');
// const imgIconGmail = document.createElement('img');
// const newParagraph = document.createElement('p');
// const createAccount = document.createElement('button');
// titleLogin.textContent = 'INICIAR SESIÓN';
// titleLogin.setAttribute('id', 'titleLogin');
// emailInput.setAttribute('id', 'emailInto');
// emailInput.textContent = 'Correo';
// emailInput.setAttribute('type', 'email');
// emailInput.setAttribute('placeholder', 'Correo');
// emailInput.setAttribute('placeholder', 'Correo');
// emailInput.setAttribute('required', '');
// passwordInput.setAttribute('id', 'passwordInto');
// passwordInput.textContent = 'Contraseña';
// passwordInput.setAttribute('type', 'password');
// passwordInput.setAttribute('placeholder', 'Contraseña');
// passwordInput.setAttribute('required', '');
// passwordForget.textContent = '¿Olvidaste tu contraseña?';
// passwordForget.setAttribute('id', 'textPasswordForget');
// intoButton.textContent = 'INGRESAR';
// intoButton.setAttribute('id', 'btnLogin');
// intoButton.setAttribute('class', 'btnLogin');
// intoParagraph.textContent = 'O ingresa con';
// intoParagraph.setAttribute('id', 'textIntoParagraph');
// divIcons.appendChild(imgIconFacebook);
// divIcons.appendChild(imgIconGmail);
// imgIconFacebook.setAttribute('class', 'iconInto');
// imgIconFacebook.setAttribute('src', 'img/facebook (2).png');
// imgIconGmail.setAttribute('class', 'iconInto');
// imgIconGmail.setAttribute('src', 'img/google.png');
// newParagraph.textContent = '¿Eres nuevo en PetWorld?';
// newParagraph.setAttribute('id', 'textNewParagraph');
// createAccount.textContent = 'Crea tu cuenta';
// createAccount.setAttribute('class', 'textCreateAccount');
// loginDiv.appendChild(titleLogin);
// loginDiv.appendChild(emailInput);
// loginDiv.appendChild(titleLogin);
// loginDiv.appendChild(emailInput);
// loginDiv.appendChild(passwordInput);
// loginDiv.appendChild(passwordForget);
// loginDiv.appendChild(intoButton);
// loginDiv.appendChild(intoParagraph);
// loginDiv.appendChild(divIcons);
// loginDiv.appendChild(newParagraph);
// loginDiv.appendChild(createAccount);

//   return loginDiv;
// };
