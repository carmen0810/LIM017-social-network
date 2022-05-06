import { login, routes } from '../../../src/components/login.js';
import { signInWithEmailAndPassword, getAuth } from '../../../src/authFirebase/firebaseExt.js';
import { onNavigate } from '../../../src/main.js';
import { homePetworld } from '../../../src/components/home.js';

// import { loginFirebase } from '../../src/authFirebase/authentication.js';

jest.mock('../../../src/authFirebase/firebaseExt');

// describe('notificación de botón Login', () => {
//   it('Se debe mostrar un mensaje de error', () => {
//     const result = login();
//     const btn = result.querySelector('.btnLogin');
//     const inputEmail = result.querySelector('#emailInto');
//     const inputPassword = result.querySelector('#passwordInto');
//     inputEmail.value = 'email@gmail.com';
//     inputPassword.value = '123456';
//     btn.dispatchEvent(new Event('click'));
//     setTimeout(() => {
//       const messageNotification = result.querySelector('#showMessageTag');
//       expect(messageNotification.textContent).toEqual(
//         'Contraseña incorrecta',
//       );
//     }, 2000);
//   });
// });

// jest.mock('../../src/components/login.js');

// describe('login', () => {
//   beforeEach(() => signInWithEmailAndPassword.mockClear());
//   it('inicia sesión correctamente llamando al método signInWithEmailAndPassword', () => {
//     document.body.innerHTML = '<div id="root"></div>';
//     login();
//     document.getElementById('emailInto').value = 'example@gmail.com';
//     document.getElementById('passwordInto').value = 'Minsa1234';
//     const botonLogin = document.querySelector('.btnLogin');
//     botonLogin.dispatchEvent(new Event('click'));
//     // console.log(signInWithEmailAndPassword.mock.calls[0]);
//     expect(onNavigate).toBe('/homePetworld');
// expect(signInWithEmailAndPassword.mock.calls[0]).toEqual([{}, 'example@gmail.com', 'Minsa1234']);
//   });
// });
// expect(document.getElementById('passwordInto').value).toBe('Minsa1234');
// expect(signInWithEmailAndPassword.mock.calls[0]).toEqual([{}, 'example@gmail.com', 'Minsa1234']);

// describe('Función login', () => {
//   expect.assertions(1);
//   it('Debería pasar a la sgte vista si está correctamente logueado', () => {
//     const userTest = {
//       email: 'example@gmail.com',
//       password: 'Minsa1234',
//     };
//     login(userTest)
//       .then(() => {
//         expect(onNavigate()).toBe('/homePetworld');
//       });
//   });
//   it('Debería retornar mensaje de error cuando el usuario no pueda iniciar sesión', () => {
//     signInWithEmailAndPassword.mockRejectedValue('No ha iniciado sesión');
//     login('example2@gmail.com', 'password')
//       .catch((error) => {
//         expect(error).toBe('No ha iniciado sesión');
//       });
//   });
// });

// describe('login()', () => {
//   it('btnLogin se encuentran en login()', () => {
//     const resultLogin = login();
//     const btnLogin = resultLogin.querySelector('.btnLogin');

//     expect(btnLogin.innerHTML).toBe('INICIAR SESIÓN');
//   });
//   it('btnRegister se encuentran en login()', () => {
//     const resultLogin = login();
//     const btnRegister = resultLogin.querySelector('.btnCreateAccount');

//     expect(btnRegister.innerHTML).toBe('Crea tu cuenta');
//   });
//   it('btnGoogleLogin se encuentran en login()', () => {
//     const resultLogin = login();
//     const btnGoogleLogin = resultLogin.querySelector('#iconGmail');

//     expect(btnGoogleLogin.innerHTML).toBe('o ingresa con');
//   });
// });

const testSection = document.createElement('section');
const testTemplate = () => {
  const inputEmail = document.createElement('input');
  testSection.appendChild(inputEmail);
  const inputPassword = document.createElement('input');
  testSection.appendChild(inputPassword);
  return testSection;
};

routes['/homePetworld'] = testTemplate;

beforeEach(() => {
  document.body.innerHTML = "<div id='root'></div>";
  login();
});

describe('login', () => {
  it('Deberia iniciar sesión y pasar a los posts', () => {
    console.log('aaaaaaaaaaa');
    // expect(login('example@gmail.com', 'Minsa1234')).toEqual(signInWithEmailAndPassword());
  });
});
//   it('Debería loggear al usuario', () => signInWithEmailAndPassword()
//     .then(() => {
//       // expect(signInWithEmailAndPassword).toHaveBeenCalled();
//       expect(signInWithEmailAndPassword.mock.calls[0][0]).toEqual(getAuth());
//       expect(signInWithEmailAndPassword.mock.calls[0][1]).toEqual('example@gmail.com');
//       expect(signInWithEmailAndPassword.mock.calls[0][2]).toEqual('Minsa1234');
//       onNavigate();
//       expect(window.location.pathname).toEqual(testTemplate);
//     }));
//   it('should throw an error, when user is invalid', () => {
//     login('', '')
//       .catch(() => {
//         expect(login).toEqual('Debe completar los campos');
//       });
//   });
// });

describe('Components', () => {
  console.log('ddddddddd');
  it('onNavigate carga la ruta correcta', () => {
    console.log('aaaaaaaaaaa');
    onNavigate('/homePetworld');
    console.log('bbbbbbbb');
    expect(window.location.pathname).toEqual('/homePetworld');
    console.log('ccccccc');
  });
});

// describe('Rutas de navegación', () => {
//   it('Lleva a ResetPassword', () => {
//     const buttonLogin = document.querySelector('#forgotPass');
//     buttonLogin.dispatchEvent(new Event('click'));
//     const ResetPasswordComponent = resetPassword();
//     expect(onNavigate('/resetPassword')).toEqual(ResetPasswordComponent);
//   });
// });
