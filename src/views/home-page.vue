<template>
  <div class="home" v-cloak>
    <div class="home__container">
      <div v-if="loading" class="home__spinner-block">
        <img src="../assets/spinner.gif" alt="Spinner" class="home__spinner">
      </div>
      <div v-else>
        <Search @input="input" class="home__search"/>
        <div v-if="movies.length > 0">
          <MoviesList :movies="movies"/>
          <div class="home__buttons">
            <button class="home__btn" @click="changePage(page-1)">&#171;</button>
            <button class="home__btn" :class="{'active' : page == 1}" @click="changePage(1)">1</button>
            <button class="home__btn" :class="{'active' : page == 2}" @click="changePage(2)">2</button>
            <button class="home__btn" :class="{'active' : page == 3}" @click="changePage(3)">3</button>
            <button class="home__btn" :class="{'active' : page == 4}" @click="changePage(4)">4</button>
            <button class="home__btn" :class="{'active' : page == 5}" @click="changePage(5)">5</button>
            <button class="home__btn" @click="changePage(page+1)">&#187;</button>
          </div>
        </div>
        <div v-else>
          <p class="home__text">Sorry, probably you have some mistakes in your search. We can't find any movie!</p>
          <div class="home__image-block">
            <img src="../assets/no-results.png" alt="No Results" class="home__image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const API_KEY = 'd70700a17139d23760d8919c858e65cf';
  import MoviesList from '@/components/movies-list.vue';
  import Search from '@/components/search.vue';
  export default {
    name: 'home-page',
    components: {
      Search,
      MoviesList
    },
    data(){
      return {
        movies: [],
        loading: true,
        page: 1,
        search: ''
      }
    },
    created(){
      this.getMovies(1);

      this.$http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
              .then(response => {
                this.$store.dispatch('getGenres', response.body.genres);
              })
    },
    methods: {
      input(search){
        this.search = search;
        if(this.search){
          this.inSearch();
        } else {
          this.getMovies();
        }
      },
      inSearch(){
        this.$http.get
        (`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this.search}&include_adult=false&page=${this.page}`)
                .then(response => {
                  if(response.body.results.length > 0) {
                    this.movies = response.body.results;
                  }
                });
      },
      changePage(count){
        if(count > 0 && this.movies.length == 20){
          this.page = count;
          this.getMovies(this.page);
        }
      },
      getMovies(pageNumber){
        if(this.search){
          this.inSearch();
        } else {
          this.$http.get
          (`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNumber}`)
                  .then(response => {
                    if(response.body.results.length > 0) {
                      this.movies = response.body.results;
                    }
                    this.loading = false;
                  });
        }
      }
    }
  };
</script>

<style scoped lang="stylus">
  .home {
    &__container {
      width 100%
      max-width 1040px
      margin 0 auto
      padding 35px 20px
    }

    &__spinner-block {
      width 100%
      max-width 200px
      margin 0 auto
    }

    &__image-block {
      width 100%
      max-width 500px
      margin 0 auto
    }

    &__image {
      width 100%
    }

    &__search {
      width 100%
      margin-bottom 40px
    }

    &__text {
      font-size 18px
      font-weight bold
      text-align center
      margin-bottom 30px
    }

    &__buttons {
      margin-top 40px
      display flex
      justify-content center
    }

    &__btn {
      display inline-block
      background-color #0f408d
      color #fff
      border-radius 2px
      cursor pointer
      padding 5px 7px
      outline none
      border none
      margin-right 10px

      &:hover {
        background-color #1d5e8d
      }
    }
  }

  .active {
    background-color #0e8341
    &:hover {
      background-color #0e8372
    }
  }
</style>
