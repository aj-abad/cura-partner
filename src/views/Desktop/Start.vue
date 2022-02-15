<template>
  <main class="transparent" style="overflow: hidden">
    <div
      style="webkit-app-region: drag"
      class="h-100 w-100 bgdark d-flex rounded-lg justify-center align-center"
    >
      <div>
        <div style="padding: 0 36vw" class="mb-4">
          <Loader class="w-100" />
        </div>
        <h1 class="text-center">Cura</h1>
        <h3 @click="$ipc.send('done-loading')" class="text-center font-weight-medium" style="opacity: 0.75">
          Starting up...
        </h3>
      </div>
    </div>
  </main>
</template>

<script>
import Loader from "@/components/SVG/Loader";
export default {
  name: "DesktopStart",
  components: {
    Loader,
  },
  created() {
    this.$http.get("/account/details");
    setTimeout(()=>this.$ipc.send("done-loading", {isLoggedIn: true}), 5000)
  },
};
</script>

<style lang="stylus" scoped></style>
