<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 py-2 text-white text-start">
          <small>Made with <i class="far fa-heart"></i> byTeam OZE - Legion TD @ {{ new Date().getFullYear() }}</small>. <span class="text-small"> <i class="fas fa-code" title="coded"></i> by <a href="https://victorz.me">zapo</a></span>
        </div>
        <div class="col-12 col-md-6 py-2 text-white text-end">
          <ul>
            <li v-for="item in social" :key="item.name">
              <div v-html="item.icon"></div>
              <small><a :href="item.link">{{ item.name }}</a></small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "PageFooter",
  setup() {
    const store = useStore();
    const socialItems = store.state.social;
    const social = ref(socialItems);
    return { social };
  },
};
</script>

<style lang="scss" scoped>
footer {
  grid-area: footer;
  background-image: url("~@/assets/stone.jpg");
  position: sticky;
  bottom:0;
  background-repeat: repeat;
  background-size: contain;
  &:after {
    position: absolute;
    background-image: url("~@/assets/br.png");
    background-size: contain;
    background-repeat: repeat-x;
    background-position: center;
    content: "";
    width: 100%;
    height: 10px;
    left: 0;
    top: -8px;
  }
  font-size: smaller;
  & ul {
    margin: 0;
    & li {
      display: inline-flex;
      list-style-type: none;
      padding: 0 5px;
      color: var(--bs-blue);
      gap:3px;
    }
  }
}

</style>