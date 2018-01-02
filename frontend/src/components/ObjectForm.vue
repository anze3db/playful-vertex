<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field v-model="content" label="Content"></v-text-field><br>
        <v-btn color="info" v-on:click="submit" name="submit">Submit</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ObjectForm',
  methods: {
    submit: function (event) {
      if (this.content) {
        this.$store.commit('add_object', {
          content: this.content
        })
        this.content = ''
      }
    }
  },
  data: () => {
    return {
      content: ''
    }
  }
}
</script>
