import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { collection, addDoc, getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import { app } from './fbconfig.js';
import { onNavigate } from '../main.js';

const dbfirestore = getFirestore(app);

let user = '';

// Registro nuevo usuario Petworld
export const registerFirebase = (email, password, birth, name, lastName) => {
  const auth = getAuth(app);
  const registerPetworld = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user.uid;
      addDoc(collection(dbfirestore, 'users'), {
        nameUser: name,
        lastNameUser: lastName,
        dateBirth: birth,
        uid: user,
      });
      onNavigate('/');
    })
    .catch((error) => {
      const errorMessage = error.message;
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
  return registerPetworld;
};

// Ingreso a Petworld con correo y contraseña
export const loginFirebase = (email, password) => {
  const auth = getAuth(app);
  const authLoginFirebase = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert(`Bienvenid@${userCredential.user.email}`);
    })
    .catch((error) => {
      const errorMessage = error.message;
      switch (errorMessage) {
        case 'Firebase: Error (auth/invalid-email).':
          alert('email invalido');
          break;
        default:
          break;
      }
    });
  return authLoginFirebase;
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
      document.getElementById('iconGoogle').setAttribute('src', userGmail.photoURL);
      document.getElementById('nameGoogle').innerText = `hola, ${userGmail.displayName}`;
    // ...
    }).catch((error) => {
    // // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    // // ...
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
    //   console.log(error);
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.email;
    //   // The AuthCredential type that was used.
    //   const credential = FacebookAuthProvider.credentialFromError(error);
    // // ...
    });
  return authWithFacebook;
};
