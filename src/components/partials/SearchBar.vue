<script>
import { store } from '../../assets/data/store'

export default {
  name: 'SearchBar',
  data() {
    return {
      store
    }
  }
}

</script>



<template>

  <div class="col d-flex justify-content-end">

    <input
    type="search"
    placeholder="Cerca un Film o una Serie tv"
    v-model.trim="store.apiParams.query"
    >

    <select class="form ms-1" aria-label="Default select example">
      <option value="1">All</option>
      <option value="2">Movies</option>
      <option value="3">Series</option>
    </select>

    <!-- scateno l'evento -->
    <button @click="startSearch" class="btn btn-danger ms-1">Cerca</button>
    
  </div>
  
</template>




<style lang="scss" scoped>
  
  input {
    width: 250px;
    padding: 3px 10px;
    border-radius: 5px;
  }

</style>