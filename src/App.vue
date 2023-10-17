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


}
</script>



<template>

  <Header />
  <CardContainer />

</template>



<style lang="scss">
@use './assets/scss/main.scss';

</style>