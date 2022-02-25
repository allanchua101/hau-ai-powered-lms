<template>
  <v-container class="hau hau-home-page">
    <v-row class="hau hau-home hau-landing-wrap text-center">
      <v-col cols="12">
        <RobotIcon class="hau hau-icon" />
        <h1 class="hau hau-message">Advancing the Human Race Through A.I.</h1>
        <h1 class="hau hau-describe">
          Our goal is to contribute in addressing the issues of our education
          system.
        </h1>
        <v-btn
          class="mx-auto mt-12"
          color="white"
          elevation="0"
          x-large
          @click="onStart"
        >
          <v-icon class="mr-2 mt-0">mdi-arrow-right-drop-circle-outline</v-icon>
          <span class="mt-1">Learn Now</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RobotIcon from "../icons/RobotIcon.vue";

export default {
  components: {
    RobotIcon,
  },
  methods: {
    onStart() {
      this.$router.push("/courses");
    },
  },
};
</script>

<style lang="scss">
$primary-color: #313135;
$secondary-color: #e1e1e1;

.hau.hau-home-page {
  min-height: 110vh;
  min-width: 100vw;
  background-color: $primary-color;

  .hau.hau-home.hau-landing-wrap {
    max-width: 95vw;
    margin: auto;

    .hau.hau-message {
      font-family: "Oxygen";
      font-size: 24px;
      margin: auto;
      color: white;
    }

    .hau.hau-describe {
      font-family: "Oxygen";
      font-size: 16px;
      margin: auto;
      margin-top: 12px;
      color: $secondary-color;
      font-weight: 400;
      max-width: 420px;
    }

    .hau.hau-icon {
      min-width: 200px;
      max-width: 200px;
      margin-top: 32px;

      & path,
      & rect {
        fill: $secondary-color;
      }
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
