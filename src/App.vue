<template>
  <div>
    <router-view />
  </div>
</template>
<script>
import AOS from 'aos'

export default {
  created () {
    AOS.init({
      delay: 1000
    })
  }
}
</script>
<style lang="scss">
body{
  margin: -20px 0 0 0;
  padding: 0;
}
*{
  box-sizing: border-box;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
