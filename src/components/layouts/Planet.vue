<template>
  <div class="section planet-section">
    <h2 class="section-title">Popular Planets</h2>
    <div class="planet-cards" v-if="isPlanetFetch">
      <vue-glide :perView="3" :bullet="true" :bound="true" :rewind="false">
        <vue-glide-slide v-for="planet in planets.length" :key="planet">
          <PlanetCard v-bind:planet="planets[planet-1]" />
        </vue-glide-slide>
      </vue-glide>
    </div>
  </div>
</template>

<script>
import PlanetCard from "../PlanetCard";
export default {
  name: "PlanetSection",
  components: { PlanetCard },
  props: ["planets", "isPlanetFetch"]
};
</script>

<style scoped>
.planet-cards {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  justify-content: center;
}
</style>