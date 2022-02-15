<template>
  <div>
    <desktop-title-bar v-if="isElectron && !$route.meta?.hideTitleBar" />
    <router-view :class="{ electron: isElectron, 'hide-title-bar': $route.meta.hideTitleBar }" id="view" />
  </div>
</template>

<script>
import isElectron from "is-electron";

import DesktopTitleBar from "@/components/Desktop/TitleBar";
export default {
  name: "ViewContainer",
  components: {
    DesktopTitleBar,
  },
  computed: {
    isElectron,
  },
};
</script>

<style lang="stylus" scoped>
#view {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow: auto;

  &.electron:not(.hide-title-bar) {
    height: calc(100vh - 32px);
    top: 32px;
  }

  &:not(.transparent) {
    background-color: var(--v-bgdark-base);
  }
}
</style>