import { resetPasswordPet } from '../../src/authFirebase/authentication';
//import { sendPasswordResetEmail } from '../../src/authFirebase/firebaseExt';
jest.mock('../../src/authFirebase/firebaseExt.js');

describe('resetPasswordPet', () => {
  it('debería ser una función', () => {
    const password = {};
    console.log (sendPasswordResetEmail.mock);
    expect(typeof resetPasswordPet).toBe('function');
  });
});
