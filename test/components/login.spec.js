import { login } from '../../src/components/login.js';
import { signInWithEmailAndPassword } from '../../src/authFirebase/firebaseExt.js';
import { loginFirebase } from '../../src/authFirebase/authentication.js';

jest.mock('../../src/authFirebase/firebaseExt.js');
jest.mock('../../src/components/home.js');

describe('Testing function signInWithPopup of Firebase Auth', () => {
  beforeAll((done) => {
    document.body.id = 'root';
    document.body.innerHTML = '';
    document.body.append(login());
    done();
  });
});
