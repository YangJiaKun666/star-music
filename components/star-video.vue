<template>
    <view class="video-box">
        <video
            class="video-content"
            src="http://vodkgeyttp8.vod.126.net/cloudmusic/obj/core/4066732791/4c242aa94af22aa19f432a4310046569.mp4?wsSecret=586212e2fe9bb66e0468be0182b54179&wsTime=1600596822"
            controls
            poster="https://p1.music.126.net/w_IkeNuyxNTUg-bylDilWQ==/109951165325955405.jpg"
            title="测试"
            enable-play-gesture
            show-mute-btn
            object-fit="cover"
        />
        <view class="user-name-time">
            <view class="name action-color">房东的猫《青梅》mv</view>
            <view class="time flex-center">
                <text>发布时间：2020-09-27</text>
                <text>播放量：1232132</text>
            </view>
        </view>
        <view class="video-hr"></view>
    </view>
</template>
<script>
import starIcon from '@/components/star-icon'
export default {
    components: {
        starIcon,
    },
}
</script>
<style lang="less" scoped>
.video-box {
    margin-bottom: 24rpx;
    .video-content {
        top: 0;
        left: 0;
        width: 100%;
        height: 400rpx;
        border-radius: 20rpx;
        margin-bottom: 24rpx;
    }
    .user-name-time {
        padding-top: 24rpx;
        .time {
            font-size: 24rpx;
            margin-top: 16rpx;
            justify-content: space-between;
        }
    }
}
.video-box /deep/ .video {
    width: 100%;
    height: 100%;
}
.video-box /deep/ .video-view {
    width: 100% !important;
    height: 100% !important;
}
</style>
