<template>
    <view
        class="song-item flex-center button-action"
        @click="clickItem(item.id)"
    >
        <view class="item-image" v-if="!item.hideImg">
            <image mode="aspectFill" lazy-load :src="item.picUrl" />
        </view>
        <view
            class="item-info"
            :style="{
                width: item.hideImg
                    ? 'calc(100% - 80rpx)'
                    : 'calc(100% - 200rpx)',
            }"
        >
            <view class="info-title text-oneline">
                <text class="action-color">{{ item.name }}</text>
                <text>{{
                    item.song.alias[0] ? `（${item.song.alias[0]}）` : ''
                }}</text>
            </view>
            <view v-if="item.song" class="info-name text-oneline">
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
            <slot name="rightIcon">
                <star-icon name="play-circle" size="60" />
            </slot>
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
    methods: {
        clickItem(id) {
            uni.navigateTo({
                url: `/pages/play/index?id=${id}`,
            })
        },
    },
}
</script>
<style lang="less" scoped>
.song-item {
    margin-bottom: 14px;
    height: 100rpx;
    width: 100%;
    position: relative;
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
