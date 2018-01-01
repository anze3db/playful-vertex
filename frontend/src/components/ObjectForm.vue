<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field v-model="title" label="Title"></v-text-field><br>
        <v-text-field multi-line v-model="description" label="Description"></v-text-field>
        <br>
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
      if (this.title) {
        this.$store.commit('add_object', {
          title: this.title,
          description: this.description
        })
        this.title = ''
        this.description = ''
      }
    }
  },
  data: () => {
    return {
      title: '',
      description: ''
    }
  }
}
</script>
