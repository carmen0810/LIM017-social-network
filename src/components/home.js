export const homePetworld = () => {
  const homeElement = document.createElement('div');
  homeElement.setAttribute('class', 'homePage1');
  const homeDiv = `
       <h2>AQUÍ VAN LOS POSTS</h2>`;
  homeElement.innerHTML = homeDiv;
  return homeElement;
};
