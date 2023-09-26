import AutoUrlapView from "./AutoUrlapView.js";

class Megjelenit {
    #lista;
    #urlap;
    constructor(szuloElem) {
        this.#lista = [];
        this.#urlap = new AutoUrlapView($(".ujadat"), [{type : "text", name : "tipus"}, {type : "text", name : "rendszam"}]);


        $(window).on("UjAuto", (event) => {
            let datas = event.detail;
            this.#lista.push(datas);
            console.log(this.#lista);
        });

    }



}

export default Megjelenit;