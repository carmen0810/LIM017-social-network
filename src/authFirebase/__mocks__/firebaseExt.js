/* eslint-disable max-len */
const getAuth = () => ({});
const sendPasswordResetEmail = jest.fn(() => Promise.resolve({}));
const initializeApp = () => ({});
const getFirestore = () => Promise.resolve({});
const onNavigate = () => Promise.resolve({});

// export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve());

const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({ user: { email, password } }));

export {
  onNavigate,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  initializeApp,
  getFirestore,
};
