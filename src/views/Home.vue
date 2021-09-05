<template>
  <div class="container">
    <div class="row  py-3 align-items-center h-100">
      <div class="col-sm-12 col-md-8 align-items">
        <div class="border-w3">
          <div class="banner-text p-3 text-center">
            <img src="@/assets/logo.png" class="img-fluid logo" />
            <h1 class="text-left">Welcome to <b>Legion TD Team OZE</b></h1>
            <hr />
            <p class="text-start">
              <b>Legion TD</b> is an evolved Tower Defense game. It was originally
              created by Lisk. Since then, it’s original foundation has been
              altered by many developers and their teams in their own vision,
              creating a more feature rich, balanced and competitive map.
            </p>
            <br />
            <router-link to="about"
              ><button class="btn px-5 text-white" type="submit">
                Read more
              </button></router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4 text-center">
        <div class="border-w3 h-100 map-preview mb-1">
          <img src="@/assets/ltd.jpg" />
          <button class="btn text-white" type="submit">
            <router-link to="/map">Go to map</router-link>
          </button>
        </div>
        <div class="border-w3 h-100 d-flex aling-items-center text-white">
          <div class="patreon p-3">
            <p class="m-0 p-0">
             If you want to support us
              please check our Patreon page!<br />
            </p>
            <span><i class="fas fa-heart"></i> Thank you!</span><br>
            <button class="btn text-white" type="submit">
              <a :href="plink" class="p-2"
                ><i class="fab fa-patreon"></i> Patreon</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  components: {},
  setup() {
    const store = useStore();
    const w3mapsLink = store.state.social[2].link;
    const w3link = ref(w3mapsLink);
    const patreon = store.state.social[3].link;
    const plink = ref(patreon);
    return { w3link, plink };
  },
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
}
.patreon {
  background-image: url("~@/assets/pd.jpg");
}
</style>