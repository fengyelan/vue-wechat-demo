<template>
	<div class="welcome" :class="{hide:hide}">
		<img src="https://sinacloud.net/vue-wechat/images/welcome.jpg" >
	</div>
</template>
<script>
	export default {
		data(){
			return{
				hide:false
			}
		},
		mounted(){
			let that = this;
			setTimeout(function(){
				//that.hide = true;
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
	.hide{
			opacity: 0;
		}
</style>