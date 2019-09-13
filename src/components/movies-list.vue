<template>
    <div class="movies">
        <div class="row row--head">
            <p class="cell"></p>
            <p class="cell">Title</p>
            <p class="cell">Language</p>
            <p class="cell">Release Date</p>
            <p class="cell">Popularity</p>
        </div>
        <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </div>
</template>

<script>
    import MovieItem from '@/components/movie-item.vue';

    export default {
      name: 'movies-list',
      props: {
        movies: Array
      },
      components: {
        MovieItem
      }
    };
</script>
