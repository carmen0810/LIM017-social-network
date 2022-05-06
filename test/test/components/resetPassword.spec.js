import { resetPassword } from '../../../src/components/resetPassword';
import { sendPasswordResetEmail } from '../../../src/authFirebase/firebaseExt';
import { onNavigate } from '../../../src/main.js';

jest.mock('../../../src/authFirebase/firebaseExt.js');

describe('ressetPassword', () => {
  it('debería ser una función', () => {
    resetPassword();
    expect(typeof resetPassword).toEqual('function');
  });
});

// describe('Función onNavigate', () => {
//   it('La función onNavigate debe cargar vista Login', () => {
//     document.body.innerHTML = '<div id="root"></div>';
//     onNavigate('/resetPassword');
//     const divRoot = document.querySelector('#answerForgot');
//     expect(divRoot.textContent).toBe('Iniciar sesion');
//   });
// });

describe('Restablecer contraseñas', () => {
  it('Envía mensaje de restablecer contraseña', () => {
    resetPassword();
    // const inputReset = document.querySelector('.emailResetPass');
    const buttonLogin = document.querySelector('#btnResetPass');
    buttonLogin.dispatchEvent(new Event('click'));
    expect(sendPasswordResetEmail.mock.calls[0]).toEqual([{}, 'Minsa1234']);
    // const ResetPasswordComponent = resetPassword();
    // expect(onNavigate('/resetPassword')).toEqual(ResetPasswordComponent);
  });
});
