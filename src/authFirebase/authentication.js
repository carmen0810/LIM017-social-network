import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
import { app } from './fbconfig.js';

const auth = getAuth(app);

export const loginFirebase = (email, password) => {
  const authLoginFirebase = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      alert("Bienvenid@ " + userCredential.user.email);
    })
    .catch((error) => {
      alert("cuenta no valida");
    });
  return authLoginFirebase;
};

export const registerFirebase = (email, password) => {
      //const messageSignUpError = document.querySelector('.messageSignUpError');
      //register();
  const registerBefit = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
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
    })
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

// mi funcion de logeo

// mi funcion de logeo con google
const provider = new GoogleAuthProvider();
const authe = getAuth(app);
signInWithPopup(authe, provider)
  .then((result) => {
    /* const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken; */
    const user = result.user;
    console.log(user);
    home();
  }).catch((/* error */) => {
    // const errorMessage = error.message;
  });

// mi funcion de registro con google

// fb

// cerrar sesion
