<template>
  <div class="section character-section">
    <h2 class="section-title">Popular Characters</h2>
    <div class="character-cards">
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </div>
    <button class="view-more">VIEW MORE</button>
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