<template>
  <div id="app">
    <welcome></welcome>
    <div class="outter">

      <header class="app-header"></header>

      <!-- <search></search> -->

      <section class="app-content"></section>

      <footer class="app-footer">
        <wx-nav></wx-nav> 
      </footer>

    </div>
  </div>
</template>

<script>
import welcome from './components/common/welcome.vue'
import wxNav from './components/common/c-wx-nav.vue'

export default {
  name: 'app',
  components:{
    welcome,
    wxNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
