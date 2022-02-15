<template>
  <v-dialog
    v-model="isOpened"
    transition="dialog-bottom-transition"
    max-width="360px"
    @click:outside="onClose"
  >
    <v-card class="hau hau-chat-dialog mb-0">
      <v-toolbar dark color="#710e1d" elevation="0" dense>
        <v-icon class="mr-2">mdi-robot</v-icon>
        <v-toolbar-title>John the geek</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="onClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="mb-0">
        <v-row>
          <v-col cols="12">
            <v-list ref="chatList" v-if="!isEmptyBox" class="hau hau-chat-list">
              <v-list-item
                v-for="msg in messageHistory"
                :key="msg.id"
                class="pl-0"
              >
                <!-- Chatbot icon -->
                <v-list-item-icon v-if="!msg.isUser">
                  <v-avatar color="#710e1d" size="36">
                    <v-icon dark small>mdi-robot</v-icon>
                  </v-avatar>
                </v-list-item-icon>
                <!-- Chatbot messages -->
                <v-list-item-content
                  v-if="!msg.isUser"
                  class="d-flex flex-column align-content-start"
                >
                  <v-spacer></v-spacer>
                  <v-list-item-title
                    v-text="msg.text"
                    class="hau hau-user-chat align-self-start text-left"
                  ></v-list-item-title>
                </v-list-item-content>
                <!-- User messages -->
                <v-list-item-content
                  v-if="msg.isUser"
                  class="d-flex flex-column align-content-end"
                >
                  <v-spacer></v-spacer>
                  <v-list-item-title
                    v-text="msg.text"
                    class="hau hau-user-chat align-self-end text-right"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <ChatIcon v-if="isEmptyBox" class="hau hau-empty-chat" />
            <p v-if="isEmptyBox" class="text-center">
              You have no messages yet. Type something on the box below to speak
              with John our chatbot.
            </p>
          </v-col>
        </v-row>
        <v-textarea
          placeholder="Say something here...."
          filled
          rounded
          rows="1"
          dense
          class="mt-4"
          hide-details
          auto-grow
          v-model="message"
          @keydown.13.prevent="onKeyDown"
        ></v-textarea>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ChatIcon from "../icons/ChatIcon.vue";

export default {
  name: "ChatbotModal",
  components: {
    ChatIcon,
  },
  computed: {
    isOpened() {
      return this.$store.state.isChatbotOpened;
    },
    messageHistory() {
      return this.$store.state.messages;
    },
    isEmptyBox() {
      return this.$store.state.messages.length === 0;
    },
  },
  data: () => {
    return {
      message: "",
    };
  },
  methods: {
    onClose() {
      this.$store.dispatch("closeChatbot");
      this.message = "";
    },
    onKeyDown(e) {
      if (e.keyCode === 13) {
        this.$store.dispatch("sendChat", this.message);
        this.message = "";
        setTimeout(() => {
          this.$refs.chatList.$el.scrollTo(
            0,
            this.$refs.chatList.$el.scrollHeight
          );
        }, 250);
      }
    },
  },
};
</script>

<style lang="scss">
.hau.hau-chat-dialog {
  * {
    font-size: 14px;
  }

  .hau.hau-user-chat {
    background-color: #710e1d;
    color: white;
    padding: 10px 12px;
    border-radius: 26px;
  }

  .hau.hau-empty-chat {
    max-width: 96px;
    margin: auto;
    display: block;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  .hau.hau-chat-list {
    max-height: 360px;
    overflow-y: auto;
    min-height: 360px;
  }
}
</style>
