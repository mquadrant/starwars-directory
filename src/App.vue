<template>
  <div id="app" class="w-full">
    <router-view :key="$route.fullPath" />

    <Footer />
  </div>
</template>

<script>
import Footer from "./components/layouts/Footer";
export default {
  name: "app",
  components: {
    Footer
  }
};
</script>

<style src="./css/main.css"/>
<style>
body,
html {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.section {
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
}
.section .section-title {
  font-size: 24px;
  color: #3e464c;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
}
h2.section-title {
  display: inline-block;
  padding-bottom: 8px;
  position: relative;
  margin: 0 auto;
}
h2.section-title:before {
  content: "";
  position: absolute;
  width: 50%;
  height: 2px;
  bottom: 0;
  left: 25%;
  border-bottom: 4px solid #3e464c;
}
button,
button:focus {
  outline: none;
}
</style>
