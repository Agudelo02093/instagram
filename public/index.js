import "./components/index.js";
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["register"] = 1] = "register";
    Screens[Screens["home"] = 2] = "home";
    Screens[Screens["createPost"] = 3] = "createPost";
})(Screens || (Screens = {}));
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.screen = Screens.register;
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
        this.setEventListeners();
    }
    setEventListeners() {
        var _a, _b, _c, _d;
        const GoSignUp = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-register");
        GoSignUp === null || GoSignUp === void 0 ? void 0 : GoSignUp.addEventListener("register-success", () => {
            this.screen = Screens.login;
            this.render();
            this.setEventListeners();
        });
        const login = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("app-login");
        login === null || login === void 0 ? void 0 : login.addEventListener("login-success", () => {
            this.screen = Screens.home;
            this.render();
            this.setEventListeners();
        });
        const createPost = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("app-create-post");
        createPost === null || createPost === void 0 ? void 0 : createPost.addEventListener('form-fullfilled', () => {
            console.log('ESTA FUNCIONANDO');
            this.screen = Screens.home;
            this.render();
            this.setEventListeners();
        });
        const myNav = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector("my-nav");
        myNav === null || myNav === void 0 ? void 0 : myNav.addEventListener('create-post', () => {
            this.screen = Screens.createPost;
            this.render();
            this.setEventListeners();
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = `
                    <link href="./components/Home/home.css" rel="stylesheet">
                    <my-nav></my-nav>
                    <section class="containers">
                        <app-home></app-home>
                        <my-suggest class="suggest"></my-suggest>
                    </section>
                    `;
                break;
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>";
                break;
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>";
                break;
            case Screens.createPost:
                this.shadowRoot.innerHTML = "<app-create-post></app-create-post>";
                break;
            default:
                break;
        }
    }
}
customElements.define("app-container", AppContainer);
