<template>
  <v-app>
    <v-main>
      <AppNav
        :read-only-toggle="readOnlyToggle"
        @change-read-only-toggle="changeReadOnlyToggle"
      />
      <HelloWorld :read-only-toggle="readOnlyToggle" />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "~/src/assets/styles/reset.css";
</style>

<script>
import AppNav from "./components/AppNav.vue";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    AppNav,
    HelloWorld,
  },

  data: () => ({
    readOnlyToggle: false,
  }),

  methods: {
    changeReadOnlyToggle(value) {
      this.readOnlyToggle = value;
    },
  },
};
</script>
