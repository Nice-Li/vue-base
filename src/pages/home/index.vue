<template>
  <div >

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  created(){
    // console.log(this.$root)
  }
}
</script>

