import ImagesModel from "./model.js";
import ImagesView from "./view.js";
import Publisher from "../publisher.js";

export default class ImagesController{
    constructor(){
        this.view = new ImagesView(this.onStart);
        this.model = new ImagesModel();

        this.pub = new Publisher();
        this.pub.subscribe('COMMAND-Clear', this.onClear);
        this.pub.subscribe('COMMAND-Render-Images', this.onRenderImages);
    }

    onRenderImages = (d) => {
        this.view.renderImages(d);
    }

    onClear = () => {
        this.view.clearImages();
    }

    onStart = () => {
        const url = this.getURL();
        
        this.model.loadImages(url).then((d) => {
            this.pub.notify('COMMAND-update-data', d);
            this.view.renderImages(d);
        });
    }

    getURL(){
        const value = this.view.count;
        return `http://shibe.online/api/shibes?count=${value}&urls=true`;
    }
}