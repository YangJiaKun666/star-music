<template>
    <view class="song-item flex-center">
        <view class="item-image">
            <image :src="item.picUrl" />
        </view>
        <view class="item-info">
            <view class="info-title text-oneline">
                <text class="action-color">{{ item.name }}</text>
                <text>{{
                    item.song.alias[0] ? `（${item.song.alias[0]}）` : ''
                }}</text>
            </view>
            <view class="info-name text-oneline">
                <text
                    v-for="(songer, index) of item.song.artists"
                    :key="index"
                    >{{
                        `${songer.name}${
                            index !== item.song.artists.length - 1 ? '/' : ' - '
                        }`
                    }}</text
                >
                <text>{{ item.song.album.name }}</text>
            </view>
        </view>
        <view class="item-icon">
            <star-icon name="play-circle" size="60" />
        </view>
    </view>
</template>
<script>
import starIcon from '@/components/star-icon'
export default {
    props: {
        item: {
            type: Object,
            default: () => {
                return {}
            },
        },
    },
    components: {
        starIcon,
    },
}
</script>
<style lang="less" scoped>
.song-item {
    margin-bottom: 14px;
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
