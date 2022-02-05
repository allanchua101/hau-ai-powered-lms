<template>
  <v-app class="hau hau--app">
    <v-app-bar app color="#272727" dark elevation="0">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="imgs/logo.svg"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      absolute
      :mini-variant.sync="mini"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>John Leider</v-list-item-title>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="item.route">
                {{ item.title }}
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home", route: "/" },
      { title: "Courses", icon: "mdi-book", route: "/courses" },
      { title: "Our Team", icon: "mdi-account-group-outline", route: "/team" },
      {
        title: "About our Project",
        icon: "mdi-information-outline",
        route: "/about",
      },
    ],
    mini: true,
  }),
};
</script>

<style lang="scss">
.hau.hau--app {
  padding-top: 52px;
}

@media (min-width: 960px) {
  .hau.hau--app {
    padding-top: 64px;
  }
}
</style>
