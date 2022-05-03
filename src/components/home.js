/* eslint-disable import/no-cycle */
// import { onNavigate } from '../main.js';

import {
  createPost, onShowPosts, logoutPet, deletePosts, editPosts, updatePosts, addLikesPost, getUserID,
} from '../authFirebase/authentication.js';
import { onNavigate } from '../main.js';

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
          <img id="logoHome" src="./img/logo6.png" alt="logo">
          <ul class="homeBar1" >
            <li class="listNav"><i class="fa-solid fa-house imgIcon"></i></li>
            <li class="listNav"><i class="fa-solid fa-paw imgIcon"></i> Cuidados</li>
            <li class="listNav"><i class="fa-solid fa-bowl-hot"></i> Alimentación</li>
            <li class="listNav"><i class="fa-solid fa-stethoscope imgIcon"></i>Salud</li>
            <li class="listNav"><i class="fa-solid fa-heart imgIcon"></i>Adopción</li>
            <li class="listNav"><i class="fa-solid fa-cart-shopping imgIcon"></i>Venta</li>
          </ul>
          <ul class="homeBar2">  
            <li class="listNav2" >Mi perfil</li>
            <li class="listNav2" id="logoutIcon"><i class="fa-solid fa-right-from-bracket"></i>Cerrar Sesión</li>
          </ul>
        </nav>
      </aside>
     
      <div class="containerPetPost">
        <div class="containerPost" >
          <div class="photoProfile">
            <img id="iconUser"class="iconProfile" >          
          </div>
          <div class="textPost">
            <textarea id="editPost" type="text" rows="5" placeholder="Escribe aquí tus posts"></textarea>
            <div class="selectIcons">
              <div id="iconPost">           
                <i class="fa-regular fa-pen-to-square imgPost"></i>
                <i class="fa-solid fa-paperclip imgPost"></i>
                <i class="fa-regular fa-trash-can imgPost "></i>
              </div>
              <select name="select" id="selectCategory">
                <option value="categoría" disabled>Selecciona categoría</option>
                <option value="care" id="care">Cuidados</option>
                <option value="nutrition" id="nutrition">Alimentación</option>
                <option value="health" id="health">Salud</option>
                <option value="adoption" id="adoption">Adopción</option>
                <option value="sales" id="sales">Ventas</option>
              </select> 
              <p></p>
            </div>
            <div class="divButtonPost" id="divButtonPost">
              <button  class="buttonPost" id="buttonPost">Publicar</button>
            </div>
            <div class="divButtonPost">
              <button id="buttonActualizar" class="ocultar buttonPost">Actualizar</button>
            </div>
            <input type="hidden" id="idposthidden" value="">
          </div>
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
      <p id="exitModal">X</p>
      <h2>¿Está seguro que desea eliminar este registro?</h2>
      <div class="modalButtons">
        <button class="btnCancel" id="btnCancelDelete">CANCELAR</button>
        <button class="btnOk" id="btnDelete">ELIMINAR</button>
      </div>
    </div>
  </section>
    `;
  homeElement.innerHTML = homeDiv;

  // Menú hamburguesa
  const iconHamb = homeElement.querySelector('.iconHamb');
  const navBar = homeElement.querySelector('.homeNav');
  const checkMenu = homeElement.querySelector('#checkMenu');

  iconHamb.addEventListener('click', () => {
    if (iconHamb === false) {
      navBar.classList.add('ocultar');
    } else {
      navBar.classList.remove('ocultar');
      navBar.classList.add('mostrar');
    }
  });
  // // const toggleMenu = () => {
  // // iconHamb.addEventListener('click', () => {
  // if (checkMenu === false) {
  //   iconHamb.addEventListener('click', () => {
  //     navBar.style.display = 'none';
  //   });
  // } else {
  //   iconHamb.addEventListener('click', () => {
  //     navBar.style.display = 'block';
  //     // navBar.classList.toggle('hide');
  //   });
  // }
  // iconHamb.addEventListener('click', toggleMenu);

  // evento cerrar Sesión y evento eliminar post
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
  btnLogout.addEventListener('click', () => {
    setTimeout(logoutPet(), 300);
    onNavigate('/');
  });

  // funcion para los posts

  // const containerPost = homeElement.querySelector('.containerPost');
  const showPost = homeElement.querySelector('#showPost');

  //let editStatus = false;

  onShowPosts((querySnapshot) => {
    let sectionPosts = '';
    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      let ArrayLike = postData.like;
      let ArrayLikeData = 0;
      if (ArrayLike === undefined || ArrayLike === 'undefined') {
        ArrayLike = 0;
      } else {
        ArrayLike = postData.like.length;
        ArrayLikeData = postData.like;
      }
      sectionPosts += `
      <div class="textShowPost">
        <p id="showText">${postData.description}</p>
        <div id="iconShowPost">
              <p>${ArrayLike}</p>
              <i class="fa-brands fa-gratipay imgShowPost likePost" data-like="${ArrayLikeData}" data-id="${doc.id}" id="likePost"></i>
              <i class="fa-regular fa-pen-to-square imgShowPost btn-edit" data-id="${doc.id}"></i>
              <i class="fa-regular fa-trash-can imgShowPost btn-delete" data-id="${doc.id}"></i>
              </div>
      </div>
      `;
    });
    showPost.innerHTML = sectionPosts;
    // LISTADO DE LOS POSTS CREADOS , ELIMINA Y EDITA
    const btnsDelete = showPost.querySelectorAll('.btn-delete');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', () => {
        const modalContainerConfirm = homeElement.querySelector('.modalContainer_eliminar');
        modalContainerConfirm.classList.add('mostrar');
        const modalDelete = homeElement.querySelector('#btnDelete');
        modalDelete.addEventListener('click', () => {
          deletePosts(btn.getAttribute('data-id'));
          modalContainerConfirm.classList.remove('mostrar');
          modalContainerConfirm.classList.add('ocultar');
        });
      });
    });
    const btnsEdit = showPost.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btnedit) => {
      btnedit.addEventListener('click', async () => {
        const idpost = btnedit.getAttribute('data-id');
        const doc = await editPosts(idpost);
        const edit = doc.data();
        document.querySelector('#editPost').value = edit.description;
        document.querySelector('#idposthidden').value = idpost;
        document.querySelector('#buttonPost').classList.add('ocultar');
        document.querySelector('#buttonPost').classList.remove('mostrar');
        document.querySelector('#buttonActualizar').classList.add('mostrar');
        document.querySelector('#buttonActualizar').classList.remove('ocultar');
      });
    });
    const UpdatePost = homeElement.querySelector('#buttonActualizar');
    UpdatePost.addEventListener('click', () => {
      const valueUpdateTextAreaPost = document.querySelector('#editPost').value;
      console.log('update lista');
      console.log(valueUpdateTextAreaPost);
      updatePosts(document.querySelector('#idposthidden').value, valueUpdateTextAreaPost);
      document.querySelector('#buttonPost').classList.add('mostrar');
      document.querySelector('#buttonPost').classList.remove('ocultar');
      document.querySelector('#buttonActualizar').classList.add('ocultar');
      document.querySelector('#buttonActualizar').classList.remove('mostrar');
      setTimeout(() => { document.querySelector('#editPost').value = ''; }, 0);
    });
    const likePostUpdate = showPost.querySelectorAll('.likePost');
    const userId = getUserID();
    likePostUpdate.forEach((btnlike) => {
      btnlike.addEventListener('click', () => {
        const idpost = btnlike.getAttribute('data-id');
        let AllLikes = btnlike.getAttribute('data-like');
        if (AllLikes === 0 || AllLikes === '0' || AllLikes === '') { AllLikes = []; } else { AllLikes = btnlike.getAttribute('data-like').split(','); }
        const existUser = AllLikes.indexOf(userId);
        //  si es -1 significa que no esta, por lo tanto le agregare al usuario nuevo
        if (existUser === -1) {
          //  si no existe el usuario en los likes
          AllLikes.push(userId);
          addLikesPost(idpost, AllLikes);
        } else {
          AllLikes.splice(existUser, 1);
          //  si ya existe el usuario en los likes
          addLikesPost(idpost, AllLikes);
        }
      });
    });
  });
  //  CREA , ELIMINA, EDITA POSTS
  homeElement.querySelector('#buttonPost').addEventListener('click', () => {
    //e.preventDefault();
    const description = homeElement.querySelector('#editPost').value;
    createPost(description);
    homeElement.querySelector('#editPost').value = '';
    onShowPosts((querySnapshot) => {
      let sectionPosts = '';
      querySnapshot.forEach((doc) => {
        const postData = doc.data();
        let ArrayLike = postData.like;
        let ArrayLikeData = 0;
        if (ArrayLike === undefined || ArrayLike === 'undefined') {
          ArrayLike = 0;
        } else {
          ArrayLike = postData.like.length;
          ArrayLikeData = postData.like;
        }
        sectionPosts += `
        <div class="textShowPost">
        <p id="showText">${postData.description}</p>
        <div id="iconShowPost">
              <p>${ArrayLike}</p>
              <i class="fa-brands fa-gratipay imgShowPost likePost" data-like="${ArrayLikeData}" data-id="${doc.id}" id="likePost"></i>
              <i class="fa-regular fa-pen-to-square imgShowPost btn-edit" data-id="${doc.id}"></i>
              <i class="fa-regular fa-trash-can imgShowPost btn-delete" data-id="${doc.id}"></i>
              </div>
      </div>
      `;
      });
      showPost.innerHTML = sectionPosts;
      const btnsDelete = showPost.querySelectorAll('.btn-delete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', () => {
          const modalContainerConfirm = homeElement.querySelector('.modalContainer_eliminar');
          modalContainerConfirm.classList.add('mostrar');
          const modalDelete = homeElement.querySelector('#btnDelete');
          modalDelete.addEventListener('click', () => {
            deletePosts(btn.getAttribute('data-id'));
            modalContainerConfirm.classList.remove('mostrar');
            modalContainerConfirm.classList.add('ocultar');
          });
        });
      });
      const btnsEdit = showPost.querySelectorAll('.btn-edit');
      btnsEdit.forEach((btnedit) => {
        btnedit.addEventListener('click', async () => {
          const idpost = btnedit.getAttribute('data-id');
          const doc = await editPosts(idpost);
          const edit = doc.data();
          document.querySelector('#editPost').value = edit.description;
          document.querySelector('#idposthidden').value = idpost;
          document.querySelector('#buttonPost').classList.add('ocultar');
          document.querySelector('#buttonPost').classList.remove('mostrar');
          document.querySelector('#buttonActualizar').classList.add('mostrar');
          document.querySelector('#buttonActualizar').classList.remove('ocultar');
        });
      });
      const UpdatePost2 = homeElement.querySelector('#buttonActualizar');
      UpdatePost2.addEventListener('click', () => {
        const valueUpdateTextAreaPost2 = document.querySelector('#editPost').value;
        console.log('update');
        console.log(valueUpdateTextAreaPost2);
        updatePosts(document.querySelector('#idposthidden').value, valueUpdateTextAreaPost2);
        document.querySelector('#buttonPost').classList.add('mostrar');
        document.querySelector('#buttonPost').classList.remove('ocultar');
        document.querySelector('#buttonActualizar').classList.add('ocultar');
        document.querySelector('#buttonActualizar').classList.remove('mostrar');
        document.querySelector('#editPost').value = '';
      });
      const likePostUpdate = showPost.querySelectorAll('.likePost');
      const userId = getUserID();
      likePostUpdate.forEach((btnlike) => {
        btnlike.addEventListener('click', () => {
          const idpost = btnlike.getAttribute('data-id');
          let AllLikes = btnlike.getAttribute('data-like');
          if (AllLikes === 0 || AllLikes === '0' || AllLikes === '') { AllLikes = []; } else { AllLikes = btnlike.getAttribute('data-like').split(','); }
          const existUser = AllLikes.indexOf(userId);
          //  si es -1 significa que no esta, por lo tanto le agregare al usuario nuevo
          if (existUser === -1) {
            //  si no existe el usuario en los likes
            AllLikes.push(userId);
            addLikesPost(idpost, AllLikes);
          } else {
            AllLikes.splice(existUser, 1);
            //  si ya existe el usuario en los likes
            addLikesPost(idpost, AllLikes);
          }
        });
      });
    });
  });
  return homeElement;
};
