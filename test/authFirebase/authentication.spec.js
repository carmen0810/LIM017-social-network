import { resetPasswordPet } from '../../src/authFirebase/authentication';

jest.mock('../../src/authFirebase/firebaseExt.js');

describe('resetPasswordPet', () => {
  it('debería ser una función', () => {
    expect(typeof resetPasswordPet).toBe('function');
  });
});
