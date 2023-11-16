<template>
    <div class="postDetails">
        <div class="postDetails__id">{{ post.id }}</div>
        <div class="postDetails__title">{{ post.title }}</div>        
        <div class="postDetails__body">{{ post.body }}</div>        
    </div>
</template>
<script setup>
import { usePostStore } from '../stores/PostStore';
import { useRoute } from 'vue-router';
import { ref } from 'vue';


    const route = useRoute();
    const postStore = usePostStore(); 

    const post = ref({});
    const postId = ref(route.params.postInfo);
    
    const fetchDetails = async(id) => {
        console.log(postId)
        post.value = await postStore.fetchDetails(id)
    }

    fetchDetails(postId.value)

</script>
<style lang="scss" scoped>
    
</style>