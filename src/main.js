// Este es el punto de entrada de tu aplicacion

import { home } from './components/home.js';

//myFunction();

const rootDiv = document.getElementById('root');

const routes = {
    '/': home,
};

export const onNavigate = (pathname)=>{
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
    );
rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component());



