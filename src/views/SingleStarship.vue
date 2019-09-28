<template>
  <div class="hero-image mx-auto">
    <div class="logo">
      <router-link to="/">
        <img src="./../assets/logo.png" width="90px" />
      </router-link>
    </div>
    <vue-glide :perView="1" class="image-ax flex justify-center items-center">
      <vue-glide-slide class="flex justify-center items-center">
        <img src="./../assets/starship-1.jpg" class="img-slide" />
      </vue-glide-slide>
      <vue-glide-slide class="flex justify-center items-center">
        <img src="./../assets/starship-2.jpg" class="img-slide" />
      </vue-glide-slide>
      <vue-glide-slide class="flex justify-center items-center">
        <img src="./../assets/starship-3.jpg" class="img-slide" />
      </vue-glide-slide>
      <template slot="control">
        <button
          data-glide-dir="<"
          class="absolute border-4 rounded-full h-16 w-16"
          style="top:calc(72%);right:8%"
        >
          <font-awesome-icon :icon="['fas','caret-left']" class="dir-icon" />
        </button>
        <button
          data-glide-dir=">"
          class="absolute border-4 rounded-full h-16 w-16"
          style="top:calc(72%);right:10px;"
        >
          <font-awesome-icon :icon="['fas','caret-right']" class="dir-icon" />
        </button>
      </template>
    </vue-glide>
  </div>
</template>

<script>
export default {
  name: "SingleStarship",
  data() {
    return {
      shipId: this.$route.params.shipId,
      info: {}
    };
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
</style>