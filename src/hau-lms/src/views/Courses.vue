<template>
  <v-container class="hau hau-courses">
    <v-row>
      <v-col cols="12">
        <h1>Courses</h1>
      </v-col>
      <v-col
        v-for="course in courseList"
        :key="course.id"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card elevation="2">
          <v-card-text>
            {{ course.courseTitle }}
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Add a list of cards that present information available courses -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    courseList() {
      return this.$store.getters.courseList;
    },
  },
};
</script>

<style>
.hau.hau-courses {
  max-width: 920px;
  margin: auto;
}
</style>
