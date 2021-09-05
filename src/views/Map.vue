<template>
  <section class="container h-100">
    <div class="h-100 row py-4 align-items-center">
      <div class="col-12 h-100 p-0 m-0 border-w3 map text-left">
        <div class="map__data p-3">
          <h1 class="text-left">
            <img src="@/assets/map.png" class="img-fluid" /> About Legion TD Map
          </h1>
          <hr />
          <p>
            An infinitely replayable multiplayer and single-player tower
            defense. Defend against waves of enemies and destroy the enemy's
            king before they destroy yours. You can play games of 1v1, 2v2 or
            3v3 or 4v4 depening on how you want.<br />
            There are 2 sides West and East, each with 4 players. You must
            choose from a pool of 6 unites each round. Depening on the mode
            choosen there can be up to 30 rounds. <br />
            Economy is another important part so be careful how you upgrade your
            lumber and send units from the barracks for better income. <br />
            Each monster gievs money when killed. If you do not clear all your
            wave, the enemy will go towards the middle and the king. If your
            king loses all his 4 lives the team loses the game.
          </p>
          <p>For more view the below video, join the <a :href="discordLink">Discord</a> community and play the game.</p>
          <p>
            Don't forget, if you don't play alone be a team player. And be nice. Have fun!
            :)
          </p>
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
            <div
              class="
                col-sm-12 col-md-5
                p-0
                text-white
                justify-content-between
                border-w3
              "
            >
              <div class="map__info p-3 text-center">
                <h2 class="text-warning">
                  <img src="@/assets/changelogs.png" width="36" /> Change logs
                </h2>

                <ul class="p-0 mx-3 m-auto">
                  <li>
                    To view the changelogs please here
                    <button class="btn w-50">
                      <a :href="w3link">Change logs</a>
                    </button>
                  </li>
                </ul>
                <hr />
                <h2 class="text-danger">
                  <img src="@/assets/dl.png" width="36" /> Download
                </h2>
                <ul class="p-0 mx-3 m-auto">
                  <li>
                    To download the official
                    <button class="btn w-50">
                      <a :href="w3link">Download</a>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Map",
  setup() {
    const store = useStore();
    const w3mapsLink = store.state.social[2].link;
    const discordLink = store.state.social[0].link;
    const w3link = ref(w3mapsLink);
    return { w3link,discordLink };
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
  & .card {
    background: transparent;
    background-image: url("~@/assets/pd.jpg");
  }
  &__info {
    background-image: url("~@/assets/pd.jpg");
  }
}
</style>
