/* eslint-disable import/no-cycle */
// import { onNavigate } from '../main.js';

import {
  createPost,
  onGetPosts,
  logoutPet,
  deletePosts,
  editPosts,
  updatePosts,
  likeAdd,
  likeRemove,
} from '../authFirebase/authentication.js';
import { onNavigate } from '../main.js';
import { getUser } from '../authFirebase/firebaseExt.js';

export const homePetworld = () => {
  // const user = getUser();
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
          <img id="logoHome" src="./img/logo6.png" alt="logo">
          <ul class="homeBar2">  
            <li class="listNav2" >Mi perfil</li>
            <li class="listNav2" id="logoutIcon"><i class="fa-solid fa-right-from-bracket"></i>Cerrar Sesión</li>
          </ul>
        </nav>
      </aside>
     
      <div class="containerPetPost">
        <div id="nameUserPet"></div>
        <div class="containerPost" >
          <div class="photoProfile">
            <img id="iconUser"class="iconProfile" >          
          </div>
          <form class="textPost">
            <p class="nameUserPet"></p>
            <input type="text" id="titlePost" placeholder="Coloca el título o tema de tu post">
            <textarea id="descriptionPost" type="text" rows="5" placeholder="Escribe aquí tus posts"></textarea>
            <div class="divButtonPost" id="divButtonPost">
              <button  class="buttonPost" id="buttonPost">Publicar</button>
            </div>
          </form>
        </div>
        <section id="showPost">
        </section>
      
      </div>
    
    </section>
    <section class="modalContainer">
      <div class="modalContent">
        <p id="exitModal">X</p>
        <h2>¿Está seguro que desea Cerrar Sesión?</h2>
        <div class="modalButtons">
          <button class="btnCancel" id="btnCancel">CANCELAR</button>
          <button class="btnOk" id="btnLogout">CERRAR SESIÓN</button>
        </div>
      </div>
    </section>
    <section class="modalContainer_eliminar">
      <div class="modalContent">
        <h2>¿Está seguro que desea eliminar este registro?</h2>
        <div class="modalButtons">
          <button class="btnCancel" id="btnCancelDelete">CANCELAR</button>
          <button class="btnOk" id="btnDelete">ELIMINAR</button>
        </div>
      </div>
  </section>
    `;
  homeElement.innerHTML = homeDiv;

  const modalContainer = homeElement.querySelector('.modalContainer');
  const modalContainerDelete = homeElement.querySelector('.modalContainer_eliminar');
  const modalCancelDelete = homeElement.querySelector('#btnCancelDelete');
  modalCancelDelete.addEventListener('click', () => {
    modalContainerDelete.classList.remove('mostrar');
    modalContainerDelete.classList.add('ocultar');
  });
  modalContainerDelete.classList.add('ocultar');
  const logoutIcon = homeElement.querySelector('#logoutIcon');
  const btnCancel = homeElement.querySelector('#btnCancel');
  const btnLogout = homeElement.querySelector('#btnLogout');
  const exitModal = homeElement.querySelector('#exitModal');
  modalContainer.classList.add('ocultar');
  logoutIcon.addEventListener('click', () => {
    modalContainer.classList.remove('ocultar');
    modalContainer.classList.add('mostrar');
  });
  btnCancel.addEventListener('click', () => {
    modalContainer.classList.remove('mostrar');
    modalContainer.classList.add('ocultar');
  });

  exitModal.addEventListener('click', () => {
    modalContainer.classList.remove('mostrar');
    modalContainer.classList.add('ocultar');
  });
  // cerrar Sesión
  btnLogout.addEventListener('click', () => {
    logoutPet();
    onNavigate('/');
  });

  // funcion para los posts
  const textPost = homeElement.querySelector('.textPost');
  const showPost = homeElement.querySelector('#showPost');
  let editStatus = false;
  let id = '';
  // window.addEventListener('DOMContentLoaded', async () => {
  onGetPosts((querySnapshot) => {
    let sectionPosts = '';
    querySnapshot.forEach(async (doc) => {
      const dataPost = doc.data();
      sectionPosts += `
        <div class="blockShowPost">
          <div class="textShowPost">
            <div class="petUserName" data-id="$"></div>
            <h3 id="titleShowPost">${dataPost.title}</h3>
            <p id="descripShowPost">${dataPost.description}</p>
          </div>
          <div id="iconShowPost">
            <p>${dataPost.likesNum}</p>
            <i class="fa-brands fa-gratipay imgShowPost iconLike" datalike="$" data-id="${doc.id}" id="likePost"></i>
            <i class="fa-regular fa-pen-to-square imgShowPost iconEdit" data-id="${doc.id}"></i>
            <i class="fa-regular fa-trash-can imgShowPost iconDelete" data-id="${doc.id}"></i>
          </div>
        </div>
        `;
    });
    showPost.innerHTML = sectionPosts;
    // función borrar
    const iconDelete = showPost.querySelectorAll('.iconDelete');
    iconDelete.forEach((delet) => {
      delet.addEventListener('click', ({ target: { dataset } }) => {
        const modalContainerConfirm = homeElement.querySelector('.modalContainer_eliminar');
        modalContainerConfirm.classList.add('mostrar');
        const modalDelete = homeElement.querySelector('#btnDelete');
        modalDelete.addEventListener('click', () => {
          deletePosts(dataset.id);
          modalContainerConfirm.classList.remove('mostrar');
          modalContainerConfirm.classList.add('ocultar');
        });
      });
    });

    // Funcion editar
    const iconEdit = showPost.querySelectorAll('.iconEdit');
    iconEdit.forEach((edit) => {
      edit.addEventListener('click', async (e) => {
        const editTextPost = await editPosts(e.target.dataset.id);
        const dataPost = editTextPost.data();
        textPost.titlePost.value = dataPost.title;
        textPost.descriptionPost.value = dataPost.description;
        editStatus = true;
        id = editTextPost.id;
        textPost.buttonPost.innerText = 'ACTUALIZAR';
      });
    });
    // función de likes
    const iconLike = showPost.querySelectorAll('.iconLike');
    iconLike.forEach((likes) => {
      likes.addEventListener('click', async (e) => {
        const user = getUser().uid;
        const doc = await editPosts(e.target.dataset.id);
        id = doc.id;
        const dataPost = doc.data();
        const numberLikes = dataPost.likesNum;

        if (dataPost.likesPost.includes(user)) {
          await updatePosts(id, {
            likesPost: likeRemove(user),
            likesNum: numberLikes - 1,
          });
        } else {
          await updatePosts(id, {
            likesPost: likeAdd(user),
            likesNum: numberLikes + 1,
          });
        }
      });
    });
  });

  textPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const titlePost = textPost.titlePost;
    const descriptionPost = textPost.descriptionPost;
    if (!editStatus) {
      createPost(titlePost.value, descriptionPost.value);
    } else {
      updatePosts(id, {
        title: titlePost.value,
        description: descriptionPost.value,
      });
      editStatus = false;
      id = '';
      textPost.buttonPost.innerText = 'PUBLICAR';
    }
    textPost.reset();
  });
  return homeElement;
};
