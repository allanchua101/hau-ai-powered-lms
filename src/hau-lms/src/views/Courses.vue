<template>
  <v-container class="hau hau-courses">
    <v-row>
      <v-col cols="12" class="d-flex flex-row">
        <CourseIcon class="hau hau-course-icon d-flex mr-2" />
        <h1 class="d-flex hau hau-page-title">Let's start learning</h1>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-text-field
          v-model="filterText"
          label="Search by course name"
          clearable
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-col
        v-for="course in courseList"
        :key="course.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-slide-y-transition>
          <v-card
            elevation="0"
            outlined
            v-show="true"
            @click="() => onClick(course.id)"
          >
            <v-img :src="course.courseBanner" height="200px"></v-img>
            <v-card-text>
              <h5 class="hau hau-course-title">{{ course.courseTitle }}</h5>
              <p class="hau hau-course-author mb-0 pb-0">{{ course.author }}</p>
            </v-card-text>
          </v-card>
        </v-slide-y-transition>
      </v-col>
      <!-- Add a list of cards that present information available courses -->
    </v-row>
  </v-container>
</template>

<script>
import CourseIcon from "../icons/CoursesIcon.vue";

export default {
  components: {
    CourseIcon,
  },
  computed: {
    courseList() {
      if (this.filterText) {
        let cleansedText = this.filterText.toLowerCase();

        return this.$store.getters.courseList.filter(
          (i) => i.courseTitle.toLowerCase().indexOf(cleansedText) > -1
        );
      }

      return this.$store.getters.courseList;
    },
  },
  data: () => {
    return {
      filterText: "",
    };
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
$main-color: #202024;
$secondary-color: #5a5959;

.hau.hau-courses {
  padding-left: 64px;
  max-width: 920px;
  margin: auto;

  .hau.hau-course-icon {
    max-width: 24px;
  }

  .hau.hau-course-icon path {
    fill: $main-color;
  }

  .hau.hau-page-title {
    font-size: 24px;
  }

  .hau.hau-course-title {
    font-size: 14px;
    color: $main-color;
  }

  .hau.hau-course-author {
    font-size: 12px;
    color: $secondary-color;
  }
}

@media (min-width: 960px) {
  .hau.hau-courses {
    padding-left: 0;

    .hau.hau-course-icon {
      max-width: 28px;
    }

    .hau.hau-page-title {
      font-size: 28px;
    }
  }
}
</style>
