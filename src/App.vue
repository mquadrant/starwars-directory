<template>
  <div id="app" class="w-full">
    <Banner />
  </div>
</template>

<script>
import Banner from "./components/layouts/Banner";
export default {
  name: "app",
  components: { Banner }
};
</script>

<style src="./css/main.css">
body,
html {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
