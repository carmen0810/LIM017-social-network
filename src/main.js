import { login } from './components/login.js';

import {
  register, register1, register2, register3, register4,
} from './components/register.js';

import { homePetworld } from './components/home.js';

const rootDiv = document.getElementById('root');

export const routes = {
  '/': login,
  '/register': register,
  '/register1': register1,
  '/register2': register2,
  '/register3': register3,
  '/register4': register4,
  '/homePetworld': homePetworld,
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
onNavigate('/');