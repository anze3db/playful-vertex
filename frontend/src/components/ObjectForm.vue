<template>
  <v-container grid-list-md text-xs-right>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field autofocus @keyup.enter="submit" ref="content" v-model="content" label="Content"></v-text-field><br>
        <v-btn color="info" v-on:click="submit" name="submit">Add Card</v-btn>
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
        this.$refs.content.$el.getElementsByTagName('input')[0].focus()
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
