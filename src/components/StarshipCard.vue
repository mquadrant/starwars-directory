<template>
  <div class="card">
    <img src="./../assets/starship-2.jpg" alt="Ghost" style="width:100%" />
    <div class="inner">
      <div class="outer">
        <p class="title">Ghost</p>
        <p
          class="description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum optio iusto, rerum deleniti quidem voluptate quia unde ea illo minima, ex eveniet cum.</p>

        <button>
          Read More &nbsp;
          <font-awesome-icon :icon="['fas','arrow-right']" class="search-icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarshipCard"
};
</script>

<style scoped>
.card {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  max-width: 320px;
  margin: auto;
  margin-bottom: 30px;
}
.inner {
  position: relative;
  min-height: 150px;
  background: #e6e6e6;
}
.outer {
  position: absolute;
  width: 320px;
  min-height: 145px;
  background: #fafafa;
  margin-left: 5px;
  padding: 10px 20px 10px 10px;
  text-align: left;
}

.title {
  color: #3e464c;
  font-size: 14px;
}
.description {
  color: #3e464c;
  font-size: 12px;
}

button {
  border: none;
  outline: 0;
  display: block;
  padding: 8px 14px;
  color: #3e464c;
  background-color: #e6e6e6;
  text-align: center;
  cursor: pointer;
  width: 110px;
  font-size: 12px;
  margin-top: 10px;
  float: right;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover {
  background-color: #000;
  color: #fff;
}
</style>