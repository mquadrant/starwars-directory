<template>
  <div>
    <div class="hero-image mx-auto">
      <div class="logo">
        <router-link to="/">
          <img src="./../assets/logo.png" width="100px" />
        </router-link>
      </div>
      <vue-glide :perView="1" class="image-ax flex justify-center items-center">
        <vue-glide-slide v-for="pic in 3" :key="pic" class="flex justify-center items-center">
          <img :src="getImgUrl(pic)" v-bind:alt="pic" class="img-slide" />
        </vue-glide-slide>

        <template slot="control" class="control">
          <button data-glide-dir="<" class="control-left absolute border-4 rounded-full h-16 w-16">
            <font-awesome-icon :icon="['fas','caret-left']" class="dir-icon" />
          </button>
          <button data-glide-dir=">" class="control-right absolute border-4 rounded-full h-16 w-16">
            <font-awesome-icon :icon="['fas','caret-right']" class="dir-icon" />
          </button>
          <div class="ship-label image-title" style="color:white;">
            <span>[</span>
            {{starship.name}}
            <span>]</span>
          </div>
        </template>
      </vue-glide>
    </div>
    <div class="container mx-auto">
      <div class="mb-4 flex flex-col justify-center items-center">
        <div class="ship-content font-sans w-1/2 sm:w-auto md:w-full lg:w-3/5 xl:w-2/4">
          <h2 class="font-sans text-3xl text-gray-800">{{starship.name}}</h2>
          <p
            class="font-sans text-base text-gray-800"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis modi aliquam veniam? Totam quidem fugiat impedit excepturi minus iusto cupiditate quibusdam culpa, ab architecto. Sint beatae repellendus facere accusantium odit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste vitae fugiat rerum sunt tempora qui suscipit eos cumque mollitia odit velit tenetur unde quae neque, doloribus inventore, quaerat perferendis laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolores fuga doloribus sequi modi labore voluptatem nobis a at aspernatur facilis sit aperiam dolorem vitae quos eum rerum necessitatibus nostrum!</p>
          <p
            class="font-sans text-base text-gray-800"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis modi aliquam veniam? Totam quidem fugiat impedit excepturi minus iusto cupiditate quibusdam culpa, ab architecto. Sint beatae repellendus facere accusantium odit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste vitae fugiat rerum sunt tempora qui suscipit eos cumque mollitia odit velit tenetur unde quae neque, doloribus inventore, quaerat perferendis laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p
            class="font-sans text-base text-gray-800"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis modi aliquam veniam? Totam quidem fugiat impedit excepturi minus iusto cupiditate quibusdam culpa, ab architecto. Sint beatae repellendus facere accusantium odit!</p>
        </div>
      </div>
      <div class="recent-content w-full text-center">
        <button class="recent-view">Recently viewed Starships</button>
        <hr class="horizontal-line" />
        <RecentStarship v-bind:shipId="shipId" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RecentStarship from "../components/layouts/RecentStarship";
export default {
  name: "SingleStarship",
  components: { RecentStarship },
  data() {
    return {
      shipId: this.$route.params.shipId,
      starship: {},
      recentlyView: []
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/starship-" + pic + ".jpg");
    }
  },
  created() {
    //Getting a single starship
    axios
      .get("https://swapi.co/api/starships/" + this.shipId)
      .then(res => {
        this.starship = { ...res.data };
        let shipIdArray = [];
        // check if recentlyView is available in local storage
        if (!localStorage.getItem("recentlyView")) {
          localStorage.setItem("recentlyView", JSON.stringify(shipIdArray));
        }
        // Retrieve the array from storage
        let retrievedArray = JSON.parse(localStorage.getItem("recentlyView"));
        if (retrievedArray.indexOf(this.shipId) < 0) {
          if (retrievedArray.length >= 6) {
            retrievedArray.shift();
          }
          if (retrievedArray.length < 6) {
            retrievedArray.push(this.shipId);
          }
        }
        localStorage.setItem("recentlyView", JSON.stringify(retrievedArray));
      })
      // eslint-disable-next-line
      .catch(err => this.$router.push("/404"));
  }
};
</script>

<style scoped>
.img-slide {
  width: 800px;
  height: auto;
}
.logo img {
  z-index: 1000;
  position: absolute;
  margin-left: 30px;
  margin-top: 15px;
}
.hero-image {
  background-image: url("../assets/hero-banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 600px;
}
.image-ax {
  height: 100%;
}
.dir-icon {
  color: #fff;
  font-size: 32px;
}
div.image-title {
  position: absolute;
  font-size: 34px;
  font-weight: 600;
}
div.image-title span {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 60px;
  font-weight: lighter;
  margin-left: 15px;
  margin-right: 15px;
}
.ship-content {
  color: #3e464c;
}
.ship-content h2 {
  margin-top: 35px;
  margin-bottom: 20px;
}
.ship-content p {
  font-family: "Raleway";
  font-size: 18px;
  line-height: 1.8em;
  margin-top: 20px;
  letter-spacing: 0.5px;
}
.recent-view {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #3e464c;
  border: 1px solid #c5c5c5;
  padding: 20px;
  width: 350px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
  cursor: default;
}
.horizontal-line {
  border-color: #c5c5c5;
}
.recent-content {
  margin-top: 90px;
}
.control-left {
  top: calc(72%);
  right: calc(9% - -25px);
}
.control-right {
  top: calc(72%);
  right: 20px;
}
.ship-label {
  top: calc(72%);
  left: 0;
}
@media (max-width: 800px) {
  div.image-title {
    font-size: 26px;
  }
  .control-left {
    top: calc(86%);
    right: calc(50% - -16px);
  }
  .control-right {
    top: calc(86%);
    right: calc(50% - 78px);
  }
  .ship-label {
    top: calc(68%);
    /*left: calc(50% - 115px);*/
  }
  .recent-view {
    font-size: 14px;
    width: 250px;
  }
  .ship-label.image-title {
    width: 100%;
    display: block;
    text-align: center;
  }
}
</style>