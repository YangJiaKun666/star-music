<template>
    <!-- 歌单组件 -->
    <view class="song-sheet" :style="{ width: boxWidth + 'px' }">
        <!-- 播放量 -->
        <view class="play-count">
            <star-icon :style="{ marginRight: '8rpx' }" name="play" size="18" />
            <text>232万</text>
        </view>
        <!-- 图片 -->
        <image
            class="sheet-img"
            :style="{ width: boxWidth + 'px', height: boxWidth + 'px' }"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600593719746&di=af8ac6c88ad848d28d80deb97db7e539&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F17%2F20190117230425_eofqv.thumb.700_0.jpg"
        />
        <!-- 标题 -->
        <view class="sheet-title text-towline">
            哈哈哈哈黑暗时代库哈斯了爱上了回到拉萨
        </view>
    </view>
</template>
<script>
import starIcon from './star-icon'
export default {
    components: { starIcon },
    data() {
        return {
            boxWidth: (getApp().globalData.windowWidth - 24) / 3 - 6,
        }
    },
}
</script>
<style lang="less" scoped>
.song-sheet {
    margin-right: 9px;
    position: relative;
    margin-bottom: 24rpx;
    .play-count {
        position: absolute;
        z-index: 1;
        top: 4rpx;
        right: 10rpx;
        font-size: 20rpx;
        color: #fff;
    }
    .sheet-img {
        border-radius: 12rpx;
    }
    .sheet-title {
        line-height: 34rpx;
        height: 68rpx;
        font-size: 24rpx;
    }
}
.song-sheet:nth-child(3n) {
    margin-right: 0;
}
</style>
