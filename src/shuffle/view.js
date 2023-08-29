export default class ShuffleView{
    btnShuffle = document.querySelector('.btn-shuffle');
    
    constructor(cback){
        this.btnShuffle.addEventListener('click', cback);    
    }
}