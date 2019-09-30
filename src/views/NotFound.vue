<template>
  <div class="container">
    <div class="row">
      <div class="xs-12 md-6 mx-auto">
        <div id="countUp">
          <div class="number" data-count="404">404</div>
          <div class="text">Page not found</div>
          <div class="text">This may not mean anything.</div>
          <div class="text">I'm probably working on something that has blown up.</div>
          <router-link to="/">
            <button>Go Home</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono:300,500");

.container {
  background-image: url("./../assets/hero-banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 61px);
  min-width: 100vw;
  font-family: "Roboto Mono", "Liberation Mono", Consolas, monospace;
  color: rgba(255, 255, 255, 0.87);
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.row {
  height: 100%;
  display: flex;
}
#countUp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
#countUp .number {
  font-size: 4rem;
  font-weight: 500;
}
#countUp .number,
#countUp .text {
  margin: 0 0 1rem;
}

#countUp .text {
  font-weight: 300;
  text-align: center;
}
#countUp button {
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px 40px;
  font-size: 12px;
}
</style>