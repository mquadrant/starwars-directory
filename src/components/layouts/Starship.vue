<template>
  <div class="section starship-section">
    <h2 class="section-title">Popular Starships</h2>
    <div class="starship-cards">
      <StarshipCard />
      <StarshipCard />
      <StarshipCard />
      <StarshipCard />
      <StarshipCard />
      <StarshipCard />
    </div>
  </div>
</template>

<script>
import StarshipCard from "./../StarshipCard";
export default {
  name: "StarshipSection",
  components: { StarshipCard }
};
</script>

<style scoped>
.starship-cards {
  display: flex;
  flex-wrap: wrap;
}
</style>