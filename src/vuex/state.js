/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-06 13:55:47
 * @version $Id$
 */
import contact from './contact'
import officialAccounts from './official-account'




const state = {
	newMsgCount:0,//新消息的数量
	allContacts:contact.contacts,//所有联系人
	officialAccounts:officialAccounts,//所有关注的微信号
	currentPageName:"微信",//用于在wx-header组件中显示当前页标题
	headerStatus:true,//显示（true）/隐藏（false）wx-header组件
	tipStattus:false, //控制首页右上角菜单的显示(true)/隐藏(false)
	msgList:{
		 stickMsg: [], //置顶消息列表 后期需要
        baseMsg: [{ //普通消息列表
                "mid": 1, //消息的id 唯一标识，重要
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": true, //true；已读 false：未读
                "newMsgCount": 1,
                "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
                "msg": [{ //对话框的聊天记录 新消息 push 进
                    "text": "长按这些白色框消息，唤醒消息操作菜单，长按这些白色框消息，唤醒消息操作菜单",
                    "date": 1488117964495,
                    "name": "阿荡",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }, {
                    "text": '点击空白处，操作菜单消失',
                    "date": 1488117964495,
                    "name": "阿荡",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }, {
                    "text": '来呀 快活啊',
                    "date": 1488110000888,
                    "name": "阿荡",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }],
                "user_name": ['wxid_zhaohd']
                //"user": [contact.getUserInfo('wxid_zhaohd')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
            },
            {
                "mid": 2,
                "type": "group",
                "group_name": "收购万达讨论群",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [{
                        "text": "长按消息，唤醒消息操作菜单",
                        "date": 1488117964495,
                        "name": "夜华",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
                    }, {
                        "text": '点击空白处，操作菜单消失',
                        "date": 1488117964495,
                        "name": "阿荡",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                    },
                    {
                        "text": '我试一试',
                        "date": 1488117964495,
                        "name": "夜华",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
                    }
                ],
                "user_name": ['wxid_zhaohd','wxid_yehua']
                //"user": [contact.getUserInfo('wxid_zhaohd'), contact.getUserInfo('wxid_yehua')]
            },
            {
                "mid": 3,
                "type": "group",
                "group_name": "收购淘宝讨论群",
                "group_qrCode": "",
                "read": true,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [{
                    "text": '冒个泡',
                    "date": 1488117964495,
                    "name": "诸葛亮",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg"
                }],
                "user_name": ['wxid_zhenji', 'wxid_zhugeliang', 'wxid_zhaohd']
                //"user": [contact.getUserInfo('wxid_zhenji'), contact.getUserInfo('wxid_zhugeliang'), contact.getUserInfo('wxid_zhaohd')]
            },
            {
                "mid": 4,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": "长按消息，唤醒消息操作菜单",
                    "date": 1488117964495,
                    "name": "孙权",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }, {
                    "text": '点击空白处，操作菜单消失',
                    "date": 1488117964495,
                    "name": "孙权",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }, {
                    "text": '容我三思',
                    "date": 1488117964495,
                    "name": "孙权",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }],
                "user_name": ['wxid_sunquan']
                //"user": [contact.getUserInfo('wxid_sunquan')]
            },
            {
                "mid": 5,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": '夫君,身体要紧~ ',
                    "date": 1488117964495,
                    "name": "孙尚香",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunshangxiang.jpg"
                }],
                "user_name": ['wxid_sunshangxiang']
                //"user": [contact.getUserInfo('wxid_sunshangxiang')]
            },
            {
                "mid": 6,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": true,
                "msg": [{
                    "text": '三姓家奴！ ',
                    "date": 1488117964495,
                    "name": "关羽",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/guangyu.jpg"
                }],
                "user_name": ['wxid_guangyu']
                //"user": [contact.getUserInfo('wxid_guangyu')]
            }
        ]
	}
}


state.msgList.baseMsg.forEach(function(item){
    item.user = [];
    item.user_name.forEach(function(itemUser){
        let obj = {};
        contact.contacts.forEach(function(item_con){
            if(item_con.wxid===itemUser){
                obj =  item_con;
            }
        })
        item.user.push(obj)
    })
})

export default state