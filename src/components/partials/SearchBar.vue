<script>
export default {
  name: 'SearchBar'
}
</script>



<template>

  <div class="col d-flex justify-content-end">

    <input
    type="search"
    placeholder="Cerca un Film o una Serie tv"
    @keyup.enter="searchMovies"
    >

    <select class="form" aria-label="Default select example">
      <option value="1">All</option>
      <option value="2">Movies</option>
      <option value="3">Series</option>
    </select>

    <button @click="searchMovies" class="btn btn-danger">Cerca</button>
    
  </div>
  
</template>




<style lang="scss" scoped>
  
  input {
    width: 250px;
    padding: 3px 10px;
    border-radius: 5px;
  }

</style>