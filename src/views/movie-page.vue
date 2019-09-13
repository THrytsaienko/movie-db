<template>
  <div class="about">
    <MovieDetails :data="data"/>
  </div>
</template>

<script>
  import MovieDetails from '@/components/movie-details.vue';

  export default {
    name: 'movie-page',
    props: { data: Object },
    components: {
      MovieDetails
    }
  }
</script>
