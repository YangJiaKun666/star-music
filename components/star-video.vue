<template>
    <view class="video-box button-action">
        <image mode="aspectFill" class="video-content" :src="item.coverUrl" />
        <view class="user-name-time">
            <view class="name">{{ item.title || item.name }}</view>
            <view class="time flex-center">
                <text>时长：{{ getTime(item.durationms || item.duration) }}</text>
                <text
                    >播放量：{{
                        getPlayCount(item.playTime || item.playCount)
                    }}</text
                >
            </view>
        </view>
    </view>
</template>
<script>
import starIcon from '@/components/star-icon'
export default {
    components: {
        starIcon,
    },
    props: {
        item: {
            type: Object,
            default: () => {
                return {}
            },
        },
    },
    methods: {
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
        getTime(date) {
            date = date / 1000
            let M =
                parseInt((date % 3600) / 60) < 10
                    ? '0' + parseInt((date % 3600) / 60)
                    : parseInt((date % 3600) / 60)
            let S =
                parseInt((date % 3600) % 60) < 10
                    ? '0' + parseInt((date % 3600) % 60)
                    : parseInt((date % 3600) % 60)
            return `${M}:${S}`
        },
    },
}
</script>
<style lang="less" scoped>
.video-box {
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 12px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .video-content {
        width: 100%;
        height: 200rpx;
        border-radius: 10px;
    }
    .name {
        margin: 5px 0;
    }
    .user-name-time {
        width: 100%;
        .time {
            width: 100%;
            font-size: 11px;
            justify-content: space-between;
        }
    }
}
.video-box:nth-child(2n) {
    margin-right: 0;
}
</style>
