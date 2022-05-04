<template>
  <px-header />
  <div
    :class="{
      mainContainer: this.$route.path === '/' || this.$route.path === '/SignIn',
      mainContainer2: this.$route.path === '/tasks',
    }"
  >
    <router-view />
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader.vue";
export default {
  name: "App",
  components: { PxHeader },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: black;
  margin: 0;
}
.mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
.mainContainer2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
}
</style>
