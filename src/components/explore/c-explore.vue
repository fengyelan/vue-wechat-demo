<template>
  <div class="c-explore">
    <div class="weui-cells">
      <router-link :to="{path:'/contact/offical-account'}" class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../../assets/images/faxian/find_icon-circle.png" class="contact-top-img">
        </div>
        <div class="weui-cell__bd">
          <p>朋友圈</p>
        </div>
        <!--  <div class="weui-cell__ft">说明文字</div> -->
      </router-link>
    </div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../../assets/images/faxian/find_icon-qrcode.png" class="contact-top-img">
        </div>
        <div class="weui-cell__bd">
          <p>扫一扫</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../../assets/images/faxian/find_icon-shake.png" height="50" width="50" class="contact-top-img">
        </div>
        <div class="weui-cell__bd">
          <p>摇一摇</p>
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../../assets/images/faxian/find_kanyikan.png" height="50" width="50" class="contact-top-img">
        </div>
        <div class="weui-cell__bd">
          <p>看一看</p>
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../../assets/images/faxian/find_icon-locationservice.png" height="50" width="50" class="contact-top-img">
        </div>
        <div class="weui-cell__bd">
          <p>附近的人</p>
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../../assets/images/faxian/find_icon-shopping.png" height="50" width="50" class="contact-top-img">
        </div>
        <div class="weui-cell__bd">
          <p>购物</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../../assets/images/faxian/find_icon-moregame.png" height="50" width="50" class="contact-top-img">
        </div>
        <div class="weui-cell__bd">
          <p>游戏</p>
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../../assets/images/faxian/find_xiaochengxu.png" height="50" width="50" class="contact-top-img">
        </div>
        <div class="weui-cell__bd">
          <p>小程序</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}

</script>
<style lang='scss' scoped>
.c-explore{
	padding-bottom: 100px;
	background: #eee;
	margin-top:65px;
}
.contact-top-img {
  width: 30px;
  height: 30px;
  margin-right: 5px;
  display: block;
}

</style>
