<template>
  <v-select
    v-bind:items="itemsList"
    item-value="content"
    label="Map"
    autocomplete
    multiple
    v-on:change="add"
  ></v-select>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ObjectMapper',
  methods: {
    add: function (event) {
    }
  },
  computed: {
    ...mapGetters(['objects']),
    itemsList: function () {
      return Object.keys(this.objects).map((key) => {
        return {
          text: this.objects[key].content,
          value: key
        }
      })
    }
  }
}
</script>
