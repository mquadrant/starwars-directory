<template>
  <div v-if="totalPages() > 0" class="pagination-wrapper">
    {{start}} - {{start+visibleData.length}} of {{data.length}}&nbsp;
    <div class="pagination-item">
      <span
        v-bind:class="{'link-end':!showPreviousLink()}"
        v-on:click="updatePage(currentPage - 1)"
        class="pagination-btn"
      >
        <font-awesome-icon :icon="['fas','chevron-left']" class="page-arrow" />
      </span>
      <span
        v-bind:class="{'link-end':!showNextLink()}"
        v-on:click="updatePage(currentPage + 1)"
        class="pagination-btn right"
      >
        <font-awesome-icon :icon="['fas','chevron-right']" class="page-arrow" />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: ["data", "currentPage", "pageSize", "visibleData", "start", "end"],
  methods: {
    updatePage(pageNumber) {
      this.$emit("page:update", pageNumber);
    },
    totalPages() {
      return Math.ceil(this.data.length / this.pageSize);
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
.pagination-wrapper {
  font-size: 18px;
  color: #757575;
}
.pagination-item {
  display: inline-block;
  border: 2px solid #d8d8d8;
  border-radius: 10px;
}

span.pagination-btn {
  display: inline-flex;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.link-end {
  pointer-events: none;
  color: #d8d8d8;
}
.pagination-btn {
  width: 70px;
  height: 50px;
  vertical-align: middle;
}
.page-arrow {
  font-size: 15px;
}
.pagination-btn.right {
  border-left: 2px solid #d8d8d8;
}
</style>