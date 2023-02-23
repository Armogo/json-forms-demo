<template>
  <v-app>
    <v-main>
      <v-toolbar color="rgb(62 66 79)" dark flat>
        <v-toolbar-title>
          <v-checkbox v-model="readOnlyToggle" label="read-only"></v-checkbox>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-slot:extension>
          <v-tabs v-model="tab" align-with-title grow>
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(item, index) in items" :key="index">
          <v-container v-if="index !== 0" fluid>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  name="input-7-1"
                  label="Default style"
                  :value="
                    index === 1
                      ? schemaText
                      : index === 2
                      ? uischemaText
                      : dataText
                  "
                  hint="JSON"
                  auto-grow
                  @change="changeTextArea"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>

      <AppJsonForms
        v-if="tab === 0"
        :read-only-toggle="readOnlyToggle"
        :schema="schema"
        :uischema="uischema"
        :data="data"
        @change-data="changeData"
      />
    </v-main>
  </v-app>
</template>

<style lang="scss"></style>

<script>
import schema from '@/assets/json-files/drs_metadata_schema.json';
import uischema from '@/assets/json-files/drs_metadata_uischema.json';

import AppJsonForms from '@/components/AppJsonForms';

export default {
  name: 'App',

  components: {
    AppJsonForms,
  },

  data: () => ({
    tab: null,
    items: ['DEMO', '更換 Schema', '更換 UI Schema', '更換 Data'],
    readOnlyToggle: false,
    tabs: [
      { id: 0, value: 'DEMO' },
      { id: 1, value: '更換 Schema' },
      { id: 2, value: '更換 UI Schema' },
      { id: 3, value: '更換 Data' },
    ],

    schema: {},
    uischema: {},
    data: {},
  }),

  computed: {
    schemaText() {
      return Object.keys(this.schema).length > 0
        ? JSON.stringify(this.schema)
        : '';
    },

    uischemaText() {
      return Object.keys(this.uischema).length > 0
        ? JSON.stringify(this.uischema)
        : '';
    },

    dataText() {
      return Object.keys(this.data).length > 0 ? JSON.stringify(this.data) : '';
    },
  },

  methods: {
    changeTextArea(text) {
      switch (this.tab) {
        case 1:
          this.schema = text.trim() ? JSON.parse(text) : {};
          break;

        case 2:
          this.uischema = text.trim() ? JSON.parse(text) : {};
          break;

        case 3:
          this.data = text.trim() ? JSON.parse(text) : {};
          break;
      }
    },

    changeData(data) {
      this.data = data;
    },
  },

  created() {
    this.schema = schema;
    this.uischema = uischema;
  },
};
</script>
