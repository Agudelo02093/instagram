import "./components/index.js";
import data from "./data.js";

import { getPosts } from "../../services/db.js";


import Storie, {AttributeStorie} from "./components/Stories/Stories.js";
import Post, {AttributePost} from "./components/Post/Post.js";

export class Home extends HTMLElement{
    stories: Storie[] = [];
    posts: Post[] = [];
    storiesContainer:any;

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.storiesContainer = this.ownerDocument.createElement("div");
        this.storiesContainer.classList.add('stories-container');

        data.forEach((data)=>{
            const cardStories = this.ownerDocument.createElement("my-storie") as Storie;
            cardStories.setAttribute(AttributeStorie.imgprofile, data.imgprofile);
            cardStories.setAttribute(AttributeStorie.name, data.name);
            this.stories.push(cardStories)
        });

    }

    async connectedCallback(){
        try {
            const posts = await getPosts();

            posts?.forEach((data)=>{
                const cardPost = this.ownerDocument.createElement("my-post") as Post;
                cardPost.setAttribute(AttributePost.imgprofile, data.imgprofile);
                cardPost.setAttribute(AttributePost.name, data.name);
                cardPost.setAttribute(AttributePost.gps, data.gps);
                cardPost.setAttribute(AttributePost.content, data.imgprofile);
                cardPost.setAttribute(AttributePost.views, data.views);
                cardPost.setAttribute(AttributePost.description, data.description);
                this.posts.push(cardPost)
            });

            this.render();
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="./components/Home/components/Stories/Stories.css">`;
            this.stories.forEach((storie)=>{
                this.storiesContainer.appendChild(storie);
            })
            this.shadowRoot?.appendChild(this.storiesContainer);

            this.posts.forEach((post)=>{
                this.shadowRoot?.appendChild(post);
            })
        }
    }
}

customElements.define("app-home",Home);