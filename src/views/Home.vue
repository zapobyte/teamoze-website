<template>
  <div class="container">
    <div class="row align-items-center h-100">
      <div class="col-sm-12 col-md-8 align-items">
        <div class="border-w3">
          <div class="banner-text p-3">
            <img src="@/assets/logo.png" class="img-fluid logo" />
            <h1>Welcome to Legion TD Team OZE</h1>
            <hr />
            <p>
              Legion TD is an evolved Tower Defense game. It was originally
              created by Lisk. Since then, it’s original foundation has been
              altered by many developers and their teams in their own vision,
              creating a more feature rich, balanced and competitive map.
            </p>
            <router-link to="about"><button class="btn px-5 text-white" type="submit">Read more</button></router-link>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4 text-center">
        <div class="border-w3 h-100 map-preview">
          <img src="@/assets/ltd.jpg" />
          <p class="text-white">Latest version: 7.0d</p>
          <button class="btn text-white" type="submit">Download</button>
        </div>
        <div class="text-white view-logs py-1">
          <img src="@/assets/scroll2.png" style="width:28px" /> Click here to view the
          <span>change logs </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.container {
  grid-area: content;
  align-self: center;
}

.banner-text {
  background-image: url("~@/assets/pl.jpg");
  background-size: contain;
  background-position: center;
}

.map-preview {
  min-height: 350px;
  position: relative;
  display: flex;
  align-items: center;
  & img {
    position: absolute;
    height: 100%;
    left: 0;
    width: 100%;
  }
  & p {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    z-index: 9999;
    place-self: center;
    text-shadow: 2px 2px 1px black;
    display: inline-block;
    margin: auto;
  }
  & .btn {
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
    width: 90%;
    margin: auto;
    &:hover {
      filter: brightness(120%);
    }
    @media screen and (min-width: 640px) {
      width: 60%;
    }
  }
}
.logo {
  max-width: 256px;
}
.view-logs {
  text-shadow: 1px 1px 1px black;
  cursor: pointer;
  &:hover {
    & > span {
      color: var(--bs-yellow);
    }
  }
}
</style>