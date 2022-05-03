import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateProfile,
  sendPasswordResetEmail,
  // serverTimestamp,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

import {
  collection,
  addDoc,
  getFirestore,
  onSnapshot,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  arrayUnion,
  arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateProfile,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getFirestore,
  sendEmailVerification,
  sendPasswordResetEmail,
  initializeApp,
  signOut,
  onSnapshot,
  arrayUnion,
  arrayRemove,
  // serverTimestamp,
};

export const getUser = () => getAuth().currentUser;
