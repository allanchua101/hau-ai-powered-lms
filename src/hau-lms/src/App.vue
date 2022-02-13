<template>
  <v-app class="hau hau--app">
    <!-- Application bar -->
    <v-app-bar app color="#272727" dark elevation="0">
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          contain
          src="imgs/logo.svg"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <!-- Drawer -->
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
        <v-list-item-title>{{ fullName }}</v-list-item-title>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Router -->
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
      { title: "Courses", icon: "mdi-home", route: "/" },
      { title: "Our Team", icon: "mdi-account-group-outline", route: "/team" },
      {
        title: "About our Project",
        icon: "mdi-information-outline",
        route: "/about",
      },
    ],
    mini: true,
  }),
  computed: {
    fullName() {
      if (this.$store) {
        return this.$store.getters.fullName;
      }

      return "";
    },
  },
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
