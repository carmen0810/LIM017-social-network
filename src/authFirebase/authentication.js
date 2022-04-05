import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { app } from './fbconfig.js';
import { FacebookAuthProvider } from "firebase/auth";

const auth = getAuth(app);

export const loginFirebase = (email, password) => {
  const authLoginFirebase = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      console.log('tu correo que logeaste es: ' + userCredential.user.email);
      console.log(userCredential);
    })
    .catch((error) => {
      console.log('error');
      console.log(error);
    });
  return authLoginFirebase;
};

const registerFirebase = (email, password) => {
  //const messageSignUpError = document.querySelector('.messageSignUpError');
  //register();
  const registerBefit = createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      // const user = userCredential.user;
      // // onNavigate('/');
      // registerToHome();
      // // const palabra = 'Tu cuenta a sido creado con éxito, con el email: ';
      // // const palabra2 = ' y la contraseña: ';
      // // messageSignUp.innerHTML = palabra + email + palabra2 + password + user;
      // // llamar a home
      // console.log(user);
      // // eslint-disable-next-line no-use-before-define
      // getDates();
      console.log("ok");
      console.log(userCredential);
    });
    .catch((error) => {
          //const errorCode = error.code;
          //console.log(errorCode);
          //const errorMessage = error.message;
          console.log("error");
          console.log(error);
          //messageSignUpError.innerHTML = errorMessage;
        });
      console.log(registerBefit);
      // eslint-disable-next-line no-use-before-define
      return registerBefit;
};

    //llamado a la funcion de registrar cuenta
    //registerFirebase("carmen@gmail.com", "1234567890");
    //loginFirebase("nina@gmail.com", '123123123');
    // const email = docuement.getElemtnybyid("");
    //if (email != "" && password != ""){ //si ambos estan con informacion
    //loginFirebase(email, password);
    //}else{
        //el campo email esta vacio || el campo passw
    //}
      
    

// //const auth = getAuth();

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
 
//   })

//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

//   console.log(userCredential);
// mi funcion de registro

//mi funcion de logeo

//mi funcion de logeo con google

//mi funcion de registro con google

//fb

//cerrar sesion

export function loginFacebook(){
  const provider = new FacebookAuthProvider();
  auth.languageCode = 'es';
  signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  const credential = FacebookAuthProvider.credentialFromResult(result);
  const accessToken = credential.accessToken;

  // ...
  })
  .catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = FacebookAuthProvider.credentialFromError(error);

  // ...
  });

}