<template>
  <div id="app-title-bar" style="height: 32px; z-index: 100" :style="style">
    <div style="flex-grow: 1; -webkit-app-region: drag"></div>
    <div id="close-button">
      <!-- <v-btn
        x-small
        tile
        style="padding: 0; height: 32px; width: 48px"
        elevation="0"
        v-ripple="{ class: 'red--text' }"
      >
        <v-icon style="transform: scale(0.87)"> mdi-minus </v-icon>
      </v-btn> -->
      <v-btn
        color="white"
        x-small
        tile
        style="padding: 0; height: 32px; width: 48px"
        elevation="0"
        v-ripple="{ class: 'red--text' }"
      >
        <v-icon style="transform: scale(0.87)"> mdi-close </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopTitleBar",
  computed: {
    style() {
      const isTransparent = this.$route.meta.isTransparent;
      return {
        borderRadius: isTransparent ? "8px 8px 0 0" : 0,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
#app-title-bar {
  display: flex;
  background: white;
  overflow: hidden;
}
</style>