class Nav extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click",()=>{
            const event: CustomEvent = new CustomEvent("create-post",{
                composed: true
            });

            this.dispatchEvent(event);
        });
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Home/components/Nav/Nav.css">

            <section class="container">
                <section class="logo">
                    <img src="./images/Instagram_logo.svg.png" alt="logo app">
                </section>
                <section>
                    <input type="text" placeholder="Buscar">
                </section>
                <section class="icons">
                    <img src="./images/icons8-casa.svg" alt="home">
                    <img src="./images/icons8-facebook-messenger.svg" alt="message">
                    <button type="submit">
                        <img src="./images/more.svg" alt="add">
                    </button>
                    <img src="./images/compass-outline.svg" alt="explore">
                    <img src="./images/heart-outline.svg" alt="favorites">
                    <img src="./images/photo1.jpg" class="profile-nav" alt="profile">
                </section>
            </section>
            `
        }
    }

}

customElements.define("my-nav", Nav);
export default Nav;