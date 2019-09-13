<template>
  <div id="app">
    <HeaderComponent />
    <main>
      <router-view />
    </main>
    <FooterComponent />
    <ScrollButton v-scroll-to="'#app'"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HeaderComponent from '@/components/header.vue';
  import FooterComponent from '@/components/footer.vue';
  import ScrollButton from '@/components/scroll-button.vue';

  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      ScrollButton
    }
  };
</script>

<style lang="stylus">
  #app {
    font-family 'Avenir', Helvetica, Arial, sans-serif
    color #2c3e50
  }

  main {
    min-height 100vh
  }
  .row {
    display flex
    justify-content space-between
    align-items center
    padding 10px
    cursor default

    &:nth-child(odd){
      background-color: #f6f6f5;
    }

    &:hover {
      .image-block {
        transform scale(1.1)
        transition transform .3s ease-in-out
      }
    }

    &--head {
      font-size 16px
      font-weight bold
      border-bottom 1px solid #b8b8b8
    }
  }

  .cell {
    width 25%
    display flex
    margin-right 20px

    &:nth-child(odd) {
      width 5%
    }

    &:first-child {
      width 5%
    }

    &:last-child {
      width 10%
      margin-right 0
    }
  }

  *, *:before, *:after {
    margin 0
    padding 0
    box-sizing border-box
  }
</style>
