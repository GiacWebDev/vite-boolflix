<script>

import Card from './partials/Card.vue';

export default {
  name: 'CardContainer',
  components: {
    Card
  }
}
</script>



<template>

  <!-- queste col dovranno essere impostate con un ciclo ed al loro interno mettere la card/ -->

  <div class="container debug align-items-center">
    <h1>Film</h1>
    
    <div class="row row-cols-4">
      
      <div class="col p-3">
        <Card />
      </div>
      <div class="col p-3">
        <Card />
      </div>
      <div class="col p-3">
        <Card />
      </div>
      <div class="col p-3">
        <Card />
      </div>
      <div class="col p-3">
        <Card />
      </div>

    </div>
  </div>




</template>



<style lang="scss" scoped>
@use '../assets/scss/main.scss';

</style>