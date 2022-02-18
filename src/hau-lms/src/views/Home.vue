<template>
  <v-container class="hau hau-home-page">
    <v-row class="hau hau-home hau-landing-wrap text-center">
      <v-col cols="12">
        <BrandIcon class="hau hau-icon" />
        <h1 class="hau hau-message">
          Advancing human knowledge through
          <span>Artificial Intelligence</span>
        </h1>
        <h1 class="hau hau-describe">
          Our goal is to contribute in addressing the issues of our education
          system so it could fit the needs of modern society.
        </h1>
        <v-btn
          class="mx-auto mt-12"
          color="success"
          dark
          elevation="0"
          x-large
          @click="onStart"
        >
          Start learning
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BrandIcon from "../icons/BrandIcon.vue";

export default {
  components: {
    BrandIcon,
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
    max-width: 70vw;
    margin: auto;

    .hau.hau-message {
      font-family: "Amatic SC", cursive;
      font-size: 36px;
      margin: auto;
      color: white;
    }
    .hau.hau-describe {
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
      .hau.hau-message {
        font-size: 72px;
        max-width: 960px;
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
