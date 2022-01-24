<template>
  <div id="app">
    <v-app>
      <view-container />
    </v-app>
  </div>
</template>

<script>
import ViewContainer from "./components/ViewContainer.vue";
export default {
  components: { ViewContainer },
  name: "App",
};
</script>