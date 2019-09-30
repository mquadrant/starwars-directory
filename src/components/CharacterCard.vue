<template>
  <div class="card" v-bind:class="{'card-list':viewList}">
    <div class="row">
      <div class="row-item">
        <div class="card-img-bottom" :style="{'background-image': 'url(' + imageUrl + ')'}"></div>
      </div>
      <div class="row-item">
        <div class="card-block">
          <h4 class="card-title">{{character.name}}</h4>
          <h6 class="card-subtitle">
            <em>Gender: {{character.gender}}</em>
          </h6>
          <div class="card-text">
            {{getDetails()}}
            <a class="card-readmore" v-on:click="makeRead">{{readLabel}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CharacterCard",
  props: ["character", "viewList"],
  data() {
    return {
      details: "",
      readMore: true,
      readLabel: "Read More",
      imageOnce: false,
      imageUrl: "../assets/character-0.jpg"
    };
  },
  methods: {
    getDetails() {
      const msg = `${this.character.name} has a height of ${
        this.character.height
      } and a weight of ${this.character.mass}.
    ${this.character.gender === "male" ? "He" : "She"} has a ${
        this.character.skin_color
      } skin and with ${this.character.eye_color} eyes. and was born on ${
        this.character.birth_year
      }. ${this.character.gender === "male" ? "He" : "She"} has ${
        this.character.vehicles.length ? this.character.vehicles.length : "no"
      } vehicle(s) and owned ${
        this.character.starships.length ? this.character.starships.length : "no"
      } starships. ${
        this.character.gender === "male" ? "He" : "She"
      } has been seen to have featured in ${
        this.character.films.length ? this.character.films.length : "0"
      } films.`;
      if (this.readMore) {
        this.readLabel = "Read More";
        return `${msg.substring(0, 150)}...`;
      } else {
        this.readLabel = "Read Less";
        return msg;
      }
    },
    makeRead() {
      this.readMore = !this.readMore;
    }
  },
  created() {
    let randomInt = Math.floor(Math.random() * 4 + 1);
    this.imageUrl = require("../assets/character-" + randomInt + ".jpg");
  }
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
.card-list .card-img-bottom,
.card-list {
  height: 12rem;
}
.card-list .card-block {
  width: 500px;
}
.card-list .card-text {
  width: 450px;
}
</style>