<script>

import { store } from '../assets/data/store';
import Card from './partials/Card.vue';

export default {
  name: 'CardContainer',
  props: {
    titleCont: String,
    type: String,
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

  <div class="container align-items-center">

    <!-- titleCont che da dinamicamente il titolo al container in base al type -->

    <h1>{{ titleCont }}</h1>

    <div class="row row-cols-4">
      <div
        class="col p-3"
        v-for="item in (type === 'movie' ? store.movie : store.tv)"
        :key="item.id"
        >

        <Card
        :Title="item.title"
        :OriginalTitle="item.original_title"
        :Language="item.original_language"
        :Vote="item.vote_average"
        :Overview="item.overview"
        :Name="item.original_name"
        />
      
      
      </div>

    </div>
  </div>




</template>



<style lang="scss" scoped>
@use '../assets/scss/main.scss';

</style>