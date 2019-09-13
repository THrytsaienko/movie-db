<template>
    <div class="header">
        <div class="header__container">
            <router-link to="/" class="header__link">
                <div class="header__image-block">
                    <img src="../assets/logo.svg" alt="Logo" class="header__image">
                </div>
            </router-link>
            <h3 class="header__title">The Movie Database - all you wanted to know about movies</h3>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'main-header'
  };
</script>

<style scoped lang="stylus">
    .header {
        background-color #2a94a0
        &__container {
            width 100%
            max-width 1040px
            margin 0 auto
            padding 20px
            display flex
            align-items center
        }

        &__image-block {
            width 50px
        }

        &__image {
            width 100%
        }

        &__title {
            margin-left 30px
        }
    }
</style>
