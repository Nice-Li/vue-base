<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/">to main</router-link>
    <router-link to="/h">to h</router-link>

    <router-link to="/home">to home</router-link>
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
// import Home from './pages/home';

export default {
  name: 'App',
  components: {
    // Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
