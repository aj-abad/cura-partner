<template>
  <main
    class="bgdark"
    id="app-title-bar"
    style="height: 32px; z-index: 100"
    :style="style"
  >
    <div class="pa-1 px-2 d-flex flex-grow-1" style="-webkit-app-region: drag">
      <div v-if="false">
        <span class="font-weight-semibold">Cura for Partners</span>
        <small style="opacity: 0.75"> v{{ version }} </small>
      </div>
    </div>
    <div id="close-button">
      <v-btn
        tabindex="-1"
        color="bgdark"
        x-small
        tile
        style="padding: 0; height: 32px; width: 48px"
        elevation="0"
        @click="$ipc.send('minimize')"
      >
        <v-icon style="transform: scale(0.87)"> mdi-minus </v-icon>
      </v-btn>
      <v-btn
        tabindex="-1"
        color="bgdark"
        class="close-btn"
        x-small
        tile
        style="padding: 0; height: 32px; width: 48px"
        elevation="0"
        v-ripple="{ class: 'red--text' }"
        @click="$ipc.send(minimizeOnClose ? 'minimize' : 'close')"
      >
        <v-icon style="transform: scale(0.87)"> mdi-close </v-icon>
      </v-btn>
    </div>
  </main>
</template>

<script>
import { version } from "../../../package.json";
export default {
  name: "TitleBar",
  computed: {
    isWindowTransparent() {
      return this.$route.meta.isTransparent;
    },
    version() {
      return version;
    },
    minimizeOnClose() {
      return localStorage.getItem("minimizeOnClose") === "true";
    },
    style() {
      return {
        borderRadius: this.isWindowTransparent ? "8px 8px 0 0" : 0,
      };
    },
  },
  created(){
    console.log(this.$ipc)
  }
};
</script>

<style lang="stylus" scoped>
#app-title-bar {
  display: flex;
  overflow: hidden;
}

.theme--dark.v-btn.close-btn::before {
  background: #cd1a2b !important;
}

.theme--dark.v-btn.close-btn:hover::before {
  opacity: 0.7 !important;
}
</style>
