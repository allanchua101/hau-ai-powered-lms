<template>
  <v-container class="hau hau-view-course-page">
    <v-row>
      <v-col cols="12">
        <v-card elevation="0">
          <v-toolbar color="#710e1d" dark elevation="0" dense>
            <!-- Back Button -->
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" @click="onBackClick">
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
              </template>
              <span>Go back</span>
            </v-tooltip>
            <v-spacer></v-spacer>
            <!-- Voice Button -->
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-microphone-outline</v-icon>
                </v-btn>
              </template>
              <span>Learn more about our voice bot</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col v-if="!!activeVideo" cols="12" md="8" lg="9">
                <youtube
                  :video-id="activeVideo.youtubeID"
                  :player-vars="{ autoplay: 0 }"
                  @playing="playing"
                  @ready="ready"
                  class="hau hau-yt-player"
                ></youtube>
                <h1 class="hau hau-title mt-4 mb-4">
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
                      right
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
                            v-html="video.description"
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
import { findSkill } from "../voice/voice-commands";

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

async function sleep(ms = 250) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default {
  components: {},
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
      player: null,
      isCaptureEnabled: false,
    };
  },
  mounted() {
    let me = this;

    me.id = parseInt(getParameterByName("id"));
    me.$store.dispatch("setActiveCourseID", this.id);

    if (window.annyang && me.isCaptureEnabled) {
      try {
        let commands = {
          "John *anything": async function (text) {
            let command = text.toLowerCase();
            let skill = findSkill(me, command);

            if (skill) {
              await skill.action();
            }
          },
        };

        window.annyang.addCommands(commands);
      } catch (err) {
        console.log(`Annyang is having troubles`);
      } finally {
        window.annyang.setLanguage("en-PH");
        window.annyang.start();
      }
    }
  },
  beforeDestroy() {
    if (window.annyang) {
      window.annyang.removeCommands();
      window.annyang.abort();
    }

    this.player = null;
    this.id = 1;
  },
  methods: {
    async onClick(id) {
      await this.$store.dispatch("setActiveVideoID", id);

      if (this.player) {
        this.player.playVideo();
      }
    },
    onBackClick() {
      this.$router.go(-1);
    },
    async next() {
      await this.$store.dispatch("playNextVideo");
      await sleep(250);

      if (this.player) {
        this.player.playVideo();
        this.player.unMute();
      }
    },
    async back() {
      await this.$store.dispatch("playPreviousVideo");
      await sleep(250);

      if (this.player) {
        this.player.playVideo();
        this.player.unMute();
      }
    },
    async pause() {
      if (this.player) {
        this.player.pauseVideo();
      }
    },
    async play() {
      if (this.player) {
        this.player.playVideo();
      }
    },
    async stop() {
      if (this.player) {
        this.player.stopVideo();
      }
    },

    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      this.player = event.target;
    },
  },
};
</script>

<style lang="scss">
.hau.hau-view-course-page {
  max-width: 960px;

  .hau.hau-title {
    font-size: 20px;
    color: #202024;
  }

  .hau.hau-subtitle {
    font-size: 12px;
    font-weight: bold;
    color: #5a5959;
  }

  .hau.hau-video-list {
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding-top: 0;

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
    border-left: 1px solid #ccc;
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
    padding-left: 64px;
    padding-left: 0;

    .hau.hau-title {
      font-size: 20px;
    }

    .hau.hau-subtitle {
      font-size: 14px;
    }

    .hau.hau-video-list {
      max-height: 600px;
      overflow-y: scroll;
    }

    .hau.hau-yt-player {
      [id^="youtube-player"] {
        min-width: 100%;
      }
    }
  }
}
</style>
