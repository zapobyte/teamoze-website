<template>
  <nav class="navbar navbar-expand-lg navbar-dark py-2">
    <div class="container">
      <router-link class="navbar-brand" to="/">TEAM OZE</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              <span>About</span>
            </router-link>
          </li>
          <li class="nav-item px-2">
            <img src="@/assets/bullet2.gif" />
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              <span>Map</span>
            </router-link>
          </li>
          <li class="nav-item px-2">
            <img src="@/assets/bullet2.gif" />
          </li>
          <li class="nav-item">
            <a href="https://discord.com/invite/dhtvnvH" class="nav-link">
              <span><i class="fab fa-discord"></i>  Discord</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  grid-area: navbar;
  background-image: url("~@/assets/stone.jpg");
  background-repeat: repeat;
  background-size: contain;
  position: relative;
  &-brand {
    font-family: LifeCraft, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 2px 2px 5px black;
  }
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
    bottom: -10px;
  }
  & ul {
    & li {
      & a {
        & span {
          white-space: nowrap;
          width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        box-shadow: 3px 3px 3px black;
        background-image: url("~@/assets/title-bg.gif");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        align-items: center;
        width: 125px;
        display: grid;
        place-items: center;
        padding: 3px 0;
        grid-template-columns: auto;
        position: relative;
        font-size: 1em;
        &:before {
          background-image: url("~@/assets/title-left.gif");
          position: absolute;
          content: "";
          left: 0;
          width: 10px;
          top: 0;
          height: 100%;
          background-size: cover;
        }
        &:after {
          background-image: url("~@/assets/title-right.gif");
          position: absolute;
          background-size: cover;
          content: "";
          right: 0;
          background-position: right;
          z-index: 9999;
          width: 10px;
          top: 0px;
          height: 100%;
        }
        &:hover {
          filter: brightness(120%);
          box-shadow: 4px 4px 3px black;
        }
      }
    }
  }
}
.nav-link {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
