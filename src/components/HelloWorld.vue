<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>{{ $store.getters.doubleInit }}</h3>
    <h3>{{ $store.state.init }}</h3>
    <button @click="add">add</button>
    <button @click="dec">dec</button>
    <button @click="delayadd">delay-add</button>
    <button @click="delaydec">delay-dec</button>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    add(){
      this.$store.commit('add')
    },
    dec(){
      this.$store.commit('dec')
    },
    delayadd(){
      this.$store.dispatch('delayAdd')
    },
    delaydec(){
      this.$store.dispatch('delayDec')

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
