export enum AttributeStorie {
    "name" = "name",
    "imgprofile" = "imgprofile"  
}

export class Storie extends HTMLElement {
    name?: string;
    imgprofile?: any;

    static get observedAttributes(){
        const atrib: Record<AttributeStorie,null> = {
            name: null,
            imgprofile: null,
        };
        return Object.keys(atrib);
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    attributeChangedCallback(propName: AttributeStorie, oldValue: string, newValue: string) {
        if(this[propName]=== newValue) return;
        this[propName] = newValue;
        this.mount();
    }

    mount(): void {
        this.render();
    }

    render(): void {
        if (!this.shadowRoot) return;
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
        `
    }
}

customElements.define('my-storie', Storie);
export default Storie;