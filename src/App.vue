<template>
  <div id="app" class="container-fluid p-0 m-0">
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

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: LifeCraft;
  font-size: 22px;
}
a {
  color: var(--bs-blue);
  &:hover {
    color: var(--bs-orange);
  }
}
#app {
  background-image: url("~@/assets/bg2.jpg");
  text-align: center;
  background-position: center;
  background-size: cover;
  min-width: 100%;
  min-height: 100vh;
}
.container-fluid {
  display: grid;
  grid-template:
    "navbar"
    "content"
    "footer";
  grid-template-rows: auto 1fr;
  grid-auto-columns: 1fr;
}
.btn {
  background-image: url("~@/assets/button.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    filter: brightness(120%);
  }
}

.border-w3 {
  border: 19px solid #000;
  border-image: url("~@/assets/metal-border2.png") 38 repeat;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    top: calc(-19.5px);
    left: calc(-20px);
    bottom: calc(-19px);
    right: calc(-18px);
    pointer-events: none;
    background: url("~@/assets/metal-border2-top-left.png") no-repeat top left,
      url("~@/assets/metal-border2-top-right.png") no-repeat top right,
      url("~@/assets/metal-border2-bottom-left.png") no-repeat bottom left,
      url("~@/assets/metal-border2-bottom-right.png") no-repeat bottom right;
    background-size: 104px auto, 112px auto, 196px auto, 155px auto;
  }
}
</style>
