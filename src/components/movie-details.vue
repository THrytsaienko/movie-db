<template>
    <div class="details">
        <div class="details__container">
            <div class="details__data">
                <div class="details__image-block">
                    <img :src="`https://image.tmdb.org/t/p/w500${this.data.poster_path}`" alt="Poster" class="details__image">
                </div>
                <div class="details__info">
                    <p class="details__text"><span>Title:</span> {{data.title}}</p>
                    <p class="details__text"><span>Overview:</span> {{data.overview}}</p>
                    <p class="details__text"><span>Popularity:</span> {{data.popularity}}</p>
                    <p class="details__text"><span>Average vote:</span> {{data.vote_average}}</p>
                    <p class="details__text"><span>Vote count:</span> {{data.vote_count}}</p>
                    <div class="details__text"><span>Genres: </span>
                        <div v-for="(genre, idx) in data.genre_ids" :key="idx" class="details__genre"
                        :class="genreName(genre).toLowerCase()">{{genreName(genre)}}</div>
                    </div>
                </div>
            </div>

            <div class="details__related">
                <p class="details__subtitle"><span>Related Movies</span></p>
                <div v-for="relMovie in relatedMovies" class="details__data">
                    <div v-for="movie in relMovie" class="details__data details__data--sm">
                        <div class="details__image-block details__image-block--sm">
                            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Poster" class="details__image">
                        </div>
                        <div class="details__info details__info--sm">
                            <p class="details__text details__text--sm"><span>Title:</span> {{movie.title}}</p>
                            <p class="details__text details__text--sm"><span>Popularity:</span> {{movie.popularity}}</p>
                            <div class="details__genre" :class="genreName(movie.genre_ids[0]).toLowerCase()">{{genreName(movie.genre_ids[0])}}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="details__btn-container">
                <router-link to="/" class="details__btn">← Back to homepage</router-link>
            </div>
        </div>
    </div>
</template>

<script>
  const API_KEY = 'd70700a17139d23760d8919c858e65cf';
  export default {
    name: 'movie-details',
    props: {
      data: Object
    },
    data(){
      return{
        genres: null,
        relatedMovies: []
      }
    },
    methods: {
      genreName(id){
        return this.genres[id];
      }
    },
    created() {
      this.genres = this.$store.getters.genresList;
      this.data.genre_ids.forEach(genreId => {
        this.$http.get
        (`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&&with_genres=${genreId}`)
          .then(response => {
            let result = response.body.results.filter(item => {
              return item.id !== this.data.id;
            }).slice(0, 3);
            this.relatedMovies.push(result);
          })
      });
    }
  };
</script>

<style scoped lang="stylus">
    .details {
        &__container {
            width 100%
            max-width 1040px
            padding 50px 20px
            margin 0 auto
        }

        &__data {
            display flex
            justify-content space-between

            &--sm {
                justify-content flex-start
                margin-bottom 10px
                width 30%
            }
        }

        &__info {
            text-align left
            width 60%
        }

        &__image-block {
            width 35%

            &--sm {
                width 80px
                margin-right 20px
            }
        }

        &__text {
            margin-bottom 10px
            &:last-child {
                margin-bottom 0
            }
            span {
                font-weight bold
            }

            &--sm {
                font-size 12px
            }
        }

        &__image {
            width 100%
        }

        &__genres {
            display flex
        }

        &__genre {
            display inline-block
            padding 5px 10px
            border-radius 20px
            font-size 14px
            margin-right 10px

            &:last-child {
                margin-right 0
            }
        }

        &__related {
            margin-top 50px
        }

        &__subtitle {
            margin-bottom 15px
            font-weight bold
        }

        &__btn-container {
            margin-top 40px
            display flex
            justify-content center
        }

        &__btn {
            border 1px solid #182380
            background-color #fff
            color #000
            border-radius 4px
            padding 20px 40px

            &:hover {
                background-color #0f408d
                color #fff
                opacity: 0.9
            }
        }
    }

    .comedy,
    .tv {
        background-color #df9e36
        border 1px solid #df7f27
    }

    .music,
    .romance {
        background-color #a95171
        border 1px solid #a95171
    }

    .horror,
    .crime,
    .war {
        background-color #df3e34
        border 1px solid #af352f
        color #fff
    }

    .animation,
    .history {
        background-color #333edf
        border 1px solid #282a9c
        color #fff
    }

    .drama,
    .family {
        background-color #2a94a0
        border 1px solid #1b5e69
        color #fff
    }

    .action,
    .western {
        background-color #a0608b
        border 1px solid #83496e
        color #fff
    }

    .adventure,
    .mystery {
        background-color #7552a0
        border 1px solid #553d7b
        color #fff
    }

    .science,
    .documentary {
        background-color #df9e36
        border 1px solid #a06720
        color #fff
    }

    .thriller,
    .fantasy {
        background-color #10b259
        border 1px solid #0e8341
        color #fff
    }
</style>
