<script>

export default {
  name: 'Card',
  props: {
      Title: String,
      OriginalTitle: String,
      Language: String,
      Overview: String,
      Name: String,
      Vote: Number
  },

  computed: {
    calcStar() {
      return Math.ceil(this.Vote / 2)
    }
  }
}
</script>



<template>

  <div id="card_box">
    <!-- parte visibile -->
    <div class="card_poster">
      <!-- <img src="/public/films prova.jpeg" alt="poster"> -->
    </div>

    <!-- parte NON visibile -->
    <div class="card_info">
      <h1>{{ Title || Name }}</h1>
      <h4>{{ OriginalTitle }}</h4>

      <h5><strong>Lingua: </strong>
        <span v-if="Language == 'en'">
            <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/united_kingdom_flags_flag_17079.png'"
                :alt="Language">
        </span>

        <span v-else-if="Language == 'es'">
            <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/spain_flags_flag_17068.png'"
                :alt="Language">
        </span>

        <span v-else-if="Language == 'it'">
            <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/italy_flags_flag_17018.png'"
                :alt="Language">
        </span>

        <span v-else-if="Language == 'fr'">
            <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/france_flags_flag_16999.png'"
                :alt="Language">
        </span>

        <span v-else-if="Language == 'de'">
            <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/germany_flags_flag_17001.png'"
                :alt="Language">
        </span>
      
        <span v-else>{{ Language }}</span>
      </h5>

      <div class="star-box">
        <i
          v-for="i in 5"
          :key="i"
          class="fa-star"
          :class="(i <= calcStar) ? 'fa-solid' : 'fa-regular'" 
        ></i>
      </div>

  

      <div class="overview">
        <p>{{ Overview }}</p>
      </div>
    </div>
  </div>
  
</template>



<style lang="scss" scoped>
@use '../../assets/scss/main.scss';

img {
  width: 25px;
}

</style>