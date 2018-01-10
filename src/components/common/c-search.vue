<template>
	<div class="c-search" v-show="!$store.state.headerStatus">
		<div class="weui-search-bar" id="search_bar" :class="{'weui-search-bar_focusing':!$store.state.headerStatus}">
	    	<form class="weui-search-bar__form">
		        <div class="weui-search-bar__box">
		            <i class="weui-icon-search"></i>
		            <input type="search" v-model="search_text" class="weui-search-bar__input" id="search_input" placeholder="搜索" />
		            <a href="javascript:" class="weui-icon-clear" id="search_clear" @click="search_text=''"></a>
		        </div>
		        <label for="search_input" class="weui-search-bar__label" id="search_text">
		            <i class="weui-icon-search"></i>
		            <span>搜索</span>
		        </label>
	    	</form>
    		<a href="javascript:" class="weui-search-bar__cancel-btn" id="search_cancel" @click="cancelSearch">取消</a>
		</div>
		<article class="search-article">
			<h3 class="weui-media-box__desc">搜索指定内容</h3>
			<div class="tag">
				<span>朋友圈</span>
				<span>资讯</span>
				<span>公众号</span>
				<span>小说</span>
				<span>音乐</span>
				<span>表情</span>
			</div>
			<!-- <div class="weui-cells weui-cells_access search_show" id="search_show">
			    <div class="weui-cell">
			        <div class="weui-cell__bd weui-cell_primary">
			            <p>实时搜索文本</p>
			        </div>
			    </div>
			</div> -->
		</article>
	</div>
</template>
<script>
import store from '../../vuex/store.js'
	export default {
		data(){
			return {
				search_text:''
			}
		},
		methods:{
			clearSearch:()=>{
				console.log(this.search_text);
				this.search_text='';
			},
			cancelSearch:()=>{
				store.state.headerStatus = true;
			}
		}
		
	}
</script>
<style lang='scss' scoped>
	.c-search{
		position: fixed;
		z-index:10;
		width:100%;
		height:100%;
		transition: 0.3s;
	}
	.weui-search-bar__label {
        transition: 0.3s;
    }
    .weui-search-bar_focusing {
        .weui-search-bar__label {
            // transition: 0.1s;
            display: block;
            transform: translate3d(-100%, 0, 0);
            opacity: 0.0;
        }
    }

    .search-article{
    	width:100%;
    	height: 100%;
    	position:absolute;
    	background: #eee;
    	opacity:0.99;
    	h3{
    		text-align: center;
    		margin:30px 0 0;
    	}
    	.tag{
    		font-size:0;
    		margin:20px 0;
    		span {			
                font-size: 14px;
                text-align: center;
                width: 33.33%;
                display: inline-block;
                box-sizing: border-box;
                color: #09bb07;
                border-right: 1px solid rgba(220, 220, 220, 0.67);
                margin-bottom: 15px;
                &:nth-child(3n) {
                    border-right-color: transparent;
                }
            }
    	}
    }
</style>