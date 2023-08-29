export default class ImagesModel{
    imagesURL = [];
    loadImages = (url) => {
        return fetch(url).
            then(r => r.json()).
            then(d => {
                this.imagesURL = d;
                return d;
            });
        }
}