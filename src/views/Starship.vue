<template>
  <div>
    <Banner />
    <div class="container mx-auto px-4">
      <StarshipSection v-bind:starships="visibleStarship" v-bind:currentPage="currentPage" />
    </div>
    <div>
      <Pagination
        v-bind:starships="starships"
        v-on:page:update="updatePage"
        v-bind:currentPage="currentPage"
        v-bind:pageSize="pageSize"
      />
    </div>
  </div>
</template>
<script>
import Banner from "../components/layouts/Banner";
import StarshipSection from "../components/layouts/Starship";
import Pagination from "../components/Pagination";
export default {
  name: "Starship",
  components: { Banner, StarshipSection, Pagination },
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
          title: "Ghost 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 2,
          title: "Ghost 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 3,
          title: "Ghost 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 4,
          title: "Ghost 5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 5,
          title: "Ghost 6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 6,
          title: "Ghost 7",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 7,
          title: "Ghost 8",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 8,
          title: "Ghost 9",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 9,
          title: "Ghost 10",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 10,
          title: "Ghost 11",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 11,
          title: "Ghost 12",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
      ],
      nextId: 12,
      currentPage: 0,
      pageSize: 9,
      visibleStarship: []
    };
  },
  beforeMount: function() {
    this.updateVisibleStarship();
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleStarship();
    },
    updateVisibleStarship() {
      const start = this.currentPage * this.pageSize,
        end = start + this.pageSize;
      this.visibleStarship = this.starships.slice(start, end);
      //if we have 0 visible starship , go back a page
      if (this.visibleStarship.length === 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    }
  }
};
</script>

<style lang="stylus" scoped></style>