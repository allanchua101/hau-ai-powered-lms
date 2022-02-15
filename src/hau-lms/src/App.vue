<template>
  <v-app class="hau hau--app">
    <!-- Application bar -->
    <v-app-bar app color="#272727" dark elevation="0" dense>
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2 hau hau-logo"
          contain
          src="imgs/logo.svg"
          transition="scale-transition"
          width="32"
          @click="onLogoClick"
        />
        HAU AI - Collator
      </div>
      <v-spacer></v-spacer>
      <v-menu v-if="isMobile" bottom left transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <!-- Drawer -->
    <v-navigation-drawer
      v-if="!isMobile"
      v-model="drawer"
      permanent
      absolute
      :mini-variant.sync="mini"
    >
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
    <v-main class="hau hau-main-view">
      <router-view />
    </v-main>
    <ChatbotModal />
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          fab
          dark
          large
          color="#710e1d"
          v-bind="attrs"
          v-on="on"
          bottom
          right
          fixed
          @click="onChatbotClicked"
        >
          <v-icon>mdi-robot</v-icon>
        </v-btn>
      </template>
      <span>Have a discussion with our learning assistant John</span>
    </v-tooltip>
  </v-app>
</template>

<script>
import ChatbotModal from "./components/ChatbotModal.vue";

export default {
  name: "App",
  components: {
    ChatbotModal,
  },
  data: () => ({
    items: [
      { title: "Courses", icon: "mdi-home", route: "/" },
      { title: "Our Team", icon: "mdi-account-group-outline", route: "/team" },
      {
        title: "About our Project",
        icon: "mdi-information-outline",
        route: "/about",
      },
    ],
    drawer: true,
    mini: true,
  }),
  computed: {
    fullName() {
      if (this.$store) {
        return this.$store.getters.fullName;
      }

      return "";
    },
    isMobile() {
      let bpName = this.$vuetify.breakpoint.name;

      return bpName === "xs" || bpName === "sm";
    },
  },
  methods: {
    onLogoClick() {
      this.$router.push({
        path: "/",
      });
    },
    onChatbotClicked() {
      this.$store.dispatch("openChatbot");
    },
  },
  mounted() {
    setInterval(() => {
      this.mini = true;
      this.drawer = true;
    }, 3000);
  },
};
</script>

<style lang="scss">
.hau.hau--app {
  padding-top: 40px;

  .hau.hau-main-view {
    padding-top: 24px !important;
  }

  .container.hau {
    padding: 0 8px;
  }
}

.hau.hau-logo {
  cursor: pointer;
}

@media (min-width: 960px) {
  .hau.hau--app {
    padding-top: 48px;

    .hau.hau-main-view {
      padding-top: 12px !important;
    }

    .container.hau {
      padding: 12px;
      padding-left: 64px;
    }
  }
}
</style>
