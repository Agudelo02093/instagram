var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
//Al profesor le salen los mismos errores
const firebaseConfig = {
    apiKey: "AIzaSyDpPVFm6uf5GOjyHz8oeu-lezbqr8Y8H5E",
    authDomain: "algoritmos-test.firebaseapp.com",
    projectId: "algoritmos-test",
    storageBucket: "algoritmos-test.appspot.com",
    messagingSenderId: "851727049073",
    appId: "1:851727049073:web:9b0f6fc4a86026b04b56d0",
    measurementId: "G-GHRWVPNY08"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersRef = collection(db, "usuarios");
export const queryUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = query(usersRef, where("email", "==", email), where("password", "==", password));
        const querySnapshot = yield getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });
        return !querySnapshot.empty;
    }
    catch (error) {
        return false;
    }
});
export const addUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (email != "" && password != "") {
            const docRef = yield addDoc(collection(db, "usuarios"), {
                email,
                password
            });
            return true;
        }
    }
    catch (error) {
        return false;
    }
});
//agregar el post
export const addPost = ({ name, photo, description }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield addDoc(collection(db, "posts"), {
            imgprofile: photo,
            name: name,
            gps: "Universidad Icesi",
            photo: photo,
            description: description,
            views: 0,
            comments: 0,
            likes: "864 Me gusta",
            coments: "No comments yet",
            date: 'Just now',
        });
        return true;
    }
    catch (error) {
        return false;
    }
});
export const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = [];
        const querySnapshot = yield getDocs(collection(db, 'posts'));
        querySnapshot.forEach((post) => {
            posts.push(post.data());
            console.log(post.data());
        });
        return posts;
    }
    catch (error) {
        console.error(error);
        alert('Ocurrió un error');
    }
});
