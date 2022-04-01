// Este es el punto de entrada de tu aplicacion

import { home } from './components/home.js';
import { register, register2 } from './components/register.js';

//myFunction();

const rootDiv = document.getElementById('root');

const routes = {
    '/': home,
    '/register': register,
    '/register2': register2,
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
