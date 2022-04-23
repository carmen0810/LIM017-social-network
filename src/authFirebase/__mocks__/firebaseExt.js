const getAuth = () => ({});
const sendPasswordResetEmail = jest.fn(() => Promise.resolve({ Object }));
const initializeApp = () => ({});
const getFirestore = () => Promise.resolve({});

export {
  getAuth,
  sendPasswordResetEmail,
  initializeApp,
  getFirestore,
};
