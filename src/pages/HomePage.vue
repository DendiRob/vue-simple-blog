<template>
    <div class="homePage">
        <img src="../resources/header/banner.png" alt="banner" class="homePage__banner">
        <div class="homePage__posts_title">Posts</div>
        <input v-model="addingPost" type="text" class="homePage__posts_input">
        <button class="homePage__posts_addBtn" @click="postStore.addPost">Add post</button>
        <div class="homePage__posts">
            <Postitem v-for="(post) in postStore.posts" :key="post.id" :post="post" />
        </div>
    </div>

</template>
<script setup>
import { usePostStore } from '../stores/PostStore';
import Postitem from './PostItem.vue';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const {addingPost} = storeToRefs(usePostStore());// связываем инпут и стор

const postStore = usePostStore();

onMounted(() => {
    postStore.getPosts();
})

</script>
<style lang="scss" scoped>
    .homePage {
        padding-bottom: 100px;
        width: 100%;
        &__banner {
            width: 100%;
        }
        &__posts {
            margin-top: 10px;
            &_title {
                color:#181A2A;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                margin-top: 20px;
            }
            &_input {
                width: 100%;
                height: 50px;
                margin-top: 15px;
                border: 1px solid teal;
                border-radius: 10px;
                outline: none;
            }
            &_addBtn {
                width: 100px;
                height: 50px;
                background-color: teal;
                border: none;
                border-radius: 5px;
                margin-top: 5px;
                display: block;
                margin-left: auto;
                margin-right: 0;
                color: #fff;
                text-transform: uppercase;
                cursor: pointer;
            }
        }
    }
</style>