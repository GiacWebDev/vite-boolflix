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
          // results.push(...res.data.results)
        })
        .catch(err => {
          console.log(err)
        })

    },
  },

  mounted() {
    this.getApi()
  }

}
</script>



<template>

  <Header @startSearch="startSearch(getApi)"/>
  <CardContainer />

</template>



<style lang="scss">
@use './assets/scss/main.scss';

</style>