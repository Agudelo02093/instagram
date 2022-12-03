import { addUser } from "../../services/db.js";
export class Register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            addUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("register-success", {});
                    console.log(this);
                    this.dispatchEvent(event);
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <section class="Register">
        <link href="./components/Register/Register.css" rel="stylesheet">
            <img class="Logo" src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png">
            <h3>Registrate</h3>
            <app-form></app-form>
            <h3>o</h3>
            <h5 class="Blue">Log in with Facebook</h5>
        </section>
        <section>
            <p class="GreySmall">© 2022 Instagram from Meta</p>
        </section>
        `;
    }
}
customElements.define("app-register", Register);
