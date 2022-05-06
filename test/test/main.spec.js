/* eslint-disable import/no-unresolved */

import { onNavigate, routes } from '../../src/main.js';

jest.mock('../../src/authFirebase/firebaseExt.js');

const testSection = document.createElement('section');
const testTemplate = () => {
  testSection.innerHTML = 'For running test';
  return testSection;
};

routes['/'] = testTemplate;

describe('Components', () => {
  it('onNavigate carga la ruta correcta', () => {
    onNavigate('/');
    expect(window.location.pathname).toEqual('/');
  });
  it('onNavigate carga la vista correcta', () => {
    onNavigate('/');
    expect(testSection.innerHTML).toEqual('For running test');
  });
});
