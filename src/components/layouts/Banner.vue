<template>
  <div class="hero-image">
    <div class="logo">
      <router-link to="/">
        <img src="./../../assets/logo.png" width="100px" />
      </router-link>
    </div>
    <div class="hero-text">
      <div class="mx-auto content-logo">
        <img src="./../../assets/logo.png" width="90px" />
        <span style="font-size:28px;font-weight:900">Directory</span>
      </div>
      <p class="hero-subtext" style="font-size:17px;font-weight:100">
        Find your favorite Characters, Films, Species,
        <br />Starships and Planets
      </p>
      <SearchBar v-bind:home="home" v-on:searchTerm="searchTerm" v-bind:search="search" />
    </div>
  </div>
</template>
<script>
import SearchBar from "./SearchBar";
export default {
  name: "Banner",
  components: { SearchBar },
  props: ["home", "search"],
  methods: {
    searchTerm(term) {
      this.$emit("searchTerm", term);
    }
  }
};
</script>

<style scoped>
.hero-image {
  background-image: url("../../assets/hero-banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 500px;
}
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.hero-subtext {
  margin-top: 15px;
  margin-bottom: 25px;
}
.logo img {
  position: absolute;
  margin-left: 30px;
  margin-top: 15px;
}
.content-logo {
  width: 50%;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #fff;
}
.content-logo img,
.content-logo span {
  display: inline;
  vertical-align: middle;
}
.content-logo span {
  margin-left: 10px;
}

.icon {
  padding: 10px;
  min-width: 40px;
}
</style>