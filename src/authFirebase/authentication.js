/* eslint-disable import/no-cycle */
import { app } from './fbconfig.js';
import { onNavigate } from '../main.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  collection,
  addDoc,
  getFirestore,
  sendPasswordResetEmail,
} from './firebaseExt.js';

const dbfirestore = getFirestore(app);

let user = '';

// Registro nuevo usuario Petworld
export const registerFirebase = (name, lastName, email, password) => {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user.uid;
      addDoc(collection(dbfirestore, 'users'), {
        nameUser: name,
        lastNameUser: lastName,
        uid: user,
      });
      onNavigate('/');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      switch (errorMessage) {
        case 'Firebase: Error (auth/email-already-in-use).':
          alert('email ya registrado');
          break;
        // case 'Firebase: Error (auth/internal-error).':
        //   alert('ingresar contraseña');
        //   break;
        case 'Firebase: Error (auth/invalid-email).':
          alert('email invalido');
          break;
        default:
          break;
      }
    });
};

// Ingreso a Petworld con correo y contraseña
export const loginFirebase = (email, password) => {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert(`Bienvenid@${userCredential.user.email}`);
      onNavigate('/homePetworld');
    })
    .catch((error) => {
      const errorMessage = error.message;
      switch (errorMessage) {
        case 'Firebase: Error (auth/invalid-email).':
          alert('email invalido');
          break;
        case 'Firebase: Error (auth/user-not-found).':
          alert('usuario no registrado');
          break;
        // case 'Firebase: Error (auth/invalid-password-hash).':
        //   alert('contraseña incorrecta');
        //   break;
        default:
          break;
      }
    });
};

// Ingreso a Petworld con Gmail
export const loginGmail = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const authWithGmail = signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const userGmail = result.user;
      // eslint-disable-next-line no-underscore-dangle
      onNavigate('/homePetworld');
      // eslint-disable-next-line no-unused-expressions
      document.getElementById('iconUser').setAttribute('src', userGmail.photoURL);
      // document.getElementById('nameGoogle').innerText = `hola, ${userGmail.displayName}`;
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
  return authWithGmail;
};
// Ingreso a Petworld con Facebook
export const loginFacebook = () => {
  const auth = getAuth(app);
  const provider = new FacebookAuthProvider();
  const authWithFacebook = signInWithPopup(auth, provider)
    .then((result) => {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const nameProfile = result.user;
      onNavigate('/homePetworld');
      // eslint-disable-next-line no-underscore-dangle
      const NodeUser = JSON.parse(result._tokenResponse.rawUserInfo);
      document.getElementById('iconUser').setAttribute('src', NodeUser.picture.data.url);
      document.getElementById('nameUser').innerText = `hola, ${nameProfile.displayName}`;
      // localStorage.setItem('SESSION_USER_ID', namePr ofile.uid);
      // localStorage.setItem('SESSION_NAME_ID', nameProfile.displayName);
    // ...
    }).catch((error) => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
    });
  return authWithFacebook;
};

// recuperar contraseña
export const resetPasswordPet = (email) => {
  const auth = getAuth(app);
  return sendPasswordResetEmail(auth, email)
    .then((userCredential) => {
      user = userCredential.user;

    // Password reset email sent!
    // ..
    })
    .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // ..
    });
};

// Escribiendo Posts
export const createPost = (description) => {
  addDoc(collection(dbfirestore, 'posts'), { description });
};
