<template>
  <div>
    <NavBar></NavBar>
    <InstanceList></InstanceList>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import InstanceList from '@/components/instance/InstanceList'

export default {
  name: 'Index',
  components: {
    NavBar,
    InstanceList
  }
}
</script>
