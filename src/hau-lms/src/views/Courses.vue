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
        <v-card elevation="0" outlined>
          <v-img :src="course.courseBanner" height="200px"></v-img>
          <v-card-text>
            <h5 class="hau hau-course-title">{{ course.courseTitle }}</h5>
            <p class="hau hau-course-author">{{ course.author }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="ma-2"
              outlined
              color="#202024"
              @click="() => onClick(course.id)"
            >
              <v-icon class="mr-1">mdi-monitor-eye</v-icon>
              View
            </v-btn>
          </v-card-actions>
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
  methods: {
    onClick(id) {
      this.$router.push({
        path: "/course/view/?id=" + id,
      });
    },
  },
};
</script>

<style lang="scss">
.hau.hau-courses {
  padding-left: 64px;
  max-width: 920px;
  margin: auto;

  .hau.hau-course-title {
    font-size: 14px;
    color: #202024;
  }

  .hau.hau-course-author {
    font-size: 12px;
    color: #5a5959;
  }
}

@media (min-width: 960px) {
  .hau.hau-courses {
    padding-left: 0;
  }
}
</style>
