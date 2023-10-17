<script>

import SearchBar from './partials/SearchBar.vue'

export default {
  name: 'Header',
  components: {
    SearchBar,
  },

  methods: {
    // Inoltro l'evento startSearch al componente SearchBar
    startSearch() {
      this.$emit('startSearch');
      console.log(getApi)
    }
  }
}

</script>



<template>

  <header class="d-flex align-items-center">
    <div class="_container d-flex align-items-center justify-content-between">     
         
        <div class="col">
          <img src="/public/logo-boolflix.png" alt="logo">  
        </div>

        <SearchBar @startSearch="startSearch"/>

    </div>

  </header>
  
</template>



<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

header {
  background-image: linear-gradient(180deg, black, #383838);
  padding: 30px;
  img {
    width: 150px;
  }
  ._container {
    width: 100%;
  }
}

</style>