<template>
	<div class="c-wx-nav">
		<nav>
			<router-link to="/" tag="dl" exact>
				<dt class="iconfont icon-wechat"></dt>
				<dd>微信</dd>
			</router-link>	
			<router-link to="/contact" tag="dl">
				<dt class="iconfont icon-contact"></dt>
				<dd>通讯录</dd>
			</router-link>	
			<router-link to="/explore" tag="dl">
				<dt class="iconfont icon-find"></dt>
				<dd>发现</dd>
			</router-link>	
			<router-link to="/self" tag="dl">
				<dt class="iconfont icon-me"></dt>
				<dd>我</dd>
			</router-link>	
		</nav>
	</div>
</template>
<script>
	export default {
		
	}
</script>
<style lang='scss' scoped>
	.c-wx-nav{
		width:100%;
	}
	nav{
		width:100%;
		white-space: nowrap;
		overflow: hidden;
		display: flex;
		height:50px;
		padding-top: 8px;
		background: #f9f9f9;
		dl{
			user-select:none;
			flex-grow: 1;
			text-align: center;
			dd{
				font-size: 12px;
			}
			&.router-link-active{
				dd,dt{
					color:#0bb908;
				}
			}
		}
	}
</style>