<template>
  <v-toolbar dark color="primary">
    <v-toolbar-title class="white--text" name="title">
      <router-link to="/">Playful Vertex</router-link>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
