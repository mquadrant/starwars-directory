<template>
  <div v-if="totalPages() > 0" class="pagination-wrapper">
    {{currentPage+1}} of {{totalPages()}}
    <span
      v-if="showPreviousLink()"
      v-on:click="updatePage(currentPage - 1)"
      class="pagination-btn"
    >
      <font-awesome-icon :icon="['fas','chevron-left']" class="page-arrow" />
    </span>

    <span v-if="showNextLink()" v-on:click="updatePage(currentPage + 1)" class="pagination-btn">
      <font-awesome-icon :icon="['fas','chevron-right']" class="page-arrow" />
    </span>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: ["starships", "currentPage", "pageSize"],
  methods: {
    updatePage(pageNumber) {
      this.$emit("page:update", pageNumber);
    },
    totalPages() {
      return Math.ceil(this.starships.length / this.pageSize);
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == this.totalPages() - 1 ? false : true;
    }
  }
};
</script>

<style scoped>
</style>