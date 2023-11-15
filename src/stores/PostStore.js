import { defineStore } from "pinia";

export const usePostStore = defineStore('postStore', {
    state: () => ({
        posts: [],
        page: 1,
        addingPost: ''
    }),
    getters: {

    },
    actions: {
        async getPosts() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${this.page}`);
            const data = await res.json();
            
            this.posts = await data.map((item) => {
                item.isLike = false
                return item
            })
        },
        addPost() {
            const post = {
                id: Date.now(),
                title: 'newPost',
                body: this.addingPost
            }
            this.posts.push(post)
            this.addingPost = ''
        },
        setLikes(post) {
            const index = this.posts.findIndex(i => i.id === post.id);

            if (index !== -1) {
                this.posts[index].isLike = !this.posts[index].isLike;
            }
        },
        deletePost(post){
            this.posts = this.posts.filter(i => i.id !== post.id)
        }
    }
})