import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import wechat from '../components/wechat/c-wechat.vue';
import contact from '../components/contact/c-contact.vue';
import explore from '../components/explore/c-explore.vue';
import my from "../components/self/c-self.vue";

import dialogue from "../components/weChat/c-dialogue.vue";
import dialogueGroupInfo from "../components/weChat/c-dialogue-group-info.vue";
import dialoguePersonInfo from "../components/weChat/c-dialogue-person-info.vue";

import newFriend from "../components/contact/c-contact-new-friend.vue";
import groupChat from "../components/contact/c-contact-group.vue";
import tag from "../components/contact/c-contact-tag.vue";
import officalAccount from "../components/contact/c-contact-offical-account.vue";
import detail from "../components/contact/c-detail.vue"


export default new Router({
  routes: [
    {
      path: '/',
      name:"微信",
      component:wechat
    },
    {
      path: '/contact',
      name:"通讯录",
      component:contact
    },
    {
      path: '/explore',
      name:"发现",
      component:explore
    },
    {
      path: '/self',
      name:"我的",
      component:my
    },
    {
      path: '/webchat/dialogue',
      name:"",
      components:{
        "default":wechat,
        "subPage":dialogue
      }
    },
    {
      path: '/webchat/dialogue/dialogue-person',
      name:"",
      components:{       
        "subPage":dialoguePersonInfo
      }
    },
    {
      path: '/webchat/dialogue/dialogue-group',
      name:"",
      components:{        
        "subPage":dialogueGroupInfo
      }
    },
    {
      path: '/contact/new-friend',
      name:"",
      components:{
        "default":contact,
        "subPage":newFriend
      }
    },
    {
      path: '/contact/group-chat',
      name:"",
      components:{
        "default":contact,
        "subPage":groupChat
      }
    },
    {
      path: '/contact/tag',
      name:"",
      components:{
        "default":contact,
        "subPage":tag
      }
    },
    {
      path: '/contact/offical-account',
      name:"",
      components:{
        "default":contact,
        "subPage":officalAccount
      }
    },
    {
      path: '/contact/detail',
      name:"",
      components:{
        "default":contact,
        "subPage":detail
      }
    }
  ]
})
