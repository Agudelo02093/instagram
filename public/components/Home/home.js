var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "./components/index.js";
import data from "./data.js";
import { getPosts } from "../../services/db.js";
import { AttributeStorie } from "./components/Stories/Stories.js";
import { AttributePost } from "./components/Post/Post.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.stories = [];
        this.posts = [];
        this.attachShadow({ mode: 'open' });
        this.storiesContainer = this.ownerDocument.createElement("div");
        this.storiesContainer.classList.add('stories-container');
        data.forEach((data) => {
            const cardStories = this.ownerDocument.createElement("my-storie");
            cardStories.setAttribute(AttributeStorie.imgprofile, data.imgprofile);
            cardStories.setAttribute(AttributeStorie.name, data.name);
            this.stories.push(cardStories);
        });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield getPosts();
                posts === null || posts === void 0 ? void 0 : posts.forEach((data) => {
                    const cardPost = this.ownerDocument.createElement("my-post");
                    cardPost.setAttribute(AttributePost.imgprofile, data.imgprofile);
                    cardPost.setAttribute(AttributePost.name, data.name);
                    cardPost.setAttribute(AttributePost.gps, data.gps);
                    cardPost.setAttribute(AttributePost.content, data.imgprofile);
                    cardPost.setAttribute(AttributePost.views, data.views);
                    cardPost.setAttribute(AttributePost.description, data.description);
                    this.posts.push(cardPost);
                });
                this.render();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    render() {
        var _a;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="./components/Home/components/Stories/Stories.css">`;
            this.stories.forEach((storie) => {
                this.storiesContainer.appendChild(storie);
            });
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.storiesContainer);
            this.posts.forEach((post) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(post);
            });
        }
    }
}
customElements.define("app-home", Home);
