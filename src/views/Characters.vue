<template>
  <div>
    <Banner />
    <div class="container mx-auto px-4" style="text-align: center">
      <div class="section character-section">
        <h2 class="section-title">Popular Characters</h2>
        <div class="filter-block container px-10">
          <div class="filter-item">
            <label>FILTER</label>
            <select name="filterlist" form="filterform">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <font-awesome-icon :icon="['fas','sort-down']" class="select-arrow" />
          </div>
          <div class="filter-item" style="margin-left:60px;">
            <label>VIEW</label>
            <select name="viewlist" form="viewform">
              <option value="grid">Grid</option>
              <option value="list">List</option>
            </select>
            <font-awesome-icon :icon="['fas','sort-down']" class="select-arrow" />
          </div>
        </div>
        <div class="character-cards">
          <CharacterCard />
          <CharacterCard />
        </div>
      </div>
      <Pagination
        v-bind:data="starships"
        v-bind:start="start"
        v-on:page:update="updatePage"
        v-bind:currentPage="currentPage"
        v-bind:pageSize="pageSize"
        v-bind:visibleData="visibleStarship"
      />
    </div>
  </div>
</template>

<script>
import Banner from "../components/layouts/Banner";
import Pagination from "../components/Pagination";
import CharacterCard from "../components/CharacterCard";
export default {
  name: "Characters",
  components: { Banner, Pagination, CharacterCard },
  data() {
    return {
      starships: [
        {
          id: 0,
          title: "Ghost 0",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 1,
          title: "Ghost 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 2,
          title: "Ghost 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 3,
          title: "Ghost 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 4,
          title: "Ghost 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 5,
          title: "Ghost 5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 6,
          title: "Ghost 6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 7,
          title: "Ghost 7",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 8,
          title: "Ghost 8",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 9,
          title: "Ghost 9",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 10,
          title: "Ghost 10",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 11,
          title: "Ghost 11",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
      ],
      nextId: 12,
      currentPage: 0,
      pageSize: 9,
      start: 0,
      visibleStarship: []
    };
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