import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    genres: []
  },
  getters: {
    genresList(state){
      return state.genres.reduce((acc, item) => {
        acc[item.id] = item.name;
        return acc;
      }, {});
    }
  },
  mutations: {
    getGenres(state, data){
      state.genres = data;
    }
  },
  actions: {
    getGenres({commit}, data){
      commit('getGenres', data);
    }
  },
});
