import {onNavigate} from '../main.js';

export const home = () => {
    const homeDiv = document.createElement('div');
    const emailInput = document.createElement('input');
    const passwordInput = document.createElement('input');
    emailInput.textContent = 'Correo';
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Correo');
    emailInput.setAttribute('required', '');
    passwordInput.textContent = 'Contraseña';
    passwordInput.setAttribute('type', 'password');
    const passwordForget = document.createElement('a')
    passwordForget.textContent = '¿Olvidaste tu contraseña?';
    const intoButton = document.createElement('button');
    intoButton.textContent = 'INGRESAR';
    const intoParagraph = document.createElement('p');
    intoParagraph.textContent = 'O ingresa con';
    const imgIconFacebook = document.createElement('img');
    imgIconFacebook.setAttribute('src', 'img/facebook (2).png');
    
    homeDiv.appendChild(emailInput);
    homeDiv.appendChild(intoButton);
    homeDiv.appendChild(imgIconFacebook);
    homeDiv.appendChild(passwordInput);
    
    return homeDiv;
};