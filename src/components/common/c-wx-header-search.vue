<template>
  <div class="c-wx-header-search">
    <header class="header">
      <div class="iconfont icon-return-arrow" @click="$router.back()"></div>
      <div class="search">
        <span class="iconfont icon-search"></span>
        <input type="text" name="" class="search-text">
      </div>
    </header>
  </div>
</template>
<script>
export default {
  props: ['title']
}

</script>
<style lang='scss' scoped>
.header {
  width: 100%;
  height: 45px;
  background: #1b1b1b;
  color: #fffff;
  position: fixed;
  z-index: 100;
  line-height: 45px;
  color: #ffffff;
  top: 0;
  left: 0;
}

.icon-return-arrow {
  position: absolute;
  top: 0;
  left: 10px;
  font-size: 20px;
}

.search {
  position: absolute;
  width: 400px;
  left: 30px;
  top: 0;
  height: 45px;
  .iconfont {
    font-size: 20px;
    color: #fff;
  }


  .search-text {
    position: relative;
    border:none;
    background: transparent;
    font-size: 16px;
    color: #fff;
    tap-highlight-color: rgba(0, 0, 0, 0);
    &:focus {
      outline: none;
      border: none;
      tap-highlight-color: rgba(0, 0, 0, 0);
    }
  }


}

</style>
