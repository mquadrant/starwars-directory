<template>
  <div>
    <Banner v-on:searchTerm="searchTerm" />
    <div class="container mx-auto px-4" style="text-align: center">
      <StarshipSection v-bind:starships="filterShips" />
      <Pagination
        v-bind:data="starships"
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
import StarshipSection from "../components/layouts/Starship";
import Pagination from "../components/Pagination";
export default {
  name: "Starship",
  components: { Banner, StarshipSection, Pagination },
  data() {
    return {
      starships: [],
      filterShips: [],
      currentPage: 0,
      count: 0,
      end: 0,
      start: 1,
      next: false,
      previous: false,
      searching: ""
    };
  },
  methods: {
    searchTerm(term) {
      this.searching = term;
      let re = new RegExp(this.searching, "gi");

      this.filterShips = this.starships.filter(ship => {
        return re.test(ship.name) || re.test(ship.model);
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
            this.starships = [...res.data.results];
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
            this.starships = [...res.data.results];
            this.searchTerm(this.searching);
          })
          // eslint-disable-next-line
          .catch(err => console.log(err));
      }
    }
  },
  created() {
    axios
      .get("https://swapi.co/api/starships")
      .then(res => {
        this.count = res.data.count;
        this.next = res.data.next;
        this.previous = res.data.previous;
        this.end = res.data.results.length;
        this.starships = [...res.data.results];
        this.filterShips = [...this.starships];
      })
      // eslint-disable-next-line
      .catch(err => console.log(err));
  }
};
</script>

<style lang="stylus" scoped></style>