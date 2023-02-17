<template>
  <nav class="container">
    <label>read-only</label>
    <input
      v-bind="readOnlyToggle"
      @change="changeReadOnlyToggle"
      type="checkbox"
      class="read-only-toggle"
    />
  </nav>
</template>

<style lang="scss">
nav {
  font-size: 1.2em;
  text-align: center;
}

label {
  margin-right: 1em;
}
</style>

<script>
export default {
  name: "AppNav",

  props: {
    readOnlyToggle: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({}),

  methods: {
    changeReadOnlyToggle($event) {
      this.$emit("change-read-only-toggle", $event.target.checked);
    },
  },
};
</script>
