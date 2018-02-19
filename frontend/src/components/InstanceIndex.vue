<template>
  <div>
    <NavBar></NavBar>
    <ObjectForm></ObjectForm>
    <ObjectList></ObjectList>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import ObjectForm from '@/components/object/ObjectForm'
import ObjectList from '@/components/object/ObjectList'

export default {
  name: 'Index',
  components: {
    NavBar,
    ObjectForm,
    ObjectList
  }
}
</script>
