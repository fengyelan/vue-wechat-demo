<template>
  <div class="c-contact">
    <div class="weui-cells">
    
      <router-link v-for="item in contents" :to="{path:item.path}" class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img :src="item.image"  class="contact-top-img">
        </div>
        <div class="weui-cell__bd">
          <p>{{item.title}}</p>
        </div>
      </router-link>

      <div class="list">
        <div class="list-item" v-for="(item,key) in $store.getters.contactsList">
          <div class="weui-cells__title">{{key}}</div>
        <div class="weui-cells">
          <router-link :to="{path:'/contact/detail'}" class="weui-cell weui-cell_access" href="javascript:;" v-for="item_user in item" :key="item_user.wxid">
            <div class="weui-cell__hd"><img :src="item_user.headerUrl" alt="" class="contact-top-img"></div>
            <div class="weui-cell__bd">
              <p>{{item_user.remark || item_user.nickname}}</p>
            </div>
            
          </router-link>
         
        </div>
        </div>
      </div>
    </div>
    <div class="contact-num">
      {{$store.getters.contactsCount}}位联系人
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contents:[
        {
          path:"/wechat/add-friend",
          image:require("../../assets/images/tongxunlu/contact_top-friend-notify.png"),
          title:"新的朋友"
        },
        {
          path:"/contact/group-chat",
          image:require("../../assets/images/tongxunlu/contact_top-addgroup.png"),
          title:"群聊"
        },
        {
          path:"/contact/tag",
          image:require("../../assets/images/tongxunlu/contact_top-tag.png"),
          title:"标签"
        },
        {
          path:"/contact/offical-account",
          image:require("../../assets/images/tongxunlu/contact_top-offical.png"),
          title:"公众号"
        }
      ]
    }
  }
}

</script>
<style lang='scss' scoped>
.c-contact{
    padding-bottom: 50px;
    
  background: #eee;
  margin-top:65px;
}
.contact-top-img {
  width: 32px;
  height: 32px;
  margin-right: 5px;
  display: block;
}

.c-contact{
  .weui-cells__title{ 
    padding-left: 15px;
    padding-right: 15px;
    color: #999;
    font-size: 14px;
    background: #eee;
    margin-top:0;margin-bottom: 0;
    line-height: 20px;
  }
     
}

.contact-num{
  padding:5% 0;
  text-align: center;
      color: #999;
    font-size: 14px;
}

</style>
