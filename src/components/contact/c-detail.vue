<template>
  <div class="c-detail">
    <c-wx-header-sub :title="title"></c-wx-header-sub>
  </div>
</template>
<script>
import cWxHeaderSub from "../common/c-wx-header-sub.vue"
export default {
  data() {
    return {
      title: "详细信息"
    }
  },
  components: { cWxHeaderSub }
}

</script>
<style lang='scss' scoped>


</style>
