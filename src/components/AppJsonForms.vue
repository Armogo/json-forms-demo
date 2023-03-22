<template>
  <json-forms
    class="json-form"
    :schema="schema"
    :uischema="uischema"
    :data="data"
    :renderers="renderers"
    :readonly="readOnlyToggle"
    :ajv="handleDefaultsAjv"
    @change="onChange"
  />
</template>

<script>
import { JsonForms } from "@jsonforms/vue2";
import { vuetifyRenderers } from "@jsonforms/vue2-vuetify";
import { createAjv } from "@jsonforms/core";

const renderers = [
  ...vuetifyRenderers,
  // here you can add custom renderers
];

export default {
  name: "AppJsonForms",

  components: {
    JsonForms,
  },

  props: {
    schema: { type: Object, default: () => ({}) },
    uischema: { type: Object, default: () => ({}) },
    data: { type: Object, default: () => ({}) },
    readOnlyToggle: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      renderers: Object.freeze(renderers),
      /** 讀取 schema default 欄位資料 */
      handleDefaultsAjv: createAjv({ useDefaults: true }),
    };
  },

  methods: {
    onChange($event) {
      this.$emit("change-data", $event.data);
    },
  },
};
</script>

<style lang="scss">
/** JSON-FORMS style */
.json-form {
  .v-item-group {
    width: 90vw;
  }
}
</style>
