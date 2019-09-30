<template>
  <div class="section planet-section">
    <h2 class="section-title">Popular Planets</h2>
    <div class="planet-cards image--lg" v-if="isPlanetFetch">
      <vue-glide :perView="3" :bullet="true" :bound="true" :rewind="false">
        <vue-glide-slide v-for="planet in planets.length" :key="planet">
          <PlanetCard v-bind:planet="planets[planet-1]" />
        </vue-glide-slide>
      </vue-glide>
    </div>
    <div class="planet-cards image--sm" v-if="isPlanetFetch">
      <vue-glide :perView="1" :bullet="true" :bound="true" :rewind="false">
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
  align-items: center;
}
@media (max-width: 1000px) {
  .image--sm {
    display: block;
  }
  .image--lg {
    display: none;
  }
}
@media (min-width: 1001px) {
  .image--sm {
    display: none;
  }
  .image--lg {
    display: block;
  }
}
</style>