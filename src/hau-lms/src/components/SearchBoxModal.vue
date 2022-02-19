<template>
  <v-dialog
    v-model="isSearchVisible"
    transition="dialog-top-transition"
    max-width="520px"
  >
    <v-card color="#202024">
      <v-toolbar color="#313135" dark dense elevation="0">
        <v-icon class="mr-2">mdi-magnify</v-icon>
        Find {{ topic }}
      </v-toolbar>
      <v-card-text class="pt-1">
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="searchText"
              clearable
              placeholder="Search by term"
              filled
              dark
              rounded
              autofocus
              hide-details
              @keydown.13.prevent="onEnterKey"
              class="mt-4"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SearchBoxModal",
  props: {
    topic: {
      type: String,
      default: "Courses",
    },
  },
  computed: {
    isSearchVisible: {
      get() {
        return this.$store.state.isSearchVisible;
      },
      set(value) {
        this.$store.commit("setSearchVisibility", value);
      },
    },
    searchText: {
      get() {
        return this.$store.state.searchText;
      },
      set(value) {
        this.$store.dispatch("setSearchText", value);
      },
    },
  },
  methods: {
    onClose() {
      this.$store.dispatch("closeSearch");
    },
    onEnterKey() {
      this.$store.dispatch("closeSearch");
    },
  },
};
</script>
