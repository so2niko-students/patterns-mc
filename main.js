/*
Юрий Корчевский 6:49 PM
Видалити картинку з підбору

Валентин Власюк 6:49 PM
можливо якусь пагінацію

Denis Polkovnik 7:01 PM
Як додатковий функціонал можна додати 
[] - кнопку очистити картинки 
[] - кнопку перемішати картинки :)

masha.i.volk 7:03 PM
Обробка помилок?
( наприклад помилковий url )

Валентин Власюк 7:05 PM
можливо краще видаляти конкретну картинку)

*/

// const inpCount = document.querySelector('.inp-count');
// const imagesContainer = document.querySelector('.images');
// const data = {
//     url : []
// };

import ClearController from "./src/clear/controller.js";
import ImagesController from "./src/images/controller.js";
import ShuffleController from "./src/shuffle/controller.js";

const images = new ImagesController();
const clear = new ClearController();
const shuffle = new ShuffleController();

// const rand2 = () => {
//     const voc = {
//         0 : -1,
//         1 : 0,
//     };
//     return voc[~~(Math.random() * 2)];
// }

// const getURL = () => {
//     const count = parseInt(inpCount.value);
//     const value = isNaN(count) ? 1 : count;
//     return `http://shibe.online/api/shibes?count=${value}&urls=true`;
// }

// const renderImages = (d) => {
//     const images = d.map(url => `<img src="${ url }" />`);
//     imagesContainer.innerHTML = images.join('');
// }

// const clearImages = () => imagesContainer.innerHTML = '';

// const loadImages = (url) => fetch(url).then(r => r.json());

// const controller = () => {
//     const url = getURL();
//     loadImages(url).then((d) => {
//         data.url = d;   
//         renderImages(d);
//     });
// }

// const shuffleImages = () => {
//     const shuffledImages = [...data.url];
//     shuffledImages.sort(rand2);
//     renderImages(shuffledImages);
// }

// document.querySelector('.btn-clear').addEventListener('click', clearImages);

// document.querySelector('.btn-shuffle').addEventListener('click', shuffleImages);

//https://refactoring.guru/uk