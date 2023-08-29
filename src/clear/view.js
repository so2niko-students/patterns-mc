export default class ClearView{
    btnClear = document.querySelector('.btn-clear');
    
    constructor(cback){
        this.btnClear.addEventListener('click', cback); 
    }
}