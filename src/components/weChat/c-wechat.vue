<template>
	<div class="c-wechat">
		<ul class="wechat-list">
			<msg-item v-for="(item,index) in $store.state.msgList.baseMsg"  :item="item" :key="item.mid" :index="index"></msg-item>
		</ul> 
	</div>
</template>
<script>
import msgItem from "../weChat/c-msg-item.vue"
import store from '../../vuex/store.js'

	export default {
		components:{
			msgItem
		}
	}
</script>
<style lang='scss' scoped>
	.c-wechat{
	margin-top:45px;
	}
</style>