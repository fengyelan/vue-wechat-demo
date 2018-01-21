<template>
  <div class="c-add-friend">
    <c-wx-header-sub :title="title"></c-wx-header-sub>
    <div class="search-line-wrap">
      <div class="search-line" @click="show_top_search">
        <span class="iconfont icon-search"></span>
        <span class="placeholder-text">手机号/微信号/QQ号</span>
      </div>
    </div>
    <div class="my-wx-hao">
      <div class="nickname-wrap">
        <div>我的微信号：</div>
        <div class="name">123456</div>
      </div>
      <img src="../../assets/images/wode/erweima.png" height="280" width="280">
    </div>
    <div class="weui-cells">
      <div class="weui-cell" v-for="item in add_ways">
        <div class="weui-cell__hd"><img :src="item.images"></div>
        <div class="weui-cell__bd">
          <p>{{item.title}}</p>
          <p class="desc">{{item.subTitle}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cWxHeaderSub from "./c-wx-header-sub.vue"
export default {
  data() {
    return {
      title: "添加朋友",
      add_ways:[
      	{
      		title:"雷达加朋友",
      		subTitle:"添加身边的朋友",
      		images:require("../../assets/images/tongxunlu/contact_add-friend-reda.png")
      	},
      	{
      		title:"面对面建群",
      		subTitle:"与身边的朋友进入同一个群聊",
      		images:require("../../assets/images/tongxunlu/contact_top-addgroup.png")
      	},
      	{
      		title:"扫一扫",
      		subTitle:"扫描二维码名片",
      		images:require("../../assets/images/tongxunlu/contact_add-friend-scanqr.png")
      	},
      	{
      		title:"手机联系人",
      		subTitle:"添加或邀请通讯录中的朋友",
      		images:require("../../assets/images/tongxunlu/contact_top-friend-notify.png")
      	},
      	{
      		title:"公众号",
      		subTitle:"获取更多资讯和服务",
      		images:require("../../assets/images/tongxunlu/contact_top-offical.png")
      	}
      ]
    }
  },
  components: { cWxHeaderSub },
  methods:{
  	show_top_search(){
  		this.$router.push({ path: '/wechat/add-friend/search' })
  	}
  }
}

</script>
<style lang='scss' scoped>
.search-line-wrap {
  margin-top: 65px;
  background: #fff;
  padding: 15px 0 10px;
  .search-line {
    position: relative;
    width: 90%;
    margin: 0 auto;
    .iconfont {
      font-size: 20px;
      color: #31b627;
    }
    .placeholder-text {
      font-size: 16px;
      color: #b7b7b7;
    }
  }
}

.my-wx-hao {
  font-size: 0;
  text-align: center;
  padding: 15px 0 30px;
  .nickname-wrap {
    vertical-align: middle;
    display: inline-block;
    div {
      vertical-align: middle;
      font-size: 16px;
      color: #858585;
      display: inline-block;
    }
    .name {
      max-width: 10rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  img {
    vertical-align: middle;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 2) {
  //1px的边框
  .search-line:before {
    content: "";
    pointer-events: none;
    /* 防止点击触发 */
    box-sizing: border-box;
    position: absolute;
    width: 200%;
    height: 200%;
    left: 0;
    top: 0; //border-radius:10px;
    border-bottom: 1px solid #31b627;
    -webkit-transform: (scale(0.5));
    -webkit-transform-origin: 0 0;
    transform: (scale(0.5));
    transform-origin: 0 0;
  }
}

.weui-cell__hd{
	img{
		width:40px;margin-right:5px;display:block;
	}
}

.weui-cell__bd{
	margin-left: 10px;
	.desc{
		font-size:12px;
		color:#b7b7b7;
	}
}

</style>
