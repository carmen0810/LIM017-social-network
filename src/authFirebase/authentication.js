import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { app } from './fbconfig.js';

const auth = getAuth(app);

export const loginFirebase = (email, password) => {
  const authLoginFirebase = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      alert('Bienvenid@' + userCredential.user.email);
    })
    .catch((error) => {
      alert('cuenta no válida');
    });
  return authLoginFirebase;
};

export const registerFirebase = (email, password) => {
  // const messageSignUpError = document.querySelector('.messageSignUpError');
//   // register();
  const registerPetworld = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      
    })
    .catch((error) => {
     
      const errorMessage = error.message;
      switch (errorMessage) {
        case 'Firebase: Error (auth/email-already-in-use).':
          alert('email ya registrado');
          break;
        case 'Firebase: Error (auth/internal-error).':
          alert('ingresar contraseña' );
          break;
        case 'Firebase: Error (auth/invalid-email).':
          alert('email invalido');
          break;
        default:
          break;
      }
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const 
    })
  
  //     .then((userCredential) => {
  //       // const user = userCredential.user;
  //       // onNavigate('/');
  //       // registerToHome();
  //       // const palabra = 'Tu cuenta a sido creado con éxito, con el email: ';
  //       // const palabra2 = ' y la contraseña: ';
  //       // messageSignUp.innerHTML = palabra + email + palabra2 + password + user;
  //       // llamar a home
  //       // console.log(user);
  //       // eslint-disable-next-line no-use-before-define
  //       // getDates();
  //       console.log('ok');
  //       console.log(userCredential);
  //     })
  //     .catch((error) => {
  //       // const errorCode = error.code;
  //       // console.log(errorCode);
  //       // const errorMessage = error.message;
  //       console.log('error');
  //       console.log(error);
  //       // messageSignUpError.innerHTML = errorMessage;
  //     });
  //   console.log(registerBefit);
  //   // eslint-disable-next-line no-use-before-define
  //   return registerBefit;
  // };
 
  // mi funcion de registro
  // mi funcion de logeo
  // mi funcion de logeo con google
  // mi funcion de registro con google
  // fb
  // cerrar sesion
  // function loginFacebook () => {
  // }
  //  authLoginFacebook() {
  //   const provider = new FacebookAuthProvider();
  //   const auth = getAuth();
  //   signInWithPopup(auth, provider);
  //   .then((result) => {
  //     // The signed-in user info.
  //     const user = result.user;
  //     const credential = FacebookAuthProvider.credentialFromResult(result);
  //     const accessToken = credential.accessToken;
  //   })
  //   .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.email;
  //       // The AuthCredential type that was used.
  //       const credential = FacebookAuthProvider.credentialFromError(error);
};
