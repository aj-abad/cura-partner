<template>
  <main
    class="bgdark"
    id="app-title-bar"
    style="height: 32px; z-index: 100"
    :style="style"
  >
    <div style="flex-grow: 1; -webkit-app-region: drag"></div>
    <div id="close-button">
      <v-btn
        tabindex="-1"
        color="bgdark"
        x-small
        tile
        style="padding: 0; height: 32px; width: 48px"
        elevation="0"
      >
        <v-icon style="transform: scale(0.87)"> mdi-minus </v-icon>
      </v-btn>
      <v-btn
        tabindex="-1"
        color="bgdark"
        x-small
        tile
        style="padding: 0; height: 32px; width: 48px"
        elevation="0"
        v-ripple="{ class: 'red--text' }"
        @click="$ipc.send('close')"
      >
        <v-icon style="transform: scale(0.87)"> mdi-close </v-icon>
      </v-btn>
    </div>
  </main>
</template>

<script>
export default {
  name: "DesktopTitleBar",
  computed: {
    isWindowTransparent() {
      return this.$route.meta.isTransparent;
    },
    style() {
      return {
        borderRadius: this.isWindowTransparent ? "8px 8px 0 0" : 0,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
#app-title-bar {
  display: flex;
  overflow: hidden;
}
</style>