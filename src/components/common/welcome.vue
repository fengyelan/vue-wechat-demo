<template>
	<div class="welcome"  v-if="hide">
		<img src="https://sinacloud.net/vue-wechat/images/welcome.jpg" >
	</div>
</template>
<script>
	export default {
		data(){
			return{
				hide:true
			}
		},
		mounted(){
			let that = this;
			setTimeout(function(){
				that.hide = false;
			},2000)
		}
	}
</script>
<style lang='scss' scoped>
	.welcome{
		position: fixed;
		width:100%;
		height:100%;
		z-index:6;
		background: #000b17;
		img{
			width:100%;
		}
		
	}
	
</style>