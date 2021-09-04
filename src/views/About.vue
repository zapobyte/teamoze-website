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
            Legion TD is an evolved Tower Defense game. It was originally
            created by Lisk. Since then, it’s original foundation has been
            altered by many developers and their teams in their own vision,
            creating a more feature rich, balanced and competitive map.
          </p>
          <p>
            Team OZE was established in 2020 in collaboration with one of the
            co-creators from previous version 4.7. Since then, it has become a
            community project involving as many Legion TD fans as possible,
            working as a unity to create the polished version it is today. Our
            goal has been to improve the map while keeping the core mechanics of
            the game in place and make this map enjoyable for players of all
            skill levels.
          </p>
          <p>
            With the lack of an integrated ranking system, we decided to take
            matters into our own hands and started hosting our own ‘league’
            games from discord. We host ranked 1vs1, 2vs2 and casual 4vs4 games
            and events.
          </p>
          <h4>Authors of the latest versions:</h4>
          <div>
            <img src="@/assets/vlads.png" /> <span>SchachMatt</span>
            <br />
            <br />
            <img src="@/assets/build.png" /> <span>Team OZE</span>
          </div>
          <h4>Thanks for the support of <a href="https://www.w3champions.com/">W3Champions</a> community!</h4>
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
    return { social };
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
