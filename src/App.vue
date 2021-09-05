<template>
  <div id="app" class="container-fluid p-0 m-0 app">
    <navbar />
    <router-view />
    <page-footer />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import PageFooter from "./components/PageFooter.vue";
export default {
  components: { Navbar, PageFooter },
  setup() {},
};
</script>
<style lang="scss">
@font-face {
  font-family: LifeCraft;
  src: url("~@/assets/fonts/LifeCraft_Font.ttf");
}

.app {
  display: grid;
  grid-template:
    "navbar"
    "content"
    "footer";
  grid-template-rows: auto 1fr auto;
  background-image: url("~@/assets/bg2.jpg");
  background-position: center;
  background-size: cover;
  min-width: 100%;
  min-height: 100vh;
}
</style>
