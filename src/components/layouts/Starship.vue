<template>
  <div class="section starship-section">
    <h2 class="section-title">Popular Starships</h2>
    <div class="starship-cards">
      <StarshipCard
        v-bind:starship="starship"
        v-bind:key="starship.id"
        v-for="starship in starships"
      />
    </div>
  </div>
</template>

<script>
import StarshipCard from "./../StarshipCard";
export default {
  name: "StarshipSection",
  components: { StarshipCard },
  props: ["starships"]
};
</script>

<style scoped>
.starship-cards {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
</style>