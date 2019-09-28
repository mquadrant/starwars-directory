<template>
  <div class="section planet-section">
    <h2 class="section-title">Popular Planets</h2>
    <div class="planet-cards">
      <vue-glide>
        <vue-glide-slide v-for="i in 6" :key="i">
          <PlanetCard />
        </vue-glide-slide>
      </vue-glide>
    </div>
  </div>
</template>

<script>
import PlanetCard from "../PlanetCard";
export default {
  name: "PlanetSection",
  components: { PlanetCard }
};
</script>

<style scoped>
.planet-cards {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
</style>