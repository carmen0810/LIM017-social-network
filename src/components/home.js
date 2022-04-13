import { onNavigate } from '../main.js';

export const homePetworld = () => {
  const homeElement = document.createElement('section');
  homeElement.setAttribute('class', 'homePage');
  const homeDiv = `
    <header class="homeHeader">
      <div id="headerImg">
      <img id="logo" src="img/logo.png" alt="logo">
      </div>
      <nav class="homeNav">
        <ul class="homeBar" >
          <li>Home</li>
          <li>Cuidados</li>
          <li>Alimentación</li>
          <li>Salud</li>
          <li>Mi perfil</li>
          <li>Cerrar Sesión</li>
        </ul>
      </nav>
    </header>
    <div>
    <img  id="iconUser"class="iconProfile" >
    <p id="nameUser"></p>
    <img id="iconGoogle"class="iconProfile">
    <p id="nameGoogle"></p>
    </div>`;
  homeElement.innerHTML = homeDiv;
  return homeElement;
};
