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
    //accedo dinamicamente alle proprietà di un oggetto con store[type] il quale comprende i due array
    getApi(type) {
      axios
        .get(type === 'movie' ? store.api_movies : store.api_tvs, {
          params: store.apiParams
        })
        .then(res => {
          // inserisco gli oggetti all'interno dell'array movies
          store[type] = res.data.results
          console.log(store.movie)    
        })

        .catch(err => {
          console.log(err)
        })

    },
    // creo un metodo che fa entrambe le chiamate
    searchCall() {
      this.getApi('movie')
      this.getApi('tv')
    }
  },

}
</script>



<template>

  <Header @doSearch="searchCall"/>

  <!-- assegno il type che creo in CardContainer in modo da creare due type differenti -->

  <CardContainer v-if="store.movie.length > 0" titleCont="Film" type="movie" />
  <CardContainer v-if="store.movie.length > 0" titleCont="Serie Tv" type="tv"/>

  <h1 v-else>{{ message }}</h1>

</template>



<style lang="scss">
@use './assets/scss/main.scss';

</style>