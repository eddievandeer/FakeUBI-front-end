<template>
  <div id="app">
    <fubi-header></fubi-header>
    <router-view />
  </div>
</template>

<script>
  import fubiHeader from '@/components/index/Header.vue'

  export default {
    name: 'App',
    components: {
      fubiHeader
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
</style>