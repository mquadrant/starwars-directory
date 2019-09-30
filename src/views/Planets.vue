<template>
  <div>
    <Banner v-on:searchTerm="searchTerm" v-bind:search="search" />
    <div class="container mx-auto px-4" style="text-align: center">
      <div class="section starship-section">
        <h2 class="section-title">Popular Planets</h2>
        <div class="starship-cards flex-cards">
          <PlanetCard
            v-bind:planet="planet"
            v-bind:key="planet.name"
            v-for="planet in filterPlanets"
            v-bind:page="page"
          />
        </div>
      </div>
      <Pagination
        v-bind:data="planets"
        v-bind:start="start"
        v-bind:end="end"
        v-on:page:update="updatePage"
        v-bind:count="count"
        v-bind:next="next"
        v-bind:previous="previous"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Banner from "../components/layouts/Banner";
import PlanetCard from "../components/PlanetCard";
import Pagination from "../components/Pagination";
export default {
  name: "Planets",
  components: { Banner, PlanetCard, Pagination },
  data() {
    return {
      planets: [],
      filterPlanets: [],
      count: 0,
      end: 0,
      start: 1,
      next: false,
      previous: false,
      page: true,
      searching: "",
      search: ""
    };
  },
  methods: {
    searchTerm(term) {
      this.searching = term;
      let re = new RegExp(this.searching, "gi");

      this.filterPlanets = this.planets.filter(planet => {
        return re.test(planet.name) || re.test(planet.climate);
      });
    },
    updatePage(control) {
      if (control === "next" && this.next) {
        axios
          .get(this.next)
          .then(res => {
            this.start = this.end + 1;
            this.end += res.data.results.length;
            this.next = res.data.next;
            this.previous = res.data.previous;
            this.planets = [...res.data.results];
            this.searchTerm(this.searching);
          })
          // eslint-disable-next-line
          .catch(err => console.log(err));
      } else if (control === "previous" && this.previous) {
        axios
          .get(this.previous)
          .then(res => {
            this.end = this.start - 1;
            this.start = this.end - res.data.results.length + 1;
            this.next = res.data.next;
            this.previous = res.data.previous;
            this.planets = [...res.data.results];
            this.searchTerm(this.searching);
          })
          // eslint-disable-next-line
          .catch(err => console.log(err));
      }
    }
  },
  created() {
    //get search if coming from home page
    if (this.$route.query.search) {
      this.search = this.$route.query.search;
    }
    axios
      .get("https://swapi.co/api/planets")
      .then(res => {
        this.count = res.data.count;
        this.next = res.data.next;
        this.previous = res.data.previous;
        this.end = res.data.results.length;
        this.planets = [...res.data.results];
        this.filterPlanets = [...this.planets];
        this.searchTerm(this.search);
      })
      // eslint-disable-next-line
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
</style>