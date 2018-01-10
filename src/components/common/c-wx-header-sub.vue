<template>
  <div class="c-wx-header-sub">
    <header class="header">
      <div class="left-box">
        <div class="arr">
          <span class="iconfont icon-return-arrow" @click="$router.back()"></span>
          <!-- $router.back() 和 $router.go(-1) -->
          <span>{{title}}</span>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
	props:['title']
}

</script>
<style lang='scss' scoped>
.header {
  width: 100%;
  height: 45px;
  background: #1b1b1b;
  color: #fffff;
  position: fixed;
  z-index: 99;
  line-height: 45px;
  color: #ffffff;
  top:0;left:0;
}

.left-box {
  position: absolute;
  top: 0;
  left: 10px;
  span {
    font-size: 20px;
  }
}

.right-box {
  position: absolute;
  top: 0;
  right: 10px;
  span {
    font-size: 20px;
  }
}

</style>
