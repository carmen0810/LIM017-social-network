import { login } from './components/login.js';

import { register, register1, register2, register3, register4 } from './components/register.js';

import { homePetworld } from './components/home.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': login,
  '/register': register,
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
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]();
};
onNavigate('/');
