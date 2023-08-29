export default class Publisher{
    static #inst;
    constructor(){
        if(Publisher.#inst){
            return Publisher.#inst;
        }

        Publisher.#inst = this;
    }

    #subscribers = {};

    notify(event, data){
        if(!this.#subscribers[event]){
            this.#subscribers[event] = [];
        }

        this.#subscribers[event].forEach(f => f(data));
    }

    subscribe(event, cback){
        if(!this.#subscribers[event]){
            this.#subscribers[event] = [];
        }

        this.#subscribers[event].push(cback);
    }

    unsubscribe(){

    }
}