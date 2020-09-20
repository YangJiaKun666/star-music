<template>
	<view class="player-body">
		<!-- 毛玻璃 -->
		<helang-blur class="player-blur" :params="params"/>
		<!-- 头部 -->
		<view class="player-head" :style="{ marginTop: statusBar + 'rpx' }">
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
		<!-- 轮播图--歌词 -->
		<view @click="changePlayPanel" class="page-section-spacing" :style="{ marginTop: statusBar + 'rpx',height: windowHeight - 245 + 'px'}">
			
			<view style="width: 100%;height: 100%;" v-show="currentPlayPanel">
				<view class="disc-mask-view">
					<view class="dark-masker"/>
				</view>
				<swiper class="swiper">
					<swiper-item>
						<view class="swiper-item">
							<disc :imgUrl=params.image />
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<disc :imgUrl=params.image />
						</view>
					</swiper-item>
				</swiper>
			</view>
			
			<view style="width: 100%;height: 100%;" v-show="!currentPlayPanel">歌词</view>
			
		</view>
	
	</view>
    
</template>
<script>
import starIcon from '@/components/star-icon'
import helangBlur from "@/components/helang-blur"
import disc from "./disc"

export default {
    components: {
        starIcon,
		helangBlur,
		disc
    },
	data() {
	    return {
			params:{
				width: '100%',
				height: '100%',
				image:"https://mydarling.gitee.io/uniapp-extend/static/images/douyin/4.jpg",
				blur:"xl"
			},
			currentPlayPanel: true,
			statusBar: getApp().globalData.statusBar,
			windowHeight: getApp().globalData.windowHeight
		}
	},
	methods:{
		changePlayPanel(){
			this.$data.currentPlayPanel = !this.$data.currentPlayPanel
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
	.page-section-spacing{
		position: fixed;
		z-index: 1;
		top: 90rpx;
		width: 100%;
	}
	.swiper{
		height: 100%;
	}
	.swiper-item{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.disc-mask-view{
		width: 600rpx;
		height: 600rpx;
		background-color: rgba(255,255,255,.2);
		border-radius: 300rpx;
		border: 1rpx solid rgba(255,255,255,.4);
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: calc(50% - 300rpx);
		top: calc(50% - 300rpx);
	}
	.dark-masker{
		width: 550rpx;
		height: 550rpx;
		background-color: rgba(0,0,0,.25);
		border-radius: 275rpx;
	}
}

</style>
