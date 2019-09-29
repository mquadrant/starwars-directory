<template>
  <div class="section character-section">
    <h2 class="section-title">Popular Characters</h2>
    <div class="character-cards">
      <CharacterCard
        v-bind:character="character"
        v-bind:key="character.name"
        v-for="character in characters"
      />
    </div>
  </div>
</template>

<script>
import CharacterCard from "../CharacterCard";
export default {
  name: "CharacterSection",
  components: { CharacterCard },
  props: ["characters"]
};
</script>

<style scoped>
.character-cards {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 10px;
  justify-content: center;
}
</style>