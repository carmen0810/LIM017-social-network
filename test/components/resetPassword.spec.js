<<<<<<< HEAD
// import { resetPasswordPet } from '../../src/authFirebase/authentication';

import { resetPasswordPet } from '../../src/components/resetPasswords';
=======
import { resetPasswordPet } from '../../src/authFirebase/authentication';
//import { resetPasswordPet } from '../../src/components/resetPassword.js';
>>>>>>> e6d856ee93fe094ff6b187f921e0372ac08bfdb9
import { sendPasswordResetEmail } from '../../src/authFirebase/firebaseExt';

jest.mock('../../src/authFirebase/firebaseExt.js');

describe('resetPasswordPet', () => {
  it('debería ser una función', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const result = resetPasswordPet();
    const emailResetPass = result.querySelector('#emailResetPass');
    console.log(emailResetPass);
    // const buttonReset = result.querySelector('#btnResetPass');
    // buttonReset.dispatchEvent(new Event('click'));
    // const password = {};
    // console.log (sendPasswordResetEmail.mock);
    // expect(typeof resetPasswordPet).toBe('function');
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> e6d856ee93fe094ff6b187f921e0372ac08bfdb9
