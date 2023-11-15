<script setup>
import Header from './components/Header.vue';
</script>

<template>
    <div id="app">
        <div class="container">
            <Header />
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
    body, html{
        margin: 0;
        padding: 0;
        font-family: Work Sans, sans-serif;
    }
    .container {
        width: 100%;
        max-width: 1220px;
        margin: 0 auto;
    }
</style>
