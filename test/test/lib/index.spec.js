import { MessageData } from '../../../src/lib/index.js';

describe('MessageData', () => {
  it('Debería ser una función', () => {
    expect(typeof MessageData).toBe('function');
  });
});
it('Debería devolver un mensaje', () => {
  const textMessage = document.querySelector('#showMessageTag');
  const messageResult = MessageData(textMessage, 'Aquí va el mensaje');
  textMessage.innerText = 'Aquí va el mensaje';
  expect(messageResult).toBe('Aquí va el mensaje');
});
