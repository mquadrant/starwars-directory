<template>
  <div class="planet-card" :style="{'background-image': 'url(' + getRandomImg() + ')'}">
    <header v-if="page">
      <h1>Name: {{planet.name}}</h1>
      <h1>Climate: {{planet.climate}}</h1>
      <h1>Population: {{planet.population}}</h1>
    </header>
    <header v-if="!page">
      <h1>{{planet.name}}</h1>
    </header>
  </div>
</template>
<script>
export default {
  name: "PlanetCard",
  props: ["planet", "page"],
  methods: {
    getRandomImg() {
      let randomInt = Math.floor(Math.random() * 3 + 1);
      return require("../assets/planet-" + randomInt + ".jpg");
    }
  }
};
</script>

<style scoped>
.planet-card {
  background-size: cover;
  width: 300px;
  height: 300px;
  position: relative;
  margin: 20px;
  display: inline-block;
}
.planet-card > header {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 10px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.6)
  );
}
.planet-card > header > h1 {
  margin: 0;
  color: white;
  position: relative;
  z-index: 1;
}

* {
  box-sizing: border-box;
}
</style>