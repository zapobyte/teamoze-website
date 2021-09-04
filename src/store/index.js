import { createStore } from 'vuex'

export default createStore({
  state: {
    social:[
      {
        name: "Discord",
        icon: '<i class="fab fa-discord"></i>',
        link: "https://discord.com/invite/dhtvnvH",
      },
      {
        name: "Github",
        icon: '<i class="fab fa-github"></i>',
        link: "https://github.com/Team-OZE/LegionTD-Map",
      },
      {
        name: "w3maps",
        icon: '<i class="fas fa-map"></i>',
        link: "https://maps.w3reforged.com/featured-maps/legion-td-team-oze",
      },
      {
        name: "Patreon",
        icon: '<i class="fab fa-patreon"></i>',
        link: "https://maps.w3reforged.com/featured-maps/legion-td-team-oze",
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
