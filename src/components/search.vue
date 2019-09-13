<template>
    <div class="input-field">
        <input type="text" v-model="search" @input="input" id="input" class="input-field__input">
        <p class="input-field__border"></p>
        <label class="input-field__label" :class="{'top' : search != ''}">Start typing for search...</label>
    </div>
</template>

<script>
  export default {
    name: 'search',
    data(){
      return{
        search: ''
      }
    },
    methods: {
      input(){
        this.$emit('input', this.search);
      }
    }
  }
</script>

<style scoped lang="stylus">
    .input-field {
        position relative
        &__input {
            border none
            outline none
            width 100%
            font-size 18px
            line-height 30px
            padding 5px
            background-color #f6f6f5
            text-indent 10px

            &:focus {
                background-color #e8f0fe
            }

            &:focus ~ .input-field__border:before {
                width: 100%;
            }

            &:focus ~ .input-field__label {
                top: -20px;
                left 0
                font-size: 14px;
            }
        }

        &__label {
            font-size 15px
            position absolute
            pointer-events none
            left 10px
            top 10px
            transition 300ms ease all
            font-style italic
        }

        &__label.top {
            top: -20px;
            left 0
            font-size: 14px;
        }

        &__border {
            position relative

            &:before {
                content ""
                height 1px
                width 0
                position absolute
                bottom 0
                left 0
                background #136CB2
                transition .3s ease-in-out
            }
        }
    }
</style>
