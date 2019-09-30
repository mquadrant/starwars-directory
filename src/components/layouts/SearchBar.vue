<template>
  <div class="input-icons" v-bind:class="{'latest':home}">
    <font-awesome-icon :icon="['fas','search']" class="search-icon" @click="submit()" />
    <input
      class
      type="text"
      v-model="search"
      @keyup="searchTerm()"
      placeholder="Enter a search term"
    />
    <div class="filter-item" v-if="home">
      <select v-model="category" class="select" name="filterlist">
        <option value="characters">Characters</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    home: {
      type: Boolean,
      default: false
    },
    search: {
      type: String,
      default: ""
    }
  },
  data() {
    return { category: "characters" };
  },
  methods: {
    searchTerm() {
      this.$emit("searchTerm", this.search);
    },
    submit() {
      if (this.home) {
        this.$router.push({
          path: `/${this.category}`,
          query: { search: `${this.search}` }
        });
      }
    }
  }
};
</script>

<style scoped>
input[type="text"] {
  padding: 6px;
  padding-bottom: 8px;
  padding-left: 80px;
  width: 500px;
  color: #000;
  background: #faf8f7;
  border-radius: 5px;
  outline: none;
}
input[type="text"]::placeholder {
  font-size: 13px;
  color: #3e464c;
}
.input-icons {
  position: relative;
  width: 100%;
  margin-bottom: 10px;
}
.input-icons .search-icon {
  position: absolute;
  color: #3e464c;
  font-size: 18px;
  font-weight: 0px;
  bottom: 10px;
  left: 40px;
}
.latest .search-icon {
  position: absolute;
  color: #3e464c;
  font-size: 18px;
  font-weight: 0px;
  bottom: 25%;
  left: 40px;
  cursor: pointer;
}
.filter-item {
  position: absolute;
  border: 1px solid #52585d;
  border-radius: 5px;
  color: #3e464c;
  font-size: 18px;
  bottom: 12%;
  right: 10px;
  outline: none;
}
.filter-item select {
  color: #333;
  outline: none;
  padding-left: 3px;
  font-size: 12px;
}
@media (max-width: 800px) {
  input[type="text"] {
    width: 350px;
  }
}
</style>