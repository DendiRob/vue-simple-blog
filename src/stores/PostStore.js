import { defineStore } from "pinia";

export const usePostStore = defineStore('postStore', {
    state: () => ({
        posts: [],
        page: 1,
        addingPost: '',
        sortLike: false
    }),
    getters: {
        sortBylike() {
            if(this.sortLike){
                const byLikes = this.posts.filter(post => post.isLike)
                return byLikes
            }else {
                return this.posts
            }
        }
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
        async fetchDetails(id) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await res.json();
            return data
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
        setSortLike(){
            this.sortLike = !this.sortLike
        },
        deletePost(post){
            this.posts = this.posts.filter(i => i.id !== post.id)
        }
    }
})