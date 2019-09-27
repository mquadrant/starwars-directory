<template>
  <div class="hero-image">
    <div class="logo">
      <img src="./../assets/logo.png" width="90px" />
    </div>
    <div class="hero-text">
      <div class="mx-auto content-logo">
        <img src="./../assets/logo.png" width="90px" />
        <span style="font-size:28px;font-weight:900">Directory</span>
      </div>
      <p class="hero-subtext" style="font-size:17px;font-weight:100">
        Find your favorite Characters, Films, Species,
        <br />Starships and Planets
      </p>
      <div class="input-icons">
        <font-awesome-icon :icon="['fas','search']" class="search-icon" />
        <input class type="text" placeholder="Enter a search term" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner"
};
</script>

<style scoped>
.hero-image {
  background-image: url("../assets/hero-banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 500px;
}
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.hero-subtext {
  margin-top: 15px;
  margin-bottom: 25px;
}
.logo img {
  position: absolute;
  margin-left: 30px;
  margin-top: 15px;
}
.content-logo {
  width: 50%;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #fff;
}
.content-logo img,
.content-logo span {
  display: inline;
  vertical-align: middle;
}
.content-logo span {
  margin-left: 10px;
}
input[type="text"] {
  padding: 6px;
  padding-bottom: 8px;
  padding-left: 80px;
  width: 500px;
  color: #000;
  background: #faf8f7;
  border-radius: 5px;
  outline: none;
}
input[type="text"]::placeholder {
  font-size: 13px;
  color: #3e464c;
}
.input-icons {
  position: relative;
  width: 100%;
  margin-bottom: 10px;
}
.input-icons .search-icon {
  position: absolute;
  color: #3e464c;
  font-size: 18px;
  font-weight: 0px;
  bottom: 10px;
  left: 40px;
}

.icon {
  padding: 10px;
  min-width: 40px;
}
</style>