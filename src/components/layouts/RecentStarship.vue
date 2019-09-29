<template>
  <div class="section planet-section">
    <div class="StarshipCard">
      <vue-glide :bullet="true" :rewind="false">
        <vue-glide-slide v-for="i in 3" :key="i">
          <StarshipCard />
        </vue-glide-slide>
      </vue-glide>
    </div>
  </div>
</template>

<script>
import StarshipCard from "../StarshipCard";
export default {
  name: "RecentStarship",
  components: { StarshipCard }
};
</script>

<style scoped>
.planet-cards {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
</style>