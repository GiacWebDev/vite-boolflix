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

  <div class="container debug">
    <div class="row row-cols-4">
      <div class="col">

        <Card />
  
      </div>
    </div>
  </div>




</template>



<style lang="scss" scoped>
@use '../assets/scss/main.scss';

</style>