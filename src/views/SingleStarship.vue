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

        <template slot="control">
          <button
            data-glide-dir="<"
            class="absolute border-4 rounded-full h-16 w-16"
            style="top:calc(72%);right:9%"
          >
            <font-awesome-icon :icon="['fas','caret-left']" class="dir-icon" />
          </button>
          <button
            data-glide-dir=">"
            class="absolute border-4 rounded-full h-16 w-16"
            style="top:calc(72%);right:20px;"
          >
            <font-awesome-icon :icon="['fas','caret-right']" class="dir-icon" />
          </button>
          <div class="image-title absolute" style="color:white;top:calc(72%);left:8%;">
            <span>[</span>Correllian Scout
            <span>]</span>
          </div>
        </template>
      </vue-glide>
    </div>
    <div class="container mx-auto">
      <div class="mb-4 flex flex-col justify-center items-center">
        <div class="ship-content font-sans w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-2/4">
          <h2 class="font-sans text-3xl text-gray-800">Correllian Scout</h2>
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
        <RecentStarship />
      </div>
    </div>
  </div>
</template>

<script>
import RecentStarship from "../components/layouts/RecentStarship";
export default {
  name: "SingleStarship",
  components: { RecentStarship },
  data() {
    return {
      shipId: this.$route.params.shipId,
      info: {}
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/starship-" + pic + ".jpg");
    }
  },
  created() {}
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
  font-size: 18px;
  line-height: 1.8em;
  margin-top: 20px;
}
.recent-view {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #3e464c;
  border: 1px solid #c5c5c5;
  padding: 20px;
  width: 30%;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
}
.horizontal-line {
  border-color: #c5c5c5;
}
.recent-content {
  margin-top: 90px;
}
</style>