<template>
	<div class="c-dialogue">
		<header class="header">
			<div class="left-box">
				<div class="arr">
					<router-link to="/" tag="span" class="iconfont icon-return-arrow"></router-link>
					<span>{{$route.query.name}}</span>
					<!-- 群消息显示群的人数 -->
					<span v-show="parseInt($route.query.group_person_num)>1">({{$route.query.group_person_num}})</span>
				</div>
			</div>
			<div class="right-box">
				<router-link :to="{path:'/webchat/dialogue/dialogue-person',query:{person:$store.state.msgList.baseMsg[parseInt($route.query.index)]}}" tag="span" class="iconfont icon-chat-friends" v-show="$route.query.isGroup==0"></router-link>
				<router-link :to="{path:'/webchat/dialogue/dialogue-group',query:{person:$store.state.msgList.baseMsg[parseInt($route.query.index)]}}" tag="span" class="iconfont icon-chat-group" v-show="$route.query.isGroup==1"></router-link>
			</div>
		</header>
		<section>
			<div class="msg-item" v-for="item in this.$store.state.msgList.baseMsg[parseInt(this.$route.query.index)]&&this.$store.state.msgList.baseMsg[parseInt(this.$route.query.index)].msg">
				<div class="img" >
					<img :src="item.headerUrl">
				</div>
				<div class="msg-info" v-text="item.text"></div>
			</div>
		</section>
		<footer>
			<div class="person-footer">
				<span class="iconfont icon-dialogue-jianpan" v-show="currentChatWay" @click="currentChatWay=false"></span>
				<span class="iconfont icon-dialogue-voice" v-show="!currentChatWay" @click="currentChatWay=true"></span>
				<div class="input-area" v-show="currentChatWay">
					<input type="text" name="" class="input" v-model="inputText">
				</div>
				<div class="say-area" v-show="!currentChatWay">
					<span>按住说话</span>
				</div>
				<span class="iconfont icon-dialogue-smile"></span>
				<span class="iconfont icon-dialogue-jia" v-show="!inputText"></span>
				<span class="send" v-show="inputText">发送</span>
			</div>
		</footer>
	</div>
</template>
<script>
	import store from '../../vuex/store.js'
	export default {

		data(){
			
			return{
				inputText:'',
				currentChatWay:true //true是键盘打字,false是语音
			}
		}
		
	}
</script>
<style lang='scss' scoped>
	.c-dialogue{
		
	}
	header{
		width:100%;
		height:45px;
		background: #1b1b1b;
		color:#fffff;
		position: relative;
		z-index:99;
		line-height: 45px;
		color:#ffffff;
		position:relative;
		
	}
	section{
		margin-top: 5%;
	}
	.left-box{
		position:absolute;
		top:0;
		left:10px;	
		span{
			font-size:20px;
		}
	}
	.right-box{
		position:absolute;
		top:0;
		right:10px;	
		span{
			font-size:20px;
		}
	}
	.msg-item{
		width:90%;
		margin:0 auto;
		font-size:0;
		margin-bottom: 3%;
		.img{
			display: inline-block;
		    width: 15%;
		    vertical-align: top;
			img{
				width:100%;
			}
		}
		.msg-info{
			display: inline-block;
		    border-radius: 5px;
		    padding: 5px;
		    font-size: 16px;
		    max-width: 70%;
		    vertical-align: top;
		    margin-left: 3%;
		    background:#fff;
		    position:relative;
		    &::before{
			width:0;
			height:0;
			content:'';
			border-right:5px;
			border-color:transparent #fff transparent transparent;
			border-style:solid;
			position:absolute;top:5px;left:-8px;
		}

		}
	}
	.person-footer{
		padding:5px 10px;
		background:#ffffff;
		position:fixed;bottom:0;left:0;
		width:100%;
		font-size:0;
		.say-area{
			vertical-align:middle;
			display:inline-block;
			width:54%;
			position:relative;
			margin: 0 5%;
			text-align: center;
			&::after{
				content: "";
			    pointer-events: none;
			    /* 防止点击触发 */
			    box-sizing: border-box;
			    position: absolute;
			    width: 200%;
			    height: 200%;
			    left: 0;
			    top: 0; border-radius:10px;
			    border: 1px solid rgba(0, 0, 0, 0.10);
			    -webkit-transform: (scale(0.5));
			    -webkit-transform-origin: 0 0;
			    transform: (scale(0.5));
			    transform-origin: 0 0;
			}
			span{
				font-size:16px;
				color:#646464;
				line-height:30px;
			}
		}
		.input-area{

			vertical-align:middle;
			display:inline-block;
			width:65%;
			position:relative;
			margin: 0 1%;
			.input{	
			    overflow: hidden;
			    width: 100%;
			    height: 100%;
			    border-bottom: 1px solid #f1f1f1;
			    border-top:none;
			    border-right:none;
			   	border-left:none;
			    font-size:20px;
			    &:focus{
			    	font-size:20px;
			    	border-bottom: 1px solid #1aa218;
			    }
			}
		}
		.iconfont{
			display:inline-block;
			font-size:30px;
			vertical-align:middle;
			color:#646464;
		}
		.icon-dialogue-smile{
			margin-right: 2%;
		}
		.send{
			display:inline-block;
			font-size:15px;
			vertical-align:middle;
			color:#ffffff;
			border-radius:5px;
			background:#1aa218;
			padding: 5px;
		}
	}
</style>