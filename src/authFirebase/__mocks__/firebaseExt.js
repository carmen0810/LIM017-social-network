const getAuth = () => ({});
const sendPasswordResetEmail = jest.fn(() => Promise.resolve({}));
const initializeApp = () => ({});
const getFirestore = () => Promise.resolve({});
const onNavigate = (pathname) => Promise.resolve({});

export {
  onNavigate,
  getAuth,
  sendPasswordResetEmail,
  initializeApp,
  getFirestore,
};
