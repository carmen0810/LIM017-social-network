/* eslint-disable import/no-cycle */
// import { onNavigate } from '../main.js';
import { createPost, showPosts, onShowPosts } from '../authFirebase/authentication.js';

export const homePetworld = () => {
  const homeElement = document.createElement('section');
  homeElement.setAttribute('class', 'homePage');
  const homeDiv = `
    <header class="homeHeader">  
      <input id="checkMenu" type="checkbox">
        <label for="checkMenu">  
          <img class="iconHamb" src="./img/iconsPost/menuHamburguesa.png">
        <label>
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
          <div class="selectIcons">
            <div id="iconPost">
              <img class="imgPost" src="./img/iconsPost/editar.png">
              <img class="imgPost" src="./img/iconsPost/adjuntar.png">
              <img class="imgPost" src="./img/iconsPost/boteBasura.png">
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
            <button type="submit" id="buttonPost">Publicar</button>
          </div>
        </div>
      </form>
      <section id="showPost">
      </section>
    </section>`;
  homeElement.innerHTML = homeDiv;

  // Menú hamburguesa
  const iconHamb = homeElement.querySelector('.iconHamb');
  const navBar = homeElement.querySelector('.homeNav');
  const checkMenu = homeElement.querySelector('#checkMenu');
  // const toggleMenu = () => {
  // iconHamb.addEventListener('click', () => {
  if (checkMenu === false) {
    iconHamb.addEventListener('click', () => {
      navBar.style.display = 'none';
    });
  } else {
    iconHamb.addEventListener('click', () => {
      navBar.style.display = 'block';
    // navBar.classList.toggle('hide');
    });
  }
  // iconHamb.addEventListener('click', toggleMenu);

  // funcion para los posts
  const containerPost = homeElement.querySelector('.containerPost');
  const showPost = homeElement.querySelector('#showPost');

  window.addEventListener('DOMContentLoaded', async () => {
    // const querySnapshot = await showPosts();
    onShowPosts((querySnapshot) => {
      let sectionPosts = '';
      querySnapshot.forEach((doc) => {
        const postData = doc.data();
        sectionPosts += `
      <div>
        <p>${postData.description}</p>
      </div>
      `;
      });
      showPost.innerHTML = sectionPosts;
    });
  });
  containerPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = containerPost.editPost;
    createPost(description.value);
    containerPost.reset();
  });

  return homeElement;
};
