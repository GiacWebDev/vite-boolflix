<script>
export default {
  name: 'SearchBar'
}
</script>



<template>

  <div>
    <input
      type="search"
      placeholder="Cerca un Film o una Serie tv"
      @keyup.enter="searchMovies"
      >
      <select class="form-select" aria-label="Default select example">
        <option value="1">All</option>
        <option value="2">Movies</option>
        <option value="3">Series</option>
      </select>
  </div>
  
</template>




<style>

</style>