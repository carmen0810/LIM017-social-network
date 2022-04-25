import { createPost } from '../authFirebase/authentication.js';

export const homePetworld = () => {
  const homeElement = document.createElement('section');
  homeElement.setAttribute('class', 'homePage');
  const homeDiv = `
    <header class="homeHeader">
      <input id="menuHamb" type="checkbox">
      <label for="menuHamb">
        <img class="imgIconBuscar" src="./img/iconsPost/menuHamburguesa.png">
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
            <li class="listNav2" >Mi perfil</li>
            <li class="listNav2"><img class="imgIcon" src="./img/icons/cerrarSesión.png">Cerrar Sesión</li>
          </ul>
        </nav>
      </aside>
      <form class="containerPost">
        <div class="photoProfile">
          <img id="iconUser"class="iconProfile" >          
        </div>
        <div class="textPost">
          <textarea id="editPost" type="text" placeholder="Escribe aquí tus posts"></textarea>
          <div>
            <div id="iconPost">
              <img class="imgPost" src="./img/iconsPost/editar.png">
              <img class="imgPost" src="./img/iconsPost/adjuntar.png">
              <img class="imgPos" src="./img/iconsPost/boteBasura.png">
            </div>
            <select name="select">
              <option value="categoría" disabled>Selecciona categoría</option>
              <option value="cuidados">Cuidados</option>
              <option value="alimentación">Alimentación</option>
              <option value="salud">Salud</option>
              <option value="adopción">Adopción</option>
              <option value="ventas">Ventas</option>
            </select> 
            <p></p>
          </div>
          <div>
            <button id="buttonPost">Publicar</button>
          </div>
        </div>
      </form>
      <section id="showPost">
      </section>
    </section>`;
  homeElement.innerHTML = homeDiv;
  window.addEventListener('DOMContentLoaded', () => {

  });
  setTimeout(() => {
    const containerPost = document.querySelector('.containerPost');
    containerPost.addEventListener('submit', (e) => {
      e.preventDefault();
      const description = containerPost.textPost;
      createPost(description.value);
    // containerPost.reset();
    });
  }, 0);

  // const containerPost = document.querySelector('.containerPost');
  // containerPost.addEventListener('submit', (e) => {
  //   if (e.target && e.target.tagName === 'button') {
  //     e.target.classList('activo');
  //   }
  // });
  return homeElement;
};
