<template>
  <div id="app" class="w-full">
    <Banner />
    <div class="container mx-auto px-4" style="text-align: center">
      <StarshipSection v-bind:starships="starships" />
      <router-link to="starships">
        <button class="view-more">VIEW MORE</button>
      </router-link>
      <PlanetSection v-bind:planets="planets" v-bind:isPlanetFetch="isPlanetFetch" />
      <router-link to="planets">
        <button class="view-more">VIEW MORE</button>
      </router-link>
      <CharacterSection />
      <router-link to="characters">
        <button class="view-more">VIEW MORE</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
  },
  data() {
    return {
      starships: [],
      planets: [],
      isPlanetFetch: false
    };
  },
  methods: {},
  created() {
    //Getting Popular Starship
    axios
      .get("https://swapi.co/api/starships")
      .then(res => {
        this.starships = res.data.results;
        this.starships.splice(6);
      })
      // eslint-disable-next-line
      .catch(err => console.log(err));
    //Getting Popular Planet
    axios
      .get("https://swapi.co/api/planets")
      .then(res => {
        this.planets = res.data.results;
        this.planets.splice(5);
        this.isPlanetFetch = true;
      })
      // eslint-disable-next-line
      .catch(err => console.log(err));
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
