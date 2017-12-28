<template>
  <form>
    <input v-model="title" placeholder="Title..."></input><br>
    <textarea v-model="description" placeholder="Description"></textarea>
    <br>
    <button v-on:click="submit">Submit</button>
  </form>
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
