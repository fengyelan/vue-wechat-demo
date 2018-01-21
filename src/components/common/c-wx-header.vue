<template>
	<div class="c-wx-header" v-show="$store.state.headerStatus">
		<div class="left-text">
			<span>微信({{$store.getters.newMsgAllCount}})</span>
		</div>
		<div class="right-icon">
			<span class="weui-icon-search" @click="showSearch"></span>
			<span class="iconfont icon-tips-jia"  @click="toggleStatus"></span>
		
		</div>
		<ul class="more-menu" :class="$store.state.tipStattus ? 'tip-open' :'tip-close'">
			<li>
				<span class="iconfont icon-tips-xiaoxi"></span>
				<span>发起群聊</span>
			</li>
			<router-link :to="{path:'/wechat/add-friend'}" tag="li">
				<span class="iconfont icon-tips-add-friend"></span>
				<span>添加朋友</span>
			</router-link>
			<li>
				<span class="iconfont icon-tips-saoyisao"></span>
				<span>扫一扫</span>
			</li>
			<li>
				<span class="iconfont icon-tips-fukuan"></span>
				<span>收付款</span>
			</li>
		</ul>
	</div>
</template>
<script>
import store from '../../vuex/store.js'
	export default {
		methods:{
			showSearch:()=>{
				console.log(1);
				store.dispatch('toggleHeaderStatus',false);
			},
			toggleStatus:(status)=>{
				store.state.tipStattus = !store.state.tipStattus;
			}
		}
		
	}
</script>
<style lang='scss' scoped>
	.c-wx-header{
		width:100%;
		height:45px;
		background: #1b1b1b;
		color:#fffff;
		position: fixed;
		z-index:99;
		top:0;
		left:0;
		line-height: 45px;
		color:#ffffff;
	}
	.left-text{
		width:80%;
		position:absolute;
		top:0;
		left:5%;
		
		
	}
	.right-icon{
		position:absolute;
		top:0;
		right:10px;	
		.iconfont,.weui-icon-search{
			font-size:20px;
			color:#ffffff;
		}
	}
	.more-menu{
		position:absolute;
		top:120%;
		right:10px;
		background: #49484b;
		width:140px;
		&::before{
			width:0;
			height:0;
			content:'';
			border-bottom:8px;
			border-color:transparent transparent #49484b transparent;
			border-style:solid;
			position:absolute;top:-11px;right:15px;
		}
		li{
			display: block;
			width:80%;
			margin:0 auto;
			height:40px;
			line-height: 40px;
			font-size: 0;
			position:relative;
			span{
				font-size: 16px;
				color:#ffffff;
			}
			span.iconfont{
				margin-right: 10px;
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
	}
	.tip-open{
		opacity:1;
		transform:scale(1);
		transition: .2s opacity case,.6s transform ease;
	}
	.tip-close{
		opacity:0;
		transform:scale(0);
		transition: .2s opacity case,.2s transform ease;
	}
</style>