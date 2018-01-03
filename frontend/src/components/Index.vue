<template>
  <div>
    <NavBar></NavBar>
    <ObjectList></ObjectList>
    <ObjectForm></ObjectForm>
  </div>

</template>

<script>
import NavBar from '@/components/NavBar'
import ObjectForm from '@/components/ObjectForm'
import ObjectList from '@/components/ObjectList'

export default {
  name: 'Index',
  components: {
    NavBar,
    ObjectForm,
    ObjectList
  }
}
</script>
