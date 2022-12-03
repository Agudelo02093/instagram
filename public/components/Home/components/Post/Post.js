export var AttributePost;
(function (AttributePost) {
    AttributePost["imgprofile"] = "imgprofile";
    AttributePost["name"] = "name";
    AttributePost["gps"] = "gps";
    AttributePost["content"] = "content";
    AttributePost["views"] = "views";
    AttributePost["description"] = "description";
})(AttributePost || (AttributePost = {}));
class Post extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const atrib = {
            imgprofile: null,
            name: null,
            gps: null,
            content: null,
            views: null,
            description: null,
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
        <link rel="stylesheet" href="./components/Home/components/Post/Post.css">
        <section class="content">
            <section class="head">
                <section class="user">
                    <img src="${this.imgprofile}" alt="Imagen perfil">
                    <section class="username">
                        <h3 class="">${this.name}</h3>
                        <p>${this.gps}</p>
                    </section>
                </section>
                <img src="./images/ellipsis-horizontal.svg" alt="more" class="more">
            </section>

            <section class="post-content">
                <img src="${this.content}" alt="Image post">
            </section>

            <section class="icons">
                <section class="icons-first">
                    <img src="./images/heart-outline.svg" alt="like">
                    <img src="./images/chatbubble-outline.svg" alt="comments">
                    <img src="./images/paper-plane-outline.svg" alt="save">
                </section>
                <img src="./images/bookmark-outline.svg" alt="book">
            </section>

            <section class="description">
                <p class="views">${this.views} Me gusta</p>
                <p><strong>${this.name}</strong> ${this.description}</p>
                <p class="comments">View all 150 comments</p>
                <p class="day">3 DAYS AGO</p>
            </section>
        </section>
        `;
    }
}
customElements.define('my-post', Post);
export default Post;
