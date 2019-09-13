<template>
    <div class="movie-item row">
        <div class="cell movie-item__image-block">
            <img :src="imagePath" alt="Poster" class="movie-item__image">
        </div>
        <div class="cell">
            <a @click="showDetails(movie)" class="movie-item__link">{{title}}</a>
        </div>
        <p class="cell">{{language}}</p>
        <p class="cell">{{releaseDate}}</p>
        <p class="cell">{{popularity}}</p>
    </div>
</template>

<script>
  import moment from 'moment';
  export default {
    name: 'movie-item',
    props: {
      movie: Object
    },
    computed: {
      imagePath(){
        return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
      },
      language(){
        return this.movie.original_language.toUpperCase();
      },
      releaseDate(){
        return moment(this.movie.release_date).format('Do MMMM YYYY');
      },
      title(){
        return this.movie.title || this.movie.name;
      },
      popularity(){
        return Number(this.movie.popularity.toFixed(2));
      }
    },
    methods: {
      showDetails(movie){
        this.$router.push({name: 'movie', params: {id: movie.id, data: movie }});
      }
    }
  };
</script>

<style scoped lang="stylus">
    .movie-item {
        &__image-block {
            width 20%
        }

        &__image {
            width 100%
        }

        &__link {
            cursor pointer
            color: #136CB2;
            text-decoration: none;

            &:hover {
                color: #136CB2;
                text-decoration: underline;
            }
        }
    }
</style>
