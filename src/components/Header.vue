<script>

import SearchBar from './partials/SearchBar.vue'

export default {
  name: 'Header',
  components: {
    SearchBar,
  }
}
</script>



<template>

  <header class="d-flex align-items-center">
    <div class="_container d-flex align-items-center justify-content-between">        
        <div class="col">
          <img src="/public/logo-boolflix.png" alt="logo">  
        </div>

        <div class="col d-flex justify-content-end">
          <SearchBar />
        </div>
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
  input {
    width: 250px;
    padding: 3px 10px;
    border-radius: 5px;
  }
}

</style>