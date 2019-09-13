import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home-page.vue';
import Movie from './views/movie-page.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: Movie,
      props: true,
      beforeEnter(to, from, next){
        if(to.params.data == undefined){
          next({path: '/'});
        }
        return next();
      }
    }
  ],
});
