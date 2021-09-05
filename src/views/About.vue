<template>
  <section class="container h-100">
    <div class="h-100 row py-4 align-items-center">
      <div class="col-12 about border-w3 p-0 m-0">
        <div class="about__data p-3">
          <div class="about__data__header">
            <img src="@/assets/heals.png" class="img-fluid" />
            <h1 class="p-0 m-0">About this project</h1>
          </div>
          <hr />
          <p>
            <b>Legion TD</b> is an evolved Tower Defense game. It was originally
            created by Lisk. Since then, it’s original foundation has been
            altered by many developers and their teams in their own vision,
            creating a more feature rich, balanced and competitive map.
          </p>
          <p>
            <b>Team OZE</b> was established in 2020 in collaboration with one of
            the co-creators from previous version 4.7. Since then, it has become
            a community project involving as many <b>Legion TD</b> fans as
            possible, working as a unity to create the polished version it is
            today. Our goal has been to improve the map while keeping the core
            mechanics of the game in place and make this map enjoyable for
            players of all skill levels.
          </p>
          <p>
            With the lack of an integrated ranking system, we decided to take
            matters into our own hands and started hosting our own ‘league’
            games from discord. We host ranked 1vs1, 2vs2 and casual 4vs4 games
            and events.
          </p>
          <p>
            If you want to join the community, play ranked games or just hang
            out come join our <i class="fab fa-discord"></i>
            <a :href="ds.link">Discord Server</a>!
          </p>

          <h2>Authors of the latest versions:</h2>
          <div class="d-flex align-items-center">
            <div class="d-flex align-items-center">
              <img src="@/assets/bullet1.gif" class="me-2" />
              <img src="@/assets/vlads.png" />
              <h5 class="px-2">SchachMatt</h5>
            </div>
            <div class="d-flex align-items-center">
              <img src="@/assets/bullet1.gif" class="me-2" />
              <img src="@/assets/build.png" />
              <h5 class="px-2">Team OZE</h5>
            </div>
          </div>
          <h4 class="py-3">
            <img src="@/assets/plus.png" width="36" /> Thanks for the support of
            <a href="https://www.w3champions.com/">W3Champions</a> community and
            <a href="https://maps.w3reforged.com/"> maps.w3reforged.com</a>!
          </h4>
          <div class="text-center">
            <a href="https://www.w3champions.com/"><img src="@/assets/w3champions.png" class="pb-3 img-fluid" /></a>
            <br>
             <a href="https://maps.w3reforged.com/"><img
              src="@/assets/logo-warcraft3-reforged-map-database.png"
              class="img-fluid"
            /></a>
          </div>
          <hr />

          <h4>Find us on:</h4>
          <div class="about__data__social">
            <ul>
              <li v-for="item in social" :key="item.name">
                <div v-html="item.icon"></div>
                <a :href="item.link">{{ item.name }}</a>
              </li>
            </ul>
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
  name: "About",
  setup() {
    const store = useStore();
    const socialItems = store.state.social;
    const social = ref(socialItems);
    const ds = socialItems.find((item) => {
      console.log(item);
      if (item.name == "Discord") return item;
    });
    return { social, ds };
  },
};
</script>
<style lang="scss" scoped>
.about {
  text-align: justify;
  display: grid;
  &__data {
    &__header {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    background-image: url("~@/assets/pl.jpg");
    width: 100%;
    height: 100%;
    & p {
      padding: 0;
    }
    &__social {
      & ul {
      }
      & li {
        & div {
          display: inline-flex;
          padding-right: 5px;
        }
        color: black;
        padding-left: 8 px;
        & a {
          color: black;
          &:hover {
            color: var(--bs-blue);
          }
        }
      }
    }
  }
}
</style>
