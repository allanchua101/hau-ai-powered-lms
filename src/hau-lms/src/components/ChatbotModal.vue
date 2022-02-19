<template>
  <v-dialog
    v-model="isOpened"
    transition="dialog-bottom-transition"
    max-width="520px"
    @click:outside="onClose"
  >
    <v-card class="hau hau-chat-dialog mb-0">
      <v-toolbar dark color="#710e1d" elevation="0" dense>
        <v-icon class="mr-2">mdi-robot</v-icon>
        <v-toolbar-title>John the geek</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon dark @click="onClear" v-bind="attrs" v-on="on">
              <v-icon>mdi-chat-remove</v-icon>
            </v-btn>
          </template>
          <span>Clear chat</span>
        </v-tooltip>
        <v-btn icon dark @click="onClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="mb-0 hau hau-chatbot-card">
        <v-row>
          <v-col cols="12">
            <v-list ref="chatList" v-if="!isEmptyBox" class="hau hau-chat-list">
              <v-list-item
                v-for="msg in messageHistory"
                :key="msg.id"
                class="pl-0"
              >
                <!-- Chatbot messages -->
                <v-list-item-content
                  v-if="!msg.isUser"
                  class="d-flex flex-column align-content-start"
                >
                  <v-list-item-title
                    v-text="msg.text"
                    class="hau hau-bot-chat align-self-start text-left text-wrap"
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
                    class="hau hau-user-chat align-self-end text-wrap text-right"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <TypingIndicator v-if="isTyping" />
            <ChatIcon v-if="isEmptyBox" class="hau hau-empty-chat" />
            <p v-if="isEmptyBox" class="text-center hau hau-empty-chat-msg">
              Ask something from John your learning assistant. <br />
              E.G. (What is ML? What is AI? What is HTML?)
            </p>
          </v-col>
        </v-row>
        <v-textarea
          placeholder="Say something here...."
          filled
          rounded
          rows="1"
          dense
          class="mt-4 mr-4"
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
import TypingIndicator from "./TypingIndicator.vue";

export default {
  name: "ChatbotModal",
  components: {
    ChatIcon,
    TypingIndicator,
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
    isTyping() {
      return this.$store.state.isBotResponding;
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
    onClear() {
      this.$store.dispatch("clearChat");
    },
    onKeyDown(e) {
      if (e.keyCode === 13) {
        this.$store.dispatch("sendChat", this.message);
        this.message = "";
        let scrollToBottom = () => {
          this.$refs.chatList.$el.scrollTo(
            0,
            this.$refs.chatList.$el.scrollHeight
          );
        };

        setTimeout(scrollToBottom, 100);
        setTimeout(scrollToBottom, 1000);
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

  .hau.hau-chatbot-card {
    padding-right: 0;
    overflow-x: hidden;
    min-height: 418px;
  }

  .hau.hau-user-chat {
    background-color: #710e1d;
    color: white;
    padding: 10px 12px;
    border-radius: 26px;
    line-height: 22px;
    max-width: 80%;
  }

  .hau.hau-bot-chat {
    background-color: #202024;
    color: white;
    padding: 10px 12px;
    border-radius: 26px;
    line-height: 22px;
    max-width: 80%;
  }

  .hau.hau-empty-chat {
    max-width: 96px;
    margin: auto;
    display: block;
    margin-top: 86px;
    margin-bottom: 12px;
  }

  .hau.hau-empty-chat-msg {
    margin-bottom: 128px;
    margin-right: 24px;
  }

  .hau.hau-chat-list {
    max-height: 360px;
    overflow-y: auto;
    min-height: 360px;
  }
}
</style>
