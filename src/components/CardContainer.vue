<script>

import { store } from '../assets/data/store';
import Card from './partials/Card.vue';

export default {
  name: 'CardContainer',
  props: {
    titleCont: String
  },
  components: {
    Card
  },
  data() {
    return {
      store
    }
  }
}
</script>



<template>

  <!-- queste col dovranno essere impostate con un ciclo ed al loro interno mettere la card/ -->

  <div class="container align-items-center">

    <h1>{{ titleCont }}</h1>

    <div class="row row-cols-4">
      <div
        class="col p-3"
        v-for="item in store.movie"
        :key="item.id"
        >

        <Card 
        :Title="item.title"
        :OriginalTitle="item.original_title"
        :Language="item.original_language"
        :Vote="item.vote_average"
        :Overview="item.overview"
        />
      
      
      </div>

    </div>
  </div>




</template>



<style lang="scss" scoped>
@use '../assets/scss/main.scss';

</style>