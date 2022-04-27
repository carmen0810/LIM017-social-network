import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

import {
  collection, addDoc, getFirestore, onSnapshot, getDocs, deleteDoc, doc, updateDoc, arrayUnion, arrayRemove
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getFirestore,
  sendPasswordResetEmail,
  initializeApp,
  signOut,
  onSnapshot,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
};
