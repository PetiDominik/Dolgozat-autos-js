//Typus rendszám
class Urlap {
    #adatok;
    #elem;
    constructor(szuloElem, inputok) {
        this.#adatok = {};
        this.#htmlBeagyaz(szuloElem, inputok);
    }

    #htmlBeagyaz(szuloElem, inputok) {
        let txt = `<form>`
        inputok.forEach(input => {
            txt += `<input type="${input.type}" name="${input.name}" placeholder="${this.#upperFirst(input.name)}">`
        });                      
                
        txt += `<button type="submit">Felvitel</button></form>`;
        szuloElem.append(txt);

        this.#elem = szuloElem.children("form");

        this.#elem.children("button").on("click", (event) => {
            event.preventDefault();
            
            this.#triggerUjAdatok();
        });
    }

    #getAdatok() {
        this.#adatok = {};
        let elemek = this.#elem.children();
        for (let index = 0; index < elemek.length; index++) {
            const element = elemek.eq(index);
            if (element.attr("type") != "submit") {
                this.#adatok[element.attr("name")] = element.val();
            }
        }
    }

    #triggerUjAdatok() {

        this.#getAdatok();

        window.dispatchEvent(new CustomEvent("UjAuto", {detail: {...this.#adatok}}));
    }

    #upperFirst(text) {
        return text[0].toUpperCase() + text.slice(1)
    }
}

export default Urlap;