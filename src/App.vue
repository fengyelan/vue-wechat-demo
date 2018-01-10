<template>
  <div id="app">
    <welcome></welcome>
    <div class="outter" :class="[{'hideLeft':$route.path.split('/').length>2},$route.path!=='/'?'bg-grey':'bg-white']">

      <header class="app-header">
        <wx-header></wx-header>
      </header>

      <search></search>

      <section class="app-content">
        <keep-alive>
          <router-view name="default"></router-view>
        </keep-alive> 
      </section>

      <footer class="app-footer" v-show="$store.state.headerStatus">
        <wx-nav></wx-nav> 
      </footer>
    </div>

    <!-- 二级页面集合，具有过度效果 -->
    <transition :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
      <keep-alive>
          <router-view name="subPage" class="sub-page"></router-view>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
import welcome from './components/common/welcome.vue'
import wxNav from './components/common/c-wx-nav.vue'
import wxHeader from './components/common/c-wx-header.vue'

import search from './components/common/c-search.vue'


export default {
  name: 'app',
  components:{
    welcome,
    wxNav,
    wxHeader,
    search
  },
  data(){
    return {
      enterAnimate:"",
      leaveAnimate:""
    }
  },
  watch:{
    "$route"(to,from){
      let to_path = to.path,
          from_path = from.path,
          to_Depth = to.path&&to.path.split('/').length,
          from_Depth = from.path&&from.path.split('/').length;
      
      if(to_Depth===2){
        this.$store.dispatch('setPageName',to.name);
      }

      //同一级页面无需设置过度效果,不同页面设置过度效果，子页面的话是从右侧进入，左侧离开，主页面的话是从左侧进入，右侧离开
      if(to_Depth===from_Depth){
        return;
      }

      this.enterAnimate = to_Depth > from_Depth ? "animated fadeInRight" : "animated fadeInLeft";
      this.leaveAnimate = to_Depth > from_Depth ? "animated fadeOutLeft" : "animated fadeOutRight";

      // 从店面页进入店内页 需要对店内页重新设置离开动效 因为他们处于不同 name 的 router-view
      if (to_Depth === 3) {
          this.leaveAnimate = "animated fadeOutRight"
      }

    }
  }
}
</script>

<style lang='scss'>
@import "assets/css/lib/iconfont.css";
@import "assets/css/lib/animate.css";
@import "assets/css/lib/weui.min.css";

// @import "assets/css/common/common.scss";
// @import "assets/css/common/base.scss";
#app {
 
}

.outter{
  position: absolute;
  top:0;
  height:100%;
  width:100%;
}
.bg-white{
  background: #ffffff;
}
.bg-grey{
background: #eeeeee;
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

.hideLeft {
    opacity: 0.75;
    transform: translate3d(-100%, 0, 0);
    transition: 1.0s;
    overflow: hidden;
}

.sub-page{
  position:absolute;
  top:0;left:0;right:0;
  width:100%;
  height:100%;
  overflow-y:scroll;
  overflow-x:hidden;
  background: #eee;
}
</style>
