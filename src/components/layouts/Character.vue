<template>
  <div class="section character-section">
    <h2 class="section-title">Popular Characters</h2>
    <div class="character-cards">
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </div>
  </div>
</template>

<script>
import CharacterCard from "../CharacterCard";
export default {
  name: "CharacterSection",
  components: { CharacterCard }
};
</script>

<style scoped>
.character-cards {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
</style>