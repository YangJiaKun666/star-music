<template>
	<view class="player-body">
		<helang-blur class="player-blur" :params="params"/>
		<view class="player-head" :style="{ marginTop: statusBar + 'px' }">
		   <view class="navbar-icon flex-center">
				<starIcon name="angle-left" size='50'/>
			</view>
			
			<view class="songs">
				<text class="songs-name">歌曲名字</text>
				<text class="singer-name">歌手名字</text>
			</view>
	
			<view class="navbar-icon flex-center">
				<starIcon name="share-alt"  size='40'/>
			</view>
		</view>
	
	
	</view>
    
</template>
<script>
import starIcon from '@/components/star-icon'
import helangBlur from "@/components/helang-blur/helang-blur.vue"

export default {
    components: {
        starIcon,
		helangBlur
    },
	data() {
	    return {
			params:{
				width: '100%',
				height: '100%',
				image:"https://mydarling.gitee.io/uniapp-extend/static/images/douyin/4.jpg",
				blur:"xl"
			},
			statusBar: getApp().globalData.statusBar
		}
	},
	 onLoad: function () {
		// alert(getApp().globalData.windowHeight)
	 }
}
</script>
<style lang="less">
.player-body{
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	.player-blur{
		width: 100%;
		height: 100%;
	}
	.player-head {
			width: 100%;
		    height: 90rpx;
			position: fixed;
			z-index: 99;
			top: 0;
			left: 0;
		    display: flex;
			justify-content: space-between;
			.songs{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.songs-name{
					color: #fff;
					font-size: 32rpx;
				}
				.singer-name{
					color: #fff;
					font-size: 28rpx;
					opacity: .8;
				}
			}
		    .navbar-icon {
		        width: 90rpx;
		        height: 90rpx;
				color: #fff;
		        justify-content: center;
		    }
		    .navbar-tab {
		        width: calc(100% - 180rpx);
		        height: 100%;
		    }
	}
}

</style>
