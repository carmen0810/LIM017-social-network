// import { loginFirebase } from '../../src/authFirebase/authentication';
// import { login } from '../../src/components/login.js';
// import { signInWithEmailAndPassword } from '../../src/authFirebase/firebaseExt.js';

// jest.mock('../../src/authFirebase/firebaseExt.js');

// describe('login', () => {
//   beforeEach(() => signInWithEmailAndPassword.mockClear());
//   it('debería ser una función', () => {
//     expect(typeof login).toBe('function');
//   });
// });

// import { onNavigate } from '../../src/main.js';

// jest.mock('../../src/authFirebase/firebaseExt.js');

// describe('Función onNavigate', () => {
//   it('La función onNavigate debe cargar vista Login', () => {
//     document.body.innerHTML = '<div id="root"></div>';
//     onNavigate('/resetPassword');
//     const divRoot = document.querySelector('#answerForgot');
//     expect(divRoot.textContent).toBe('Iniciar sesion');
//   });
// });
