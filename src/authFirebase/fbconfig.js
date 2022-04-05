import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBykqjBMN0TmG9EYdZ_8bEP-dsXLU8NiN4",
  authDomain: "petworld-d9893.firebaseapp.com",
  projectId: "petworld-d9893",
  storageBucket: "petworld-d9893.appspot.com",
  messagingSenderId: "568333305080",
  appId: "1:568333305080:web:07d1e21cd73ddbef3ba70d",
  measurementId: 'G-YC6Z27BTF4',
};

export const app = initializeApp(firebaseConfig);
