<template>
  <v-container class="hau hau-view-course-page">
    <v-row>
      <v-col cols="12">
        <v-card elevation="0">
          <v-card-text>
            <v-row>
              <v-col v-if="!!activeVideo" cols="12" md="8" lg="9">
                <youtube
                  :video-id="activeVideo.youtubeID"
                  @ready="ready"
                  class="hau hau-yt-player"
                ></youtube>
                <h1 class="hau hau-title mt-4 mb-2">
                  {{ activeVideo.videoTitle }}
                </h1>
                <h2 class="hau hau-subtitle mb-2">
                  {{ activeCourseName }} by {{ activeCourse.author }}
                </h2>
                <p class="hau hau-desc">{{ activeVideo.description }}</p>
              </v-col>
              <v-col cols="12" md="4" lg="3">
                <v-list three-line class="hau hau-video-list">
                  <v-list-item
                    v-for="video in videos"
                    :key="video.id"
                    class="hau hau-video"
                    @click="() => onClick(video.id)"
                  >
                    <v-list-item-avatar>
                      <v-icon>mdi-play-circle-outline</v-icon>
                    </v-list-item-avatar>
                    <v-tooltip
                      top
                      max-width="320px"
                      content-class="hau hau-tooltip"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-list-item-content v-bind="attrs" v-on="on">
                          <v-list-item-title
                            v-html="video.videoTitle"
                            class="hau hau-video-title text-wrap"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-html="activeCourse.author"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </template>
                      <span>{{ video.description }}</span>
                    </v-tooltip>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default {
  computed: {
    isCourseSelected() {
      return !!this.activeCourse;
    },
    activeCourse() {
      return this.$store.getters.activeCourse;
    },
    activeCourseName() {
      if (this.activeCourse) {
        return this.activeCourse.courseTitle;
      }

      return "Loading...";
    },
    videos() {
      if (this.activeCourse) {
        return this.activeCourse.videos;
      }

      return [];
    },
    activeVideo() {
      return this.$store.getters.activeVideo;
    },
  },
  data: () => {
    return {
      id: null,
    };
  },
  mounted() {
    this.id = parseInt(getParameterByName("id"));
    this.$store.dispatch("setActiveCourseID", this.id);
  },
  methods: {
    onClick(id) {
      this.$store.dispatch("setActiveVideoID", id);
    },
    ready(event) {
      this.player = event.target;
    },
  },
};
</script>

<style lang="scss">
.hau.hau-view-course-page {
  max-width: 960px;
  padding-left: 64px;

  .hau.hau-title {
    font-size: 20px;
    color: #202024;
  }

  .hau.hau-subtitle {
    font-size: 14px;
    color: #5a5959;
  }

  .hau.hau-video-list {
    max-height: 600px;
    overflow-y: scroll;

    /* width */
    &::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .hau.hau-video {
    border-bottom: 1px solid #ccc;
  }

  .hau.hau-yt-player {
    border: 4px solid #202024;
    background-color: #202024;
    padding: 0;
    margin: 0;
    border-radius: 4px;
    overflow: clip;

    [id^="youtube-player"] {
      max-width: 100%;
    }
  }

  .hau.hau-video-title {
    font-size: 14px;
    font-weight: 500;
    color: #202024;
  }
}

.hau.hau-tooltip {
  background-color: #202024 !important;
}

@media (min-width: 960px) {
  .hau.hau-view-course-page {
    max-width: 1260px;
    padding-left: 0;

    .hau.hau-title {
      font-size: 24px;
    }

    .hau.hau-subtitle {
      font-size: 16px;
    }

    .hau.hau-yt-player {
      [id^="youtube-player"] {
        min-width: 100%;
      }
    }
  }
}
</style>
