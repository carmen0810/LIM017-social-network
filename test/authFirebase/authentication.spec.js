import { resetPasswordPet } from '../../src/authFirebase/authentication';

jest.mock('../../src/authFirebase/firebaseExt.js');

describe('resetPasswordPet', () => {
  it('recupera contraseña', () => {
    expect(typeof resetPasswordPet).toBe('function');
  });
});
