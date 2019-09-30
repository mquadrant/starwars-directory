<template>
  <div class="pagination-wrapper">
    {{start}} - {{end}} of {{count}}&nbsp;
    <div class="pagination-item">
      <span
        v-bind:class="{'link-end':!showPreviousLink()}"
        v-on:click="updatePage('previous')"
        class="pagination-btn"
      >
        <font-awesome-icon :icon="['fas','chevron-left']" class="page-arrow" />
      </span>
      <span
        v-bind:class="{'link-end':!showNextLink()}"
        v-on:click="updatePage('next')"
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
  props: ["data", "start", "end", "count", "next", "previous"],
  methods: {
    updatePage(control) {
      this.$emit("page:update", control);
    },
    showPreviousLink() {
      return this.previous === null ? false : true;
    },
    showNextLink() {
      return this.next === null ? false : true;
    }
  }
};
</script>

<style scoped>
.pagination-wrapper {
  font-size: 18px;
  color: #757575;
  margin-bottom: 30px;
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