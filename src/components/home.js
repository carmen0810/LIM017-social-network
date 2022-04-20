import { onNavigate } from '../main.js';

export const homePetworld = () => {
  const homeElement = document.createElement('section');
  homeElement.setAttribute('class', 'homePage');
  const homeDiv = `
    <header class="homeHeader">
      <input id="menuHamb" type="checkbox">
      <label for="menuHamb">
        <img class="iconHamb" src="./img/iconsPost/menuHamburguesa.png">
      </label>
      <input id="searchIcon" type="search" placeholder="Buscar"> 
    </header>
    <section class="posts">
      <aside>      
        <nav class="homeNav">
          <img id="logoHome" src="./img/imgLogin/logo.png" alt="logo">
          <ul class="homeBar1" >
            <li class="listNav"><img class="imgIcon" src="./img/icons/home.png"></li>
            <li class="listNav"><img class="imgIcon" src="./img/icons/cuidados.png">Cuidados</li>
            <li class="listNav"><img class="imgIcon" src="./img/icons/alimentación.png">Alimentación</li>
            <li class="listNav"><img class="imgIcon" src="./img/icons/salud.png">Salud</li>
            <li class="listNav"><img class="imgIcon" src="./img/icons/adopción.png">Adopción</li>
            <li class="listNav"><img class="imgIcon" src="./img/icons/venta.png">Venta</li>
          </ul>
          <ul class="homeBar2">  
            <li class="listNav2">Mi perfil</li>
            <li class="listNav2"><img class="imgIcon" src="./img/icons/cerrarSesión.png">Cerrar Sesión</li>
          </ul>
        </nav>
      </aside>
      <div class="containerPost">
        <div class="photoProfile">
          <img id="iconUser"class="iconProfile">
        </div>
        <div class="textPost">
          <input>
        </div>
      </div>
    </section>
    `;
  homeElement.innerHTML = homeDiv;
  return homeElement;
};
