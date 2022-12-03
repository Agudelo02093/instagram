export var AttributeStorie;
(function (AttributeStorie) {
    AttributeStorie["name"] = "name";
    AttributeStorie["imgprofile"] = "imgprofile";
})(AttributeStorie || (AttributeStorie = {}));
export class Storie extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const atrib = {
            name: null,
            imgprofile: null,
        };
        return Object.keys(atrib);
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        if (this[propName] === newValue)
            return;
        this[propName] = newValue;
        this.mount();
    }
    mount() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/Home/components/Stories/Stories.css">
        <section class="container">
            <section>
                <section class="gradiant">
                <img src="${this.imgprofile}" alt="img storie">
                </section>
                <p>${this.name}</p>
            </section>
        </section>
        `;
    }
}
customElements.define('my-storie', Storie);
export default Storie;
