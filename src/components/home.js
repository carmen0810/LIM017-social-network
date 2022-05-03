/* eslint-disable import/no-cycle */
// import { onNavigate } from '../main.js';

// import { async } from 'regenerator-runtime';
import {
  createPost, getPosts, onGetPosts, logoutPet, deletePosts, editPosts, updatePosts,  likeAdd, likeRemove, /* , addLikesPost, getUserID, */
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
          <form class="textPost">
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
  // const checkMenu = homeElement.querySelector('#checkMenu');

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

  // Modal cerrar Sesión y evento eliminar post
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
    setTimeout(logoutPet(), 300);
    onNavigate('/');
  });

  // funcion para los posts
  const textPost = homeElement.querySelector('.textPost');
  const showPost = homeElement.querySelector('#showPost');
  let editStatus = false;
  let id = '';
  window.addEventListener('DOMContentLoaded', async () => {
    onGetPosts((querySnapshot) => {
      let sectionPosts = '';
      querySnapshot.forEach((doc) => {
        const dataPost = doc.data();
        sectionPosts += `
        <div class="blockShowPost">
          <div class="textShowPost">
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
      const iconDelete = showPost.querySelectorAll('.iconDelete');
      iconDelete.forEach((delet) => {
        delet.addEventListener('click', ({ target: { dataset } }) => {
          deletePosts(dataset.id);
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
      console.log('has linkeado');
    });
  });

  // const showPost = homeElement.querySelector('#showPost');
  //  CREA , ELIMINA, EDITA POSTS
  // homeElement.querySelector('#buttonPost').addEventListener('click', () => {
  //   const description = homeElement.querySelector('#editPost').value;
  //   createPost(description);
  //   homeElement.querySelector('#editPost').value = '';
  //   onShowPosts((querySnapshot) => {
  //     let sectionPosts = '';
  //     querySnapshot.forEach((doc) => {
  //       const postData = doc.data();
  //       let ArrayLike = postData.like;
  //       let ArrayLikeData = 0;
  //       if (ArrayLike === undefined || ArrayLike === 'undefined') {
  //         ArrayLike = 0;
  //       } else {
  //         ArrayLike = postData.like.length;
  //         ArrayLikeData = postData.like;
  //       }
  //       sectionPosts += `
  //     <div class="textShowPost">
  //     <p id="showText">${postData.description}</p>
  //     <div id="iconShowPost">
  //           <p>${ArrayLike}</p>
  //           <i class="fa-brands fa-gratipay imgShowPost likePost" data-like="${ArrayLikeData}" data-id="${doc.id}" id="likePost"></i>
  //           <i class="fa-regular fa-pen-to-square imgShowPost btn-edit" data-id="${doc.id}"></i>
  //           <i class="fa-regular fa-trash-can imgShowPost btn-delete" data-id="${doc.id}"></i>
  //           </div>
  //   </div>
  //   `;
  //     });
  //     showPost.innerHTML = sectionPosts;
  //     const userId = getUserID();
  //     const btnsDelete = showPost.querySelectorAll('.btn-delete');
  //     btnsDelete.forEach((btn) => {
  //       btn.addEventListener('click', () => {
  //         const modalContainerConfirm = homeElement.querySelector('.modalContainer_eliminar');
  //         modalContainerConfirm.classList.add('mostrar');
  //         const modalDelete = homeElement.querySelector('#btnDelete');
  //         modalDelete.addEventListener('click', () => {
  //           deletePosts(btn.getAttribute('data-id'));
  //           modalContainerConfirm.classList.remove('mostrar');
  //           modalContainerConfirm.classList.add('ocultar');
  //         });
  //       });
  //     });
  //     const btnsEdit = showPost.querySelectorAll('.btn-edit');
  //     btnsEdit.forEach((btnedit) => {
  //       btnedit.addEventListener('click', async () => {
  //         const idpost = btnedit.getAttribute('data-id');
  //         const doc = await editPosts(idpost);
  //         const edit = doc.data();
  //         document.querySelector('#editPost').value = edit.description;
  //         document.querySelector('#idposthidden').value = idpost;
  //         document.querySelector('#buttonPost').classList.add('ocultar');
  //         document.querySelector('#buttonPost').classList.remove('mostrar');
  //         document.querySelector('#buttonActualizar').classList.add('mostrar');
  //         document.querySelector('#buttonActualizar').classList.remove('ocultar');
  //       });
  //     });
  //     // const UpdatePost2 = homeElement.querySelector('#buttonActualizar');
  //     // UpdatePost2.addEventListener('click', () => {
  //     //   const valueUpdateTextAreaPost2 = document.querySelector('#editPost').value;
  //     //   console.log('update');
  //     //   console.log(valueUpdateTextAreaPost2);
  //     //   updatePosts(document.querySelector('#idposthidden').value, valueUpdateTextAreaPost2);
  //     //   document.querySelector('#buttonPost').classList.add('mostrar');
  //     //   document.querySelector('#buttonPost').classList.remove('ocultar');
  //     //   document.querySelector('#buttonActualizar').classList.add('ocultar');
  //     //   document.querySelector('#buttonActualizar').classList.remove('mostrar');
  //     //   document.querySelector('#editPost').value = '';
  //     // });
  //     const likePostUpdate = showPost.querySelectorAll('.likePost');
  //     // const userId = getUserID();
  //     likePostUpdate.forEach((btnlike) => {
  //       btnlike.addEventListener('click', () => {
  //         const idpost = btnlike.getAttribute('data-id');
  //         let AllLikes = btnlike.getAttribute('data-like');
  //         if (AllLikes === 0 || AllLikes === '0' || AllLikes === '') { AllLikes = []; } else { AllLikes = btnlike.getAttribute('data-like').split(','); }
  //         const existUser = AllLikes.indexOf(userId);
  //         //  si es -1 significa que no esta, por lo tanto le agregare al usuario nuevo
  //         if (existUser === -1) {
  //         //  si no existe el usuario en los likes
  //           AllLikes.push(userId);
  //           addLikesPost(idpost, AllLikes);
  //         } else {
  //           AllLikes.splice(existUser, 1);
  //           //  si ya existe el usuario en los likes
  //           addLikesPost(idpost, AllLikes);
  //         }
  //       });
  //     });
  //   });
  // });

  // // VER, ACTUALIZAR POST PUBLICADOS
  // // let editStatus = false;

  // onShowPosts((querySnapshot) => {
  //   let sectionPosts = '';
  //   querySnapshot.forEach((doc) => {
  //     const postData = doc.data();
  //     let ArrayLike = postData.like;
  //     let ArrayLikeData = 0;
  //     if (ArrayLike === undefined || ArrayLike === 'undefined') {
  //       ArrayLike = 0;
  //     } else {
  //       ArrayLike = postData.like.length;
  //       ArrayLikeData = postData.like;
  //     }
  //     sectionPosts += `
  //     <div class="textShowPost">
  //       <p id="showText">${postData.description}</p>
  //       <div id="iconShowPost">
  //             <p>${ArrayLike}</p>
  //             <i class="fa-brands fa-gratipay imgShowPost likePost" data-like="${ArrayLikeData}" data-id="${doc.id}" id="likePost"></i>
  //             <i class="fa-regular fa-pen-to-square imgShowPost btn-edit" data-id="${doc.id}"></i>
  //             <i class="fa-regular fa-trash-can imgShowPost btn-delete" data-id="${doc.id}"></i>
  //       </div>
  //     </div>
  //     `;
  //   });
  //   // const userId = getUserID();
  //   showPost.innerHTML = sectionPosts;
  //   const btnsDelete = showPost.querySelectorAll('.btn-delete');
  //   btnsDelete.forEach((btn) => {
  //     btn.addEventListener('click', () => {
  //       const modalContainerConfirm = homeElement.querySelector('.modalContainer_eliminar');
  //       modalContainerConfirm.classList.add('mostrar');
  //       const modalDelete = homeElement.querySelector('#btnDelete');
  //       modalDelete.addEventListener('click', () => {
  //         deletePosts(btn.getAttribute('data-id'));
  //         modalContainerConfirm.classList.remove('mostrar');
  //         modalContainerConfirm.classList.add('ocultar');
  //       });
  //     });
  //   });
  //   const btnsEdit = showPost.querySelectorAll('.btn-edit');
  //   btnsEdit.forEach((btnedit) => {
  //     btnedit.addEventListener('click', async () => {
  //       const idpost = btnedit.getAttribute('data-id');
  //       const doc = await editPosts(idpost);
  //       const edit = doc.data();
  //       document.querySelector('#editPost').value = edit.description;
  //       document.querySelector('#idposthidden').value = idpost;
  //       document.querySelector('#buttonPost').classList.add('ocultar');
  //       document.querySelector('#buttonPost').classList.remove('mostrar');
  //       document.querySelector('#buttonActualizar').classList.add('mostrar');
  //       document.querySelector('#buttonActualizar').classList.remove('ocultar');
  //     });
  //   });
  //   const UpdatePost = homeElement.querySelector('#buttonActualizar');
  //   UpdatePost.addEventListener('click', () => {
  //     const valueUpdateTextAreaPost = document.querySelector('#editPost').value;
  //     console.log('update lista');
  //     console.log(valueUpdateTextAreaPost);
  //     updatePosts(document.querySelector('#idposthidden').value, valueUpdateTextAreaPost);
  //     document.querySelector('#buttonPost').classList.add('mostrar');
  //     document.querySelector('#buttonPost').classList.remove('ocultar');
  //     document.querySelector('#buttonActualizar').classList.add('ocultar');
  //     document.querySelector('#buttonActualizar').classList.remove('mostrar');
  //     setTimeout(() => { document.querySelector('#editPost').value = ''; }, 0);
  //   });
  //   const likePostUpdate = showPost.querySelectorAll('.likePost');
  //   const userId = getUserID();
  //   likePostUpdate.forEach((btnlike) => {
  //     btnlike.addEventListener('click', () => {
  //       const idpost = btnlike.getAttribute('data-id');
  //       let AllLikes = btnlike.getAttribute('data-like');
  //       if (AllLikes === 0 || AllLikes === '0' || AllLikes === '') { AllLikes = []; } else { AllLikes = btnlike.getAttribute('data-like').split(','); }
  //       const existUser = AllLikes.indexOf(userId);
  //       //  si es -1 significa que no esta, por lo tanto le agregare al usuario nuevo
  //       if (existUser === -1) {
  //         //  si no existe el usuario en los likes
  //         AllLikes.push(userId);
  //         addLikesPost(idpost, AllLikes);
  //       } else {
  //         AllLikes.splice(existUser, 1);
  //         //  si ya existe el usuario en los likes
  //         addLikesPost(idpost, AllLikes);
  //       }
  //     });
  //   });
  // });

  return homeElement;
};
