<template>
  <div>
    <desktop-title-bar v-if="isElectron" />
    <router-view :class="{ electron: isElectron }" id="view" />
  </div>
</template>

<script>
import isElectron from "is-electron";

import DesktopTitleBar from "@/components/DesktopTitleBar";
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

  &.electron {
    height: calc(100vh - 32px);
    top: 32px;
  }

  &:not(.transparent) {
    background-color: white;
  }
}
</style>