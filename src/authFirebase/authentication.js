/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { app } from './fbconfig.js';
import { onNavigate } from '../main.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  updateProfile,
  collection,
  doc,
  addDoc,
  // getDocs,
  updateDoc,
  deleteDoc,
  // onAuthStateChanged,
  getFirestore,
  getUser,
  // serverTimestamp,
  sendPasswordResetEmail,
  signOut,
  onSnapshot,
  arrayUnion,
  arrayRemove,
  getDoc,
  // setDoc,
} from './firebaseExt.js';

export const dbfirestore = getFirestore(app);

let user = '';
const auth = getAuth();

// Registro nuevo usuario Petworld
export const registerFirebase = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// Ingreso a Petworld con correo y contraseña
export const loginFirebase = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Ingreso a Petworld con Gmail
export const loginGmail = () => {
  const provider = new GoogleAuthProvider();
  const authWithGmail = signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // The signed-in user info.
      const userGmail = result.user;
      user = result.user.uid;

      // eslint-disable-next-line no-underscore-dangle
      onNavigate('/homePetworld');
      // eslint-disable-next-line no-unused-expressions
      document.getElementById('iconUser').setAttribute('src', userGmail.photoURL);
      // document.getElementById('nameGoogle').innerText = `hola, ${userGmail.displayName}`;
      // ...
    });
  return authWithGmail;
};

// Enviar correo de verificación
export const sendConfirmEmail = () => sendEmailVerification(auth.currentUser);

// recuperar contraseña
export const resetPasswordPet = (email) => sendPasswordResetEmail(auth, email);
// actualizar perfil
export const updateUser = (fullName) => updateProfile(auth.currentUser, {
  displayName: fullName,
  // nameUser: name.uid,
  // lasNameUser: lastName.uid,
});

// Funcionespara crear posts
export const createPost = async (title, description) => {
  await addDoc(collection(dbfirestore, 'posts'), {
    nameUser: getUser().displayName,
    title,
    description,
    uid: getUser().uid,
    likesPost: [],
    likesNum: 0,
  });
};

// export const getPosts = () => getDocs(collection(dbfirestore, 'posts'));

export const onGetPosts = (callback) => onSnapshot(collection(dbfirestore, 'posts'), callback);
// funcion para eliminar post
export const deletePosts = (id) => deleteDoc(doc(dbfirestore, 'posts', id));
// función para editar un post existente
export const editPosts = (id) => getDoc(doc(dbfirestore, 'posts', id));
// Función para actualizar posts
export const updatePosts = (id, newFields) => updateDoc(doc(dbfirestore, 'posts', id), newFields);

export const likeAdd = (data) => arrayUnion(data);
export const likeRemove = (data) => arrayRemove(data);

// cerrar Sesión
export const logoutPet = () => signOut(auth);
