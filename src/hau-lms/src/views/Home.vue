<template>
  <v-container class="hau hau-home-page">
    <v-row class="hau hau-home hau-landing-wrap text-center">
      <v-col cols="12">
        <BrandIcon class="hau hau-icon" />
        <typewriter :type-interval="35">
          <h1 class="hau hau-message">Advancing the Human Race Through A.I.</h1>
        </typewriter>
        <h1 class="hau hau-describe">
          Our goal is to contribute in addressing the issues of our education
          system for the betterment of the society.
        </h1>
        <v-btn
          class="mx-auto mt-12"
          color="success"
          dark
          elevation="0"
          x-large
          @click="onStart"
        >
          <v-icon class="mr-2 mt-0">mdi-arrow-right-drop-circle-outline</v-icon>
          <span class="mt-1">Start learning</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BrandIcon from "../icons/BrandIcon.vue";
import Typewriter from "typewriter-vue";

export default {
  components: {
    BrandIcon,
    Typewriter,
  },
  methods: {
    onStart() {
      this.$router.push("/courses");
    },
  },
};
</script>

<style lang="scss">
$primary-color: #272727;

.hau.hau-home-page {
  min-height: 110vh;
  min-width: 100vw;
  background-color: $primary-color;

  .hau.hau-home.hau-landing-wrap {
    max-width: 95vw;
    margin: auto;

    .hau.hau-message {
      font-family: "Amatic SC", cursive;
      font-family: "Oxygen";
      font-size: 24px;
      margin: auto;
      color: white;
    }
    .hau.hau-describe {
      font-family: "Oxygen";
      font-size: 18px;
      margin-top: 32px;
      font-weight: lighter;
      color: white;
    }

    .hau.hau-icon {
      min-width: 200px;
      max-width: 200px;
      margin-top: 64px;
    }
  }
}

@media (min-width: 1400px) {
  .hau.hau-home-page {
    .hau.hau-home.hau-landing-wrap {
      max-width: 70vw;

      .hau.hau-message {
        font-size: 72px;
        max-width: 960px;
        min-height: 220px;
      }
      .hau.hau-describe {
        font-size: 16px;
        margin: auto;
        margin-top: 24px;
      }
    }
  }
}
</style>
