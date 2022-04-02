// Este es el punto de entrada de tu aplicacion

import { home } from './components/home.js';
import { register1, register2, register3, register4 } from './components/register.js';

// myFunction();


const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register1': register1,
  '/register2': register2,
  '/register3': register3,
  '/register4': register4,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component());
