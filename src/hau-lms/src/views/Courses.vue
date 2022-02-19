<template>
  <v-container class="hau hau-courses">
    <v-row>
      <v-col cols="12" class="d-flex justify-start">
        <CourseIcon class="hau hau-course-icon" />
        <h1 class="hau hau-page-title">Let's start learning</h1>
        <v-spacer></v-spacer>
        <v-tooltip left :disabled="isMobile">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              dark
              color="#202024"
              v-bind="attrs"
              v-on="on"
              @click="onSearch"
              elevation="0"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
          <span>Search a course</span>
        </v-tooltip>
      </v-col>
      <v-col v-if="filterText" cols="12">
        <v-chip
          color="#710e1d"
          label
          close
          text-color="white"
          @click:close="onRemoveFilter"
        >
          <v-icon left> mdi-label </v-icon>
          Filtered by {{ filterText }}
        </v-chip>
      </v-col>
      <v-col
        v-for="course in courseList"
        :key="course.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-slide-y-transition>
          <v-card
            elevation="0"
            outlined
            tile
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
      <v-col v-if="!hasCourses" cols="12" class="text-center">
        <EmptyIcon class="hau hau-empty mt-12" />
        <p>We can't find courses that matches your search term.</p>
      </v-col>
    </v-row>
    <SearchBoxModal />
  </v-container>
</template>

<script>
import CourseIcon from "../icons/CoursesIcon";
import EmptyIcon from "../icons/EmptyIcon";
import SearchBoxModal from "../components/SearchBoxModal";

export default {
  components: {
    CourseIcon,
    EmptyIcon,
    SearchBoxModal,
  },
  computed: {
    hasCourses() {
      return this.courseList.length > 0;
    },
    courseList() {
      let filterText = this.$store.state.searchText;

      if (filterText) {
        let cleansedText = filterText.toLowerCase();

        return this.$store.getters.courseList.filter(
          (i) => i.courseTitle.toLowerCase().indexOf(cleansedText) > -1
        );
      }

      return this.$store.getters.courseList;
    },
    isMobile() {
      let bpName = this.$vuetify.breakpoint.name;

      return bpName === "xs" || bpName === "sm";
    },
    filterText() {
      return this.$store.state.searchText;
    },
  },
  methods: {
    onClick(id) {
      this.$router.push({
        path: "/course/view/?id=" + id,
      });
    },
    onSearch() {
      this.$store.dispatch("openSearch");
    },
    onRemoveFilter() {
      this.$store.dispatch("setSearchText", "");
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
    min-height: 32px;
    max-height: 42px;
    margin-right: 8px;
  }

  .hau.hau-course-icon path {
    fill: $main-color;
  }

  .hau.hau-page-title {
    font-size: 32px;
    line-height: 32px;
    margin-top: 4px;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .hau.hau-course-title {
    font-size: 14px;
    color: $main-color;
  }

  .hau.hau-course-author {
    font-size: 12px;
    color: $secondary-color;
  }

  .hau.hau-empty {
    max-width: 96px;
    margin: auto;
  }
}

@media (min-width: 960px) {
  .hau.hau-courses {
    padding-left: 0;

    .hau.hau-page-title {
      font-size: 32px;
    }
  }
}

@media (min-width: 1400px) {
  .hau.hau-courses {
    max-width: 1200px;
  }
}
</style>
