<template>
    <div class="page-up">
        <a id="up-button" class="page-up__btn"></a>
    </div>
</template>

<script>
  export default {
    name: 'scroll-button'
  };
</script>

<style scoped lang="stylus">
    .page-up {
        &__btn {
            display: block;
            width: 53px;
            height: 53px;
            margin: 0 auto;
            cursor: pointer;
            background: url('../assets/button-up.svg');
            background-size: cover;
            position: fixed;
            bottom 30px
            right 30px
            z-index: 30;

            &:hover {
                background: url('../assets/button-up-hover.svg');
            }
        }
    }
</style>
