import { addPost } from "../../services/db.js";

export class  CreatePost extends HTMLElement{
    name = "";
    photo = "";
    desciption = "";

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click", async ()=>{
            
            if(this.name && this.photo && this.desciption) {
                const postData = {
                    name: this.name,
                    photo: this.photo,
                    description: this.desciption
                }
                try {
                    await addPost(postData);
                    alert("Post creado");

                    const event: CustomEvent = new CustomEvent("form-fullfilled",{composed: true});
                    this.dispatchEvent(event);
                } catch (error) {
                    console.error(error);
                    alert("Error add post");
                }
            } else {
                alert("Missing fields");
            }
        });

        const usernameInput = this.shadowRoot?.querySelector('#username');
        const imageInput = this.shadowRoot?.querySelector('#image');
        const commentInput = this.shadowRoot?.querySelector('#comment');
        
        usernameInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.name = value;
        });

        imageInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.photo = value;
        });

        commentInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.desciption = value;
        });
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/CreatePost/CreatePost.css">
        <article>
            <section>
                <div class="input">
                    <label for="name">Nombre</label><br>
                    <input class="input__field" type="text" placeholder="Username" id="username"/>
                </div>
            
                <div class="input">
                    <label for="photo">Imagen</label><br>
                    <input class="input__field" type="text" placeholder="Image" id="image"/>
                </div>

                <div class="input">
                    <label for="description">Descripción</label><br>
                    <input class="input__field" type="text" placeholder="Comment" id="comment"/>
                </div>
                
                <button type="submit">Subir Imagen</button>
            </section>
            
        </article>
        `
    }
}

customElements.define("app-create-post", CreatePost);