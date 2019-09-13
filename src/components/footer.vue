<template>
    <footer class="footer">
        <div class="footer__address">
            <p class="footer__email">mail@mailtest.com</p>
            <p class="footer__phone">+30-6977664062</p>
        </div>
        <p class="footer__text">Copyright &#9400; 2019 Test All Rights Reserved.</p>
    </footer>
</template>

<script>
  export default {
    name: 'footer-component'
  };
</script>

<style scoped lang="stylus">
    .footer {
        background-color #000
        min-height 100px
        color #1d1e25
        display flex
        justify-content space-between
        align-items center
        padding 0 100px

        &__address {
            color #fff
            display flex
            flex-direction column
            align-items flex-start
            font-size 12px
        }

        &__email {
            padding-bottom 15px
        }
    }
</style>
