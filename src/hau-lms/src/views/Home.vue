<template>
  <v-container class="hau hau-home-page pa-0">
    <v-parallax dark class="hau hau-parallax" :src="bannerUrl">
      <v-overlay value="true" absolute :opacity="0.8" color="black">
        <v-row class="hau hau-home hau-landing-wrap text-center">
          <v-col cols="12">
            <h1 class="hau hau-message">
              Advancing the Human Race Through A.I.
            </h1>
            <h1 class="hau hau-describe">
              Our goal is to contribute in addressing the issues of our
              education system.
            </h1>
            <v-btn
              class="mx-auto mt-12 light-green darken-2"
              elevation="0"
              x-large
              @click="onStart"
            >
              <v-icon class="mr-2 mt-0">
                mdi-arrow-right-drop-circle-outline
              </v-icon>
              <span class="mt-1">Learn Now</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-overlay>
    </v-parallax>
  </v-container>
</template>

<script>
export default {
  components: {},
  methods: {
    onStart() {
      this.$router.push("/courses");
    },
  },
  computed: {
    bannerUrl() {
      let portName = this.$vuetify.breakpoint.name;
      let isMobile = portName === "xs" || portName === "sm";
      let widthQuery = isMobile ? "&w=520" : "&w=1170";

      return `https://images.unsplash.com/photo-1582592641306-277abdcdbb7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80${widthQuery}`;
    },
  },
};
</script>

<style lang="scss">
$primary-color: #313135;
$secondary-color: #e1e1e1;

html,
body .theme--light.v-application {
  max-height: 100vh;
  overflow-y: hidden;
}

.hau.hau-home-page {
  min-height: 100vh;
  min-width: 100vw;
  background-color: $primary-color;

  .hau.hau-parallax {
    min-height: 100vh;
    max-height: 100vh;
  }

  .hau.hau-home.hau-landing-wrap {
    max-width: 95vw;
    margin: auto;

    .hau.hau-message {
      font-family: "Oxygen";
      font-size: 24px;
      margin: auto;
      color: white;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .hau.hau-describe {
      font-family: "Oxygen";
      font-size: 16px;
      margin: auto;
      margin-top: 12px;
      color: $secondary-color;
      font-weight: 400;
      max-width: 420px;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
}

@media (min-width: 1400px) {
  .hau.hau-home-page {
    .hau.hau-home.hau-landing-wrap {
      max-width: 70vw;

      .hau.hau-message {
        font-size: 62px;
        max-width: 820px;
      }

      .hau.hau-describe {
        font-size: 16px;
        margin: auto;
        margin-top: 32px;
        max-width: 524px;
      }
    }
  }
}
</style>
