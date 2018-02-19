<template>
  <div>
    <h1>Instances</h1>
    <span v-for="(item, key) in instances">
      <router-link :to="'/instance/' + item.id">{{item.name}}</router-link><br>
    </span>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InstanceList',
  computed: mapGetters({
    instances: 'allInstances'
  }),
  created () {
    this.$store.dispatch('fetchInstances').then((unsb) => {
      this.unsub = unsb
    })
  },
  destroyed () {
    this.unsub()
  }
}
</script>
