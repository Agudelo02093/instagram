class Suggest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Home/components/Suggest/Suggest.css">
            <section class="container">
                <section class="profile">
                    <section class="user">
                        <img src="./images/photo1.jpg" alt="profile">
                        <section class="username">
                            <h2>agudelo9914</h2>
                            <p>Ana Agudelo</p>
                        </section>
                    </section>
                    <p class="blue">Cambiar</p>
                </section>

                <section class="middle-line">
                    <h3>Sugerencias para ti</h3>
                    <p>Ver más</p>
                </section>

                <section class="user-profile">
                    <section class="content">
                        <section class="suggest-user">
                            <img src="./images/photo2.jpg" alt="profile">
                            <section class="suggest-username">
                                <h2>@tristejoker</h2>
                                <p>Nuevo en Instagram</p>
                            </section>
                            <p class="blue">Seguir</p>
                        </section>
                    </section>

                    <section class="content">
                        <section class="suggest-user">
                            <img src="./images/photo3.jpg" alt="profile">
                            <section class="suggest-username">
                                <h2>@elexterminadorfeliz</h2>
                                <p>Sugerido para ti</p>
                            </section>
                            <p class="blue">Seguir</p>
                        </section>        
                    </section>

                    <section class="content">
                        <section class="suggest-user">
                            <img src="./images/photo4.jpg" alt="profile">
                            <section class="suggest-username">
                                <h2>@elbuenoelfeoyyo</h2>
                                <p>laescenaguacari y 22 más siguen esta cuent...</p>
                            </section>
                            <p class="blue">Seguir</p>
                        </section>
                    </section>
                </section>
            </section>
            `;
        }
    }
}
customElements.define("my-suggest", Suggest);
export default Suggest;
