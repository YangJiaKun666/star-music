<template>
    <view class="mv-box flex-center" @click="goMvDetail(item.id)">
        <view class="mv-img">
            <image mode="aspectFill" lazy-load :src="item.cover" />
            <view class="play-count">
                <star-icon
                    :style="{ marginRight: '8rpx' }"
                    name="play"
                    size="18"
                />
                <text>{{ getPlayCount(item.playCount) }}</text>
            </view>
        </view>
        <view class="mv-info">
            <view class="mv-name action-color">{{ item.name }}</view>
            <view class="mv-timeorname flex-center">
                <view v-if="item.duration" class="mv-timeorname__time">{{
                    getTime(item.duration)
                }}</view>
                <view class="mv-timeorname__name">{{ item.artistName }}</view>
            </view>
        </view>
    </view>
</template>
<script>
import starIcon from './star-icon'
export default {
    props: {
        item: Object,
    },
    components: {
        starIcon,
    },
    methods: {
        goMvDetail(id) {
            console.log('MV', id)
        },
        getPlayCount(number) {
            if (!number) return 0
            number = String(number)
            let playStr = ''
            switch (number.length) {
                case 5:
                    return (playStr = `${number.slice(0, 1)}万`)
                case 6:
                    return (playStr = `${number.slice(0, 2)}万`)
                case 7:
                    return (playStr = `${number.slice(0, 3)}万`)
                case 8:
                    return (playStr = `${number.slice(0, 4)}万`)
                case 9:
                    return (playStr = `${number.slice(0, 1)}亿`)
                case 10:
                    return (playStr = `${number.slice(0, 2)}亿`)
                default:
                    return (playStr = number)
            }
        },
        getTime(time) {
            time = time / 1000
            let M = parseInt((time % 3600) / 60)
            let S = parseInt(time % 60)
            return `${M < 10 ? '0' + M : M}:${S < 10 ? '0' + S : S}`
        },
    },
}
</script>
<style lang="less" scoped>
.mv-box {
    margin-bottom: 30rpx;
    .mv-img {
        width: 200rpx;
        height: 120rpx;
        border-radius: 10rpx;
        margin-right: 20rpx;
        overflow: hidden;
        position: relative;
        image {
            width: 100%;
            height: 100%;
        }
    }
    .play-count {
        width: 100%;
        position: absolute;
        z-index: 1;
        top: 0rpx;
        left: 0;
        font-size: 20rpx;
        color: #fff;
        text-align: right;
        padding: 2rpx 10rpx 2rpx 0;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 12rpx 12rpx 0 0;
    }
    .mv-info {
        width: calc(100% - 220rpx);
        .mv-name {
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            line-clamp: 2;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-bottom: 10rpx;
        }
        .mv-timeorname {
            font-size: 20rpx;
            color: #999;
            &__time {
                margin-right: 20rpx;
            }
        }
    }
}
</style>
