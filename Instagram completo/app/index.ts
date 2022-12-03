import "./components/index.js";
enum Screens {
    login,
    register,
    home,
    createPost
}

class AppContainer extends HTMLElement{
    screen: Screens = Screens.register;

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
        this.setEventListeners();
    }

    setEventListeners() {
        const GoSignUp = this.shadowRoot?.querySelector("app-register");
        GoSignUp?.addEventListener("register-success", ()=>{
            this.screen = Screens.login;
            this.render();
            this.setEventListeners();
        })

        const login = this.shadowRoot?.querySelector("app-login");
        login?.addEventListener("login-success", ()=>{
            this.screen = Screens.home;
            this.render();
            this.setEventListeners();
        })

        const createPost = this.shadowRoot?.querySelector("app-create-post");
        createPost?.addEventListener('form-fullfilled', () => {
            console.log('ESTA FUNCIONANDO')
            this.screen = Screens.home;
            this.render();
            this.setEventListeners();
        });

        const myNav = this.shadowRoot?.querySelector("my-nav");
        myNav?.addEventListener('create-post', () => {
            this.screen = Screens.createPost;
            this.render();
            this.setEventListeners();
        });
    }

    render(){
        if(!this.shadowRoot) return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = `
                    <link href="./components/Home/home.css" rel="stylesheet">
                    <my-nav></my-nav>
                    <section class="containers">
                        <app-home></app-home>
                        <my-suggest class="suggest"></my-suggest>
                    </section>
                    `
                break;
        
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>"
            break;
            
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>"
            break;

            case Screens.createPost: 
                this.shadowRoot.innerHTML = "<app-create-post></app-create-post>"
            break;


            default:
                break;
        }
    }
}

customElements.define("app-container",AppContainer);