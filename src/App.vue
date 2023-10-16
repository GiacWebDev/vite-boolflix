<script>

import Header from './components/Header.vue';
import CardContainer from './components/CardContainer.vue';

export default {
  name: 'App',
  components: {
    Header,
    CardContainer
  }
}
</script>



<template>

  <Header />
  <CardContainer />
  
</template>



<style lang="scss">
@use './assets/scss/main.scss';

</style>