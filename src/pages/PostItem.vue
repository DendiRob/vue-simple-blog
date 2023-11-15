<template>
    <div class="post">
        <div class="post__info">
            <div class="post__title">{{ post.title }}</div><br />
            <div class="post__body">{{ post.body }}</div>
        </div>
        <div class="post__btns">
            <button
            @click="postStore.deletePost(post)"
             class="post__btns_item post__btns_item-del"
             >Удалить</button>
            <button 
            class="post__btns_item post__btns_item-like"
            @click="postStore.setLikes(post)"
            :style="{
                backgroundColor: post.isLike? 'green': '#fff'
            }"
            >Like</button>
        </div>
    </div>
</template>
<script setup>
import { usePostStore } from '../stores/PostStore';

const postStore = usePostStore()

    const props = defineProps({
        post: {
            type: Object,
            required: true,
            default: () => {}
        }
    })
</script>
<style lang="scss" scoped>
    .post {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #E8E8EA;
        border-radius: 8px;
        margin-bottom: 20px;
        padding: 10px;
        &__btns {
            &_item{
                width: 70px;
                background: none;
                border-radius: 5px;
                height: 30px;
                border: 1px solid red;
                margin-right: 10px;
                cursor: pointer;
                &-like {
                    border:  1px solid green;
                }
            }
        }
        &__title {
            cursor: pointer;
            display: inline-block;
            margin-bottom: 20px;
            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>