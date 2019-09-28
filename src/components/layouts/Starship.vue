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
    <button class="view-more">VIEW MORE</button>
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
  margin-bottom: 10px;
}
.view-more {
  text-align: center;
  font-size: 12px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px 20px;
  width: 30%;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
}
</style>