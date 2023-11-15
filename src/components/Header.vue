<template>
    <div class="header">
        <img src="../resources/header/Logo.svg" alt="logo" class="header__logo">
        <nav class="header__nav">
            <ul class="header__nav_list">
                <router-link to="/" class="header__nav_item">Home</router-link>
                <router-link to="blog" class="header__nav_item">Blog</router-link>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    .header {
        padding: 32px 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        &__logo {
            width: 159px;
        }
        &__nav {
            &_list {
                list-style: none;
                padding: 0;
                width: 100px;
                display: flex;
                justify-content: space-between;
            }
            &_item {
                text-decoration: none;
                color:#3B3C4A;
                font-size: 18px;
                font-weight: 400;
            }
        }
    }
</style>