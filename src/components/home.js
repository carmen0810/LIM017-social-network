import { onNavigate } from '../main.js';

export const homePetworld = () => {
  const homeElement = document.createElement('section');
  homeElement.setAttribute('class', 'homePage');
  // const headerDiv = document.createElement('div');
  // headerDiv.setAttribute('class', 'homeHeader');
  // const iconBurger = document.createElement('img');
  // iconBurger.setAttribute('id', 'iconHamb');
  // const inputSearch = document.createElement('input');
  // inputSearch.setAttribute('id', 'searchIcon');
  // homeElement.appendChild(headerDiv);
  // headerDiv.appendChild(iconBurger);
  // headerDiv.appendChild(inputSearch);
  const homeDiv = `
  <header class="homeHeader">
    <img class="iconHamb" src="./img/iconsPost/menuHamburguesa.png">
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
  // homeElement.appendChild(headerDiv);
  homeElement.innerHTML = homeDiv;
  return homeElement;
};
// const hamburgerBtn = document.querySelector('.iconHamb');
// console.log(hamburgerBtn);
//   const navBar = document.querySelector('.homeNav');
//   hamburgerBtn.addEventListener('click', () => {
//   navBar.style.display = 'block';

// setTimeout(() => {
//   document.querySelector('.iconHamb').addEventListener('click', () => {
//     document.querySelector('.homeNav').style.display = 'block';
//   });
// }, 0);

// setTimeout(() => {
// const burger = document.querySelector('.iconHamb');
// console.log(burger);
// }, 0);

// const navMenu = document.querySelector('.homeNav');
// const toggleMenu = () => {
//   navMenu.classList.toggle('hidden');
// };

// burgerMenu.addEventListener('click', toggleMenu);
// const hamburgerBtn = document.querySelector('.iconHamb');
// const navBar = document.querySelector('.homeNav');
// const toggleMenu = () => {
//   navBar.classList.toggle('hidden-nav');
// };
// hamburgerBtn.addEventListener('click', toggleMenu);
