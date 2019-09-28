<template>
  <div class="planet-card">
    <header>
      <h1>Corellia</h1>
    </header>
  </div>
</template>
<script>
export default {
  name: "PlanetCard"
};
</script>

<style scoped>
.planet-card {
  background: url("../assets/planet-1.jpg");
  background-size: cover;
  width: 300px;
  height: 300px;
  position: relative;
  margin: 20px;
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