<template>
    <view class="song-item flex-center">
        <view class="item-image">
            <image
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600593719746&di=af8ac6c88ad848d28d80deb97db7e539&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F17%2F20190117230425_eofqv.thumb.700_0.jpg"
            />
        </view>
        <view class="item-info">
            <view class="info-title text-oneline action-color"
                >歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称</view
            >
            <view class="info-name text-oneline"
                >歌手信息歌手信息歌手信息歌手信息歌手信息歌手信息</view
            >
        </view>
        <view class="item-icon">
            <star-icon name="play-circle" size="60" />
        </view>
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
.song-item {
    margin-bottom: 12px;
    height: 100rpx;
    width: 100%;
    .item-image {
        height: 100rpx;
        width: 100rpx;
        margin-right: 20rpx;
        image {
            width: 100%;
            height: 100%;
            border-radius: 8rpx;
        }
    }
    .item-info {
        width: calc(100% - 200rpx);
        box-sizing: border-box;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .info-title {
            font-size: 28rpx;
        }
        .info-name {
            font-size: 24rpx;
        }
    }
    .item-icon {
        width: 80rpx;
        text-align: center;
    }
}
</style>
