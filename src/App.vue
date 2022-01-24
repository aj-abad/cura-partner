<template>
  <div id="app">
    <v-app>
      <router-view id="view" />
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="stylus">
#view {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow: auto;
}
</style>
