<template>
  <div class="section planet-section">
    <div class="StarshipCard" v-if="isDataFetch">
      <vue-glide :perView="3" :bullet="true" :bound="true" :rewind="false">
        <vue-glide-slide v-for="starship in shipsLength" :key="starship">
          <StarshipCard v-bind:starship="starships[starship-1]" />
        </vue-glide-slide>
      </vue-glide>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StarshipCard from "../StarshipCard";
export default {
  name: "RecentStarship",
  components: { StarshipCard },
  props: ["shipId"],
  data() {
    return {
      starships: null,
      recentlyView: [],
      shipsLength: 0,
      isDataFetch: false
    };
  },
  async created() {
    //Getting the recent view from local storage
    if (localStorage.getItem("recentlyView")) {
      this.recentlyView = JSON.parse(
        localStorage.getItem("recentlyView")
      ).filter(id => id !== this.shipId);
      try {
        const awaitRes = this.recentlyView.map(shipId => {
          return axios.get("https://swapi.co/api/starships/" + shipId);
        });
        const responses = await Promise.all(awaitRes);
        this.starships = responses.map(response => response.data);
        this.shipsLength = this.starships.length;
        this.isDataFetch = true;
      } catch (err) {
        // eslint-disable-next-line
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.planet-cards {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
</style>