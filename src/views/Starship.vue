<template>
  <div>
    <Banner />
    <div class="container mx-auto px-4">
      <StarshipSection />
    </div>
  </div>
</template>
<script>
import Banner from "../components/layouts/Banner";
import StarshipSection from "../components/layouts/Starship";
export default {
  name: "Starship",
  components: { Banner, StarshipSection }
};
</script>

<style lang="stylus" scoped></style>