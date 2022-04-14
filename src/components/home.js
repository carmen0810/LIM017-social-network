import { onNavigate } from '../main.js';

export const homePetworld = () => {
  const homeElement = document.createElement('section');
  homeElement.setAttribute('class', 'homePage');
  const homeDiv = `
    <header class="homeHeader">
      <div id="headerImg">
      <img id="logo" src="./img/imgLogin/logo.png" alt="logo">
      </div>
      <nav class="homeNav">
        <ul class="homeBar1" >
          <li class="listNav"><img class="imgIcon" src="./img/icons/home.png"></li>
          <li class="listNav"><img class="imgIcon" src="./img/icons/cuidados.png">Cuidados</li>
          <li class="listNav"><img class="imgIcon" src="./img/icons/alimentación.png">Alimentación</li>
          <li class="listNav"><img class="imgIcon" src="./img/icons/salud.png">Salud</li>
          <li class="listNav"><img class="imgIcon" src="./img/icons/adopción.png">Adopción</li>
          <li class="listNav"><img class="imgIcon" src="./img/icons/venta.png">Venta</li>
        </ul>
        <ul class="homeBar2">  
          <li class="listNav" >Mi perfil</li>
          <li class="listNav">Cerrar Sesión<img class="imgIcon" src="./img/icons/cerrarSesión.png"></li>
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
