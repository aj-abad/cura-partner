<template>
  <div id="app">
    <v-app>
      <desktop-title-bar />
      <router-view id="view" />
    </v-app>
  </div>
</template>

<script>
import DesktopTitleBar from "@/components/DesktopTitleBar";
export default {
  components: { DesktopTitleBar },
  name: "App",
};
</script>

<style lang="stylus">
#view {
  position: absolute;
  height: calc(100vh - 32px);
  width: 100vw;
  top: 32px;
  left: 0;
  overflow: auto;

  &:not(.transparent) {
    background-color: white;
  }
}
</style>
