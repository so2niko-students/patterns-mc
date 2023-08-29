export default class ImagesView{
    imagesContainer = document.querySelector('.images');
    inpCount = document.querySelector('.inp-count');
    btnStart = document.querySelector('.btn-start');

    constructor(controllerCback){
        this.btnStart.addEventListener('click', controllerCback);
    }
    get count(){
        const v = parseInt(this.inpCount.value);
        return isNaN(v) ? 1 : v;
    }

    renderImages = (d) => {
        const images = d.map(url => `<img src="${ url }" />`);
        this.imagesContainer.innerHTML = images.join('');
    }

    clearImages = () => {
        this.imagesContainer.innerHTML = '';
    }
}