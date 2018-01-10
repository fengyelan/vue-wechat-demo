<template>
	<li class="c-msg-item">
		<router-link :to="{path:'/webchat/dialogue',query:{mid:item.mid,name:item.group_name||(item.user[0].remark||item.user[0].nickname),group_num:item.user.length,group_person_num:item.user_name.length,isGroup:item.type==='friend'?0:1,index:index}}" tag="div" class="list-info">
			<div class="header-box">
				<div class="header" :class="{'multi-header':item.type==='group'}">
					<img v-for="user in item.user" :src="user.headerUrl"/>
				</div>
				<!-- 未读并且屏蔽显示小红点 -->
				<div class="new-msg-dot" v-if="item.read && item.quiet"></div>
				<!-- 未读并且没有屏蔽显示消息数量 -->
				<div class="new-msg-num" v-if="!item.read && !item.quiet">{{item.newMsgCount}}</div>
			</div>
			<div class="desc-box">
				<div class="desc-author" v-if="item.type==='group'">{{item.group_name}}</div>
				<div class="desc-author" v-else >{{item.user[0].remark || item.user[0].nickname}}</div>
				<div class="desc-msg">
					<span  v-if="item.type==='group'">{{item.msg[item.msg.length-1].name}}:{{item.msg[item.msg.length-1].text}}</span>
					<span v-else>{{item.msg[item.msg.length-1].text}}</span>
				</div>
			</div>
			<div class="right-box">
				<div class="chat-time">{{item.msg[item.msg.length-1].date | formatTime('hh:ss')}}</div>
				<div class="iconfont icon-mute" v-if="item.quiet"></div>
			</div>
		</router-link>
	</li>
</template>
<script>
	export default {
		props:['item','index'],
		data(){
			return {
				
			}
		},
		methods:{
			toggleMsgRead(status){
				if(status=='enter'){

				}
			}
		},
		filters:{
			formatTime:function(date, fmtExp) {
		        var date = new Date(date)
		        var o = {
		            "M+": date.getMonth() + 1, //月份
		            "d+": date.getDate(), //日
		            "h+": date.getHours(), //小时
		            "m+": date.getMinutes(), //分
		            "s+": date.getSeconds(), //秒
		            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
		            "S": date.getMilliseconds() //毫秒
		        };
		        if (/(y+)/.test(fmtExp))
		            fmtExp = fmtExp.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		        for (var k in o)
		            if (new RegExp("(" + k + ")").test(fmtExp))
		                fmtExp = fmtExp.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		        return fmtExp;
		    }
		}
	}
</script>
<style lang='scss' scoped>
	.c-msg-item{
		width:100%;
		height:64px;
		background: #ffffff;
		position:relative;
		overflow:hidden;
		display: block;
		.list-info{
			position:absolute;
			width:100%;
			height:100%;
		}
		&:not(:last-child)::after{
			position:absolute;
			content: "";
		    width: 200%;
		    position: absolute;
		    bottom: 0;
		    left: 0;
		    height: 1px;
		    background-color: #5b5b5d;
		    transform: scale(0.5);
			transform-origin: 0 100%;
		}
	}

	.header-box{
		position:absolute;
		top:50%;
		transform:translateY(-50%);
		margin-left:18px;
		width:48px;
		height:48px;

		.new-msg-dot{
			position:absolute;
			top:-3px;
			right:-3px;
			width:8px;
			height:8px;
			background:red;
			border-radius: 50%;
		}

		.new-msg-num{
			position:absolute;
			top:-3px;
			right:-3px;
			width:15px;
			height:15px;
			background:red;
			border-radius: 50%;
			text-align:center;
			font-size:12px;
			line-height:13px;
			color:#ffffff;
		}
	

		.header{
			width:100%;
			height:100%;
	
			display: flex;
			flex-direction:row;
			flex-wrap:wrap;
			align-items:flex-start;
			overflow: hidden; 
			background: #dddbdb;
			img{
				width:10%;
				flex-grow:2;
			}
			&.multi-header {
	            img {
	                margin: 1px;
	            }
	        }
		}
	}
	.desc-box{
		
		position: absolute;
		left:76px;
		top:50%;
		transform:translateY(-50%);
		.desc-author,{
			height: 25px;
            line-height: 25px;
            font-size: 16px;
            color: #000;
		}
		.desc-msg{
			height: 25px;
            line-height: 25px;
            font-size: 16px;
			color:#b8b8b8;
		}
	}

	.right-box{
		position:absolute;
		right:18px;
		top:50%;
		transform:translateY(-50%);
		.chat-time{
			color: #b8b8b8;
			height: 25px;
            line-height: 25px;
            font-size: 16px;
		}
		.iconfont{
			color: #b8b8b8;
			text-align: center;
		}
		
	}
</style>