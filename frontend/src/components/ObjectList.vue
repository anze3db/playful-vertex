<template>
  <ul>
    <li v-for="(item, key) in objects">
      <h2>{{item.title}}</h2>
      {{item.description}}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ObjectList',
  computed: {
    ...mapGetters(['objects', 'count'])
  }
}
</script>
