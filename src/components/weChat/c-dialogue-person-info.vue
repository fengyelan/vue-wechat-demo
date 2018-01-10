<template>
  <div class="c-dialogue-person-info">
  <c-wx-header-sub :title="title"></c-wx-header-sub>
	<section class="info-section">
		    <div class="members">
      <div class="img" v-for="item in $route.query.person && $route.query.person.user">
        <img :src="item.headerUrl">
      </div>
      <div class="img img-border">
        <span class="iconfont icon-chat-detail-add"></span>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>聊天小程序</p>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>查找聊天记录</p>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>置顶聊天</p>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>消息免打扰</p>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>设置当前聊天背景</p>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>清空聊天记录</p>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>投诉</p>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
	</section>
  </div>
</template>
<script>
import cWxHeaderSub from "../common/c-wx-header-sub.vue"
export default {
  data(){
    return{
      title:"聊天信息"
    }
  },
  components:{cWxHeaderSub}
}

</script>
<style lang='scss' scoped>
.c-dialogue-person-info{
	
}
header {
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

.info-section{
	margin-top:45px;
}

.members {
  background: #ffffff;
  padding: 0 3% 7% 3%;
  width: 100%;
  font-size: 0;
  .img {
    width: 55px;
    height: 55px;
    margin: 7% 2.5% 0;
    display: inline-block;
    text-align: center;
    vertical-align: middle;

    img {
      width: 100%;
    }
    .iconfont {
      font-size: 55px;

      
      color: #ebebeb;
      line-height: 55px;
    }
  }
}

section {
  margin-top: 5%;
}

.left-box {
  position: absolute;
  top: 0;
  left: 10px;
  span {
    font-size: 20px;
  }
}

</style>
