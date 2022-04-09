import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { collection, addDoc, getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import { app } from './fbconfig.js';

const auth = getAuth(app);
const dbfirestore = getFirestore(app);

let user = '';

export const registerFirebase = (email, password, birth, name, lastName) => {
  const registerPetworld = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user.uid;
      addDoc(collection(dbfirestore, 'users'), {
        nameUser: name,
        lastNameUser: lastName,
        dateBirth: birth,
        uid: user,
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      switch (errorMessage) {
        case 'Firebase: Error (auth/email-already-in-use).':
          alert('email ya registrado');
          break;
        case 'Firebase: Error (auth/internal-error).':
          alert('ingresar contraseña');
          break;
        case 'Firebase: Error (auth/invalid-email).':
          alert('email invalido');
          break;
        default:
          break;
      }
    });
  return registerPetworld;
};

export const loginFirebase = (email, password) => {
  const authLoginFirebase = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert(`Bienvenid@${userCredential.user.email}`);
    })
    .catch((error) => {
      const errorMessage = error.message;
      switch (errorMessage) {
        case 'Firebase: Error (auth/email-already-in-use).':
          alert('email ya registrado');
          break;
        case 'Firebase: Error (auth/internal-error).':
          alert('ingresar contraseña');
          break;
        case 'Firebase: Error (auth/invalid-email).':
          alert('email invalido');
          break;
        default:
          break;
      }
    });
  return authLoginFirebase;
};
