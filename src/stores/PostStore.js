import { defineStore } from "pinia";

export const usePostStore = defineStore('postStore', {
    state: () => ({
        posts: [],
        page: 1
    }),
    getters: {

    },
    actions: {
        async getPosts() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${this.page}`);
            const data = await res.json();
            
            this.posts = data
        }
    }
})