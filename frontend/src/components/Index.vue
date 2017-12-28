<template>
  <div>
      <h1>Hello</h1>
      <ObjectForm></ObjectForm>
      <ObjectList></ObjectList>
  </div>

</template>

<script>
import ObjectForm from '@/components/ObjectForm'
import ObjectList from '@/components/ObjectList'

export default {
  name: 'Index',
  components: {
    ObjectForm,
    ObjectList
  }
}
</script>
