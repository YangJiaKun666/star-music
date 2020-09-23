<template>
    <!-- 歌单组件 -->
    <view
        class="song-sheet"
        :style="{ width: boxWidth + 'px' }"
        @click="goSheetDetail(item.id)"
    >
        <!-- 播放量或自定义内容 -->
        <view class="play-count">
            <slot name="top">
                <star-icon
                    :style="{ marginRight: '8rpx' }"
                    name="play"
                    size="18"
                />
                <text>{{ getPlayCount(item.playCount) }}</text>
            </slot>
        </view>
        <!-- 图片 -->
        <view
            :style="{ width: boxWidth + 'px', height: boxWidth + 'px' }"
            class="sheet-img"
        >
            <image lazy-load :src="item.picUrl" />
        </view>
        <!-- 标题 -->
        <view class="sheet-title text-towline">
            {{ item.name }}
        </view>
    </view>
</template>
<script>
import starIcon from './star-icon'
import { mapState } from 'vuex'
export default {
    props: {
        item: {
            type: Object,
            default: () => {
                return {}
            },
        },
    },
    components: { starIcon },
    computed: {
        boxWidth() {
            return (this.$store.state.windowWidth - 24) / 3 - 10
        },
    },
    methods: {
        goSheetDetail(id) {
            console.log(id)
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
                    return (playStr = 0)
            }
        },
    },
}
</script>
<style lang="less" scoped>
.song-sheet {
    margin-right: 15px;
    position: relative;
    margin-bottom: 24rpx;
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
    .sheet-img {
        border-radius: 12rpx;
        overflow: hidden;
        image {
            width: 100%;
            height: 100%;
        }
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
