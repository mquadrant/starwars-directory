<template>
  <div class="card">
    <div class="row">
      <div class="row-item">
        <div class="card-img-bottom"></div>
      </div>
      <div class="row-item">
        <div class="card-block">
          <h4 class="card-title">Luke Skywalker</h4>
          <h6 class="card-subtitle">
            <em>Son of Anakin</em>
          </h6>
          <div class="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Sequi, magni. Omnis libero, repudiandae dolor aliquid aut aspernatur recusandae
            aliquid aut aspernatur recusandae recusand...
            <a
              href="#"
              class="card-readmore"
            >Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CharacterCard"
};
</script>
<style scoped>
.card {
  margin: auto;
  height: 18rem;
  margin-bottom: 30px;
  background-color: #f5f5f5;
}
.card-img-bottom {
  color: #fff;
  height: 18rem;
  background: url("./../assets/character-1.jpg") center no-repeat;
  background-size: cover;
  width: 300px;
}
.row {
  display: flex;
}
.card-block {
  width: 250px;
  text-align: left;
  padding: 20px 15px;
}
.card-title {
  font-size: 15px;
  font-weight: 600;
  color: #3e464c;
}
.card-subtitle {
  font-size: 11px;
}
.card-text {
  display: inline-block;
  margin-top: 30px;
  font-size: 12px;
  line-height: 1.6em;
  color: #3e464c;
  font-weight: 50;
  width: 200px;
}
.card-readmore {
  font-size: 12px;
  font-weight: 600;
  border-bottom: 1px solid #3e464c;
}
</style>