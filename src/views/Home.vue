<template>
  <div id="app" class="w-full">
    <Banner />
    <div class="container mx-auto px-4" style="text-align: center">
      <StarshipSection />
      <router-link to="starships">
        <button class="view-more">VIEW MORE</button>
      </router-link>
      <PlanetSection />
      <CharacterSection />
      <router-link to="characters">
        <button class="view-more">VIEW MORE</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Banner from "../components/layouts/Banner";
import StarshipSection from "../components/layouts/Starship";
import PlanetSection from "../components/layouts/Planet";
import CharacterSection from "../components/layouts/Character";
export default {
  name: "Home",
  components: {
    Banner,
    StarshipSection,
    PlanetSection,
    CharacterSection
  }
};
</script>

<style>
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
