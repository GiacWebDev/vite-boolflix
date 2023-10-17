<script>
export default {
  name: 'Card',
  props: {
      Title: String,
      OriginalTitle: String,
      Language: String,
      Vote: Number,
      Overview: String
  }
  
}
</script>



<template>

  <div id="card_box" class="debug-bg">
    <!-- parte visibile -->
    <div class="card_poster">
      <!-- <img src="/public/films prova.jpeg" alt="poster"> -->
    </div>

    <!-- parte NON visibile -->
    <div class="card_info">
      <h4>{{ Title }}</h4>
      <h5>{{ OriginalTitle }}</h5>

      <h5>bandiera</h5>
      <h5>{{ Vote }}</h5>

      <div class="overview">
        <p>{{ Overview }}</p>
      </div>
    </div>
  </div>
  
</template>



<style lang="scss" scoped>
@use '../../assets/scss/main.scss';

</style>