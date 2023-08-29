import ShuffleView from "./view.js";
import Publisher from "../publisher.js";
import ShuffleModel from "./model.js";

export default class ShuffleController{
    constructor(){
        this.view = new ShuffleView(this.onShuffle);
        this.model = new ShuffleModel();
        this.pub = new Publisher();

        this.pub.subscribe('COMMAND-update-data', this.onUpdateData);
    }

    onUpdateData = (d) => {
        this.model.data = d;
    }

    onShuffle = () => {
        const shuffledData = this.model.shuffleData();
        
        this.pub.notify('COMMAND-Render-Images', shuffledData);
        
    }
}