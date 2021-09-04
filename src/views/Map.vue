<template>
  <section class="container h-100">
    <div class="h-100 row py-4 align-items-center">
      <div class="col-12 h-100 p-0 m-0 border-w3 map text-left">
        <div class="map__data p-3">
          <h1 class="text-left">
            <img src="@/assets/map.png" class="img-fluid" /> About Legion
            TD Map
          </h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies elementum consectetur. Curabitur pretium arcu eget ligula
            porta viverra. Nulla tristique nisi vel urna auctor condimentum.
            Cras quis ipsum sodales, posuere tellus at, tempor felis. Aliquam
            vehicula augue vitae velit gravida lobortis. Duis ullamcorper, augue
            nec scelerisque pellentesque, metus erat euismod mi, eget ultricies
            est risus vitae neque. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed dui orci, laoreet ac
            sollicitudin eu, feugiat eget arcu. Nulla quis massa faucibus,
            gravida mauris sed, eleifend mi. Phasellus pellentesque, libero id
            suscipit finibus, sem neque commodo est, vel efficitur nisi ex in
            mauris. Aliquam erat volutpat. Phasellus ut vehicula metus,
            consequat porta neque. Proin lacinia malesuada odio vel volutpat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies elementum consectetur. Curabitur pretium arcu eget ligula
            porta viverra. Nulla tristique nisi vel urna auctor condimentum.
            Cras quis ipsum sodales, posuere tellus at, tempor felis. Aliquam
            vehicula augue vitae velit gravida lobortis. Duis ullamcorper, augue
            nec scelerisque pellentesque, metus erat euismod mi, eget ultricies
            est risus vitae neque. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed dui orci, laoreet ac
            sollicitudin eu, feugiat eget arcu. Nulla quis massa faucibus,
            gravida mauris sed, eleifend mi. Phasellus pellentesque, libero id
            suscipit finibus, sem neque commodo est, vel efficitur nisi ex in
            mauris. Aliquam erat volutpat. Phasellus ut vehicula metus,
            consequat porta neque. Proin lacinia malesuada odio vel volutpat.
          </p>
          <hr />
          <div class="row">
            <div class="col-sm-12 col-md-5">
              <div class="htw">
                <h2><img src="@/assets/play.png" width="36" /> How to Play</h2>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/dnmT0UnjzjE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="col-sm-12 col-md-2 text-center align-self-center">
              <img src="@/assets/orc_crest.png" class="img-fluid" />
            </div>
            <div class="col-sm-12 col-md-5 justify-content-between">
              <h2>
                <img src="@/assets/changelogs.png" width="36" /> Change logs
              </h2>

              <ul class="mb-5 p-0 mx-3 m-auto">
                <li>
                  To view the changelogs please go
                  <a :href="w3link">here</a>.
                </li>
              </ul>
              <hr />
              <h2 class="pt-5">
                <img src="@/assets/dl.png" width="36" /> Download
              </h2>
              <ul class="p-0 mx-3 m-auto">
                <li>
                  To download the official map below
                  <button class="btn w-50">
                    <a :href="w3link">Download</a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div class="container p-0 m-0">
            <h2> <img src="@/assets/info.png" class="img-fluid" /> Map information</h2>

            <details>
              <summary><h3 class="d-inline-flex">Heroes</h3></summary>

              <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col" v-for="hero in heroes" :key="hero.name">
                  <div class="card border-w3  mx-2" :key="hero.name">
                    <div class="card-body text-white">
                      <h5 class="card-title"> <img src="@/assets/dread.png" class="img-fluid" /> {{ hero.name }}</h5>
                      <div class="card-text">
                        <ul class="row row-cols-1 row-cols-md-2 g-4">
                          <li class="col">
                            Cost:{{hero.cost}}
                          </li>
                          <li class="col">
                            Hp:{{hero.hp}}
                          </li>
                          <li class="col">
                            Dmg:{{hero.dmg}}
                          </li>
                          <li class="col">
                            Armor:{{hero.armor}}
                          </li>
                        </ul>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import heroes from "@/assets/heroes.json";
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Map",
  setup() {
    const store = useStore();
    const w3mapsLink = store.state.social[2].link;
    const w3link = ref(w3mapsLink);
    return { w3link, heroes };
  },
};
</script>
<style lang="scss" scoped>
.map {
  display: grid;
  &__data {
    background-image: url("~@/assets/pl.jpg");
    width: 100%;
    height: 100%;
    & p {
      padding: 0;
    }
  }
  & .card{
    background:transparent;
    background-image: url("~@/assets/pd.jpg");

  }
}
</style>
