<script>

import Header from './components/Header.vue';
import CardContainer from './components/CardContainer.vue';
import { store } from './assets/data/store';
import axios from 'axios';

export default {
  name: 'App',
  
  data() {
    return{
      store,
      message: 'Digita il nome di un Film',
    }
  },

  components: {
    Header,
    CardContainer
  },

  methods: {
    getApi() {
      axios
        .get(store.api_movies, {
          params: store.apiParams
        })
        .then(res => {
          // inserisco gli oggetti all'interno dell'array movies
          store.movies = res.data.results
          console.log(store.movies)
          if (store.movies.length === 0) {
            this.message = 'Film non trovato'
          }       
        })

        .catch(err => {
          console.log(err)
        })

    },
  },

}
</script>



<template>

  <Header @doSearch="getApi"/>
  <CardContainer v-if="store.movies.length > 0" />
  <h1 v-else>{{ message }}</h1>
</template>



<style lang="scss">
@use './assets/scss/main.scss';

</style>