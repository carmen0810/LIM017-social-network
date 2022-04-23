//import { resetPasswordPet } from '../../src/authFirebase/authentication';
import { resetPasswordPet } from '../../src/components/resetPassword.js';
import { sendPasswordResetEmail } from '../../src/authFirebase/__mocks__/firebaseExt.js';
// import { resetPassword } from '../../src/components/resetPassword';

jest.mock('../../src/authFirebase/firebaseExt.js');

// describe('resetPasswordPet', () => {
//   it('debería ser una función', () => {
//     // document.body.innerHTML = '<div id="root"></div>';
   
      
//     //  const emailResetPass = document.querySelector('#emailResetPass');
//         // console.log (emailResetPass)
//         console.log ('holaaa')
//         // emailResetPass.innerHTML = 'correo@ejemplo.com';
//         // return emailResetPass;
    
//     });
  // resetPasswordPet(emailResetPass);
// });

// const result = resetPasswordPet();
//  const emailResetPass = result.querySelector('#emailResetPass');
//  console.log(emailResetPass);
// const buttonReset = result.querySelector('#btnResetPass');
// buttonReset.dispatchEvent(new Event('click'));
// const password = {};
// console.log (sendPasswordResetEmail.mock);
// expect(typeof resetPasswordPet).toBe('function');

// prueba 5
describe('Restablecer contraseña', () => {
  it('debería ser una función', () => {
    expect(typeof resetPasswordPet).toBe('function');
  });
});

// describe('', () => {
//   it('Muestra un mesnaje de error', () => {
//     const signUpInWithEmailAndPassword = jest.fn();
//     signUpInWithEmailAndPassword.mockRejectedValue({ error: 'password/mismatch' });
//   });
// });