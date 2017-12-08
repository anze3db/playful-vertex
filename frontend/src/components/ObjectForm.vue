<template>
    <div>
        <input placeholder="Title..." v-model="title"></input><br>
        <textarea v-model="description" placeholder="Description"></textarea>
        <br>
        <button v-on:click="submit">Submit</button>
        <ul id="example-1">
          <li v-for="item in list">
            <h2>{{ item.title }}</h2>
            {{ item.description }}
          </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'ObjectForm',
  methods: {
    submit: function (event) {
      if (this.title) {
        this.list.push({
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
      description: '',
      list: []
    }
  }
}
</script>
