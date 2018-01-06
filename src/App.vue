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
@import "assets/css/lib/iconfont.css";
@import "assets/css/lib/animate.css";
@import "assets/css/lib/weui.min.css";
#app {
 
}

.outter{
  position: absolute;
  top:0;
  height:100%;
  width:100%;
}
.app-header{

}
.app-content{

}
.app-footer{
  position: fixed;
  left:0;
  bottom:0;
  width:100%;
  z-index:3;
}
</style>
