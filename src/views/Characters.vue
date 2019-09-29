<template>
  <div>
    <Banner v-on:searchTerm="searchTerm" />
    <div class="container mx-auto px-4" style="text-align: center">
      <div class="section character-section">
        <h2 class="section-title">Popular Characters</h2>
        <div class="filter-block container px-10">
          <div class="filter-item">
            <label>FILTER</label>
            <select v-model="gender" class="select" @change="filterlist" name="filterlist">
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="robot">Robot</option>
            </select>
            <font-awesome-icon :icon="['fas','sort-down']" class="select-arrow" />
          </div>
          <div class="filter-item" style="margin-left:60px;">
            <label>VIEW</label>
            <select name="viewlist">
              <option value="grid">Grid</option>
              <option value="list">List</option>
            </select>
            <font-awesome-icon :icon="['fas','sort-down']" class="select-arrow" />
          </div>
        </div>
        <div class="character-cards">
          <CharacterCard
            v-bind:character="character"
            v-bind:key="character.name"
            v-for="character in filterCharacters"
          />
        </div>
      </div>
      <Pagination
        v-bind:data="characters"
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
import Pagination from "../components/Pagination";
import CharacterCard from "../components/CharacterCard";
export default {
  name: "Characters",
  components: { Banner, Pagination, CharacterCard },
  data() {
    return {
      filterCharacters: [],
      characters: [],
      count: 0,
      end: 0,
      start: 1,
      next: false,
      previous: false,
      page: true,
      gender: "all"
    };
  },
  methods: {
    searchTerm(term) {
      this.filterlist(term);
    },
    filterlist(term) {
      if (!term) {
        this.filterCharacters = this.characters.filter(character => {
          if (this.gender === "all") return true;
          else if (this.gender === "robot")
            return character.gender.toLowerCase() === "n/a";
          else return character.gender.toLowerCase() === this.gender;
        });
      } else {
        let re = new RegExp(term, "gi");

        this.filterCharacters = this.characters.filter(character => {
          if (this.gender === "all")
            return (
              true &&
              (re.test(character.name) ||
                re.test(character.skin_color) ||
                re.test(character.eye_color))
            );
          else if (this.gender === "robot")
            return (
              character.gender.toLowerCase() === "n/a" &&
              (re.test(character.name) ||
                re.test(character.skin_color) ||
                re.test(character.eye_color))
            );
          else
            return (
              character.gender.toLowerCase() === this.gender &&
              (re.test(character.name) ||
                re.test(character.skin_color) ||
                re.test(character.eye_color))
            );
        });
      }
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
            this.characters = [...res.data.results];
            this.filterlist();
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
            this.characters = [...res.data.results];
            this.filterlist();
          })
          // eslint-disable-next-line
          .catch(err => console.log(err));
      }
    }
  },
  created() {
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        this.count = res.data.count;
        this.next = res.data.next;
        this.previous = res.data.previous;
        this.end = res.data.results.length;
        this.characters = [...res.data.results];
        this.filterCharacters = [...this.characters];
      })
      // eslint-disable-next-line
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.character-cards {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.filter-block {
  text-align: left;
  margin: 40px 0 50px;
}
.filter-item {
  display: inline-block;
  position: relative;
}
.filter-item label {
  margin-right: 25px;
}
select::-ms-expand {
  display: none;
}
.filter-item .select-arrow {
  font-size: 30px;
  position: absolute;
  color: rgb(124, 124, 124);
  right: 30px;
  top: -5px;
  height: 34px;
  padding: 15px 0px 0px 8px;
  pointer-events: none;
}
.filter-item select {
  color: #333;
  padding: 10px 50px;
  width: 180px;
  text-align: center;
  border: 2px solid #cccccc;
  outline: none;
  background-color: #ffffff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>