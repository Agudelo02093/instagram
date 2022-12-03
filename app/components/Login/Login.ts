import { queryUser } from "../../services/db.js";

export class Login extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;

            queryUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("login-success",{
                        composed: true
                    })
                    this.dispatchEvent(event);
                }
            })
        })
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link href="./components/Login/Login.css" rel="stylesheet">
        <section class="Login">
            <img class="Logo" src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png">
            <app-form></app-form>
            <h3>O</h3>
            <h5 class="Blue">Log in with Facebook</h5>
            <p id="forget">¿Haz olvidado tu contraseña?</p>
        </section>
        <section>
            <p class="credits">© 2022 Instagram from Meta</p>
        </section>
        `
    }
}

customElements.define("app-login",Login);