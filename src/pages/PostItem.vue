<template>
    <div class="post">
        <div class="post__title">{{ post.title }}</div><br />
        <div class="post__body">{{ post.body }}</div>
    </div>
</template>
<script setup>
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
        cursor: pointer;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #E8E8EA;
        border-radius: 8px;
        margin-bottom: 20px;
        padding: 10px;
    }
</style>