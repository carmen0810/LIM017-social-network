import { login } from './components/login.js';
import {
  register1,
  register2,
  register3,
  register4,
} from './components/register.js';

import { homePetworld } from './components/home.js';
//import { loginFirebase } from '../authFirebase/authentication.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': login,
  '/register1': register1,
  '/register2': register2,
  '/register3': register3,
  '/register4': register4,
  '/homePetworld': homePetworld,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  rootDiv.appendChild(routes[pathname]());
  // rootDiv.innerHTML = routes[pathname]();
};
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]();
};
onNavigate('/');


//const component = routes[window.location.pathname];
//rootDiv.appendChild(component());
// eventos de Login onNavigate('/homePetworld')

//const ingresaHome = document.getElementById('btnLogin');

ingresaHome.addEventListener('click', () => {
  const ingresaHomeEmail = document.getElementById('emailInto').value;
  const ingresaHomePassword = document.getElementById('passwordInto').value;
  loginFirebase(ingresaHomeEmail, ingresaHomePassword);
});
