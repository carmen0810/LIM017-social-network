import { login } from './components/login.js';

import { register } from './components/register.js';

import { homePetworld } from './components/home.js';

import { resetPassword } from './components/resetPassword.js';
const rootDiv = document.getElementById('root');

export const routes = {
  '/': login,
  '/register': register,
  '/homePetworld': homePetworld,
  '/resetPassword': resetPassword,

};

// cambiar a otro archivo y denominar a routes este archivo
export const onNavigate = (pathname) => {
  rootDiv.innerHTML = '';
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};
onNavigate(window.location.pathname);

//Función modal
