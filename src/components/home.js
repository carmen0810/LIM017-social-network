import { onNavigate } from '../main.js';

export const homePetworld = () => {
  const homeElement = document.createElement('div');
  homeElement.setAttribute('class', 'homePage1');

  const homeDiv = `
       <h2>PETWORLD</h2>
       <img  id="iconUser"class="iconProfile" >
       <p id="nameUser"></p>
       <img id="iconGoogle"class="iconProfile">
       <p>${localStorage.getItem('SESSION_NAME_ID')}</p>
       <p id="nameGoogle"></p>`;
  homeElement.innerHTML = homeDiv;

  return homeElement;
};
