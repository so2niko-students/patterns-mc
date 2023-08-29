import ClearView from "./view.js";
import Publisher from "../publisher.js";

export default class ClearController{
    constructor(){
        this.view = new ClearView(this.onClear);
        this.pub = new Publisher();
    }

    onClear = () => {
        this.pub.notify('COMMAND-Clear');
    }
}