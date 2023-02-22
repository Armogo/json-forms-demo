<template>
  <json-forms
    :data="data"
    :schema="schema"
    :uischema="uischema"
    :renderers="renderers"
    :readonly="readOnlyToggle"
    @change="onChange"
  />
</template>


<style lang="scss">
/** JSON-FORMS style */
.v-window {
  width: 90vw;
}
</style>

<script>
import { JsonForms } from "@jsonforms/vue2";
import { vuetifyRenderers } from "@jsonforms/vue2-vuetify";
import schema from "@/assets/json-files/drs_metadata_schema.json"
import uischema from "@/assets/json-files/drs_metadata_uischema.json"

const renderers = [
  ...vuetifyRenderers,
  // here you can add custom renderers
];

export default {
  name: "HelloWorld",

  components: {
    JsonForms,
  },

  props: {
    readOnlyToggle: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      renderers: Object.freeze(renderers),
      data: {},
      schema: schema,
      uischema: uischema,
    };
  },

  methods: {
    onChange(event) {
      this.data = event.data;
    },
  },
};
</script>


